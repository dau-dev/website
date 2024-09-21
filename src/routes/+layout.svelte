<script>
	import '../app.css';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<div class="relative bg-dark overflow-hidden h-max">
	<Header />
	<slot />
	<Footer />
</div>
