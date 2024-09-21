<script>
	/**
	 * @type {number}
	 */
	let y;
</script>

<nav
	class="w-full fixed top-0 z-50 transition-colors"
	class:transparent={y < 50}
	class:bg-dark={y >= 50}
>
	<div class="max-w-6xl mx-auto px-4">
		<div class="flex justify-between">
			<div class="flex space-x-7">
				<div>
					<!-- Website Logo -->
					<a href="/" class="flex items-center py-4 px-2">
						<img src="/img/dau-dark.png" alt="Logo" class="h-4 w-4 mr-2" />
						<span
							class="uppercase tracking-widest leading-tight font-normal text-neutral-300 text-lg"
							>dau.</span
						>
					</a>
				</div>

				<!-- Primary Navbar items -->
			</div>
			<div class="flex space-x-7">
				<div class="hidden md:flex items-center space-x-1">
					<a
						href="#about"
						class="py-2 px-2 rounded text-neutral-300 font-semibold hover:text-neutral-500 hover:bg-neutral-800 transition duration-300"
						>About</a
					>
				</div>

				<!-- Secondary Navbar items -->
				<div class="hidden md:flex items-center space-x-3">
					<a
						href="#contact"
						class="py-2 px-2 rounded text-neutral-300 font-semibold hover:text-neutral-500 hover:bg-neutral-800 transition duration-300"
						>Contact</a
					>
				</div>
			</div>

			<!-- Mobile menu button -->
			<div class="md:hidden flex items-center">
				<button class="outline-none mobile-menu-button">
					<svg
						class=" w-6 h-6 text-neutral-300 hover:text-neutral-500"
						x-show="!showMenu"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</button>
			</div>
		</div>
	</div>

	<!-- mobile menu -->
	<div class="hidden mobile-menu">
		<ul class="">
			<li class="active">
				<a href="/" class="block text-sm px-2 py-4 text-white bg-neutral-500 font-semibold">Home</a>
			</li>
			<li>
				<a
					href="#about"
					class="block text-sm px-2 py-4 text-neutral-200 hover:bg-neutral-500 transition duration-300"
					>About</a
				>
			</li>
			<li>
				<a
					href="#contact"
					class="block text-sm px-2 py-4 text-neutral-200 hover:bg-neutral-500 transition duration-300"
					>Contact Us</a
				>
			</li>
		</ul>
	</div>
	<script>
		const btn = document.querySelector('button.mobile-menu-button');
		const menu = document.querySelector('.mobile-menu');

		btn.addEventListener('click', () => {
			menu.classList.toggle('hidden');
		});
	</script>
</nav>

<svelte:window bind:scrollY={y} />
