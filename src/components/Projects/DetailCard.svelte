<script lang="ts">
  export let detail: any;
</script>

<div class="flex justify-center w-screen bg-white">
  <div
    class=" relative overflow-hidden border-2 rounded-2xl border-black w-[55em] m-6 lg:m-20 shadow-xl"
  >
    <a href="/projects" class="absolute left-5 top-5 bg-white w-9 h-8 rounded">
      <img
        src="/img/arrow_down2.png"
        class="absolute left-2 top-3 w-4 rotate-90 drop-shadow-2xl"
        alt="arrow"
      /></a
    >

    {#if detail.banner_url}
      <div class=" overflow-hidden">
        <img
          src={detail.banner_url}
          alt="banner"
          class="h-56 object-cover w-full"
        />
      </div>
    {:else}
      <div class="h-10" />
    {/if}
    <div class="flex flex-col py-5 px-10 lg:p-10">
      <div class="lg:relative">
        <img
          src={detail.logo_url}
          alt=""
          class="w-32 rounded-3xl lg:absolute shadow-sm"
        />
        <div
          class="mt-3 lg:absolute lg:text-center text-[2em] font-bold lg:top-0 lg:left-40"
        >
          {detail?.name}
        </div>
        <div
          class="flex gap-4 my-2 lg:absolute lg:divide-x-2 lg:grid lg:grid-cols-2 lg:top-16 lg:left-40 w-[calc(55em-18rem)]"
        >
          <a
            href={detail.website_url}
            target="_blank"
            class="font-bold flex flex-col justify-center items-center"
          >
            <img src="/img/web_logo.png" alt="website" class="w-6 h-6 m-1" />
            <div class="hidden lg:flex">Website</div>
          </a>
          <div class="flex justify-center items-center">
            <div
              class="bg-gradient-to-r from-black to-retro rounded-2xl px-3 py-2 text-white font-bold text-xs mr-2"
            >
              {detail.category}
            </div>
            <div
              class="bg-gradient-to-r from-black to-retro rounded-2xl px-3 py-2 text-white font-bold text-xs mr-2"
            >
              {detail.crypto_category}
            </div>
          </div>
        </div>
      </div>
      <div class=" font-bold mt-4 lg:mt-40 text-lg">About the project</div>
      <div class="mt-1 mb-5 text-[#616161]">{detail?.description}</div>
      <div class="font-bold text-lg">
        How has this project contributed to the development and adoption of
        Optimism?
      </div>
      <div class="mt-1 mb-5 text-[#616161]">{detail?.reason}</div>
    </div>
  </div>
</div>
