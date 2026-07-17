<script>
	import '../app.css';
	import Headline from '$lib/home/Headline.svelte';
	import About from '$lib/home/About.svelte';
	import Proof from '$lib/home/Proof.svelte';
	import Contact from '$lib/home/Contact.svelte';
</script>

<svelte:head>
	<title>dau — Data. Accelerated.</title>
	<meta
		name="description"
		content="dau builds reconfigurable computing for analytical workloads, from personal accelerators to data-center-scale systems."
	/>
	<meta name="robots" content="index, follow, max-image-preview:large" />
	<link rel="canonical" href="https://dau.dev/" />
	<link rel="preload" as="image" href="/img/main-bg.webp" type="image/webp" fetchpriority="high" />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="dau" />
	<meta property="og:title" content="dau — Data. Accelerated." />
	<meta
		property="og:description"
		content="Reconfigurable computing for analytical workloads at every scale."
	/>
	<meta property="og:url" content="https://dau.dev/" />
	<meta property="og:image" content="https://dau.dev/img/main-bg.jpg" />
	<meta property="og:image:width" content="1600" />
	<meta property="og:image:height" content="1288" />
	<meta property="og:image:alt" content="dau — Data. Accelerated." />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="dau — Data. Accelerated." />
	<meta
		name="twitter:description"
		content="Reconfigurable computing for analytical workloads at every scale."
	/>
	<meta name="twitter:image" content="https://dau.dev/img/main-bg.jpg" />
	<meta name="twitter:image:alt" content="dau — Data. Accelerated." />
</svelte:head>

<Headline />
<About />
<Proof />
<Contact />
