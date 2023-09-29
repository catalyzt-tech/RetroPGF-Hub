<script>
  import Alertbar from '@/components/Alertbar.svelte'
  import Button from '@/components/History/Button.svelte'
  const round = ['Round 1', 'Round 2', 'Round 3']
</script>

<Alertbar />
<div class="relative flex flex-col overflow-hidden md:h-fit">
  <div class="w-full min-h-[150px] lg:h-[12em] overflow-hidden">
    <img src="./img/history_banner_3.jpg" alt="OPBanner" class="w-full" />
  </div>
  <div class="flex justify-center text-[40px] font-bold my-8">History</div>
  <em class="flex justify-center text-center mx-10 md:mx-72">
    The Optimism team has long been in search of a solution on how to
    sustainably fund public goods, and we now have the structure of our first
    experiment thanks to a brilliant design by Vitalik Buterin.
  </em>
  <br />
  <div class="flex justify-center text-center mx-10 md:mx-72">
    The core principle behind the concept of retroactive public goods funding is
    simple: it’s easier to agree on what was useful than what will be useful.
    The former is still often a source of disagreement, but it’s a type of
    disagreement where you could still get reasonably good top-level judgements
    by using some existing voting mechanism (eg. quadratic voting or even
    regular voting).
  </div>

  <div class="flex flex-wrap justify-center mt-7">
    {#each round as r}
      <Button round={r} />
    {/each}
  </div>
  <div class="flex justify-center items-center h-[10em] mt-20 my-10">
    <img
      src="./img/op_sun.svg"
      alt="op sun"
      class="mt-40 w-[20em] lg:w-[25em] hover:animate-spin 10s"
    />
  </div>
</div>
