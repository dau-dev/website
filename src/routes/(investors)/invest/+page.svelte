<script lang="ts">
  import { SpecTable, Split } from '@dau-dev/branding';
  import { ASK, CONTACT, HAS_PLACEHOLDERS, MARKET, MILESTONES, RELEASES, RISKS } from '#lib/invest/overview.ts';
  import Boards from '#lib/site/Boards.svelte';
  import Results from '#lib/site/Results.svelte';
</script>

<svelte:head>
  <title>Investor overview | dau</title>
  <meta name="description" content="dau investor overview: thesis, evidence, business model, risk, and the raise." />
</svelte:head>

{#if HAS_PLACEHOLDERS}
  <div class="mb-12 border border-fg p-4" role="note" data-testid="draft-banner">
    <p class="label mb-1 text-fg">Draft</p>
    <p class="text-sm leading-relaxed text-muted">
      Items marked TBD have not been set. They live in <code class="font-mono">src/lib/invest/overview.ts</code>; the
      results come from <code class="font-mono">src/lib/results.ts</code>, shared with the home page.
    </p>
  </div>
{/if}

<div class="max-w-3xl">
  <h1 class="text-5xl leading-[0.95] tracking-[-0.04em] text-balance md:text-6xl">
    <span class="font-light">Faster analytics,</span> <span class="font-extrabold">with an FPGA next to the CPU.</span>
  </h1>
  <p class="mt-6 text-lg leading-relaxed text-muted">
    dau builds FPGA accelerators sized to analytical workloads, along with open-source software that decides how much of
    each query the FPGA should run.
  </p>
</div>

<section id="thesis" class="mt-20 scroll-mt-24">
  <p class="label mb-3">01 · Thesis</p>
  <h2 class="text-3xl font-semibold tracking-tight">Make the existing machine faster.</h2>
  <div class="mt-5 grid max-w-3xl gap-4 leading-relaxed text-muted">
    <p>
      Analytical software already runs on fast CPUs. dau adds an FPGA card to the machine and splits the work between
      the two, so queries run faster without rewriting the software.
    </p>
    <p>
      dau loads rows into device memory once and runs repeated filter, derive, and aggregate queries against them. A
      cost model picks the split for each query from measured rates. Anything the loaded hardware can't do runs on the
      CPU, and the planner reports it.
    </p>
  </div>
  <div class="mt-8">
    <Split hardwareLabel="Device" softwareLabel="Host">
      {#snippet software()}
        <p class="text-2xl font-light">Sorts, text search, floating point, and everything else.</p>
      {/snippet}
      {#snippet hardware()}
        <p class="text-2xl font-bold">Scans over resident rows.</p>
      {/snippet}
    </Split>
  </div>
</section>

<section id="built" class="mt-20 scroll-mt-24">
  <p class="label mb-3">02 · What exists</p>
  <h2 class="text-3xl font-semibold tracking-tight">Two boards running, five packages released.</h2>
  <div class="mt-8 grid gap-10 md:grid-cols-2">
    <SpecTable caption="Milestones on silicon" headings={['Milestone', 'Status']} rows={MILESTONES} />
    <SpecTable caption="Software" headings={['Package', 'Release', 'Scope']} rows={RELEASES} />
  </div>
  <div class="mt-10"><Boards specsOpen /></div>
</section>

<section id="evidence" class="mt-20 scroll-mt-24">
  <p class="label mb-3">03 · Evidence</p>
  <h2 class="text-3xl font-semibold tracking-tight">
    About 2.5× faster with a dau card.<span aria-hidden="true">*</span>
  </h2>
  <p class="mt-5 max-w-3xl leading-relaxed text-muted">
    *On TPC-H query 6, a standard analytics benchmark, adding a dau card to the host made the query about 2.5× faster.
    Every figure matches its software reference exactly.
  </p>
  <div class="mt-8"><Results /></div>
</section>

<section id="model" class="mt-20 scroll-mt-24">
  <p class="label mb-3">04 · Business model</p>
  <h2 class="text-3xl font-semibold tracking-tight">Open core, dau boards.</h2>
  <div class="mt-5 grid max-w-3xl gap-4 leading-relaxed text-muted">
    <p>
      The software is Apache 2.0, published on PyPI, and runs on open FPGA hardware. Revenue comes from boards built for
      dau and from configurations we build and verify for a customer's workloads.
    </p>
  </div>
  <div class="mt-6 max-w-xl">
    <SpecTable rows={[{ key: 'Pricing', value: MARKET.pricing }]} />
  </div>
</section>

<section id="market" class="mt-20 scroll-mt-24">
  <p class="label mb-3">05 · Market</p>
  <h2 class="text-3xl font-semibold tracking-tight">Repeated queries over the same data.</h2>
  <p class="mt-5 max-w-3xl leading-relaxed text-muted">
    The first workloads are time-series and market data: bars, windows, and as-of joins run again and again over the
    same history.
  </p>
  <div class="mt-6 max-w-xl">
    <SpecTable
      rows={[
        { key: 'Market sizing', value: MARKET.sizing },
        { key: 'First customers', value: MARKET.firstCustomers }
      ]}
    />
  </div>
</section>

<section id="roadmap" class="mt-20 scroll-mt-24">
  <p class="label mb-3">06 · Roadmap</p>
  <h2 class="text-3xl font-semibold tracking-tight">Faster links first, then more cards.</h2>
  <ol class="mt-6 grid max-w-3xl gap-4 leading-relaxed text-muted">
    <li><strong class="text-fg">Release the Polars integration</strong> so the whole stack installs from PyPI.</li>
    <li>
      <strong class="text-fg">Design dpv3</strong> around the measured bottleneck, memory bandwidth and the host link, with
      an FPGA chosen for this workload.
    </li>
    <li>
      <strong class="text-fg">Spread work across cards</strong> with direct links between cards and memory on each.
    </li>
  </ol>
</section>

<section id="risk" class="mt-20 scroll-mt-24">
  <p class="label mb-3">07 · Risk</p>
  <h2 class="text-3xl font-semibold tracking-tight">Risks.</h2>
  <dl class="mt-6 grid gap-6 md:grid-cols-2">
    {#each RISKS as risk (risk.title)}
      <div class="border-t border-line pt-4">
        <dt class="font-semibold">{risk.title}</dt>
        <dd class="mt-2 text-sm leading-relaxed text-muted">{risk.text}</dd>
      </div>
    {/each}
  </dl>
</section>

<section id="ask" class="mt-20 scroll-mt-24">
  <p class="label mb-3">08 · The ask</p>
  <h2 class="text-3xl font-semibold tracking-tight">The raise.</h2>
  <div class="mt-6 grid gap-10 md:grid-cols-2">
    <SpecTable
      rows={[
        { key: 'Amount', value: ASK.amount },
        { key: 'Instrument', value: ASK.instrument },
        { key: 'Valuation', value: ASK.valuation }
      ]}
    />
    <SpecTable caption="Use of funds" headings={['Item', 'Amount']} rows={ASK.useOfFunds} />
  </div>
  <p class="mt-10 leading-relaxed text-muted">
    Questions and data-room requests: <a class="text-fg underline" href="mailto:{CONTACT}">{CONTACT}</a>
  </p>
</section>
