<script lang="ts">
  import { CookieNotice } from '@dau-dev/branding';
  import '../app.css';

  let { children } = $props();
</script>

{@render children()}

<CookieNotice>
  dau.dev doesn't use cookies or analytics. Your theme setting and whether you closed this notice are stored only in
  your browser.
  <a href="/privacy/">Privacy</a>
</CookieNotice>
