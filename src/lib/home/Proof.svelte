<section id="proof" class="px-6 py-24 bg-neutral-900 text-neutral-300 scroll-mt-16">
	<div class="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
		<div>
			<p class="uppercase tracking-widest text-sm text-neutral-500 mb-4">From proof to platform</p>
			<h2 class="text-3xl md:text-5xl font-bold text-white mb-6">Measured on physical hardware.</h2>
			<p class="text-lg leading-relaxed text-neutral-400">
				dau began on dpv1 with a 5 GB NYSE TAQ dataset and a concrete task: calculate OHLCV bars.
				Staged resident, repeated queries ran in 0.92 seconds against 1.5 seconds on the CPU—39%
				lower per-query latency, every result matched to the software golden. dpv2 now carries that
				work further: a fused temporal-finance workflow—as-of join, derived features, time bars and
				rolling moments in a single pass, with no intermediate ever written back to memory—runs in
				11.5 ms against 31.4 ms for the same workload on an 18-core laptop, bit-exact. The
				accelerator costs a fraction of the machine it outruns.
			</p>
		</div>
		<div class="grid gap-4">
			<div class="rounded-lg border border-neutral-800 p-6">
				<div class="flex items-start justify-between gap-6 mb-5">
					<div>
						<p class="text-sm uppercase tracking-widest text-neutral-500 mb-2">
							dpv1 · Where it started
						</p>
						<h3 class="text-2xl font-bold text-white">Personal accelerator</h3>
					</div>
					<p class="text-sm text-neutral-400 whitespace-nowrap">First platform</p>
				</div>
				<p class="text-lg text-white mb-2">134K LUTs · 1 GB DDR3</p>
				<p class="text-sm text-neutral-400">
					Established the core result: resident analytical queries can outperform CPU execution on
					hardware you can put beside a laptop.
				</p>
			</div>
			<div class="rounded-lg border border-neutral-700 bg-neutral-800 p-6">
				<div class="flex items-start justify-between gap-6 mb-5">
					<div>
						<p class="text-sm uppercase tracking-widest text-neutral-400 mb-2">
							dpv2 · Current platform
						</p>
						<h3 class="text-2xl font-bold text-white">Desktop and server accelerator</h3>
					</div>
					<p class="text-sm text-neutral-300 whitespace-nowrap">Running today</p>
				</div>
				<p class="text-lg text-white mb-2">204K LUTs · 2 GB DDR3 · PCIe x8</p>
				<p class="text-sm text-neutral-400">
					Carries the same designs as dpv1 at wider memory reads and eight parallel lanes—where the
					fused temporal workflow now beats the CPU baseline.
				</p>
			</div>
			<div class="rounded-lg border border-dashed border-neutral-700 p-6 opacity-50">
				<div class="flex items-start justify-between gap-6 mb-5">
					<div>
						<p class="text-sm uppercase tracking-widest text-neutral-500 mb-2">dpv3 · Planned</p>
						<h3 class="text-2xl font-bold text-neutral-300">Enterprise fabric card</h3>
					</div>
					<p class="text-sm text-neutral-500 whitespace-nowrap">In design</p>
				</div>
				<p class="text-lg text-neutral-300 mb-2">
					663K LUTs · 32–128 GB DDR4 · PCIe Gen3 x8 · Fabric links
				</p>
				<p class="text-sm text-neutral-500">
					A concept design for fabric-connected arrays with distributed resident memory.
				</p>
			</div>
		</div>
	</div>
</section>
