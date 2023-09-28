<script lang="ts">
  import { onMount } from 'svelte'
  export let name: string
  let data: any
  onMount(async () => {
    let respond = await fetch(`data/retroPGF1-dataset/${name}/info.json`)
    console.log('Respond = ' + respond)
    data = await respond.json()
  })
</script>

<div
  class="flex flex-col border-2 relative bg-white border-black w-[17em] m-3 overflow-hidden rounded-2xl shadow-xl transition ease-in duration-1000"
>
  <div
    class="absolute right-3 top-2 font font-bold text-[12px] border-black border-[1px] bg-white px-2.5 p-1.5 rounded-[10px]"
  >
    <div class="w-5 inline-flex align-[-33%]">
      <img alt="$" src="/img/usd_coin.png" />
    </div>
    {data?.allocation ?? 'Loading...'}
  </div>

  <h1 class="mt-10 font-bold pt-3 pl-3 pb-2 text-[20px]">
    <a href="/archive/{name}">{name}</a>
  </h1>
  <div class="px-3 max-h-32">
    {#if data}
      <p class=" line-clamp-3 text-sm">
        {data.Question}
      </p>
    {:else}
      <p>Loading</p>
    {/if}
  </div>
  <div class="flex-grow my-1" />
  <div class="p-4 ml-12 flex flex-row justify-end">
    {#if data}
      <button
        class="px-3 py-1 text-sm border-2 border-black font-medium text-end rounded-lg bg-black truncate text-white hover:bg-red-500 transition ease-in-out hover:border-red-500 duration-200"
      >
        {data['Leader']}
      </button>
    {/if}
  </div>
</div>
