<script lang="ts">
  export let detail: any
  let iconPath: string = `/data/retroPGF2-dataset/each_project/${detail.name}/icon.jpg`
  let bannerPath: string = `/data/retroPGF2-dataset/each_project/${detail.name}/banner.jpg`
  let bannerExist: boolean = false
  const checkBanner = async () => {
    const response = await fetch(bannerPath)
    if (response.ok) {
      bannerExist = true
    }
  }
  checkBanner()
  console.log(detail)
</script>

<div class="flex justify-center w-screen">
  <div
    class=" relative overflow-hidden border-2 rounded-2xl border-black w-[55em] m-6 lg:m-20 shadow-xl"
  >
    <a href="/archive" class="absolute left-5 top-5 bg-white w-9 h-8 rounded">
      <img
        src="/img/arrow_down2.png"
        class="absolute left-2 top-3 w-4 rotate-90 drop-shadow-2xl"
        alt="arrow"
      /></a
    >

    {#if bannerExist}
      <div class="w-fit h-fit overflow-hidden">
        <img src={bannerPath} alt="banner" class="w-fit" />
      </div>
    {:else}
      <div class="h-10" />
    {/if}
    <div class="flex flex-col py-5 px-10 lg:p-10">
      <div class="lg:relative">
        <img
          src={iconPath}
          alt=""
          class="w-32 rounded-3xl lg:absolute shadow-sm"
        />
        <div
          class="mt-3 lg:absolute lg:text-center text-[2em] font-bold lg:top-0 lg:left-40"
        >
          {detail?.name}
        </div>
        <div
          class="flex gap-4 my-2 lg:absolute lg:divide-x-2 lg:grid lg:grid-cols-3 lg:top-16 lg:left-40 w-[calc(55em-18rem)]"
        >
          <a
            href={detail.twitter}
            target="_blank"
            rel="noopener noreferrer"
            class="font-bold flex flex-col justify-center items-center"
          >
            <img
              src="/img/twitter_logo.png"
              alt="twitter"
              class="w-6 h-6 m-1"
            />
            <div class="hidden lg:flex">Twitter (X)</div>
          </a>
          <a
            href={detail.website}
            target="_blank"
            class="font-bold flex flex-col justify-center items-center"
          >
            <img src="/img/web_logo.png" alt="website" class="w-6 h-6 m-1" />
            <div class="hidden lg:flex">Website</div>
          </a>
          <a
            href={detail?.github}
            target="_blank"
            rel="noopener noreferrer"
            class="font-bold flex flex-col justify-center items-center"
          >
            <img src="/img/github_logo.png" class="w-6 h-6 m-1" alt="github" />
            <div class="hidden lg:flex">Github</div>
          </a>
        </div>
      </div>
      <div class=" font-bold mt-4 lg:mt-40 text-lg">About the project</div>
      <div class="mt-1 mb-5 text-[#616161]">{detail?.about}</div>
      <div class=" font-bold text-lg">Funding allocation</div>
      <div class="mt-1 mb-5 text-[#616161]">123,456.789 OP</div>
      <div class="font-bold text-lg">
        How do you support development and usage of the OP Stack? What public
        good do you provide to the Collective?
      </div>
      <div class="mt-1 mb-5 text-[#616161]">{detail?.question_1}</div>
      <div class="font-bold text-lg">
        How do you sustain yourself? Please list sources of funding and revenue
      </div>
      <div class=" mt-1 text-[#616161]">{detail?.question_2}</div>
    </div>
  </div>
</div>
