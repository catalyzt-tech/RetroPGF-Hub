<script lang="ts">
  import { onMount } from 'svelte'
  export let name: string
  export let category: string
  let imageUrl: string = `data/retroPGF2-dataset/each_project/${name}/icon.jpg`
  let bannerUrl: string = `data/retroPGF2-dataset/each_project/${name}/banner.jpg`
  let description: string
  let totalop: number
  let bannerExists: boolean = true
  onMount(async () => {
    let bannerResponse = await fetch(bannerUrl)
    if (bannerResponse.status !== 200) {
      bannerExists = false
      bannerUrl = `data/retroPGF2-dataset/each_project/${name}/icon.jpg`
    }
    let respond = await fetch(
      `data/retroPGF2-dataset/each_project/${name}/info.json`
    )
    // console.log(name)
    let data = await respond.json()
    // await console.log(data)
    description = data['about'] ?? 'Loading...'
    totalop = data['OP Allocation'] ?? 'Loading...'
  })

  if (!bannerUrl) {
    bannerUrl = `data/retroPGF2-dataset/each_project/${name}/icon.jpg`
  }
</script>

<div
  class="flex flex-col border-2 relative bg-white border-black w-[17em] m-3 overflow-hidden rounded-2xl shadow-xl transition ease-in duration-1000"
>
  <div
    class="absolute right-3 top-2 font font-bold text-[12px] text-[#FF0000] border-black border-[1px] bg-white px-2.5 p-1.5 rounded-[10px]"
  >
    {totalop}
    <div class="w-5 inline-flex align-[-30%]">
      <img alt="OP" src="./img/Optimism.png" />
    </div>
  </div>
  <div class="bg-cover opacity-100 max-h-[5em] overflow-hidden">
    <img
      src={bannerUrl ?? '/img/Optimism.png'}
      alt="banner_image"
      class="w-fit"
      loading="lazy"
    />
  </div>
  <div
    class="ml-3 relative mt-[-2.5em] z-0 overflow-hidden w-16 border-2 border-black rounded-lg"
  >
    <img
      src={imageUrl ?? '/img/Optimism.png'}
      alt="logo"
      class="w-fit bg-white"
      loading="lazy"
    />
  </div>

  <h1 class="font-bold pt-3 pl-3 pb-2 text-[20px]">
    <a href="/archive/round2/{name}">{name}</a>
  </h1>
  <div class="px-3 max-h-32">
    <p class=" line-clamp-3 text-sm">{description}</p>
  </div>
  <div class="flex-grow my-1" />
  <div class="p-4 flex flex-row justify-end place-self-end">
    <button
      class="px-3 py-1 text-sm border-2 border-black font-medium rounded-lg bg-black text-white hover:bg-red-500 transition ease-in-out hover:border-red-500 duration-200"
    >
      {category}
      <button />
    </button>
  </div>
</div>
