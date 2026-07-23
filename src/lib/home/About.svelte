<section id="platform" class="px-6 py-24 text-neutral-300">
	<div class="max-w-6xl mx-auto">
		<div class="max-w-3xl mb-16">
			<p class="uppercase tracking-widest text-sm text-neutral-500 mb-4">
				One platform, every scale
			</p>
			<h2 class="text-3xl md:text-5xl font-bold text-white mb-6">
				Hardware shaped to your workload. Software that stays familiar.
			</h2>
			<p class="text-lg md:text-xl leading-relaxed">
				dau selectively accelerates the parts of Polars, dataframe, time-series, and analytical
				workflows that benefit from streaming FPGA hardware. Reusable operations are composed into
				right-sized configurations, while unsupported work remains in familiar software. The same
				model scales from a personal accelerator to multi-card systems.
			</p>
		</div>

		<div class="mb-20">
			<div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
				<div>
					<p class="uppercase tracking-widest text-sm text-neutral-500 mb-3">Deployment model</p>
					<h3 class="text-2xl md:text-4xl font-bold text-white">
						One platform, four deployment shapes.
					</h3>
				</div>
				<p class="max-w-xl text-neutral-400 leading-relaxed">
					Work stays expressed through the same software model as capacity, memory, and physical
					placement change.
				</p>
			</div>

			<figure aria-label="DAU deployment options from one personal accelerator to a server array">
				<div class="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
					<article class="rounded-xl border border-neutral-800 bg-neutral-900 p-6">
						<svg
							viewBox="0 0 240 120"
							role="img"
							aria-label="One dpv1 accelerator connected to a laptop"
							class="w-full h-28 text-neutral-300 mb-5"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
						>
							<rect x="12" y="18" width="102" height="66" rx="5" />
							<path d="M4 92h118l-10 10H14L4 92Z" />
							<path d="M114 54h34c11 0 11 28 22 28h14" stroke-dasharray="4 4" />
							<rect x="184" y="57" width="44" height="48" rx="6" />
							<rect x="192" y="66" width="28" height="30" rx="3" />
							<path d="M198 73h16M198 80h16M198 87h10" />
						</svg>
						<p class="text-xs uppercase tracking-widest text-neutral-500 mb-2">Personal</p>
						<h4 class="text-xl font-bold text-white mb-3">dpv1 beside a laptop</h4>
						<p class="text-sm text-neutral-400 leading-relaxed">
							An M.2 accelerator in a Thunderbolt enclosure with 1 GB of local resident memory.
						</p>
					</article>

					<article class="rounded-xl border border-neutral-800 bg-neutral-900 p-6">
						<svg
							viewBox="0 0 240 120"
							role="img"
							aria-label="Multiple dpv1 accelerators daisy chained to one laptop"
							class="w-full h-28 text-neutral-300 mb-5"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
						>
							<rect x="8" y="29" width="64" height="44" rx="4" />
							<path d="M3 79h74l-7 8H10l-7-8Z" />
							<path d="M72 51h25" />
							<rect x="97" y="34" width="34" height="34" rx="5" />
							<path d="M131 51h20" />
							<rect x="151" y="34" width="34" height="34" rx="5" />
							<path d="M185 51h20" />
							<rect x="205" y="34" width="28" height="34" rx="5" />
							<path d="M108 45h12M108 51h12M162 45h12M162 51h12M213 45h12M213 51h12" />
							<path d="M114 68v25M168 68v25M219 68v25" stroke-dasharray="3 4" />
						</svg>
						<p class="text-xs uppercase tracking-widest text-neutral-500 mb-2">Scale-out</p>
						<h4 class="text-xl font-bold text-white mb-3">A host-orchestrated dpv1 fleet</h4>
						<p class="text-sm text-neutral-400 leading-relaxed">
							The host shards work across independent devices and merges results. Daisy-chained
							devices share one Thunderbolt tunnel.
						</p>
					</article>

					<article class="rounded-xl border border-neutral-800 bg-neutral-900 p-6">
						<svg
							viewBox="0 0 240 120"
							role="img"
							aria-label="One dpv2 accelerator installed in a desktop workstation"
							class="w-full h-28 text-neutral-300 mb-5"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
						>
							<rect x="28" y="8" width="116" height="103" rx="7" />
							<circle cx="49" cy="30" r="7" />
							<path d="M42 94h89M42 100h89" />
							<rect x="77" y="49" width="132" height="30" rx="4" />
							<path d="M91 58h54v12H91zM151 58h32v12h-32M209 58h18" />
							<path d="M144 64h-14" stroke-dasharray="4 4" />
						</svg>
						<p class="text-xs uppercase tracking-widest text-neutral-500 mb-2">Workstation</p>
						<h4 class="text-xl font-bold text-white mb-3">dpv2 in a desktop</h4>
						<p class="text-sm text-neutral-400 leading-relaxed">
							A PCIe x8 development platform with 8 GB of local DDR3 for larger resident datasets.
						</p>
					</article>

					<article class="rounded-xl border border-dashed border-neutral-700 bg-neutral-900 p-6">
						<svg
							viewBox="0 0 240 120"
							role="img"
							aria-label="Concept server with four fabric-connected dpv3 accelerator cards"
							class="w-full h-28 text-neutral-400 mb-5"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
						>
							<rect x="8" y="15" width="224" height="88" rx="7" />
							<path d="M20 28h200M20 90h200" />
							<rect x="25" y="39" width="40" height="40" rx="4" />
							<rect x="75" y="39" width="40" height="40" rx="4" />
							<rect x="125" y="39" width="40" height="40" rx="4" />
							<rect x="175" y="39" width="40" height="40" rx="4" />
							<path d="M65 59h10M115 59h10M165 59h10" stroke-dasharray="3 3" />
							<path d="M35 49h20v20H35zM85 49h20v20H85zM135 49h20v20h-20zM185 49h20v20h-20z" />
						</svg>
						<p class="text-xs uppercase tracking-widest text-neutral-500 mb-2">Concept</p>
						<h4 class="text-xl font-bold text-white mb-3">Four dpv3 cards in a server</h4>
						<p class="text-sm text-neutral-400 leading-relaxed">
							A planned fabric-linked array with distributed resident memory and direct card-to-card
							transport.
						</p>
					</article>
				</div>
				<figcaption class="mt-4 text-sm text-neutral-500">
					dpv1 is proven hardware, dpv2 is the current scaling platform, and dpv3 is a concept
					design under development.
				</figcaption>
			</figure>
		</div>

		<div class="grid lg:grid-cols-2 gap-6 mb-20">
			<article class="rounded-xl border border-neutral-800 bg-neutral-900 p-8 md:p-10">
				<p class="text-sm uppercase tracking-widest text-neutral-500 mb-4">Personal computing</p>
				<h3 class="text-2xl md:text-3xl font-bold text-white mb-5">An accelerator beside you.</h3>
				<p class="text-neutral-400 leading-relaxed mb-8">
					An accessible accelerator for laptop and workstation development. Load configurations
					matched to different analytical workflows without rebuilding applications around low-level
					hardware APIs.
				</p>
				<p class="text-white">Portable · Flashable · Developer-friendly</p>
			</article>

			<article class="rounded-xl border border-neutral-700 bg-neutral-800 p-8 md:p-10">
				<p class="text-sm uppercase tracking-widest text-neutral-400 mb-4">
					High-performance systems
				</p>
				<h3 class="text-2xl md:text-3xl font-bold text-white mb-5">
					A fabric built around your data.
				</h3>
				<p class="text-neutral-300 leading-relaxed mb-8">
					Multiple accelerator cards partition data and workflows across independent local memory.
					The platform is designed to grow resident capacity and analytical throughput from a
					workstation to fabric-connected server arrays.
				</p>
				<p class="text-white">Parallel · Composable · Scalable</p>
			</article>
		</div>

		<div id="technology" class="grid md:grid-cols-3 gap-10 scroll-mt-24 mb-20">
			<div>
				<h3 class="text-xl font-bold text-white mb-4">Select the right work</h3>
				<p class="text-neutral-400 leading-relaxed">
					Accelerate supported operations when hardware fits their semantics, data shape, and
					performance needs. Keep everything else in software.
				</p>
			</div>
			<div>
				<h3 class="text-xl font-bold text-white mb-4">Compose and right-size</h3>
				<p class="text-neutral-400 leading-relaxed">
					Combine filtering, transformation, aggregation, partitioning, and domain operations into
					streaming configurations shaped by measured workloads.
				</p>
			</div>
			<div>
				<h3 class="text-xl font-bold text-white mb-4">Keep software familiar</h3>
				<p class="text-neutral-400 leading-relaxed">
					Connect reconfigurable compute to dataframe and analytical interfaces instead of rewriting
					workflows around low-level hardware APIs.
				</p>
			</div>
		</div>

		<div
			id="flywheel"
			class="scroll-mt-24 rounded-2xl border border-neutral-800 bg-neutral-900 p-8 md:p-12"
		>
			<div class="max-w-3xl mb-10">
				<p class="uppercase tracking-widest text-sm text-neutral-500 mb-4">The dau flywheel</p>
				<h3 class="text-3xl md:text-4xl font-bold text-white mb-5">
					A configuration loop that improves around real work.
				</h3>
				<p class="text-lg text-neutral-400 leading-relaxed">
					Workload evidence guides what runs in hardware today and what configuration should be
					built next. Every deployed design moves through the same verification path.
				</p>
			</div>

			<div
				aria-label="DAU workload flywheel"
				class="grid lg:grid-cols-[1fr_auto] gap-8 items-stretch"
			>
				<ol class="grid sm:grid-cols-5 gap-3">
					<li class="rounded-lg border border-neutral-700 p-4 flex flex-col">
						<span class="text-sm text-neutral-500 mb-3">01</span>
						<strong class="text-white mb-2">Observe</strong>
						<span class="text-sm text-neutral-400">Profile real analytical workflows.</span>
					</li>
					<li class="rounded-lg border border-neutral-700 p-4 flex flex-col">
						<span class="text-sm text-neutral-500 mb-3">02</span>
						<strong class="text-white mb-2">Select</strong>
						<span class="text-sm text-neutral-400">Choose operations worth accelerating.</span>
					</li>
					<li class="rounded-lg border border-neutral-700 p-4 flex flex-col">
						<span class="text-sm text-neutral-500 mb-3">03</span>
						<strong class="text-white mb-2">Compose</strong>
						<span class="text-sm text-neutral-400">Build a right-sized configuration.</span>
					</li>
					<li class="rounded-lg border border-neutral-700 p-4 flex flex-col">
						<span class="text-sm text-neutral-500 mb-3">04</span>
						<strong class="text-white mb-2">Verify</strong>
						<span class="text-sm text-neutral-400">Check software, simulation, and silicon.</span>
					</li>
					<li class="rounded-lg border border-white p-4 flex flex-col bg-neutral-800">
						<span class="text-sm text-neutral-400 mb-3">05 ↺</span>
						<strong class="text-white mb-2">Measure</strong>
						<span class="text-sm text-neutral-300">Deploy, reuse, and improve the next design.</span
						>
					</li>
				</ol>

				<aside class="rounded-lg border border-dashed border-neutral-700 p-5 lg:max-w-52">
					<p class="text-sm uppercase tracking-widest text-neutral-500 mb-3">Software path</p>
					<p class="text-sm text-neutral-300 leading-relaxed">
						Operations that do not fit the active hardware remain in familiar software with an
						explicit fallback.
					</p>
				</aside>
			</div>
		</div>
	</div>
</section>
