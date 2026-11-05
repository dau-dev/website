<script lang="ts">
  /**
   * Standalone shell for /invest. It skips the marketing header and footer:
   * reachable by link, but noindexed, disallowed in robots.txt, and absent from
   * the sitemap.
   */
  import { BrandMark, ThemeToggle } from '@dau-dev/branding';
  import { CONTACT } from '#lib/invest/overview.ts';

  let { children } = $props();

  const sections = [
    { id: 'thesis', label: 'Thesis' },
    { id: 'built', label: 'What exists' },
    { id: 'evidence', label: 'Evidence' },
    { id: 'model', label: 'Business model' },
    { id: 'market', label: 'Market' },
    { id: 'roadmap', label: 'Roadmap' },
    { id: 'risk', label: 'Risk' },
    { id: 'ask', label: 'The ask' }
  ];
</script>

<svelte:head>
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<header class="sticky top-0 z-50 border-b border-line bg-bg">
  <div class="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 sm:px-6">
    <BrandMark size={24} />
    <span class="label">Investor overview</span>
    <span class="flex-1"></span>
    <a class="hidden font-mono text-xs text-muted hover:text-fg sm:inline" href="mailto:{CONTACT}">{CONTACT}</a>
    <ThemeToggle />
  </div>
</header>

<div class="mx-auto flex max-w-6xl gap-12 px-4 sm:px-6">
  <nav aria-label="Sections" class="hidden w-40 shrink-0 pt-14 lg:block">
    <ol class="sticky top-24 grid gap-2">
      {#each sections as s (s.id)}
        <li><a class="text-sm text-muted no-underline hover:text-fg" href="#{s.id}">{s.label}</a></li>
      {/each}
    </ol>
  </nav>
  <main id="main" class="min-w-0 flex-1 pt-14 pb-32">
    {@render children()}
  </main>
</div>
