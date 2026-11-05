/**
 * Measured results quoted on the site. Every entry is bit-exact against its
 * software golden and is recorded in the benchmark log. Update here, not in
 * page markup, so the home page and the investor overview cannot drift apart.
 */

export interface Result {
  benchmark: string;
  board: string;
  outcome: string;
  detail: string;
}

export const RESULTS: Result[] = [
  {
    benchmark: 'TPC-H query 6, with the table loaded on the card',
    board: 'dpv2',
    outcome: '~2.5× faster with the card added',
    detail: 'The planner splits each query between the CPU and the FPGA based on measured costs.'
  },
  {
    benchmark: 'A full day of NYSE TAQ trades turned into OHLCV bars',
    board: 'dpv1',
    outcome: '137.4M trades, 2.44M bars',
    detail: 'Every bar matches the CPU Polars result.'
  },
  {
    benchmark: 'Time-series workflow: as-of join, derived features, time bars, rolling statistics',
    board: 'dpv2',
    outcome: '1,024,064 records in 11.5 ms',
    detail: 'All four steps run in one pass, and intermediate results stay on the card.'
  }
];

export type Stage = 'past' | 'current' | 'planned';

export interface Board {
  name: string;
  stage: Stage;
  status: string;
  summary: string;
  specs: { key: string; value: string }[];
}

export const BOARDS: Board[] = [
  {
    name: 'dpv1',
    stage: 'past',
    status: 'First platform',
    summary: 'Thunderbolt device',
    specs: [
      { key: 'Logic', value: '134K LUTs' },
      { key: 'Memory', value: '1 GB DDR3' },
      { key: 'Host link', value: 'PCIe Gen2 x2 over Thunderbolt' }
    ]
  },
  {
    name: 'dpv2',
    stage: 'current',
    status: 'Current platform',
    summary: 'PCIe card',
    specs: [
      { key: 'Logic', value: '204K LUTs' },
      { key: 'Memory', value: '2 GB onboard + 8 GB SODIMM DDR3' },
      { key: 'Host link', value: 'PCIe x8' }
    ]
  },
  {
    name: 'dpv3',
    stage: 'planned',
    status: 'In design',
    summary: 'PCIe card for servers',
    specs: [
      { key: 'Memory', value: 'DDR4, capacity to be set' },
      { key: 'Host link', value: 'PCIe' },
      { key: 'Card to card', value: 'Direct fabric links' }
    ]
  }
];
