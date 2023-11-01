<script lang="ts">
  import { onMount } from 'svelte'
  export let data: any = []
  let voteDecision: string[] = []
  const waitData = async () => {
    data.Keep = data.Keep ? data.Keep : 0
    data.Remove = data.Remove ? data.Remove : 0
    if (data.Keep > data.Remove && data.Keep >= 3) {
      data.results = 'Keep'
    } else if (data.Keep < data.Remove && data.Remove >= 3) {
      data.results = 'Remove'
    } else {
      data.results = 'Pending Review'
    }
    const voteList: string[] = await [
      data.R1,
      data.R2,
      data.R3,
      data.R4,
      data.R5,
    ]
    // console.log(data)
    voteDecision = await voteList.map((each) => {
      if (each === undefined) {
        each = 'Waiting'
      }
      return each
    })
  }
  waitData()
  let iconUrl = ''
  const fetchIcon = async () => {
    try {
      // (await fetch(
      //   'https://api.retrolist.app/projects/' + data['Project ID']
      // )) ?? ''
      const query = {
        query:
          'query RetroPGFApplicationPageRouteQuery(\n  $id: ID!\n) {\n  retroPGF {\n    project(id: $id) {\n      id\n      ...RetroPGFApplicationBannerFragment\n      ...RetroPGFApplicationContentFragment\n    }\n  }\n}\n\nfragment ENSAvatarFragment on ResolvedName {\n  name\n}\n\nfragment NounResolvedLinkFragment on ResolvedName {\n  address\n  ...NounResolvedNameFragment\n}\n\nfragment NounResolvedNameFragment on ResolvedName {\n  address\n  name\n}\n\nfragment RetroPGFAddProjectToBallotModalContentFragment on Project {\n  id\n  ...RetroPGFModalApplicationRowFragment\n}\n\nfragment RetroPGFApplicationBannerFragment on Project {\n  id\n  bio\n  impactCategory\n  displayName\n  websiteUrl\n  applicant {\n    address {\n      address\n      resolvedName {\n        ...NounResolvedLinkFragment\n      }\n    }\n    id\n  }\n  applicantType\n  profile {\n    profileImageUrl\n    bannerImageUrl\n    id\n  }\n  ...RetroPGFAddProjectToBallotModalContentFragment\n}\n\nfragment RetroPGFApplicationContentContributionLinkFragment on ContributionLink {\n  type\n  url\n  description\n}\n\nfragment RetroPGFApplicationContentFragment on Project {\n  impactDescription\n  contributionDescription\n  contributionLinks {\n    ...RetroPGFApplicationContentContributionLinkFragment\n  }\n  impactMetrics {\n    ...RetroPGFApplicationContentImpactMetricFragment\n  }\n  ...RetroPGFApplicationContentFundingSourceFragment\n  ...RetroPGFApplicationListContainerFragment\n}\n\nfragment RetroPGFApplicationContentFundingSourceFragment on Project {\n  fundingSources {\n    type\n    currency\n    amount\n    description\n  }\n}\n\nfragment RetroPGFApplicationContentImpactMetricFragment on ImpactMetric {\n  description\n  number\n  url\n}\n\nfragment RetroPGFApplicationListContainerFragment on Project {\n  lists {\n    ...RetroPGFListRowFragment\n    id\n  }\n}\n\nfragment RetroPGFListRowFragment on List {\n  id\n  author {\n    resolvedName {\n      ...NounResolvedNameFragment\n      ...ENSAvatarFragment\n    }\n  }\n  listName\n  listDescription\n  categories\n  listContent {\n    project {\n      displayName\n      profile {\n        profileImageUrl\n        id\n      }\n      id\n    }\n  }\n}\n\nfragment RetroPGFModalApplicationRowFragment on Project {\n  displayName\n  bio\n  profile {\n    profileImageUrl\n    id\n  }\n}\n',
        variables: {
          id: data['Project ID'],
        },
      }
      // console.log(query)
      const rawData = await fetch('https://vote.optimism.io/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(query),
      })
      console.log(rawData.status)
      const imgData = (await rawData) ? await rawData.json() : ''
      // console.log(imgData)
      // if (!data.Bio) {
      //   data.Bio = await imgData.data.retroPGF.project.bio
      //   data.Link =
      //     'https://vote.optimism.io/retropgf/3/application/' +
      //     data['Project ID']
      // }
      iconUrl = await imgData.data.retroPGF.project.profile.profileImageUrl
    } catch (err) {
      console.log(err)
    }
  }
  onMount(async () => {
    await fetchIcon()
  })
</script>

<div
  class="flex flex-col relative w-72 m-5 px-4 py-2 bg-white border-black border-2 rounded-2xl overflow-hidden"
