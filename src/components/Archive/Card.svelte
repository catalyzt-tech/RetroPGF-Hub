<script lang="ts">
  import { onMount } from 'svelte'
  export let name: string
  export let category: string
  let imageUrl: any = `/public/data/retroPGF2-dataset/result_scrap/${name}/icon.jpg`
  // import data from '../../../public/data/retroPGF2-dataset/result_scrap/0xPARC/info.json'
  let bannerUrl: any = `/public/data/retroPGF2-dataset/result_scrap/${name}/banner.jpg`
  let description: any
  let totalop: any
  onMount(async () => {
    let respond = await fetch(
      `../../../public/data/retroPGF2-dataset/result_scrap/${name}/info.json`
    )
    let data = await respond.json()
    description = data['description'] ?? 'Loading...'
    totalop = data['totalop'] ?? 'Loading...'
    console.log(description)
  })
</script>

<div
  class="border-2 relative bg-white border-black w-1/5 m-5 overflow-hidden rounded-2xl"
>
  <div
    class="absolute right-4 top-2 font font-bold text-[12px] text-[#FF0000] border-black border-[1px] bg-white px-2.5 p-1.5 rounded-[10px]"
  >
    {totalop}
    <div class="w-5 inline-flex align-[-30%]">
      <img alt="OP" src="./img/Optimism.png" />
    </div>
  </div>
  <div class="bg-cover w-fit opacity-100 z-2 h-24 overflow-hidden">
    <img src={bannerUrl} alt="banner_image" />
  </div>
  <div
    class="ml-3 relative mt-[-2.5em] z-0 overflow-hidden w-16 border-2 border-black rounded-lg"
  >
    <img
      src={imageUrl ?? '/img/Optimism.png'}
      alt="logo"
      class="w-fit bg-white"
    />
  </div>

  <h1 class="font-bold pt-3 pl-3 pb-2 text-[20px]">{name}</h1>
  <div class="px-3 max-h-32">
    <p class=" line-clamp-3 text-sm">{description}</p>
  </div>
  <div class="p-4 flex flex-row justify-end place-self-end">
    <button
      class="px-3 py-1 text-sm border-2 border-black font-medium rounded-lg bg-black text-white"
    >
      {category}
      <button />
    </button>
  </div>
  <!-- <img src={imageUrl} alt="test dynamic icon" /> -->
</div>
