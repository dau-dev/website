<script lang="ts">
  import { RESULTS } from '#lib/results.ts';
</script>

<!-- A table on wide screens; each row stacks into a block on phones. -->
<table class="w-full border-collapse text-left">
  <caption class="sr-only">Benchmark results on dau boards</caption>
  <thead class="max-md:sr-only">
    <tr class="border-b border-line">
      <th scope="col" class="label w-[45%] pb-3 pr-8 font-normal">Benchmark</th>
      <th scope="col" class="label pb-3 pr-8 font-normal">Board</th>
      <th scope="col" class="label pb-3 font-normal">Result</th>
    </tr>
  </thead>
  <tbody>
    {#each RESULTS as r (r.benchmark)}
      <tr class="border-b border-line align-top max-md:block max-md:py-5">
        <th scope="row" class="py-5 pr-8 font-semibold leading-snug max-md:block max-md:py-0">{r.benchmark}</th>
        <td class="py-5 pr-8 font-mono text-sm text-muted max-md:block max-md:py-1">{r.board}</td>
        <td class="py-5 max-md:block max-md:py-0">
          <p class="font-semibold">{r.outcome}</p>
          <p class="mt-1 text-sm leading-relaxed text-muted">{r.detail}</p>
        </td>
      </tr>
    {/each}
  </tbody>
</table>
