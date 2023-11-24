<script>
  import BubbleBallot from '@/components/RetroPGF3/BubbleBallot.svelte'
  import ColumeBallot from '@/components/RetroPGF3/ColumeBallot.svelte'
  import EachBallot from '@/components/RetroPGF3/EachBallot.svelte'
  import TypeProjects from '@/components/RetroPGF3/TypeProjects.svelte'
  import Alertbar from '@/components/Alertbar.svelte'
  import { browser } from '$app/environment'

  let Ballot
  let maxBallot = 'Loading'
  let minBallot = 'Loading'
  let firstRange = 'Loading'
  let lastRange = 'Loading'
  let qualifyAmount = 'Loading'
  const handlePassingData = (event) => {
    minBallot = event.detail.Ballot[0]
    maxBallot = event.detail.Ballot[1]
    firstRange = event.detail.Ballot[2]
    lastRange = event.detail.Ballot[3]
    qualifyAmount = event.detail.Ballot[4]
    // console.log('Min', event.detail.Ballot[0])
    // console.log('Max', event.detail.Ballot[1])
  }
</script>

<Alertbar />
<div>
  <div class="px-10 lg:px-[10em]">
    <h1 class="flex justify-center font-bold mt-6 text-[40px] text-center">
      RetroPGF 3 Ballot Results
    </h1>
    <div class="flex justify-center my-3">
      <div class="text-[20px] max-w-[50em] text-base text-center">
        This chart shows all the votes from the RetroPGF 3 ballot. The size of
        bubble depends on the ballot count. The bigger the bubble, the more
        votes it has. The category is defined by the color of the bubble. Mouse
        over each bubble to see the name of the project and the ballot count.
      </div>
    </div>
    <div class="flex flex-row flex-wrap justify-center mt-5 mb-10">
      <div
        class="flex flex-col my-4 md:my-0 bg-white mr-5 px-6 py-3 border-2 border-black rounded-xl"
      >
        <div class="text-3xl">📌</div>
        <div class="text-md">Min Ballot</div>
        <div class="text-lg font-medium">{minBallot} Vote</div>
      </div>
      <div
        class="flex flex-col my-4 md:my-0 bg-white mr-5 px-6 py-3 border-2 border-black rounded-xl"
      >
        <div class="text-3xl">🔥</div>
        <div class="text-md">Max Ballot</div>
        <div class="text-lg font-medium">{maxBallot} Vote</div>
      </div>
      <div
        class="flex flex-col my-4 md:my-0 bg-white mr-5 px-6 py-3 border-2 border-black rounded-xl"
      >
        <div class="text-3xl">🌱</div>
        <div class="text-md">&lt; 5 Ballots</div>
        <div class="text-lg font-medium">{firstRange} Projects</div>
      </div>
      <div
        class="flex flex-col my-4 md:my-0 bg-white mr-5 px-6 py-3 border-2 border-black rounded-xl"
      >
        <div class="text-3xl">💪</div>
        <div class="text-md">&ge; 5 Ballots</div>
        <div class="text-lg font-medium">{lastRange} Projects</div>
      </div>
      <div
        class="flex flex-col my-4 md:my-0 bg-white mr-5 px-6 py-3 border-2 border-black rounded-xl"
      >
        <div class="text-3xl">🥰</div>
        <div class="text-md">Qualify</div>
        <div class="text-lg font-medium">{qualifyAmount} Projects</div>
      </div>
    </div>
  </div>
  {#if browser}
    <BubbleBallot bind:Ballot on:sendData={handlePassingData} />
    <!-- <div class="flex flex-row flex-wrap justify-center space-x-2">
      <ColumeBallot></ColumeBallot>
      <EachBallot></EachBallot>
      <TypeProjects></TypeProjects>
    </div> -->
  {/if}
</div>
