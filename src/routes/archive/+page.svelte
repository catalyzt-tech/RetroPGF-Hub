<script lang="ts">
  import { onMount } from 'svelte'
  import { browser } from '$app/environment'
  import CardRound1 from '@/components/Archive/CardRound1.svelte'
  import CardRound2 from '@/components/Archive/CardRound2.svelte'
  import SearchBar from '@/components/Archive/SearchBar.svelte'

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
          const response = await fetch(
            'public/data/retroPGF1-dataset/results_rpgf1.json'
          )
          Data1 = await response.json()
          totalItems = Data1.length
          loading = false
        }
      }
      changeRound()
    }
  }

  const filterRound = async (event: any) => {
    round = event.target.value
    console.log(round)
  }

  const categoryRound2 = [
    'All',
    'Education',
    'Infrastructure',
    'Tooling and utilities',
  ]
  let width: number
  let filteredProjects: ProjectData[] = []
  let showCategory: string = 'All'
  const filterCategory = (event: any) => {
    showCategory = event.target.value
    console.log(showCategory)
    if (showCategory === 'All') {
      filteredProjects = Data2
    } else {
      filteredProjects = Data2.filter(
        (project) => project['Category'] === showCategory
      )
    }
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
      {#if round === 'Round 1'}
        <h1 class="flex justify-center font-bold mt-6 text-[40px] text-center">
          RetroPGF 1 Nominated Projects
        </h1>
        <div class="flex justify-center my-3">
          <div class="text-[20px] max-w-[50em] text-base text-center">
            The Retroactive Public Goods Funding (RetroPGF) by The Optimism
            Collective awarded funding to 58 out of 76 nominated projects,
            marking the first experiment in a new form of governance through
            badgeholders.
          </div>
        </div>
        <a
          href="https://community.optimism.io/docs/governance/retropgf-1/"
          target="_blank"
          class="flex justify-center text-base font-semibold my-2"
        >
          Read More &gt
        </a>
      {:else}
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
      {/if}
    </div>
    <div class="px-[10em]">
      {#if round == 'Round 2'}
        <div
          class="flex justify-end border-2 border-black rounded-2xl p-3 my-3"
        >
          <input
            class=" bg-gray-200 rounded-lg px-2 py-2 mr-3 text-right max-w-fit"
            placeholder="Search"
          />
          {#each categoryRound2 as category}
            <button
              on:click={filterCategory}
              value={category}
              class="bg-black text-white px-5 mr-3 rounded-lg hover:bg-red-500 transition ease-in-out duration-200"
            >
              {category}</button
            >
          {/each}
          <select
            on:change={filterRound}
            class="filter p-3 border-2 border-black rounded-lg"
          >
            <option selected disabled>-- Filter --</option>
            <option>Round 1</option>
            <option>Round 2</option>
          </select>
        </div>
        <div
          class="allcard flex flex-wrap justify-center"
          bind:clientWidth={width}
        >
          {#each filteredProjects.slice(0, itemsToShow) as project}
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
