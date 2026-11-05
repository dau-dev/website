/**
 * Investor overview content. Facts here come from the benchmark log and the
 * public repositories. Anything set to TBD is a decision or a number that has
 * not been supplied yet; the page shows a draft banner while any remain.
 */

export const TBD = 'TBD';

export const CONTACT = 'admin@1kbgz.com';

export const RELEASES = [
  { key: 'dau-core', value: '0.4.0 on PyPI', note: 'Operator tiles, golden models, capability contracts' },
  { key: 'dau-build', value: '0.15.2 on PyPI', note: 'Specs to bitstream, Vivado or yosys' },
  { key: 'dau-sim', value: '0.3.0 on PyPI', note: 'Cycle-accurate simulation' },
  { key: 'dau-driver', value: '0.1.0 on PyPI', note: 'XDMA host I/O on Linux and macOS' },
  { key: 'dau-scheduler', value: '0.1.0 on PyPI', note: 'Cost-based host/device split' },
  { key: 'dau-polars', value: 'Private, release in preparation', note: 'Polars plan capture and execution' }
];

export const MILESTONES = [
  { key: 'TPC-H q1, q3, q6, q19', value: 'Bit-exact on dpv1 silicon' },
  { key: 'Full-day TAQ to OHLCV bars', value: '137.4M rows, every bar equal to Polars' },
  { key: 'Rebuild-and-flash loop', value: 'Workload to new bitstream to silicon, bit-exact' },
  { key: 'Four execution postures', value: 'CPU, offload, split, adaptive; 8 of 8 bit-exact' },
  { key: 'macOS host', value: 'Full DMA from a Mac over Thunderbolt' },
  { key: 'dpv2 bring-up', value: 'TPC-H q6 bit-exact on both boards' }
];

export const RISKS = [
  {
    title: 'Host CPUs keep getting faster',
    text: 'dau has to keep adding speed on top of each new generation of host CPU, which affects which workloads it targets.'
  },
  {
    title: 'Data transfer is the bottleneck',
    text: 'On dpv1 and dpv2, moving data to the card takes longer than processing it. Keeping data on the card and faster links on dpv3 address this. Until then, the best fit is workloads that query the same data repeatedly.'
  },
  {
    title: 'Toolchain dependence',
    text: 'The build depends on AMD Vivado. Using an FPGA outside that toolchain means porting the build, however cheap the part.'
  },
  {
    title: 'dpv3 part selection is open',
    text: 'The production card is not designed yet, so its cost, memory, and lead times are not known.'
  }
];

/** The raise. Every field is TBD until supplied. */
export const ASK = {
  amount: TBD,
  instrument: TBD,
  valuation: TBD,
  useOfFunds: [
    { key: 'dpv3 design and first build', value: TBD },
    { key: 'Engineering hires', value: TBD },
    { key: 'Design-partner deployments', value: TBD }
  ]
};

export const MARKET = {
  sizing: TBD,
  firstCustomers: TBD,
  pricing: TBD
};

export const HAS_PLACEHOLDERS = [
  ASK.amount,
  ASK.instrument,
  ASK.valuation,
  ...ASK.useOfFunds.map((u) => u.value),
  MARKET.sizing,
  MARKET.firstCustomers,
  MARKET.pricing
].includes(TBD);
