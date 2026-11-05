<!-- Line drawings of the four deployment shapes, drawn in currentColor. -->
<figure aria-label="dau deployment options from one personal accelerator to a server array">
  <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
    <article class="border border-line p-6">
      <svg
        viewBox="0 0 240 120"
        role="img"
        aria-label="One dpv1 accelerator connected to a laptop"
        class="mb-5 h-28 w-full"
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
      <p class="label mb-2">Personal</p>
      <h4 class="mb-2 text-lg font-semibold">Next to your laptop</h4>
      <p class="text-sm leading-relaxed text-muted">A Thunderbolt device connected to your laptop.</p>
    </article>

    <article class="border border-line p-6">
      <svg
        viewBox="0 0 240 120"
        role="img"
        aria-label="Multiple dpv1 accelerators daisy chained to one laptop"
        class="mb-5 h-28 w-full"
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
      <p class="label mb-2">Scale-out</p>
      <h4 class="mb-2 text-lg font-semibold">Several on one laptop</h4>
      <p class="text-sm leading-relaxed text-muted">
        Several Thunderbolt devices connected to one laptop, with work split across them.
      </p>
    </article>

    <article class="border border-muted bg-raised p-6">
      <svg
        viewBox="0 0 240 120"
        role="img"
        aria-label="One dpv2 accelerator installed in a desktop workstation"
        class="mb-5 h-28 w-full"
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
      <p class="label mb-2">Workstation</p>
      <h4 class="mb-2 text-lg font-semibold">In your desktop</h4>
      <p class="text-sm leading-relaxed text-muted">A PCIe card in your desktop.</p>
    </article>

    <article class="border border-dashed border-line p-6 text-muted">
      <svg
        viewBox="0 0 240 120"
        role="img"
        aria-label="Concept server with four fabric-connected dpv3 accelerator cards"
        class="mb-5 h-28 w-full"
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
      <p class="label mb-2">Planned</p>
      <h4 class="mb-2 text-lg font-semibold">In a server</h4>
      <p class="text-sm leading-relaxed text-muted">Several PCIe cards in a server, linked directly to each other.</p>
    </article>
  </div>
  <figcaption class="mt-4 text-sm text-muted">
    dpv1 proved the approach. dpv2 is the current platform. dpv3 is in design.
  </figcaption>
</figure>
