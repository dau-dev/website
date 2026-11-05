import { expect, test } from '@playwright/test';

const routes = [
  { name: 'home', path: '/' },
  { name: 'privacy', path: '/privacy/' },
  { name: 'invest', path: '/invest/' }
];

for (const route of routes) {
  for (const theme of ['light', 'dark'] as const) {
    test(`${route.name} in ${theme} mode`, async ({ page }) => {
      await page.addInitScript((value) => {
        localStorage.setItem('dau-branding.theme', value);
        localStorage.setItem('dau.cookie-notice', 'dismissed');
      }, theme);
      await page.goto(route.path);
      await expect(page).toHaveScreenshot(`${route.name}-${theme}.png`, { fullPage: true });
    });
  }
}
