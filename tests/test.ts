import { expect, test } from '@playwright/test';

test('home page presents both ends of the dau platform', async ({ page }) => {
	await page.goto('/');

	await expect(page.getByRole('heading', { level: 1, name: 'dau.' })).toBeVisible();
	await expect(page.getByText('Data. Accelerated.')).toBeVisible();
	await expect(
		page.getByText('dau maps high-value Polars, dataframe, time-series', { exact: false })
	).toBeVisible();
	await expect(page.getByRole('heading', { name: 'An accelerator beside you.' })).toBeVisible();
	await expect(
		page.getByRole('heading', { name: 'A fabric built around your data.' })
	).toBeVisible();
	await expect(
		page.getByRole('heading', { name: 'One platform, four deployment shapes.' })
	).toBeVisible();
	await expect(page.getByText('A host-orchestrated dpv1 fleet')).toBeVisible();
	await expect(page.getByText('Four dpv3 cards in a server')).toBeVisible();
	await expect(
		page.getByRole('heading', { name: 'A configuration loop that improves around real work.' })
	).toBeVisible();
	await expect(page.getByText('explicit fallback', { exact: false })).toBeVisible();
	await expect(page.getByText('dpv1 · Proven')).toBeVisible();
	await expect(page.getByText('dpv2 · Scaling now')).toBeVisible();
	await expect(page.getByText('dpv3 · Design program')).toBeVisible();
	await expect(page.getByText('Concept platform')).toBeVisible();
	await expect(page.getByText('39% lower per-query latency', { exact: false })).toBeVisible();
	await expect(page.getByRole('link', { name: 'Become a design partner' })).toBeVisible();
});

test('mobile navigation exposes platform sections', async ({ page }) => {
	await page.setViewportSize({ width: 390, height: 844 });
	await page.goto('/');
	await page.getByRole('button', { name: 'Toggle navigation' }).click();
	const mobileMenu = page.locator('nav ul');

	await expect(mobileMenu.getByRole('link', { name: 'Platform', exact: true })).toBeVisible();
	await expect(mobileMenu.getByRole('link', { name: 'Proof', exact: true })).toBeVisible();
});

test('publishes search and social metadata', async ({ page, request }) => {
	await page.goto('/');

	await expect(page).toHaveTitle('dau | FPGA acceleration for Polars and analytical workloads');
	await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://dau.dev/');
	await expect(page.locator('meta[name="description"]')).toHaveAttribute(
		'content',
		/Polars, dataframe, time-series, and analytical workloads/
	);
	await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
		'content',
		'https://dau.dev/img/social-card.png'
	);
	await expect(page.locator('meta[property="og:image:width"]')).toHaveAttribute('content', '1200');
	await expect(page.locator('meta[property="og:image:height"]')).toHaveAttribute('content', '630');
	await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
		'content',
		'summary_large_image'
	);

	const structuredData = JSON.parse(
		(await page.locator('script[type="application/ld+json"]').textContent()) ?? '{}'
	);
	expect(structuredData['@graph']).toEqual(
		expect.arrayContaining([
			expect.objectContaining({ '@type': 'Organization', name: 'dau' }),
			expect.objectContaining({ '@type': 'WebSite', name: 'dau' })
		])
	);

	const socialCard = await request.get('/img/social-card.png');
	expect(socialCard.ok()).toBe(true);
	expect(socialCard.headers()['content-type']).toBe('image/png');

	const robots = await request.get('/robots.txt');
	expect(robots.ok()).toBe(true);
	expect(await robots.text()).toContain('Sitemap: https://dau.dev/sitemap.xml');

	const sitemap = await request.get('/sitemap.xml');
	expect(sitemap.ok()).toBe(true);
	expect(await sitemap.text()).toContain('<loc>https://dau.dev/</loc>');
	expect(await sitemap.text()).toContain('<lastmod>2026-07-23</lastmod>');
});
