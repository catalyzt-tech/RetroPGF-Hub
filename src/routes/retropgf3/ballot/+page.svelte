<script>
  import BubbleBallot from '@/components/RetroPGF3/BubbleBallot.svelte'
</script>

<div>
  <div class="px-10 lg:px-[10em]">
    <h1 class="flex justify-center font-bold mt-6 text-[40px] text-center">
      RetroPGF 3 Ballot Results
    </h1>
    <div class="flex justify-center my-3">
      <div class="text-[20px] max-w-[50em] text-base text-center">
        This chart show all the votes from the RetroPGF 3 ballot. The size of
        bubble depend on the bollot count. The bigger the bubble, the more votes
        it has. The category is defined by the color of the bubble. Mouse over
        each bubble to see the name of the project and the ballot count.
      </div>
    </div>
  </div>
  <BubbleBallot />
</div>
