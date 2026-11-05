<script lang="ts">
  import Footer from '#lib/site/Footer.svelte';
  import Header from '#lib/site/Header.svelte';

  let { children } = $props();
</script>

<Header />
<main id="main">
  {@render children()}
</main>
<Footer />
