<script lang="ts">
  import Alertbar from '@/components/Alertbar.svelte'
  import Card from '@/components/RetroPGF3/Card.svelte'
  import CardSkeleton from '@/components/RetroPGF3/CardSkeleton.svelte'
  import { onMount } from 'svelte'
  let fetchData: any = []
  let fetchDataNew: any = []
  let loading = true
  let showCard = 20
  let currentCategory: string = 'all'
  let currentSubCategory: string = 'all'
  let totalBallots: number
  let dataNew: any = []

  const handleBallotUpdate = (event: any) => {
    totalBallots = event.detail.dataNew.totalBallots
    // const tempBindData = event.detail.dataNew
    // fetchDataNew = fetchDataNew.map((data: any) => {
    //   if (data['Approval Attestation ID'] == data['Approval Attestation ID']) {
    //     data = { ...data, totalBallots: totalBallots }
    //   }
    //   return data
    // })
    // // console.log('Parent', totalBallots)
    console.log('Parent', event.detail.dataNew)
    // console.log(fetchDataNew.slice(0, showCard))
  }

  const mainCategoryList = [
    'All',
    'OP Stack',
    'Collective Governance',
    'Developer Ecosystem',
    'End User Experience Adoption',
  ]
  const subCategoryListOPStack = [
    'All',
    'Ethereum Development & Maintanance',
    'OP Stack tooling',
    'OP Stack development & research',
  ]
  const subCategoryListGovernance = [
    'All',
    'Optimism Governance contributions',
    'Governance tooling',
    'Governance Research',
  ]
  const subCategoryListDevEcosystem = [
    'All',
    'Dev Services & Support',
    'Dev Tooling',
    'Research & Analytics',
    'Conferences, Events & Hackathons',
    'Developer Education',
  ]
  const subCategoryListEndUserX = [
    'All',
    'Applications (Defi, Social, NFTs, Gaming Etc)',
    'Discovery Tooling',
    'Portfolio Tracker',
    'Wallets',
    'Evangelism & User Onboarding',
  ]
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
        let obj: any = {}
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
      const prompt = await val.target.value.replace(/\s/g, '').toLowerCase()
      loading = true
      console.log(loading)
      // console.log(prompt)
      if (prompt === '') {
        fetchDataNew = fetchData
        return
      }
      fetchDataNew = await fetchData.filter((data: any) => {
        return data['displayName']
          .replace(/\s/g, '')
          .toLowerCase()
          .includes(prompt)
      })
      console.log(fetchDataNew)
    }, 2000)
    loading = await false
    console.log(loading)
  }

  const mainCategoryFilter = async (val: any) => {
    showCard = 20
    try {
      const choose = val.target.value.replace(/\s/g, '').toLowerCase()
      currentCategory = choose
      currentSubCategory = 'all'
      if (choose == 'all') {
        fetchDataNew = fetchData
        return
      }
      fetchDataNew = await fetchData.filter((data: any) => {
        if (data['New Main-Category'] === undefined) return false
        const cleanName = data['New Main-Category']
          .replace(/[_\s]/g, '')
          .toLowerCase()
        // console.log(data)
        console.log(cleanName, choose)
        return cleanName == choose
      })
    } catch (err) {
      console.log(err)
    } finally {
      console.log(fetchDataNew)
    }
  }

  const subCategoryFilter = async (val: any) => {
    showCard = 20
    try {
      const choose = val.target.value.replace(/\s/g, '').toLowerCase()
      currentSubCategory = choose
      if (choose == 'all') {
        fetchDataNew = fetchData.filter((data: any) => {
          if (data['New Main-Category'] == undefined) return false
          const cleanName = data['New Main-Category']
            .replace(/_/g, '')
            .toLowerCase()
          return cleanName == currentCategory
        })
        return
      }
      fetchDataNew = await fetchData.filter((data: any) => {
        if (data['Sub-category'] == undefined) {
          return false
        }
        console.log(data)
        const cleanName = data['Sub-category'].replace(/\s/g, '').toLowerCase()
        // console.log(cleanName, choose)
        return cleanName == choose
      })
    } catch (err) {
      console.log(err)
    } finally {
      console.log(fetchDataNew)
    }
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
        LauNaMu, one of the badgeholders, is running an initiative where she's
        categorizing projects
      </div>
    </div>
    <a
      href="https://plaid-cement-e44.notion.site/b54253ffc6d749b2b8adf9035202fa10"
      target="_blank"
      class="flex justify-center text-base font-semibold my-2"
    >
      View Badgeholder Manual &gt
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
  <div class="flex flex-row justify-center w-full">
    <div
      class="{currentCategory != 'all'
        ? 'border-b-2 pb-8'
        : ''} flex flex-row flex-wrap justify-center mx-6 max-w-6xl"
    >
      {#key currentCategory}
        {#each mainCategoryList as each}
          <button
            on:click={mainCategoryFilter}
            class=" {currentCategory == each.replace(/\s/g, '').toLowerCase()
              ? 'bg-[#f03b3b] text-white font-medium'
              : 'bg-[#e4e4e4] text-black'}
           flex flex-row flex-grow mx-3 mt-3 px-5 py-2 rounded-lg"
            value={each}>{each}</button
          >
        {/each}
      {/key}
    </div>
  </div>
  <div class="flex flex-row justify-center w-full">
    <div class="flex flex-row flex-wrap justify-center mx-6 mt-4">
      {#if currentCategory == 'opstack'}
        {#each subCategoryListOPStack as each}
          <button
            on:click={subCategoryFilter}
            class="{currentSubCategory == each.replace(/\s/g, '').toLowerCase()
              ? 'border-black border font-medium'
              : ''} flex flex-row flex-grow mx-3 my-3 px-5 py-2 rounded-lg bg-[#e4e4e4]"
            value={each}>{each}</button
          >
        {/each}
      {:else if currentCategory == 'collectivegovernance'}
        {#each subCategoryListGovernance as each}
          <button
            on:click={subCategoryFilter}
            class="{currentSubCategory == each.replace(/\s/g, '').toLowerCase()
              ? 'border-black border-2 font-medium'
              : ''} flex flex-row flex-grow mx-3 my-3 px-5 py-2 rounded-lg bg-[#e4e4e4]"
            value={each}>{each}</button
          >
        {/each}
      {:else if currentCategory == 'developerecosystem'}
        {#each subCategoryListDevEcosystem as each}
          <button
            on:click={subCategoryFilter}
            class="{currentSubCategory == each.replace(/\s/g, '').toLowerCase()
              ? 'border-black border-2 font-medium'
              : ''} flex flex-row flex-grow mx-3 my-3 px-5 py-2 rounded-lg bg-[#e4e4e4]"
            value={each}>{each}</button
          >
        {/each}
      {:else if currentCategory == 'enduserexperienceadoption'}
        {#each subCategoryListEndUserX as each}
          <button
            on:click={subCategoryFilter}
            class="{currentSubCategory == each.replace(/\s/g, '').toLowerCase()
              ? 'border-black border-2 font-medium'
              : ''} flex flex-row flex-grow mx-3 my-3 px-5 py-2 rounded-lg bg-[#e4e4e4]"
            value={each}>{each}</button
          >
        {/each}
      {/if}
    </div>
  </div>
  {#key loading}
    {#if loading !== true}
      <div class="flex flex-row flex-wrap justify-center lg:px-16">
        {#key fetchDataNew}
          {#each fetchDataNew.slice(0, showCard) as data}
            <Card {data} bind:dataNew on:ballotUpdate={handleBallotUpdate} />
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
