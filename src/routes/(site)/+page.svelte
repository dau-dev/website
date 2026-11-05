<script lang="ts">
  import { BrandMark, Button, Split } from '@dau-dev/branding';
  import Boards from '#lib/site/Boards.svelte';
  import Deployments from '#lib/site/Deployments.svelte';
  import Results from '#lib/site/Results.svelte';

  const flywheel = [
    { step: 'Observe', text: 'Profile real workloads.' },
    { step: 'Select', text: 'Choose the operations worth accelerating.' },
    { step: 'Compose', text: 'Build a right-sized configuration from tested tiles.' },
    { step: 'Verify', text: 'Compare against the software reference in simulation and on the board.' },
    { step: 'Measure', text: 'Deploy, measure, and use the results in the next design.' }
  ];

  const repos = [
    {
      name: 'dau-core',
      text: 'Operator tiles in SystemVerilog, with bit-exact reference models, capability contracts, and the registry.'
    },
    { name: 'dau-driver', text: 'Host I/O over XDMA on Linux and macOS: discovery, registers, DMA, and jobs.' },
    { name: 'dau-scheduler', text: 'Decides how much of each query runs on the FPGA, based on measured costs.' },
    { name: 'dau-build', text: 'Declarative build specs through synthesis, programming, and smoke tests.' },
    { name: 'dau-sim', text: 'Cycle-accurate simulation for Amaranth and SystemVerilog, with a cocotb backend.' }
  ];
</script>

<svelte:head>
  <title>dau | FPGA acceleration for Polars and analytical workloads</title>
  <meta
    name="description"
    content="dau selectively maps Polars, dataframe, time-series, and analytical workloads onto right-sized FPGA dataflow, with CPU fallback and familiar software."
  />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <link rel="canonical" href="https://dau.dev/" />

  <meta property="og:type" content="website" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:site_name" content="dau" />
  <meta property="og:title" content="dau — Workload-shaped FPGA acceleration" />
  <meta
    property="og:description"
    content="Right-sized FPGA dataflow for Polars, dataframe, time-series, and analytical workloads, with familiar software and explicit CPU fallback."
  />
  <meta property="og:url" content="https://dau.dev/" />
  <meta property="og:image" content="https://dau.dev/img/social-card.png" />
  <meta property="og:image:type" content="image/png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="The dau mark and the line Data, accelerated." />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="dau — Workload-shaped FPGA acceleration" />
  <meta
    name="twitter:description"
    content="Right-sized FPGA dataflow for Polars, dataframe, time-series, and analytical workloads."
  />
  <meta name="twitter:image" content="https://dau.dev/img/social-card.png" />
</svelte:head>

<section
  id="home"
  class="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-16 sm:px-6 md:grid-cols-[minmax(0,1fr)_auto] md:pt-24"
>
  <div class="min-w-0">
    <h1 class="text-6xl leading-[0.95] tracking-[-0.045em] text-balance sm:text-7xl lg:text-8xl">
      <span class="font-light">Data,</span> <span class="font-extrabold">accelerated.</span>
    </h1>
    <p class="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
      dau runs selected Polars, dataframe, and time-series operations as FPGA dataflow and leaves the rest in software.
      The same software works with an accelerator next to your laptop or a card in a server.
    </p>
    <div class="mt-10 flex flex-wrap gap-3">
      <Button href="#platform">Explore the platform</Button>
      <Button href="#contact" variant="secondary">Become a design partner</Button>
    </div>
  </div>
  <div class="hidden md:block">
    <BrandMark href={null} size={240} wordmark={false} />
  </div>
</section>

