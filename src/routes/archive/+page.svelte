<script lang="ts">
  import { onMount } from 'svelte'
  import { browser } from '$app/environment'
  import CardRound1 from '@/components/Archive/CardRound1.svelte'
  import CardRound2 from '@/components/Archive/CardRound2.svelte'

  interface ProjectData {
    'Project Name': string
    Category: string
    '% of votes received': number
    'OP Received': number
    'Project Profile': string
  }
  interface ProjectDataRound1 {
    name: string
    website: string
    lead_name: string
    email: string
    question_1: string
    allocation: number
  }

  let Data1: ProjectDataRound1[] = []
  let Data2: ProjectData[] = []
  let loading: boolean = true
  let itemsToShow: number = 20
  let totalItems: number

  const loadMore = () => {
    if (itemsToShow < totalItems) {
      itemsToShow += 10
    }
  }
  onMount(async () => {
    const response = await fetch('public/data/retroPGF2-dataset/results.json')
    Data2 = await response.json()
    totalItems = Data2.length
    loading = false
  })

  let round: string = 'Round 2'
  $: {
    if (browser) {
      const changeRound = async () => {
        if (round == 'Round 2') {
          const response = await fetch(
            'public/data/retroPGF2-dataset/results.json'
          )
          Data2 = await response.json()
          totalItems = Data2.length
          loading = false
        } else if (round == 'Round 1') {
          const response = await fetch('public/data/results_rpgf1.json')
          Data1 = await response.json()
          totalItems = Data1.length
          loading = false
          // console.log(Data1)
        }
      }
      changeRound()
    }
  }

  const filterRound = async (event: any) => {
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
          {#each Data2.slice(0, itemsToShow) as project}
            <CardRound2
              name={project['Project Name']}
              category={project['Category']}
            />
          {/each}
        </div>
      {:else if round == 'Round 1'}
        <div class="allcard flex flex-wrap justify-center">
          {#each Data1.slice(0, itemsToShow) as project}
            <CardRound1 name={project.name} />
          {/each}
        </div>
      {/if}
      {#if itemsToShow < totalItems}
        <div class="flex justify-center mt-4">
          <button
            on:click={loadMore}
            class="bg-black hover:bg-red-500 text-white font-medium py-2 px-6 rounded-xl transition ease-in-out duration-200"
          >
            Load More
          </button>
        </div>
      {/if}
    </div>
  {/if}
</div>
