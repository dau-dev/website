# dau

Workload-shaped FPGA acceleration for analytical data.

## Develop

The site links the brand kit from a sibling checkout of
[dau-branding](https://github.com/dau-dev/dau-branding); build it first.

```bash
(cd ../dau-branding && pnpm install && pnpm build)
pnpm install
pnpm dev
```

## Verify

```bash
pnpm check
pnpm lint
pnpm test
pnpm build
```

Visual regression snapshots live beside `tests/visual/` and are skipped when `CI` is set. Record or
refresh them locally with `pnpm test:e2e:update`.

This site uses SvelteKit's `adapter-static` deployment adapter.