>
  <div class="absolute right-3 top-3">
    {#if data['results'] === 'Remove'}
      <div
        class=" text-sm font-medium bg-[#ff0000] border-2 border-[#ff0000] text-white w-fit rounded-lg px-3 py-1"
      >
        {data['results']}
      </div>
    {:else if data['results'] === 'Keep'}
      <div
        class="text-sm font-medium bg-green-600 border-green-600 text-white w-fit rounded-md px-3 py-1"
      >
        {data['results']}
      </div>
    {:else if data['results'] === 'Pending Review' && !data.Outcome}
      <div
        class="text-sm font-medium bg-black border-black text-white w-fit rounded-md px-3 py-1"
      >
        {data['results']}
      </div>
    {:else if data.Outcome}
      <div
        class="text-sm font-medium bg-[#000000] border-[#000000] text-white w-fit rounded-md px-3 py-1"
      >
        Unreported
      </div>
    {/if}
  </div>
  {#key iconUrl}
    <div
      class="mt-5 mb-3 w-16 h-16 rounded-xl {iconUrl
        ? 'bg-white'
        : 'bg-[#ff0000]'} overflow-hidden"
    >
      {#if iconUrl}
        <img src={`${iconUrl}`} />
      {:else}
        <img src="/img/retropgf_sun.svg" class="animate-pulse" />
      {/if}
    </div>
  {/key}
  {#key data.Link}
    <a
      class="text-lg font-semibold hover:text-[#ff0000] transition ease-in-out duration-200 truncate"
      href={`${data.Link}`}
      target="_blank">{data['Project Name']}</a
    >
  {/key}
  <div class="flex my-1">
    <a href={data.Twitter} target="_blank"
      ><img src="/img/twitter_logo.png" width="20" /></a
    >
    <a href={data.Website} target="_blank" class="mx-2"
      ><img src="/img/web_logo.png" width="20" /></a
    >
  </div>

  {#if data.Bio}
    <div class="text-sm text-gray-500 mt-2 truncate">
      {data.Bio ?? 'Loading...'}
    </div>
  {/if}

  <div class="flex-grow" />
  <div class="text-sm mt-3">
    <!-- <div class="font-medium">Review Batch</div> -->
    {#if data.Round}
      <div class="bg-gray-200 w-fit px-3 py-1 rounded-md">
        Review Round {data.Round}
      </div>
    {/if}
  </div>
  <div class="text-sm mt-3">
    <div class="font-medium">Reason</div>
    {#key data.Reason}
      <div>{data.Reason ? data.Reason : '-'}</div>
    {/key}
  </div>
  <div class="text-sm mt-2">
    <div class="font-medium">Description of Report</div>
    {#if data['Description of Report']}
      <div class="max-w-fit">
        {#key data['Description of Report']}
          <div class="max-w-fit break-all">
            {data['Description of Report']
              ? data['Description of Report']
              : '-'}
          </div>
        {/key}
      </div>
    {:else}
      <div>-</div>
    {/if}
  </div>

  <div class="flex justify-center my-3">
    {#key voteDecision}
      {#each voteDecision as each}
        {#if each === 'Remove'}
          <svg
            class="svg-icon hover:scale-110 transition ease-linear duration-200"
            viewBox="0 0 1024 1024"
            width="30"
            height="30"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M512 597.994667q108.010667 0 225.002667 46.997333t116.992 123.008l0 85.994667-684.010667 0 0-85.994667q0-76.010667 116.992-123.008t225.002667-46.997333zM512 512q-69.994667 0-120-50.005333t-50.005333-120 50.005333-121.002667 120-51.008 120 51.008 50.005333 121.002667-50.005333 120-120 50.005333z"
              fill={'red'}
            />
          </svg>
        {:else if each === 'Keep'}
          <svg
            class="svg-icon hover:scale-110 transition ease-linear duration-200"
            viewBox="0 0 1024 1024"
            width="30"
            height="30"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M512 597.994667q108.010667 0 225.002667 46.997333t116.992 123.008l0 85.994667-684.010667 0 0-85.994667q0-76.010667 116.992-123.008t225.002667-46.997333zM512 512q-69.994667 0-120-50.005333t-50.005333-120 50.005333-121.002667 120-51.008 120 51.008 50.005333 121.002667-50.005333 120-120 50.005333z"
              fill={'green'}
            />
          </svg>
        {:else}
          <svg
            class="svg-icon hover:scale-110 transition ease-linear duration-200"
            viewBox="0 0 1024 1024"
            width="30"
            height="30"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M512 597.994667q108.010667 0 225.002667 46.997333t116.992 123.008l0 85.994667-684.010667 0 0-85.994667q0-76.010667 116.992-123.008t225.002667-46.997333zM512 512q-69.994667 0-120-50.005333t-50.005333-120 50.005333-121.002667 120-51.008 120 51.008 50.005333 121.002667-50.005333 120-120 50.005333z"
              fill={'black'}
            />
          </svg>
        {/if}
      {/each}
    {/key}
  </div>
</div>

<style>
</style>
