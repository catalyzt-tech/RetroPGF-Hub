<script lang="ts">
  import { onMount } from 'svelte'
  export let data: any = []
  let loading: boolean = true
  let iconUrl: string = ''
  let bannerUrl: string = ''
  let totalBallots: number = 0
  onMount(async () => {
    data['applicantType'] =
      (await data['applicantType']) === 'PROJECT' ? 'Project' : 'Individual'
    data['New Main-Category'] = await data['New Main-Category'].replace(
      /_/g,
      ' '
    )
    loading = false
  })
  let newData: any = []
  const fetchIcon = async () => {
    try {
      const query = {
        query:
          'query RetroPGFApplicationPageRouteQuery(\n  $id: ID!\n) {\n  retroPGF {\n    project(id: $id) {\n      id\n      ...RetroPGFApplicationBannerFragment\n      ...RetroPGFApplicationContentFragment\n    }\n  }\n}\n\nfragment ENSAvatarFragment on ResolvedName {\n  name\n}\n\nfragment NounResolvedLinkFragment on ResolvedName {\n  address\n  ...NounResolvedNameFragment\n}\n\nfragment NounResolvedNameFragment on ResolvedName {\n  address\n  name\n}\n\nfragment RetroPGFAddProjectToBallotModalContentFragment on Project {\n  id\n  ...RetroPGFModalApplicationRowFragment\n}\n\nfragment RetroPGFApplicationBannerFragment on Project {\n  id\n  bio\n  impactCategory\n  displayName\n  websiteUrl\n  applicant {\n    address {\n      address\n      resolvedName {\n        ...NounResolvedLinkFragment\n      }\n    }\n    id\n  }\n  applicantType\n  profile {\n    profileImageUrl\n    bannerImageUrl\n    id\n  }\n  includedInBallots\n  ...RetroPGFAddProjectToBallotModalContentFragment\n}\n\nfragment RetroPGFApplicationContentContributionLinkFragment on ContributionLink {\n  type\n  url\n  description\n}\n\nfragment RetroPGFApplicationContentFragment on Project {\n  impactDescription\n  contributionDescription\n  contributionLinks {\n    ...RetroPGFApplicationContentContributionLinkFragment\n  }\n  impactMetrics {\n    ...RetroPGFApplicationContentImpactMetricFragment\n  }\n  ...RetroPGFApplicationContentFundingSourceFragment\n  ...RetroPGFApplicationListContainerFragment\n}\n\nfragment RetroPGFApplicationContentFundingSourceFragment on Project {\n  fundingSources {\n    type\n    currency\n    amount\n    description\n  }\n}\n\nfragment RetroPGFApplicationContentImpactMetricFragment on ImpactMetric {\n  description\n  number\n  url\n}\n\nfragment RetroPGFApplicationListContainerFragment on Project {\n  lists {\n    ...RetroPGFListRowFragment\n    id\n  }\n}\n\nfragment RetroPGFListRowFragment on List {\n  id\n  author {\n    resolvedName {\n      ...NounResolvedNameFragment\n      ...ENSAvatarFragment\n    }\n  }\n  listName\n  listDescription\n  categories\n  listContent {\n    project {\n      displayName\n      profile {\n        profileImageUrl\n        id\n      }\n      id\n    }\n  }\n}\n\nfragment RetroPGFModalApplicationRowFragment on Project {\n  displayName\n  bio\n  profile {\n    profileImageUrl\n    id\n  }\n}\n',
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
      //   await console.log(newData)
      iconUrl = (await newData.data.retroPGF.project.profile.profileImageUrl)
        ? newData.data.retroPGF.project.profile.profileImageUrl
        : undefined
      bannerUrl = (await newData.data.retroPGF.project.profile.bannerImageUrl)
        ? newData.data.retroPGF.project.profile.bannerImageUrl
        : iconUrl
      totalBallots = await newData.data.retroPGF.project.includedInBallots
      //   console.log(totalBallots)
    } catch (err) {
      console.log(err)
    }
  }
  fetchIcon()
</script>

<div
  class="flex flex-col relative w-80 m-5 p-4 bg-white border-black border-2 rounded-2xl overflow-hidden"
>
  {#key data || iconUrl || bannerUrl}
    <div
      class="absolute right-3 top-3 z-10 text-sm {bannerUrl
        ? 'bg-[#ff0000] text-white font-medium'
        : 'bg-black text-white'} w-fit px-3 py-1 rounded-md"
    >
      {data['applicantType']}
    </div>
    <div class="absolute top-0 left-0 -z-0 w-full max-h-24 overflow-hidden">
      <img
        class="w-fit z-0"
        src={bannerUrl ? bannerUrl : '/img/retropgf_sun.svg'}
        alt="icon"
      />
    </div>
    {#if iconUrl}
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
    <div
      class="mt-2 text-xs bg-[#000000] text-white w-fit px-3 py-1 rounded-md"
    >
      {totalBallots} Vote
    </div>
  {/key}
</div>
