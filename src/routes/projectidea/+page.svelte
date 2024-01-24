<script lang="ts">
  import Card from '@/components/ProjectIdea/Card.svelte'
  import Alertbar from '@/components/Alertbar.svelte'
  import { onMount } from 'svelte'
  let issueData: string[] = []
  let shuffleStatus = false
  const shuffle = (array: []) => {
    let currentIndex = array.length,
      randomIndex
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
      ;[array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ]
    }
    shuffleStatus = true
    return array
  }

  const syncData = async () => {
    const data = await fetch('/data/project-idea/cleanIssue.json')
    issueData = await data.json()
    // console.log(issueData[0])
    return issueData
  }

  onMount(async () => {
    await syncData()
    await shuffle(issueData)
  })
</script>

<Alertbar />
{#if shuffleStatus}
  <div class="flex flex-col min-h-screen mb-10">
    <div class="w-full lg:h-[10em] overflow-hidden">
      <img
        src="./img/projectidea_banner.jpg"
        alt="OPBanner"
        class="object-cover object-center w-full h-full"
      />
    </div>

    <h1 class="flex justify-center font-bold mt-6 text-[40px] text-center">
      Contributions Ideas
    </h1>
    <div class=" flex flex-col justify-center items-center my-3">
      <div class="text-[20px] max-w-[50em] text-base text-center mb-3">
        Welcome to the Contributions Ideas! Here you'll find various ways to
        contribute to the Optimism Collective so that we can build an economy
        that works for humans, together.
      </div>
      <div class="text-[20px] max-w-[50em] text-base text-center">
        Different ways to contribute to the Optimism Collective are loosely
        organized into "categories" which give a sense of the relative scope,
        utility, and complexity of any given project. Refer to the sections
        below to understand what each of these categories means and what type of
        tasks or ideas you can expect to find within a category.
      </div>
    </div>

    <div class="flex flex-row flex-wrap justify-center">
      {#each issueData as issue}
        <Card data={issue} />
      {/each}
    </div>
  </div>
{/if}
