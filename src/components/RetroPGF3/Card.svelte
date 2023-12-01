<script lang="ts">
  import { onMount, createEventDispatcher } from 'svelte'
  export let data: any = []
  export let dataNew: any = []
  const dispatch = createEventDispatcher()

  let totalBallots: number
  let list: any = []
  let opListAmount: number[] = []
  let iconUrl: string = ''
  let bannerUrl: string = ''
  const fileType = ['png', 'jpeg']

  data['New Main-Category'] = data['New Main-Category'].replace(/_/g, ' ')
  let newData: any = []

  const fetchBallot = async () => {
    try {
      // const query = {
      //   query:
      //     'query RetroPGFApplicationPageRouteQuery(\n  $id: ID!\n) {\n  retroPGF {\n    project(id: $id) {\n      id\n      ...RetroPGFApplicationBannerFragment\n      ...RetroPGFApplicationContentFragment\n    }\n  }\n}\n\nfragment ENSAvatarFragment on ResolvedName {\n  name\n}\n\nfragment NounResolvedLinkFragment on ResolvedName {\n  address\n  ...NounResolvedNameFragment\n}\n\nfragment NounResolvedNameFragment on ResolvedName {\n  address\n  name\n}\n\nfragment RetroPGFAddProjectToBallotModalContentFragment on Project {\n  id\n  ...RetroPGFModalApplicationRowFragment\n}\n\nfragment RetroPGFApplicationBannerFragment on Project {\n  id\n  bio\n  impactCategory\n  displayName\n  websiteUrl\n  applicant {\n    address {\n      address\n      resolvedName {\n        ...NounResolvedLinkFragment\n      }\n    }\n    id\n  }\n  applicantType\n  profile {\n    profileImageUrl\n    bannerImageUrl\n    id\n  }\n  includedInBallots\n  ...RetroPGFAddProjectToBallotModalContentFragment\n}\n\nfragment RetroPGFApplicationContentContributionLinkFragment on ContributionLink {\n  type\n  url\n  description\n}\n\nfragment RetroPGFApplicationContentFragment on Project {\n  impactDescription\n  contributionDescription\n  contributionLinks {\n    ...RetroPGFApplicationContentContributionLinkFragment\n  }\n  impactMetrics {\n    ...RetroPGFApplicationContentImpactMetricFragment\n  }\n  ...RetroPGFApplicationContentFundingSourceFragment\n  ...RetroPGFApplicationListContainerFragment\n}\n\nfragment RetroPGFApplicationContentFundingSourceFragment on Project {\n  fundingSources {\n    type\n    currency\n    amount\n    description\n  }\n}\n\nfragment RetroPGFApplicationContentImpactMetricFragment on ImpactMetric {\n  description\n  number\n  url\n}\n\nfragment RetroPGFApplicationListContainerFragment on Project {\n  lists {\n    ...RetroPGFListRowFragment\n    id\n  }\n}\n\nfragment RetroPGFListRowFragment on List {\n  id\n  author {\n    resolvedName {\n      ...NounResolvedNameFragment\n      ...ENSAvatarFragment\n    }\n  }\n  listName\n  listDescription\n  categories\n  listContent {\n    project {\n      displayName\n      profile {\n        profileImageUrl\n        id\n      }\n      id\n    }\n  }\n}\n\nfragment RetroPGFModalApplicationRowFragment on Project {\n  displayName\n  bio\n  profile {\n    profileImageUrl\n    id\n  }\n}\n',
      //   variables: {
      //     id: data['Approval Attestation ID'],
      //   },
      // }
      const query = {
        query:
          '\n  query Project($id: ID!) {\n    retroPGF {\n      project(id: $id) {\n        \ndisplayName\npayoutAddress {\n  address\n}\nwebsiteUrl\napplicantType\nbio\ncontributionDescription\ncontributionLinks {\n  description\n  type\n  url\n}\nfundingSources {\n  currency\n  amount\n  description\n  type\n}\nid\nincludedInBallots\nimpactCategory\nimpactDescription\nimpactMetrics {\n  description\n  number\n  url\n}\nprofile {\n  id\n  name\n  profileImageUrl\n  bannerImageUrl\n  websiteUrl\n  bio\n}\nlists {\n  id\n  listName\n  listDescription\n  author {\n    address\n    resolvedName {\n      name\n    }\n  }\n  listContentCount\n  listContent {\n    OPAmount\n    project {\n      id\n      profile {\n        profileImageUrl\n      }\n    }\n  }\n}\n\n      }\n    }\n  }\n',
        variables: {
          id: data['Approval Attestation ID'],
        },
      }

      const rawData = await fetch('https://vote.optimism.io/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(query),
      })
      newData = await rawData.json()
      totalBallots = await newData.data.retroPGF.project.includedInBallots
      list = await newData.data.retroPGF.project.lists
      // console.log(newData.data.retroPGF.project.lists)
      // console.log(list)
      for (let each of list) {
        // for (let subEach in each) {
        //   console.log('subeach = ')
        //   console.log(subEach)
        // }
        for (let subeach of each.listContent) {
          const projectID = subeach.project.id.slice(8)
          console.log(projectID)
          if (projectID == data['Approval Attestation ID']) {
            data['OPAmount'] = subeach.OPAmount
            opListAmount.push(data['OPAmount'])
          }
        }
      }
      opListAmount = opListAmount.sort((a, b) => a - b)
      // console.log(opListAmount)
      // console.log('Card', totalBallots)
      dataNew = { ...data, totalBallots: totalBallots, list: list }
      await dispatch('ballotUpdate', { dataNew })
    } catch (err) {
      setTimeout(fetchBallot, 2000)
    }
  }

  onMount(fetchBallot)
  let flagIcon: boolean = false
  let flagBanner: boolean = false

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
</script>

<div
  class="flex flex-col relative w-80 m-5 p-4 bg-white border-black border-2 rounded-2xl overflow-hidden"
>
  {#key data || iconUrl || bannerUrl}
    {#key data['applicantType']}
      <div
        class="absolute right-3 top-3 z-10 text-sm {bannerUrl
          ? 'bg-[#ff0000] text-white'
          : 'bg-black text-white'} font-medium w-fit px-3 py-1 rounded-md"
      >
        {data['applicantType'] === 'PROJECT' ? 'Project' : 'Individual'}
      </div>
    {/key}
    <div class="absolute top-0 left-0 -z-0 w-full max-h-24 overflow-hidden">
      <img
        class="w-fit z-0"
        src={bannerUrl != '' ? bannerUrl : '/img/retropgf_sun.svg'}
        alt="icon"
      />
    </div>
    {#if iconUrl !== ''}
      <div
        class="absolute top-14 my-1 bg-white rounded-xl overflow-hidden w-16 h-16"
      >
        <img src={iconUrl} alt="icon" />
      </div>
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
    <div class="text-sm mt-2 font-medium">Ballot Included</div>
    {#if totalBallots !== undefined}
      <div
        class="mt-2 text-xs bg-[#000000] text-white w-fit px-3 py-1 rounded-md"
      >
        {totalBallots + ' Vote'}
      </div>
    {:else}
      <div
        class="mt-2 text-xs bg-[#000000] text-white w-fit px-3 py-1 rounded-md"
      >
        Loading...
      </div>
    {/if}
  {/key}
</div>
