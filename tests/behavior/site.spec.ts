import { expect, test } from '@playwright/test';

test('home page presents the platform, proof, and contact', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { level: 1, name: 'Data, accelerated.' })).toBeVisible();
  await expect(page.getByText('Everything else runs in Polars.')).toBeVisible();
  await expect(page.locator('.split > div').first()).toContainText('Scans run on the FPGA.');
  await expect(page.getByText('Scans run on the FPGA.')).toBeVisible();
  await expect(page.getByText('Several Thunderbolt devices connected to one laptop', { exact: false })).toBeVisible();
  await expect(page.getByText('A PCIe card in your desktop.')).toBeVisible();
  await expect(page.getByRole('heading', { name: /About 2\.5× faster with a dau card\./ })).toBeVisible();
  await expect(page.getByText('~2.5× faster with the card added')).toBeVisible();
  await expect(page.locator('#proof [data-stage="current"]')).toContainText('dpv2');
  await expect(page.locator('#proof [data-stage="planned"]')).toHaveCSS('border-top-style', 'dashed');
  await expect(page.getByRole('columnheader', { name: 'Benchmark' })).toBeAttached();
  const specs = page.locator('#proof [data-stage="current"] details');
  await expect(specs).not.toHaveAttribute('open');
  await specs.locator('summary').click();
  await expect(specs.getByText('204K LUTs')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Become a design partner' }).first()).toBeVisible();
});

test('withdrawn claims stay off the site', async ({ page }) => {
  for (const path of ['/', '/invest/']) {
    await page.goto(path);
    const text = await page.locator('body').innerText();
    expect(text).not.toContain('31.4 ms');
    expect(text).not.toContain('git+https://github.com/dau-dev/dau-polars');
  }
});

for (const [theme, hardware, software] of [
  ['dark', 'rgb(32, 32, 33)', 'rgb(238, 237, 233)'],
  ['light', 'rgb(238, 237, 233)', 'rgb(32, 32, 33)']
] as const) {
  test(`split puts hardware on the page surface and software on the inverse in ${theme} mode`, async ({ page }) => {
    await page.addInitScript((value) => localStorage.setItem('dau-branding.theme', value), theme);
    await page.goto('/');
    const halves = page.locator('.split > div');
    await expect(halves.nth(0)).toHaveCSS('background-color', hardware);
    await expect(halves.nth(1)).toHaveCSS('background-color', software);
  });
}

test('mobile navigation exposes the sections', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  const menu = page.locator('#mobile-menu');

  await expect(menu.getByRole('link', { name: 'Platform', exact: true })).toBeVisible();
  await expect(menu.getByRole('link', { name: 'Results', exact: true })).toBeVisible();
});

test('cookie notice is dismissed once and stays dismissed', async ({ page }) => {
  await page.goto('/');
  const notice = page.getByTestId('cookie-notice');
  await expect(notice).toBeVisible();
  await expect(notice.getByRole('link', { name: 'Privacy' })).toHaveAttribute('href', '/privacy/');

  await page.getByTestId('cookie-notice-dismiss').click();
  await expect(notice).toBeHidden();
  await page.goto('/privacy/');
  await expect(page.getByRole('heading', { level: 1, name: 'What this site stores' })).toBeVisible();
  await expect(page.getByTestId('cookie-notice')).toBeHidden();

  const cookies = await page.context().cookies();
  expect(cookies).toEqual([]);
});

test('investor overview is reachable but not promoted', async ({ page, request }) => {
  await page.goto('/invest/');
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex, nofollow');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('with an FPGA next to the CPU.');
  await expect(page.getByTestId('draft-banner')).toBeVisible();
  await expect(page.locator('#ask')).toContainText('TBD');

  await page.goto('/');
  await expect(page.locator('a[href^="/invest"]')).toHaveCount(0);

  expect(await (await request.get('/robots.txt')).text()).toContain('Disallow: /invest/');
  expect(await (await request.get('/sitemap.xml')).text()).not.toContain('invest');
});

test('publishes search and social metadata', async ({ page, request }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('dau | FPGA acceleration for Polars and analytical workloads');
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://dau.dev/');
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    'content',
    'https://dau.dev/img/social-card.png'
  );
  await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute('content', 'summary_large_image');

  const structuredData = JSON.parse((await page.locator('script[type="application/ld+json"]').textContent()) ?? '{}');
  expect(structuredData['@graph']).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ '@type': 'Organization', name: 'dau' }),
      expect.objectContaining({ '@type': 'WebSite', name: 'dau' })
    ])
  );

  for (const asset of ['/img/social-card.png', '/img/dau-mark.png']) {
    const response = await request.get(asset);
    expect(response.ok()).toBe(true);
    expect(response.headers()['content-type']).toBe('image/png');
  }

  const sitemap = await (await request.get('/sitemap.xml')).text();
  expect(sitemap).toContain('<loc>https://dau.dev/</loc>');
  expect(sitemap).toContain('<loc>https://dau.dev/privacy/</loc>');
});
