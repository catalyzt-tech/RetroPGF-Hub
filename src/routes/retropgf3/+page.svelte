<script lang="ts">
  import Alertbar from '@/components/Alertbar.svelte'
  import Card from '@/components/RetroPGF3/Card.svelte'
  import { onMount } from 'svelte'
  let fetchData: any = []
  let loading = true
  const fetchSheet = async () => {
    let query = encodeURIComponent('Select *')
    let sheet = 'Metadata_full'
    const sheetID = '1INxDsfVREhpo5J-558VfoZb0MmbvxpoVyuMzTNuVdLw'
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
  }
  onMount(async () => {
    await fetchSheet()
    loading = false
  })
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
  {#if !loading}
    <div class="flex flex-row flex-wrap justify-center">
      {#each fetchData as data}
        <Card {data} />
        <!-- <div>Array {fetchData.length}</div> -->
      {/each}
    </div>
  {/if}
</div>
