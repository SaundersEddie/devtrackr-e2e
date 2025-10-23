// ui/wdio.conf.js
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));


export const config = {
  specs: [path.join(__dirname, 'features/**/*.feature')],
  framework: 'cucumber',
  cucumberOpts: {
    require: [path.join(__dirname, 'step-definitions/**/*.js')],
    timeout: 30000
  },
  services: ['devtools'],
  baseUrl: process.env.E2E_BASE_URL || 'https://example.com',
  capabilities: [{ browserName: 'chrome' }],
  reporters: ['spec']
};
export default config;

