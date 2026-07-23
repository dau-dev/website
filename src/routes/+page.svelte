<script>
	import '../app.css';
	import Headline from '$lib/home/Headline.svelte';
	import About from '$lib/home/About.svelte';
	import Proof from '$lib/home/Proof.svelte';
	import Contact from '$lib/home/Contact.svelte';
</script>

<svelte:head>
	<title>dau | FPGA acceleration for Polars and analytical workloads</title>
	<meta
		name="description"
		content="dau selectively maps Polars, dataframe, time-series, and analytical workloads onto right-sized FPGA dataflow, with CPU fallback and familiar software."
	/>
	<meta name="robots" content="index, follow, max-image-preview:large" />
	<link rel="canonical" href="https://dau.dev/" />
	<link rel="alternate" hreflang="en" href="https://dau.dev/" />
	<link rel="alternate" hreflang="x-default" href="https://dau.dev/" />
	<link rel="preload" as="image" href="/img/main-bg.webp" type="image/webp" fetchpriority="high" />

	<meta property="og:type" content="website" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:site_name" content="dau" />
	<meta property="og:title" content="dau — Workload-shaped FPGA acceleration" />
	<meta
		property="og:description"
		content="Right-sized FPGA dataflow for Polars, dataframe, time-series, and analytical workloads—with familiar software and explicit CPU fallback."
	/>
	<meta property="og:url" content="https://dau.dev/" />
	<meta property="og:image" content="https://dau.dev/img/social-card.png" />
	<meta property="og:image:secure_url" content="https://dau.dev/img/social-card.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="dau workload-shaped FPGA acceleration platform and configuration flywheel"
	/>

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="dau — Workload-shaped FPGA acceleration" />
	<meta
		name="twitter:description"
		content="Right-sized FPGA dataflow for Polars, dataframe, time-series, and analytical workloads."
	/>
	<meta name="twitter:image" content="https://dau.dev/img/social-card.png" />
	<meta
		name="twitter:image:alt"
		content="dau workload-shaped FPGA acceleration platform and configuration flywheel"
	/>
</svelte:head>

<Headline />
<About />
<Proof />
<Contact />
