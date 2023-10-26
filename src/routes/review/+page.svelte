<script lang="ts">
  import Alertbar from '@/components/Alertbar.svelte'
  import Card from '@/components/Review/Card.svelte'
  import CardSkeleton from '@/components/Review/CardSkeleton.svelte'
  let loading: boolean = true
  let showProject: number = 40
  let fetchData: any[] = []
  const sheetName = [
    'Sheet A',
    'Sheet B',
    'Sheet C',
    'Sheet D',
    'Sheet E',
    'Sheet F',
    'Sheet G',
    'Sheet H',
  ]
  const fetchSheet = async (sheet: string) => {
    let query = encodeURIComponent('Select *')
    const sheetID = '1o1AZNEPiESrluvTEUBJgFqFWwI6G9xihGy3VL1ecNaQ'
    let data: any = await fetch(
      `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?tqx=out:json&sheet=${sheet}&tq=${query}`
    )
    // console.log(data.status)
    data = await data.text()
    let jsonData = await JSON.parse(data.slice(47, -2))
    // console.log(jsonData)
    // jsonData.table.cols.forEach((heading: any) => {
    //   if (heading.label) {
    //     console.log(heading.label.replace(/[^a-z0-9]/gi, '_').toLowerCase())
    //   }
    // })
    jsonData.table.rows.forEach((row: any) => {
      let obj: object = {}
      row.c.forEach((cell: any, index: number) => {
        if (cell) {
          if (cell.v) {
            if (jsonData.table.cols[index].label == 'Twitter') {
              obj[
                jsonData.table.cols[index].label
              ] = `https://twiiter.com/${cell.v}`
            } else {
              obj[jsonData.table.cols[index].label] = cell.v
            }
          }
        }
      })
      const newObj: object = {
        R1:
          obj.RA1 ||
          obj.RB1 ||
          obj.RC1 ||
          obj.RD1 ||
          obj.RE1 ||
          obj.RF1 ||
          obj.RG1 ||
          obj.RH1 ||
          'Waiting',
        R2:
          obj.RA2 ||
          obj.RB2 ||
          obj.RC2 ||
          obj.RD2 ||
          obj.RE2 ||
          obj.RF2 ||
          obj.RG2 ||
          obj.RH2 ||
          'Waiting',
        R3:
          obj.RA3 ||
          obj.RB3 ||
          obj.RC3 ||
          obj.RD3 ||
          obj.RE3 ||
          obj.RF3 ||
          obj.RG3 ||
          obj.RH3 ||
          'Waiting',
        R4:
          obj.RA4 ||
          obj.RB4 ||
          obj.RC4 ||
          obj.RD4 ||
          obj.RE4 ||
          obj.RF4 ||
          obj.RG4 ||
          obj.RH4 ||
          'Waiting',
        R5:
          obj.RA5 ||
          obj.RB5 ||
          obj.RC5 ||
          obj.RD5 ||
          obj.RE5 ||
          obj.RF5 ||
          obj.RG5 ||
          obj.RH5 ||
          'Waiting',
        sheet: sheet,
        ...obj,
      }
      fetchData.push(newObj)
      console.log(newObj)
      console.log(fetchData.length)
    })
  }

  let fetchDataNew: any[] = []

  const fetchLoad = async () => {
    try {
      const fetchPromises = sheetName.map((eachSheet) => fetchSheet(eachSheet))
      await Promise.all(fetchPromises)
      fetchDataNew = await fetchData
      fetchDataNew = await shuffle(fetchDataNew)
      console.log(fetchDataNew.length)
    } catch (error) {
      console.error(error)
    } finally {
      loading = false
    }
  }

  fetchLoad()

  const searchFilter = async (e: Event) => {
    let searchValue = (await e.target.value) ?? ''
    loading = true
    console.log(loading)
    console.log(searchValue)
    if (!searchValue) {
      fetchDataNew = await fetchData
    }
    fetchDataNew = await fetchData.filter((each) => {
      return each['Project Name']
        .replace(/[^a-z0-9]/gi, '')
        .toLowerCase()
        .includes(searchValue)
    })

    loading = false
    console.log(loading)
  }

  const loadMore = () => {
    showProject += 20
  }

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
</script>

<Alertbar />
<h1
  class="text-[40px] mx-10 lg:mx-40 my-10 flex justify-center font-bold text-center"
>
  RetroPGF3 Application Review Result
</h1>
<div class="mx-10 lg:mx-40 mb-10 text-center">
  In RetroPGF Round 3, anybody can submit an application. In total, more than
  1400 applications have been submitted, with a significant portion showing
  signs of spam. To not overwhelm the voting process with applications, this
  application review process will exclude applications that violate the
  Application Rules. For the application to be excluded from the Round, at least
  3 out of the 5 Reviewers need to cast votes either voting to either “Keep” or
  “Remove” in favor of excluding the application.
</div>
<div class="flex justify-center">
  <div class="flex flex-wrap rounded-2xl mt-4 mb-1 px-5 w-[60em]">
    <div class="flex flex-grow mr-3">
      <input
        on:input={searchFilter}
        type="text"
        class=" bg-[#e4e4e4] flex-grow rounded-lg px-5 py-2 my-2 text-left transition ease-in-out duration-200"
        placeholder="Search"
      />
    </div>
  </div>
</div>
<div class="flex flex-col">
  <div class=" flex flex-row flex-wrap justify-center">
    {#if loading}
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    {:else}
      {#key fetchDataNew}
        {#if fetchDataNew.length !== 0}
          {#each fetchDataNew.slice(0, showProject) as each}
            <Card data={each} />
          {/each}
        {:else}
          <div class="font-bold my-20 text-lg">
            Congrats!, Your project was not reported.
          </div>
        {/if}
      {/key}
    {/if}
  </div>
  {#if fetchDataNew.length > showProject && !loading}
    <button class="mt-5 mb-10 flex flex-row justify-center" on:click={loadMore}>
      <div class=" text-white bg-black font-semibold px-6 py-3 rounded-xl">
        Load More
      </div>
    </button>
  {/if}
</div>
