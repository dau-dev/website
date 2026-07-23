<section id="proof" class="px-6 py-24 bg-neutral-900 text-neutral-300 scroll-mt-16">
	<div class="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
		<div>
			<p class="uppercase tracking-widest text-sm text-neutral-500 mb-4">From proof to platform</p>
			<h2 class="text-3xl md:text-5xl font-bold text-white mb-6">Measured on physical hardware.</h2>
			<p class="text-lg leading-relaxed text-neutral-400">
				dau began with a 5 GB NYSE TAQ dataset and a concrete analytical task: calculate OHLCV bars.
				After staging data on dpv1, repeated queries ran in 0.92 seconds versus 1.5 seconds on the
				CPU—39% lower per-query latency, with every result matched against the software golden. That
				measured workflow now informs the next platform configurations.
			</p>
		</div>
		<div class="grid gap-4">
			<div class="rounded-lg border border-neutral-800 p-6">
				<div class="flex items-start justify-between gap-6 mb-5">
					<div>
						<p class="text-sm uppercase tracking-widest text-neutral-500 mb-2">dpv1 · Proven</p>
						<h3 class="text-2xl font-bold text-white">Personal accelerator</h3>
					</div>
					<p class="text-sm text-neutral-400 whitespace-nowrap">Initial platform</p>
				</div>
				<p class="text-lg text-white mb-2">134K LUTs · 1 GB DDR3</p>
				<p class="text-sm text-neutral-400">
					Proved resident analytical queries can outperform CPU execution on accessible hardware.
				</p>
			</div>
			<div class="rounded-lg border border-neutral-700 bg-neutral-800 p-6">
				<div class="flex items-start justify-between gap-6 mb-5">
					<div>
						<p class="text-sm uppercase tracking-widest text-neutral-400 mb-2">
							dpv2 · Scaling now
						</p>
						<h3 class="text-2xl font-bold text-white">Desktop and server accelerator</h3>
					</div>
					<p class="text-sm text-neutral-300 whitespace-nowrap">Next platform</p>
				</div>
				<p class="text-lg text-white mb-2">204K LUTs · 8 GB DDR3 · PCIe x8</p>
				<p class="text-sm text-neutral-400">
					Designed to expand resident capacity and host bandwidth for larger datasets and more
					parallel configurations.
				</p>
			</div>
			<div class="rounded-lg border border-dashed border-neutral-700 p-6 opacity-50">
				<div class="flex items-start justify-between gap-6 mb-5">
					<div>
						<p class="text-sm uppercase tracking-widest text-neutral-500 mb-2">
							dpv3 · Design program
						</p>
						<h3 class="text-2xl font-bold text-neutral-300">Enterprise fabric card</h3>
					</div>
					<p class="text-sm text-neutral-500 whitespace-nowrap">Concept platform</p>
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
