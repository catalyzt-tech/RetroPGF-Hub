<script lang="ts">
  import { onMount, createEventDispatcher } from 'svelte'
  export let data: any = []
  export let dataNew: any = []
  const dispatch = createEventDispatcher()

  let totalBallots: any = data.ballot
  let totalLists: any
  let list: any = []
  let opListDetail: any = []
  let opListAmount: number[] = []
  let iconUrl: string = ''
  let bannerUrl: string = ''
  let minAllocate
  let maxAllocate
  let medianAllocate
  let minAllocateString
  let maxAllocateString
  let medianAllocateString
  let loading = true
  let loadingLimit = 0
  let percent: any
  const fileType = ['png', 'jpeg']

  data['New Main-Category'] = data['New Main-Category'].replace(/_/g, ' ')
  let newData: any = []

  const median = (array) => {
    if (array.length === 0) {
      throw new Error('Input array is empty')
    }

    const sortedArray = [...array].sort((a, b) => a - b)
    const middleIndex = Math.floor(sortedArray.length / 2)

    const medianValue =
      sortedArray.length % 2
        ? sortedArray[middleIndex]
        : (sortedArray[middleIndex - 1] + sortedArray[middleIndex]) / 2

    console.log('medianValue', medianValue)
    return Number(medianValue.toFixed(2))
  }

  // const fetchBallot = async () => {
  //   try {
  //     // const query = {
  //     //   query:
  //     //     'query RetroPGFApplicationPageRouteQuery(\n  $id: ID!\n) {\n  retroPGF {\n    project(id: $id) {\n      id\n      ...RetroPGFApplicationBannerFragment\n      ...RetroPGFApplicationContentFragment\n    }\n  }\n}\n\nfragment ENSAvatarFragment on ResolvedName {\n  name\n}\n\nfragment NounResolvedLinkFragment on ResolvedName {\n  address\n  ...NounResolvedNameFragment\n}\n\nfragment NounResolvedNameFragment on ResolvedName {\n  address\n  name\n}\n\nfragment RetroPGFAddProjectToBallotModalContentFragment on Project {\n  id\n  ...RetroPGFModalApplicationRowFragment\n}\n\nfragment RetroPGFApplicationBannerFragment on Project {\n  id\n  bio\n  impactCategory\n  displayName\n  websiteUrl\n  applicant {\n    address {\n      address\n      resolvedName {\n        ...NounResolvedLinkFragment\n      }\n    }\n    id\n  }\n  applicantType\n  profile {\n    profileImageUrl\n    bannerImageUrl\n    id\n  }\n  includedInBallots\n  ...RetroPGFAddProjectToBallotModalContentFragment\n}\n\nfragment RetroPGFApplicationContentContributionLinkFragment on ContributionLink {\n  type\n  url\n  description\n}\n\nfragment RetroPGFApplicationContentFragment on Project {\n  impactDescription\n  contributionDescription\n  contributionLinks {\n    ...RetroPGFApplicationContentContributionLinkFragment\n  }\n  impactMetrics {\n    ...RetroPGFApplicationContentImpactMetricFragment\n  }\n  ...RetroPGFApplicationContentFundingSourceFragment\n  ...RetroPGFApplicationListContainerFragment\n}\n\nfragment RetroPGFApplicationContentFundingSourceFragment on Project {\n  fundingSources {\n    type\n    currency\n    amount\n    description\n  }\n}\n\nfragment RetroPGFApplicationContentImpactMetricFragment on ImpactMetric {\n  description\n  number\n  url\n}\n\nfragment RetroPGFApplicationListContainerFragment on Project {\n  lists {\n    ...RetroPGFListRowFragment\n    id\n  }\n}\n\nfragment RetroPGFListRowFragment on List {\n  id\n  author {\n    resolvedName {\n      ...NounResolvedNameFragment\n      ...ENSAvatarFragment\n    }\n  }\n  listName\n  listDescription\n  categories\n  listContent {\n    project {\n      displayName\n      profile {\n        profileImageUrl\n        id\n      }\n      id\n    }\n  }\n}\n\nfragment RetroPGFModalApplicationRowFragment on Project {\n  displayName\n  bio\n  profile {\n    profileImageUrl\n    id\n  }\n}\n',
  //     //   variables: {
  //     //     id: data['Approval Attestation ID'],
  //     //   },
  //     // }
  //     const query = {
  //       query:
  //         '\n  query Project($id: ID!) {\n    retroPGF {\n      project(id: $id) {\n        \ndisplayName\npayoutAddress {\n  address\n}\nwebsiteUrl\napplicantType\nbio\ncontributionDescription\ncontributionLinks {\n  description\n  type\n  url\n}\nfundingSources {\n  currency\n  amount\n  description\n  type\n}\nid\nincludedInBallots\nimpactCategory\nimpactDescription\nimpactMetrics {\n  description\n  number\n  url\n}\nprofile {\n  id\n  name\n  profileImageUrl\n  bannerImageUrl\n  websiteUrl\n  bio\n}\nlists {\n  id\n  listName\n  listDescription\n  author {\n    address\n    resolvedName {\n      name\n    }\n  }\n  listContentCount\n  listContent {\n    OPAmount\n    project {\n      id\n      profile {\n        profileImageUrl\n      }\n    }\n  }\n}\n\n      }\n    }\n  }\n',
  //       variables: {
  //         id: data['Approval Attestation ID'],
  //       },
  //     }

  //     const rawData = await fetch('https://vote.optimism.io/graphql', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Accept: 'application/json',
  //       },
  //       body: JSON.stringify(query),
  //     })
  //     newData = await rawData.json()
  //     totalBallots = await newData.data.retroPGF.project.includedInBallots
  //     totalLists = await newData.data.retroPGF.project.lists.length
  //     console.log('totalLists', totalLists)
  //     list = await newData.data.retroPGF.project.lists
  //     // console.log(newData.data.retroPGF.project.lists)
  //     // console.log(list)
  //     if (list.length != 0) {
  //       for (let each of list) {
  //         // for (let subEach in each) {
  //         //   console.log('subeach = ')
  //         //   console.log(subEach)
  //         // }
  //         for (let subeach of each.listContent) {
  //           const projectID = subeach.project.id.slice(8)
  //           // console.log(projectID)
  //           if (projectID == data['Approval Attestation ID']) {
  //             data['OPAmount'] = subeach.OPAmount
  //             let dataObj = {
  //               OPAmount: subeach.OPAmount,
  //               ListName: each.listName,
  //               id: each.id.slice(5),
  //             }
  //             opListDetail.push(dataObj)

  //             opListAmount.push(data['OPAmount'])
  //           }
  //         }
  //         console.log(opListDetail)
  //       }
  //     } else {
  //       opListAmount.push(0)
  //     }
  //     opListAmount = await opListAmount.sort((a, b) => a - b)
  //     minAllocate = opListAmount[0]
  //     maxAllocate = await opListAmount[opListAmount.length - 1]
  //     medianAllocate = await median(opListAmount)

  //     // minAllocateString = minAllocate + ' OP'
  //     // maxAllocateString = maxAllocate + ' OP'
  //     // medianAllocateString = medianAllocate + ' OP'
  //     if (parseFloat(maxAllocate) !== 0 && list.length > 1) {
  //       console.log(
  //         'Check' + parseFloat(medianAllocate),
  //         parseFloat(maxAllocate)
  //       )
  //       percent = (parseFloat(medianAllocate) / parseFloat(maxAllocate)) * 100
  //     } else if (list.length == 1) {
  //       percent = 50
  //     }
  //     loading = false
  //     minAllocate = Intl.NumberFormat('en-US').format(minAllocate)
  //     maxAllocate = Intl.NumberFormat('en-US').format(maxAllocate)
  //     medianAllocate = Intl.NumberFormat('en-US').format(medianAllocate)
  //     // console.log('loading count', loadingLimit)
  //     // console.log('percent', percent)
  //     // console.log(opListAmount)
  //     // console.log('Card', totalBallots)
  //     dataNew = { ...data, totalBallots: totalBallots, list: list }
  //     await dispatch('ballotUpdate', { dataNew })
  //   } catch (err) {
  //     if (loadingLimit < 2) {
  //       loadingLimit++
  //       setTimeout(fetchBallot, 2000)
  //     } else {
  //       loading = false
  //       totalBallots = 'Failed to load'
  //       totalLists = 'Failed to load'
  //       // console.log('totalLists', totalLists)
  //       list = 'Failed to load'
  //     }
  //   }
  // }
  let flagIcon: boolean = false
  let flagBanner: boolean = false
  let result = Intl.NumberFormat('en-US').format(data.scaled.toFixed(2))
  const fetchIconNew = async () => {
    const address = data['metadataPtr'].slice(60, 102)
    for (let each of fileType) {
      const iconUrlTemp = `https://content.optimism.io/profile/v0/profile-image/10/${address}.${each}`
      const checkIcon = await fetch(iconUrlTemp)
      if (checkIcon.status === 200 && flagIcon == false) {
        iconUrl = iconUrlTemp
        flagIcon = true
      } else if (flagIcon == false) {
        iconUrl = ''
      }
    }
    for (let each of fileType) {
      const bannerUrlTemp = `https://content.optimism.io/profile/v0/banner-image/10/${address}.${each}`
      const checkBanner = await fetch(bannerUrlTemp)
      if (checkBanner.status === 200 && flagBanner == false) {
        bannerUrl = bannerUrlTemp
        flagBanner = true
      } else if (iconUrl && flagBanner == false) {
        bannerUrl = iconUrl
      }
    }
    // console.log(bannerUrl)
  }
  onMount(fetchIconNew)
  let listContainer
  const handleHover = () => {
    listContainer.classList.remove('hidden')
  }

  const handleMouseLeave = () => {
    listContainer.classList.add('hidden')
  }