<section aria-labelledby="split-heading" class="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
  <h2 id="split-heading" class="sr-only">How a query is split</h2>
  <Split>
    {#snippet hardware()}
      <p class="text-3xl leading-tight font-bold tracking-tight md:text-4xl">Scans run on the FPGA.</p>
      <p class="mt-4 max-w-sm leading-relaxed text-muted">
        Filters, derived columns, and aggregations stream through tiles built for the workload. Rows can stay in device
        memory between queries.
      </p>
    {/snippet}
    {#snippet software()}
      <p class="text-3xl leading-tight font-light tracking-tight md:text-4xl">Everything else runs in Polars.</p>
      <p class="mt-4 max-w-sm leading-relaxed text-muted">
        If the loaded configuration doesn't cover an operation, it runs on the CPU, and the planner reports what ran
        where.
      </p>
    {/snippet}
  </Split>
</section>

<section id="platform" class="border-t border-line">
  <div class="mx-auto max-w-6xl px-4 py-24 sm:px-6">
    <div class="max-w-3xl">
      <p class="label mb-4">Platform</p>
      <h2 class="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
        Hardware built for your workload, with the software you already use.
      </h2>
      <p class="mt-6 text-lg leading-relaxed text-muted">
        Configurations are assembled from reusable operations and sized to the job. Your code stays the same whether it
        runs on one accelerator next to a laptop or several cards in a server.
      </p>
    </div>

    <div class="mt-14">
      <Deployments />
    </div>

    <div id="flywheel" class="mt-24 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
      <div>
        <h3 class="text-2xl font-semibold tracking-tight md:text-3xl">Each deployment shapes the next design.</h3>
        <p class="mt-4 leading-relaxed text-muted">
          We measure real workloads to decide what runs in hardware now and what to build next. Every design is verified
          the same way before it ships.
        </p>
      </div>
      <ol class="grid gap-3 sm:grid-cols-5">
        {#each flywheel as f, i (f.step)}
          <li class="flex flex-col border p-4 {i === flywheel.length - 1 ? 'border-fg bg-raised' : 'border-line'}">
            <span class="font-mono text-xs text-muted"
              >{String(i + 1).padStart(2, '0')}{i === flywheel.length - 1 ? ' ↺' : ''}</span
            >
            <strong class="mt-3 font-semibold">{f.step}</strong>
            <span class="mt-1 text-sm text-muted">{f.text}</span>
          </li>
        {/each}
      </ol>
    </div>
  </div>
</section>

<section id="proof" class="border-t border-line">
  <div class="mx-auto max-w-6xl px-4 py-24 sm:px-6">
    <div class="max-w-3xl">
      <p class="label mb-4">Results</p>
      <h2 class="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
        About 2.5× faster with a dau card.<span aria-hidden="true">*</span>
      </h2>
      <p class="mt-6 text-lg leading-relaxed text-muted">
        *On TPC-H query 6, a standard analytics benchmark, adding a dau card to the host made the query about 2.5×
        faster. The table below lists benchmarks we have run on our boards. Every result matches the software reference
        exactly.
      </p>
    </div>

    <div class="mt-12">
      <Results />
    </div>

    <div class="mt-20">
      <Boards />
    </div>
  </div>
</section>

<section id="code" class="border-t border-line">
  <div class="mx-auto grid max-w-6xl gap-16 px-4 py-24 sm:px-6 lg:grid-cols-2">
    <div class="min-w-0">
      <p class="label mb-4">Open source</p>
      <h2 class="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
        An open core that runs on open hardware.
      </h2>
      <p class="mt-6 text-lg leading-relaxed text-muted">
        The operator tiles and their reference models, the build system, the simulator, the host driver, and the
        scheduler are Apache 2.0 licensed and published on GitHub and PyPI. They run on open FPGA hardware, so you can
        build the same bitstreams we run and add tiles in your own package. Boards built for dau are available through
        the design partner program. The Polars integration will be released soon.
      </p>
      <!-- Focusable so keyboard users can scroll it when it overflows. -->
      <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
      <pre
        tabindex="0"
        aria-label="Install command"
        class="mt-6 overflow-x-auto border border-line bg-raised p-4 font-mono text-sm"><code
          >pip install dau-core dau-driver dau-scheduler</code
        ></pre>
    </div>
    <ul class="grid content-start border-t border-line">
      {#each repos as repo (repo.name)}
        <li class="border-b border-line">
          <a class="group block py-4 no-underline" href="https://github.com/dau-dev/{repo.name}">
            <span class="font-mono font-semibold group-hover:underline">{repo.name}</span>
            <span class="mt-1 block text-sm text-muted">{repo.text}</span>
          </a>
        </li>
      {/each}
      <li class="pt-4">
        <a class="text-sm text-muted hover:text-fg" href="https://github.com/dau-dev">All repositories on GitHub →</a>
      </li>
    </ul>
  </div>
</section>

<section id="contact" class="dau-shadow">
  <div class="mx-auto max-w-6xl px-4 py-24 sm:px-6">
    <p class="label mb-4">Design partners</p>
    <h2 class="max-w-3xl text-3xl font-semibold tracking-tight text-balance md:text-5xl">Work with us.</h2>
    <p class="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
      We're working with early users on dau hardware, software, and deployment. Tell us what you compute, where it runs,
      and how fast it needs to be.
    </p>
    <div class="mt-10 flex flex-wrap gap-3">
      <Button href="mailto:dev@1kbgz.com?subject=%5Bdau%5D%20Design%20partner%20program">Become a design partner</Button
      >
      <Button href="https://github.com/dau-dev" variant="secondary">See the code on GitHub</Button>
    </div>
  </div>
</section>
