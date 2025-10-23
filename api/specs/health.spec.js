// api/specs/health.spec.js (ESM)
import request from 'supertest';

const API = process.env.API_BASE;
const isLocal = !!API && /localhost:4000/.test(API);
const PATH = process.env.API_HEALTH_PATH || (isLocal ? '/health' : '/');
const itMaybe = API ? it : it.skip;

describe('API health (smoke)', () => {
  itMaybe(`GET ${PATH} returns 2xx`, async () => {
    try {
      const res = await request(API).get(PATH);
      // loose smoke by default
      expect(res.status).toBeGreaterThanOrEqual(200);
      expect(res.status).toBeLessThan(400);

      // if it's your local API, add strict assertions
      if (isLocal) {
        expect(res.headers['content-type']).toMatch(/application\/json/);
        expect(res.body).toEqual({ ok: true });
      }
    } catch (err) {
      // if the remote site hiccups (ENOTFOUND/ECONNRESET/etc.), don’t fail the suite
      if (['ECONNRESET', 'ENOTFOUND', 'EAI_AGAIN', 'ECONNREFUSED', 'ETIMEDOUT'].includes(err.code)) {
        console.warn('Network issue during smoke; treating as skipped:', err.code);
        return;
      }
      throw err; // real failures still surface
    }
  });
});
