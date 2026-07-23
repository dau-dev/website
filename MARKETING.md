# DAU search and landing-page plan

This plan keeps commercial search content evidence-led. It does not propose
publishing thin comparison pages or performance claims before reproducible
measurements exist.

## Position

DAU is workload-shaped FPGA acceleration for analytical software. It selectively
maps supported Polars, dataframe, time-series, and domain operations into
right-sized streaming hardware while unsupported work remains in familiar
software.

Primary distinction:

- not a fixed database appliance;
- not per-query synthesis in the runtime path;
- not a claim that every dataframe operation belongs on an FPGA;
- a reusable platform whose configurations improve around recurring workloads
  and scale across device classes.

## Search-intent clusters

Use these terms naturally in useful pages. Do not add a `meta keywords` tag or
repeat phrases solely for ranking.

### FPGA analytical acceleration

- FPGA analytics accelerator
- FPGA database acceleration
- hardware-accelerated dataframes
- reconfigurable dataflow analytics
- FPGA query acceleration
- composable FPGA accelerator

### Polars and dataframe acceleration

- Polars FPGA acceleration
- Polars hardware acceleration
- accelerate Polars queries
- Polars GPU alternative
- dataframe hardware acceleration
- CPU GPU FPGA dataframe comparison

### Time-series and market data

- FPGA time-series analytics
- market-data analytics acceleration
- hardware-accelerated OHLCV
- time-series aggregation FPGA
- as-of join acceleration
- resident market-data analytics

Publish terms tied to as-of joins, rolling analytics, or options only after the
named operation is implemented and measured.

## Recommended pages

### Workload pages

1. `/workloads/time-series-analytics`
   - Public target after TSBS coverage is frozen.
   - Explain bars, windows, rates, resampling, state bounds, and residency.
2. `/workloads/market-data`
   - Lead with the measured OHLCV workflow.
   - Add quote/trade as-of fusion only after silicon validation.
3. `/workloads/polars-dataframes`
   - Explain lazy-plan capture, selective offload, and explicit fallback in
     user language.
4. `/workloads/options-pricing`
   - Hold until analytic pricing or PDE hardware exists and has accuracy and
     native CPU baselines.

### Comparison and educational pages

1. `/compare/polars-cpu`
   - First comparison page because a measured baseline already exists.
   - Show cold, resident, and break-even behavior rather than one speedup.
2. `/compare/gpu-vs-fpga-analytics`
   - Educational decision guide covering workload shape, transfer, residency,
     precision, power, programmability, and deployment.
3. `/compare/nvidia-rapids-cudf`
   - Publish only after running the same predeclared Polars workflows on a
     documented NVIDIA system.
   - Acknowledge cuDF's broad GPU operator coverage and Polars integration.
4. `/compare/amd-vitis-database`
   - Compare platform models and developer workflow first.
   - Do not make performance claims without matched hardware and queries.
5. `/compare/fixed-accelerator-vs-workload-shaped`
   - Vendor-neutral explanation of DAU's flywheel, cache, and right-sizing.

Do not target DuckDB, ClickHouse, or cloud warehouses as direct competitors
until DAU exposes a comparable complete database surface. They can appear in
CPU-baseline methodology without implying product equivalence.

## Page template

Every workload or comparison page should contain:

1. a unique descriptive title and one H1;
2. a direct answer to the searcher's decision;
3. the workload and system boundaries;
4. what DAU accelerates and what remains in software;
5. a reproducible benchmark or an explicit “not yet measured” statement;
6. cold, resident, and end-to-end costs where applicable;
7. “Choose DAU when…” and “Choose the alternative when…”;
8. limitations and current product status;
9. links to relevant platform, proof, developer, and design-partner content;
10. page-specific Open Graph metadata, canonical URL, and sitemap entry.

Add FAQ structured data only when the same questions and answers are visible on
the page. Add Product structured data only when DAU has a purchasable product
with accurate availability and offer information.

## Evidence gate

A named comparison requires:

- frozen workload and dataset;
- documented CPU/GPU/FPGA system configurations;
- competent native baseline rather than a Python row UDF;
- correctness or numerical-accuracy criteria;
- complete host preparation, transfer, execution, and result time;
- repeated runs and distributions;
- publication of unfavorable results and crossover regions;
- copy reviewed against the source vendor's current documentation.

## Site mechanics

- Keep canonical URLs absolute and include only canonical pages in the sitemap.
- Give each page a distinct title and meta description that matches visible
  content.
- Use descriptive internal links rather than “learn more.”
- Generate a 1200 × 630 social card for each major landing page.
- Keep Organization and WebSite structured data on the home page; add
  BreadcrumbList to nested pages.
- Submit the root sitemap through Google Search Console after deployment.
- Validate structured data with Google's Rich Results Test and social previews
  with the platform debuggers after every metadata or image change.

## Initial sequence

1. Home page SEO and social preview.
2. Measured market-data workload page.
3. Polars/dataframe integration page.
4. Polars CPU comparison with cold/resident break-even curves.
5. Vendor-neutral GPU-versus-FPGA guide.
6. Named cuDF and Vitis comparisons only after matched evaluations.
