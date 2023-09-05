<script lang="ts">
  import { onMount } from 'svelte'
  import Card from '@/components/Archive/Card.svelte'

  interface ProjectData {
    'Project Name': string
    Category: string
    '% of votes received': number
    'OP Received': number
    'Project Profile': string
  }

  let Data: ProjectData[] = []
  let loading: boolean = true
  let itemsToShow: number = 20 // Number of items to display initially
  let totalItems: number = 195 // Total number of items available

  const loadMore = () => {
    if (itemsToShow < totalItems) {
      itemsToShow += 10 // Increase the number of items to display
    }
  }

  onMount(async () => {
    try {
      const response = await fetch('public/data/retroPGF2-dataset/results.json')
      Data = await response.json()
      totalItems = Data.length // Set the total number of items available
      loading = false
    } catch (error) {
      console.error('Error importing data:', error)
    }
  })

  let round: string = 'Round 2'
  const filterRound = (event: any) => {
    round = event.target.value
    console.log(round)
  }
</script>

<div class="flex flex-col min-h-screen">
  {#if loading}
    <div class="flex flex-row justify-center font-bold text-3xl my-64">
      Loading
    </div>
  {:else}
    <div class="h-[10em] overflow-hidden">
      <img src="./img/opsunsmile.png" alt="OPBanner" class="w-full" />
    </div>
    <div class="px-[10em]">
      <h1 class="flex justify-center font-bold mt-6 text-[40px] text-center">
        RetroPGF 2 Nominated Projects
      </h1>
      <div class="flex justify-center my-3">
        <div class="text-[20px] max-w-[50em] text-base text-center">
          RetroPGF Round 2 stretched over multiple months and involved
          participation from hundreds of projects and community members across
          the Optimism Collective.
        </div>
      </div>
      <a
        href="https://community.optimism.io/docs/governance/retropgf-2/"
        target="_blank"
        class="flex justify-center text-base font-semibold my-2"
      >
        Read More &gt
      </a>
    </div>
    <div class="px-[10em]">
      <!-- ...other content... -->
      <div class="flex justify-end">
        <select
          on:change={filterRound}
          class="filter my-2 p-3 border-2 border-black rounded-lg"
        >
          <option>Round 1</option>
          <option selected>Round 2</option>
        </select>
      </div>
      {#if round == 'Round 2'}
        <div class="allcard flex flex-wrap justify-center">
          {#each Data.slice(0, itemsToShow) as project}
            <Card
              name={project['Project Name']}
              category={project['Category']}
            />
          {/each}
        </div>
      {:else if round == 'Round 1'}
        <div class="allcard flex flex-wrap justify-center">
          {#each Data.slice(0, itemsToShow) as project}
            <Card
              name={project['Project Name']}
              category={project['Category']}
            />
          {/each}
        </div>
      {/if}
      {#if itemsToShow < totalItems}
        <div class="flex justify-center mt-4">
          <button
            on:click={loadMore}
            class="bg-black hover:bg-red-500 text-white font-bold py-2 px-6 rounded-xl transition ease-in-out duration-200"
          >
            Load More
          </button>
        </div>
      {/if}
    </div>
  {/if}
</div>
