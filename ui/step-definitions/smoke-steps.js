// ui/step-definitions/smoke.steps.js
import { Given, Then } from '@wdio/cucumber-framework';
import { browser } from '@wdio/globals';

Given('I open the app', async () => {
  // await browser.url(process.env.E2E_BASE_URL || 'https://example.com');
  await browser.url ('https://example.com');
});

Then('it should not crash', async () => {
  await expect($('html')).toBeExisting();
});
