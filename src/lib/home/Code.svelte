<section id="code" class="px-6 py-24 bg-neutral-950 text-neutral-300 scroll-mt-16">
	<div class="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
		<div>
			<p class="uppercase tracking-widest text-sm text-neutral-500 mb-4">Open source</p>
			<h2 class="text-3xl md:text-5xl font-bold text-white mb-6">
				The code is public. The boards are the product.
			</h2>
			<p class="text-lg leading-relaxed text-neutral-400 mb-6">
				Every part of the dau software stack is on GitHub under the Apache 2.0 license: the operator
				tiles and their golden models, the build system, the simulator, the host driver, the
				scheduler, and the Polars integration. You can read how a query becomes a design, build the
				same bitstreams we run, and add your own tiles in your own package.
			</p>
			<p class="text-lg leading-relaxed text-neutral-400">
				Install straight from the repositories. The Polars package pulls in the rest.
			</p>
			<pre
				class="mt-6 rounded-lg border border-neutral-800 bg-neutral-900 p-4 text-sm text-neutral-200 overflow-x-auto"><code
					>pip install git+https://github.com/dau-dev/dau-polars</code
				></pre>
		</div>
		<div class="grid gap-3">
			<a
				href="https://github.com/dau-dev/dau-polars"
				class="rounded-lg border border-neutral-800 p-5 hover:border-neutral-600"
			>
				<p class="text-lg font-bold text-white">dau-polars</p>
				<p class="text-sm text-neutral-400">
					Capture a Polars plan, compile it onto tiles, run it on the device, the CPU, or split
					between them.
				</p>
			</a>
			<a
				href="https://github.com/dau-dev/dau-core"
				class="rounded-lg border border-neutral-800 p-5 hover:border-neutral-600"
			>
				<p class="text-lg font-bold text-white">dau-core</p>
				<p class="text-sm text-neutral-400">
					The operator tiles: SystemVerilog, bit-exact golden models, capability contracts, and the
					registry.
				</p>
			</a>
			<a
				href="https://github.com/dau-dev/dau-driver"
				class="rounded-lg border border-neutral-800 p-5 hover:border-neutral-600"
			>
				<p class="text-lg font-bold text-white">dau-driver</p>
				<p class="text-sm text-neutral-400">
					Host I/O over XDMA on Linux and macOS: discovery, registers, DMA, and job execution.
				</p>
			</a>
			<a
				href="https://github.com/dau-dev/dau-scheduler"
				class="rounded-lg border border-neutral-800 p-5 hover:border-neutral-600"
			>
				<p class="text-lg font-bold text-white">dau-scheduler</p>
				<p class="text-sm text-neutral-400">
					Decides how much of a query the device takes, from measured costs.
				</p>
			</a>
			<a
				href="https://github.com/dau-dev/dau-build"
				class="rounded-lg border border-neutral-800 p-5 hover:border-neutral-600"
			>
				<p class="text-lg font-bold text-white">dau-build</p>
				<p class="text-sm text-neutral-400">
					Declarative build specs through synthesis, programming, and smoke tests, with Vivado or
					yosys.
				</p>
			</a>
			<a
				href="https://github.com/dau-dev/dau-sim"
				class="rounded-lg border border-neutral-800 p-5 hover:border-neutral-600"
			>
				<p class="text-lg font-bold text-white">dau-sim</p>
				<p class="text-sm text-neutral-400">
					Cycle-accurate simulation for Amaranth, SystemVerilog, and hand-built IR, with a cocotb
					backend.
				</p>
			</a>
			<a href="https://github.com/dau-dev" class="text-sm text-neutral-400 hover:text-white mt-2">
				All repositories on GitHub <span aria-hidden="true">→</span>
			</a>
		</div>
	</div>
</section>