</script>

<div
  class="z-0 flex flex-col relative w-80 m-5 p-4 bg-white border-black border-2 rounded-2xl"
>
  {#key data || iconUrl || bannerUrl}
    <!-- {#key data['applicantType']}
      <div
        class="absolute right-3 top-3 z-10 text-sm {bannerUrl
          ? 'bg-[#ff0000] text-white'
          : 'bg-black text-white'} font-medium w-fit px-3 py-1 rounded-md"
      >
        {data['applicantType'] === 'PROJECT' ? 'Project' : 'Individual'}
      </div>
    {/key} -->
    <div
      class="absolute right-3 top-3 bg-white px-3 py-1 rounded-lg border border-black z-10 text-sm"
    >
      <div class="flex flex-row justify-center items-center">
        <div class="h-full text-[#ff0000] font-medium text-[13px]">xxx</div>
        <div class="flex flex-row justify-center items-center ml-1">
          <img src="/img/Optimism.png" alt="OP" class="w-5" />
        </div>
      </div>
    </div>
    <a
      class="absolute top-0 left-0 -z-0 w-full max-h-24 overflow-hidden"
      href={data['Agora URL']}
      target="_blank"
    >
      <img
        class="w-full z-0 rounded-[0.85em]"
        src={bannerUrl != '' ? bannerUrl : '/img/retropgf_sun.svg'}
        alt="icon"
      />
    </a>
    {#if iconUrl !== ''}
      <a
        class="absolute top-14 my-1 bg-white rounded-xl overflow-hidden w-16 h-16"
        href={data['Agora URL']}
        target="_blank"
      >
        <img src={iconUrl} alt="icon" />
      </a>
    {:else}
      <div class="absolute top-14 my-1 bg-[#ff0000] rounded-xl w-16">
        <img src="/img/retropgf_sun.svg" class="animate-pulse" alt="icon" />
      </div>
    {/if}

    <!-- <img src={imgUrl} alt="banner" /> -->
    <div class="mt-28 text-lg font-bold">
      <a
        href={data['Agora URL']}
        target="_blank"
        class=" hover:text-[#ff0000] transition duration-200 ease-in-out"
        >{data['displayName']}</a
      >
    </div>
    <div class="flex flex-row my-2">
      <a href={data['websiteUrl']} target="_blank" class="w-4"
        ><img src="/img/web_logo.png" alt="agora" /></a
      >
      <a href={data['Agora URL']} target="_blank" class="mx-2 w-4">
        <img src="/img/agora.svg" alt="agora" />
      </a>
    </div>
    <div class="text-sm text-gray-500 mt-3">{data['bio']}</div>
    <div class="flex flex-grow" />
    <div class="mt-2 text-sm font-medium">Main Category</div>
    <div class="mt-2 text-xs bg-gray-200 w-fit px-3 py-1 rounded-md">
      {data['New Main-Category']}
    </div>
    <div class="text-sm mt-2 font-medium">Sub Category</div>
    <div class="mt-2 text-xs bg-gray-200 w-fit px-3 py-1 rounded-md">
      {data['Sub-category']}
    </div>
    <div class="grid grid-cols-2 mt-3">
      <div>
        <div class="text-sm font-medium">Ballot Included</div>
        <div class="flex flex-row items-center">
          <div
            class="mt-2 text-xs bg-[#000000] text-white w-fit px-3 py-1 rounded-md whitespace-nowrap"
          >
            {totalBallots >= 0 ? totalBallots + ' Ballots' : 'Loading...'}
          </div>
          {#if totalBallots >= 0}
            <div class="flex flex-row items-center">
              {#if totalBallots >= 17}
                <img
                  src="/img/checked.png"
                  class="ml-2 mt-2 w-5 h-5"
                  alt="icon"
                />
              {:else}
                <img
                  src="/img/cross.png"
                  class="ml-2 mt-2 w-5 h-5"
                  alt="icon"
                />
              {/if}
            </div>
          {/if}
        </div>
      </div>
      <div>
        <!-- <div class=" text-sm font-medium">List Included</div> -->
        <!-- <div class="relative">
          <div
            class="mt-2 text-xs bg-[#000000] text-white w-fit px-3 py-1 rounded-md"
            on:mouseenter={handleHover}
            on:mouseleave={handleMouseLeave}
          >
            <div class="relative">
              {totalLists >= 0 ? totalLists + ' Lists' : 'Loading...'}
              <div
                class="absolute w-72 p-4 rounded-md left-1/2 transform -translate-x-1/2 bg-gray-100 border border-black bottom-[3em] text-black hidden hover:block"
                bind:this={listContainer}
              >
                {#if opListDetail.length > 0}
                  {#each opListDetail as each}
                    {#if each.ListName}
                      <div class="flex flex-row">
                        <div class="text-xs w-[60%] truncate">
                          {each.ListName}
                        </div>
                        <div class="flex-grow"></div>
                        <div class="text-end">
                          {Intl.NumberFormat('en-US').format(each.OPAmount)}
                          <img
                            src="/img/Optimism.png"
                            class="mb-1 ml-1 w-4 h-4 object-cover inline"
                            alt="icon"
                          />
                        </div>
                      </div>
                    {/if}
                  {/each}
                {:else if opListDetail.length == 0 && loading == false}
                  <div class="text-xs mt-1">No List</div>
                {:else}
                  <div class="text-xs mt-1">Loading...</div>
                {/if}
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
    <!-- <div class="text-sm mt-3 font-medium">Lists Allocation</div> -->
    <!-- <div class="mx-7 mt-2 pt-6 relative">
      <div
        class="absolute bg-[#ff0000] rounded top-5 h-4 w-1 flex flex-row justify-center items-center"
        style="left: {loading ? 50 : percent}%;"
      >
        <div
          class="absolute flex flex-row justify-center items-center whitespace-nowrap"
        >
          <div
            class="absolute top-[-2.5em] text-xs text-red-500 text-center font-medium w-32"
          >
            {medianAllocate ?? 'Loading...'}
            <img
              src="/img/Optimism.png"
              class="mb-1 w-4 h-4 object-cover inline"
              alt="icon"
            />
          </div>
        </div>
      </div>

      <div class="bg-[#000000] w-full h-[0.35em] rounded-md"></div>
      <div class="mt-2 flex flex-row">
        <div class="flex flex-row justify-start text-xs">
          {minAllocate ?? 'Loading...'}
          <img src="/img/Optimism.png" class="ml-1 w-4 h-4" alt="icon" />
        </div>
        <div class="flex flex-grow"></div>
        <div class="flex flex-row justify-end text-xs">
          {maxAllocate ?? 'Loading...'}
          <img src="/img/Optimism.png" class="ml-1 w-4 h-4" alt="icon" />
        </div>
      </div>
    </div> -->
  {/key}
</div>
