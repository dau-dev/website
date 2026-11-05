<script lang="ts">
  import { BrandMark, ThemeToggle } from '@dau-dev/branding';

  const links = [
    { href: '/#platform', label: 'Platform' },
    { href: '/#proof', label: 'Results' },
    { href: '/#code', label: 'Code' },
    { href: '/#contact', label: 'Contact' }
  ];

  let menuOpen = $state(false);
</script>

<header class="sticky top-0 z-50 border-b border-line bg-bg">
  <nav
    aria-label="Primary navigation"
    class="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3 sm:px-6"
  >
    <BrandMark size={28} />

    <div class="flex items-center gap-1">
      <ul class="hidden items-center gap-1 md:flex">
        {#each links as link (link.href)}
          <li>
            <a class="block px-3 py-2 text-sm font-semibold text-muted no-underline hover:text-fg" href={link.href}
              >{link.label}</a
            >
          </li>
        {/each}
      </ul>
      <ThemeToggle />
      <button
        class="ml-1 grid h-9 w-9 place-items-center border border-line md:hidden"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        onclick={() => (menuOpen = !menuOpen)}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" stroke-width="1.5" />
        </svg>
      </button>
    </div>
  </nav>

  <ul id="mobile-menu" class="border-t border-line md:hidden" hidden={!menuOpen}>
    {#each links as link (link.href)}
      <li>
        <a
          class="block px-4 py-3 text-sm font-semibold no-underline hover:bg-raised"
          href={link.href}
          onclick={() => (menuOpen = false)}>{link.label}</a
        >
      </li>
    {/each}
  </ul>
</header>
