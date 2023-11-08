<script lang="ts">
  import Alertbar from '@/components/Alertbar.svelte'
  import Card from '@/components/RetroPGF3/Card.svelte'
  import CardSkeleton from '@/components/RetroPGF3/CardSkeleton.svelte'
  import { onMount } from 'svelte'
  let fetchData: any = []
  let fetchDataNew: any = []
  let loading = true
  let showCard = 20

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
    return array
  }

  const fetchSheet = async () => {
    try {
      let query = encodeURIComponent('Select *')
      let sheet = 'Metadata_full'
      const sheetID = '13ihSoZycgH2h6ZvlARuj7q2zPvGtBqQ8LoNrJemTUU4'
      let data: any = await fetch(
        `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?tqx=out:json&sheet=${sheet}&tq=${query}`
      )
      data = await data.text()
      let jsonData = await JSON.parse(data.slice(47, -2))
      await jsonData.table.rows.forEach(async (row: any) => {
        let obj: object = {}
        row.c.forEach((cell: any, index: number) => {
          if (cell) {
            if (cell.v) {
              obj[jsonData.table.cols[index].label] = cell.v
            }
          }
        })
        fetchData.push(obj)
      })
    } catch (err) {
      console.log(err)
    } finally {
      fetchDataNew = fetchData
      shuffle(fetchDataNew)
    }
  }

  onMount(async () => {
    await fetchSheet()
    loading = false
  })

  const loadMore = () => {
    showCard += 20
  }

  const searchFilter = async (val: any) => {
    setTimeout(async () => {
      console.log(val.target.value)
      if (val.target.value === '') {
        fetchDataNew = fetchData
        return
      }
      fetchDataNew = await fetchData.filter((data: any) => {
        return data['displayName']
          .toLowerCase()
          .includes(val.target.value.toLowerCase())
      })
      console.log(fetchDataNew)
    }, 2000)
  }
</script>

<Alertbar />
<div class="flex flex-col min-h-screen mb-10">
  <div class="w-full lg:h-[10em] overflow-hidden">
    <img src="./img/opsunsmile.png" alt="OPBanner" class="w-full" />
  </div>
  <div class="px-10 lg:px-[10em]">
    <h1 class="flex justify-center font-bold mt-6 text-[40px] text-center">
      RetroPGF 3 Eligible Projects
    </h1>
    <h1 class="flex justify-center font-bold text-[30px] text-center">
      (Recategorization)
    </h1>
    <div class="flex justify-center my-3">
      <div class="text-[20px] max-w-[50em] text-base text-center">
        Laura, one of the badgeholders, is running an initiative where she's
        categorizing projects
      </div>
    </div>
    <a
      href="https://docs.google.com/spreadsheets/d/1INxDsfVREhpo5J-558VfoZb0MmbvxpoVyuMzTNuVdLw/edit#gid=1407829580"
      target="_blank"
      class="flex justify-center text-base font-semibold my-2"
    >
      View Data Sheet &gt
    </a>
  </div>
  <div class="flex flex-row justify-center">
    <div
      class="flex flex-grow justify-center rounded-2xl mx-4 md:mx-0 lg:my-4 max-w-[35em]"
    >
      <div class="flex flex-grow mr-3">
        <input
          on:input={searchFilter}
          type="text"
          class=" bg-[#e4e4e4] flex-grow rounded-lg px-5 py-2 my-2 text-left transition ease-in-out duration-200"
          placeholder="Search For Review Round"
        />
      </div>
    </div>
  </div>
  {#key fetchDataNew}
    {#if !loading}
      <div class="flex flex-row flex-wrap justify-center">
        {#key fetchDataNew}
          {#each fetchDataNew.slice(0, showCard) as data}
            <Card {data} />
            <!-- <div>Array {fetchData.length}</div> -->
          {/each}
        {/key}
      </div>
      {#if fetchDataNew.length > showCard}
        <div class="flex flex-row justify-center">
          <button
            class="bg-black px-4 py-2 rounded-lg w-fit text-white font-base"
            on:click={loadMore}>Show More</button
          >
        </div>
      {:else if fetchDataNew.length == 0}
        <div class="flex flex-row justify-center">
          <div class="">Not found the project, please try again.</div>
        </div>
      {/if}
    {:else}
      <div class="flex flex-row flex-wrap justify-center">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    {/if}
  {/key}
</div>
