<script lang="ts">
  import Alertbar from '@/components/Alertbar.svelte'
  import Card from '@/components/Review/Card.svelte'
  import CardAppeal from '@/components/Review/CardAppeal.svelte'
  import CardSkeleton from '@/components/Review/CardSkeleton.svelte'
  let loading: boolean = true
  let showProject: number = 40
  let fetchData: any[] = []
  let fetchDataSub: any[] = []
  let totalKeep: number = 0
  let totalRemove: number = 0
  let totalProject: number = 0
  let totalPending: number = 0
  let totalAppeal: any[] = []
  const status: string[] = ['All', 'Keep', 'Remove', 'Pending Review']
  const round: string[] = ['All Round', 'Round 1', 'Round 2', 'Appeal']
  const sheetName = [
    'Appeals - Sheet A',
    'Appeals - Sheet B',
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
    let countProject: number = 0
    // console.log(data.status)
    data = await data.text()
    let jsonData = await JSON.parse(data.slice(47, -2))
    // console.log(jsonData)
    // jsonData.table.cols.forEach((heading: any) => {
    //   if (heading.label) {
    //     console.log(heading.label.replace(/[^a-z0-9]/gi, '_').toLowerCase())
    //   }
    // })
    await jsonData.table.rows.forEach(async (row: any) => {
      let obj: object = {}
      row.c.forEach((cell: any, index: number) => {
        if (cell) {
          if (cell.v) {
            if (jsonData.table.cols[index].label == 'Twitter') {
              obj[
                jsonData.table.cols[index].label
              ] = `https://twitter.com/${cell.v}`
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
      // console.log(fetchData.length)
      if (!newObj['Reported'] && obj['Bio'] && !obj['Appeal']) {
        totalProject++
        fetchData.push(newObj)
        obj.Keep = (await obj.Keep) ? obj.Keep : 0
        obj.Remove = (await obj.Remove) ? obj.Remove : 0
        if (obj.Keep > obj.Remove) {
          totalKeep++
        } else if (obj.Keep < obj.Remove) {
          totalRemove++
        }
      } else if (newObj['Appeal']) {
        totalAppeal.push(newObj)
        obj.Keep = (await obj.Keep) ? obj.Keep : 0
        obj.Remove = (await obj.Remove) ? obj.Remove : 0
      }
      // console.log(fetchData.length)
    })
    // sheetNumber.push(countProject)
  }

  let fetchDataNew: any[] = []
  let AppealDataNew: any[] = []
  const fetchLoad = async () => {
    try {
      const fetchPromises = sheetName.map((eachSheet) => fetchSheet(eachSheet))
      await Promise.all(fetchPromises)
      fetchDataNew = await fetchData
      AppealDataNew = await totalAppeal
      fetchDataNew = await shuffle(fetchDataNew)
      // console.log(fetchDataNew.length)
    } catch (error) {
      console.error(error)
    } finally {
      loading = false
    }
  }

  fetchLoad()

  const searchFilter = async (e: any) => {
    selected = 'All Round'
    selectedSub = 'All'
    setTimeout(async () => {
      let searchValue: string =
        e.target.value.replace(/[^a-z0-9]/gi, '').toLowerCase() || ''
      loading = true
      console.log(loading)
      console.log(searchValue)
      console.log(fetchDataNew)
      fetchDataNew = await fetchData.filter((each: any) => {
        console.log(each)
        const target = each['Project Name']
          .replace(/[^a-z0-9]/gi, '')
          .toLowerCase()
          .includes(searchValue)
        console.log(target)
        return target
      })
      console.log('New ' + fetchDataNew)
      loading = false
    }, 2000)
  }

  const searchAppeal = async (e: any) => {
    const searchValue =
      e.target.value.replace(/[^a-z0-9]/gi, '').toLowerCase() || ''
    console.log(searchValue)
    selected = 'Appeal'
    selectedSub = 'All'
    let temp = await totalAppeal.filter((each: any) => {
      const target = each['Project Name']
        .replace(/[^a-z0-9]/gi, '')
        .toLowerCase()
        .includes(searchValue)
      return target
    })
    AppealDataNew = temp
  }

  const loadMore = () => {
    if (selected == 'Appeal') {
      showProject += 20
      return
    }
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
  let selected: string = 'All Round'
  let selectedSub: string = 'All'
  const selectStatus = async (val: string) => {
    selectedSub = val
    console.log(selected)
    if (selected === 'Appeal') {
      if (selectedSub === 'All') {
        fetchDataNew = totalAppeal
        return
      } else if (selectedSub === 'Keep') {
        AppealDataNew = await totalAppeal.filter((each) => {
          return each['Keep'] > each['Remove']
        })
      } else if (selectedSub === 'Remove') {
        AppealDataNew = await totalAppeal.filter((each) => {
          return each['Keep'] < each['Remove']
        })
      } else if (selectedSub === 'Not Reported') {
        AppealDataNew = await totalAppeal.filter((each) => {
          return each['Outcome'] == '#N/A'
        })
      } else {
        AppealDataNew = await totalAppeal.filter((each) => {
          return each['Outcome'] == undefined || null
        })
      }
    } else {
      if (selectedSub == 'All') {
        fetchDataNew = fetchData
        return
      } else if (selectedSub === 'Keep')
        fetchDataNew = await fetchData.filter((each) => {
          return each['Outcome'] == selectedSub
        })
      else if (selectedSub === 'Remove') {
        fetchDataNew = await fetchData.filter((each) => {
          return each['Outcome'] == selectedSub
        })
      } else if (selectedSub === 'Not Reported') {
        fetchDataNew = await fetchData.filter((each) => {
          return each['Outcome'] == '#N/A'
        })
      } else {
        fetchDataNew = await fetchData.filter((each) => {
          return each['Outcome'] == undefined || null
        })
      }
    }
  }

  const selectRound = async (val: string) => {
    selected = val
    selectedSub = 'All'
    if (selected === 'All Round') {
      fetchDataNew = fetchData
    } else if (selected === 'Round 1') {
      fetchDataNew = fetchData.filter((each) => {
        return each['Round'] === 1
      })
    } else if (selected === 'Round 2') {
      fetchDataNew = fetchData.filter((each) => {
        return each['Round'] === 2
      })
    } else if (selected === 'Appeal') {
      console.log(totalAppeal)
      fetchDataNew = totalAppeal
    }
  }
</script>

<Alertbar />
<div class="w-full lg:h-[10em] overflow-hidden">
  <img src="./img/retropgf3_red.jpg" alt="OPBanner" class="w-full" />
</div>
<h1
  class="text-[40px] mx-10 lg:mx-40 my-10 flex justify-center font-bold text-center"
>
  RetroPGF3 Application Review Result
</h1>
<div class="mx-10 lg:mx-40 mb-4 text-center">
  In RetroPGF Round 3, anybody can submit an application. In total, more than
  1400 applications have been submitted, with a significant portion showing
  signs of spam. To not overwhelm the voting process with applications, this
  application review process will exclude applications that violate the
  Application Rules. For the application to be excluded from the Round, at least
  3 out of the 5 Reviewers need to vote in favor of excluding the application.
</div>
<div class="flex justify-center w-full">
  <a
    href="https://docs.google.com/spreadsheets/d/1o1AZNEPiESrluvTEUBJgFqFWwI6G9xihGy3VL1ecNaQ/edit#gid=692135326"
    class="text-center font-semibold mb-4 hover:text-[#ff0000] transition-all duration-200"
    target="_blank">View Data Sheet &gt</a
  >
</div>
{#key totalRemove}
  <div class="flex flex-wrap justify-center sm:mx-32 lg:mx-64 my-5">
    <div
      class="flex flex-col flex-grow my-4 xl:my-0 hover:bg-[#ff0000] hover:text-white hover:border-[#ff0000] transition ease-in-out duration-300 justify-center border-2 border-black py-4 rounded-xl mx-6 px-6 bg-white"
    >
      <div class="text-3xl">📬</div>
      <div class="font-medium text-lg mt-1">
        Total Reported: {totalProject} Projects
      </div>
    </div>
    <div
      class="flex flex-col flex-grow my-4 xl:my-0 hover:bg-[#ff0000] hover:text-white hover:border-[#ff0000] transition ease-in-out duration-300 justify-center border-2 border-black py-4 rounded-xl mx-6 px-6 bg-white"
    >
      <div class="text-3xl">✅</div>
      <div class="font-medium text-lg mt-1">Keep: {totalKeep} Projects</div>
    </div>
    <div
      class="flex flex-col flex-grow my-4 xl:my-0 hover:bg-[#ff0000] hover:text-white hover:border-[#ff0000] transition ease-in-out duration-300 justify-center border-2 border-black py-4 rounded-xl mx-6 px-6 bg-white"
    >
      <div class="text-3xl">❌</div>
      <div class="font-medium text-lg mt-1">
        Remove: {totalRemove} Projects
      </div>
    </div>
    <div
      class="flex flex-col flex-grow my-4 xl:my-0 hover:bg-[#ff0000] hover:text-white hover:border-[#ff0000] transition ease-in-out duration-300 justify-center border-2 border-black py-4 rounded-xl mx-6 px-6 bg-white"
    >
      <div class="text-3xl">🧐</div>
      <div class="font-semibold text-lg mt-1">
        Appeal: {totalAppeal.length} Projects
      </div>
    </div>
  </div>
{/key}
<div class="flex flex-row flex-wrap justify-center max-w-full">
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
  <div
    class="flex flex-grow justify-center rounded-2xl mx-4 md:mx-0 lg:my-4 max-w-[35em]"
  >
    <div class="flex flex-grow mr-3">
      <input
        on:input={searchAppeal}
        type="text"
        class=" bg-[#e4e4e4] flex-grow rounded-lg px-5 py-2 my-2 text-left transition ease-in-out duration-200"
        placeholder="Search For Appeal Round"
      />
    </div>
  </div>
</div>
<div class="flex flex-row flex-wrap justify-center mx-4 lg:mx-64 2xl:mx-96">
  {#each round as each}
    <button
      on:click={() => {
        selectRound(each)
      }}
      class="{selected === each
        ? 'bg-red-500 text-white font-medium'
        : 'bg-[#e4e4e4]'} flex flex-grow text-center justify-center my-2 mx-2 px-2 py-2 rounded-lg bg-[#e4e4e4]"
      >{each}</button
    >
  {/each}
</div>
<div
  class="flex flex-row flex-wrap justify-center mx-4 lg:mx-64 2xl:mx-[35rem]"
>
  {#each status as each}
    <button
      on:click={() => {
        selectStatus(each)
      }}
      class="{selectedSub === each
        ? 'bg-black text-white font-medium'
        : 'bg-[#e4e4e4]'} flex flex-grow text-center justify-center my-2 mx-2 px-2 py-2 rounded-lg bg-[#e4e4e4]"
      >{each}</button
    >
  {/each}
</div>

<div class="flex flex-col">
  <div class=" flex flex-row flex-wrap justify-center">
    {#if loading}
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    {:else if selected != 'Appeal'}
      {#key fetchDataNew}
        {#if fetchDataNew.length !== 0}
          {#each fetchDataNew.slice(0, showProject) as each}
            <Card data={each} />
          {/each}
        {:else}
          <div class="font-bold my-20 text-lg">
            Congrats! 🥳, Your project was not reported.
          </div>
        {/if}
      {/key}
    {:else if selected == 'Appeal'}
      {#key AppealDataNew}
        {#if AppealDataNew.length !== 0}
          {#each AppealDataNew as each}
            <CardAppeal data={each} />
          {/each}
        {/if}
      {/key}
    {/if}
  </div>
  {#if (fetchDataNew.length > showProject && !loading) || (totalAppeal.length > showProject && !loading)}
    <button class="mt-5 mb-10 flex flex-row justify-center" on:click={loadMore}>
      <div class=" text-white bg-black font-semibold px-6 py-3 rounded-xl">
        Load More
      </div>
    </button>
  {/if}
</div>
