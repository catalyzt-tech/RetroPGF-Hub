<script lang="ts">
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
</script>

<div
  class="flex flex-col relative w-72 m-5 px-4 py-2 bg-white border-black border-2 rounded-2xl"
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
    {:else}
      <div
        class="text-sm font-medium bg-black border-black text-white w-fit rounded-md px-3 py-1"
      >
        {data['results']}
      </div>
    {/if}
  </div>
  <div class="mt-5 mb-3 w-16 rounded-xl bg-[#ff0000]">
    <img src="/img/retropgf_sun.svg" />
  </div>
  <a class="text-lg font-semibold" href={data.Link} target="_blank"
    >{data['Project Name']}</a
  >
  <div class="flex my-1">
    <a href={data.Twitter} target="_blank"
      ><img src="/img/twitter_logo.png" width="20" /></a
    >
    <a href={data.Website} target="_blank" class="mx-2"
      ><img src="/img/web_logo.png" width="20" /></a
    >
  </div>
  <div class="text-sm text-gray-500 mt-2 truncate">{data.Bio}</div>
  <div class="flex-grow" />
  <div class="text-sm mt-3">
    <div class="font-medium">Reason</div>
    <div>{data.Reason}</div>
  </div>

  <div class="text-sm mt-2">
    <div class="font-medium">Description of Report</div>
    {#if data['Description of Report']}
      <div>{data['Description of Report']}</div>
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
