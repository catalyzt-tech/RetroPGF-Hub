<script lang="ts">
  import { onMount } from 'svelte'
  import Card from '../../components/Archive/Card.svelte'
  import Navbar from '../../components/Navbar.svelte'
  import Footer from '../../components/Footer.svelte'
  import { load } from './[slug]/+page'

  interface ProjectData {
    'Project Name': string
    Category: string
    '% of votes received': number
    'OP Received': number
    'Project Profile': string
  }

  let Data: ProjectData[] = []
  let loading = true
  onMount(async () => {
    try {
      const response = await fetch('public/data/retroPGF2-dataset/results.json')
      Data = await response.json()
      // console.log(Data)
    } catch (error) {
      console.error('Error importing data:', error)
    }
  })
  onMount(async () => {
    loading = (await !Data) ? true : false
  })
  const maxWidthCard: any = () => {
    const allCard: any = document.querySelector('.allcard')
    const filter: any = document.querySelector('.filter')
    filter.style.Width = allCard.style.maxWidth
  }

  let round: string = 'Round 2'
  const filterRound = (event: any) => {
    round = event.target.value
    console.log(round)
  }
</script>

<div class="flex flex-col min-h-screen">
  <Navbar />
  {#if loading}
    <div class="flex flex-row justify-center font-bold text-3xl my-64">
      Loading
    </div>
  {:else if !loading}
    <div class="h-[10em] overflow-hidden">
      <img src="./img/opsunsmile.png" alt="OPBanner" class="w-full" />
    </div>
    <div class="px-[10em]">
      <h1 class="flex justify-center font-bold mt-6 text-[40px]">
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
          {#each Data as project}
            <Card
              name={project['Project Name']}
              category={project['Category']}
            />
          {/each}
        </div>
      {:else if round == 'Round 1'}
        <div class="allcard flex flex-wrap justify-center">
          {#each Data as project}
            <Card
              name={project['Project Name']}
              category={project['Category']}
            />
          {/each}
        </div>
      {/if}
    </div>
  {/if}
  <div class="flex-grow"><Footer /></div>
</div>
