<script lang="ts">
  import { SpecTable } from '@dau-dev/branding';
  import { BOARDS, type Stage } from '#lib/results.ts';

  interface Props {
    /** Start with every spec table expanded. */
    specsOpen?: boolean;
  }

  let { specsOpen = false }: Props = $props();

  // Emphasis follows the timeline: past boards are outlined, the current one is
  // filled, planned ones are dashed and muted.
  const card: Record<Stage, string> = {
    past: 'border-line',
    current: 'border-muted bg-raised',
    planned: 'border-dashed border-line text-muted'
  };
</script>

<div class="grid items-start gap-4 md:grid-cols-3">
  {#each BOARDS as board (board.name)}
    <article class="min-w-0 border p-6 {card[board.stage]}" data-stage={board.stage}>
      <div class="flex items-baseline justify-between gap-4">
        <h3 class="text-2xl font-semibold">{board.name}</h3>
        <span class="label">{board.status}</span>
      </div>
      <p class="mt-1 text-muted">{board.summary}</p>
      <details class="group mt-4" open={specsOpen}>
        <summary class="label flex cursor-pointer list-none items-center gap-2 hover:text-fg">
          <span aria-hidden="true" class="inline-block transition-transform group-open:rotate-90">›</span>
          Specifications
        </summary>
        <div class="mt-3"><SpecTable rows={board.specs} /></div>
      </details>
    </article>
  {/each}
</div>
