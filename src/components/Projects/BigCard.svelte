<script lang="ts">
  export let name: string;
  export let desc: string;
  export let img: string;
  export let tag: string;
  export let likeCount: number;
  export let commentCount: number;
</script>

<div
  class="border border-black rounded-3xl p-6 lg:p-6 flex justify-center items-center flex-wrap lg:flex-nowrap w-80 lg:w-[600px] shadow-xl"
>
  <div class="lg:h-full">
    <img
      src={img}
      class="rounded-lg overflow-hidden object-contain w-[1500px]"
      width={1000}
      height={1000}
      alt="Logo"
    />
  </div>
  <div class="flex flex-col justify-between lg:ml-5 lg:h-full">
    <div class="flex flex-col my-3 lg:my-0">
      <div class="text-2xl lg:text-xl font-bold">{name}</div>
      <div class="my-3">
        <div class="line-clamp-3 lg:line-clamp-4 text-sm">
          {desc}
        </div>
        <div class="mt-3 text-sm shrink-0 font-bold">View More &gt</div>
      </div>
      <div class="flex items-center">
        <div
          class="bg-gradient-to-r from-[#000000] to-[#DA0000] rounded-2xl px-3 py-2 text-white font-bold text-xs mr-2"
        >
          {tag}
        </div>
      </div>
    </div>
    <div class="flex gap-x-5 items-center mt-2 lg:mt-0">
      <div class="flex flex-nowrap gap-2">
        <svg
          class="w-6 opacity-80 hover:fill-red-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          ><path
            d="M128 447.1v-224c0-17.67-14.33-31.1-32-31.1H32c-17.67 0-32 14.33-32 31.1v223.1c0 17.67 14.33 31.1 32 31.1h64c17.7 1.8 32-11.7 32-30.2zm384-223c0-26.5-21.48-47.98-48-47.98H317.5c22.77-37.91 34.52-80.88 34.52-96.02C352 56.52 333.5 32 302.5 32c-63.13 0-26.36 76.15-108.2 141.6l-16.3 13c-11.8 9.5-17.8 23.4-17.9 37.4-.023.023 0 0 0 0l-.1 160c0 15.1 7.113 29.33 19.2 38.39l34.14 25.59C241 468.8 274.7 480 309.3 480H368c26.52 0 48-21.47 48-47.98 0-3.635-.48-7.143-1.246-10.55C434 415.2 448 397.4 448 376c0-9.148-2.697-17.61-7.139-24.88C463.1 347 480 327.5 480 304.1c0-12.5-4.893-23.78-12.72-32.32C492.2 270.1 512 249.5 512 224.1z"
          /></svg
        >
        <div>{likeCount}</div>
      </div>
      <div class="flex flex-nowrap gap-2">
        <svg
          class="w-6 opacity-80 hover:fill-red-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 34"
          ><path
            d="M20 0C8.954 0 0 6.274 0 14.014c0 3.604 1.944 6.888 5.134 9.37a2.444 2.444 0 01.885 2.458l-1.375 6.185a1.123 1.123 0 001.723 1.175l7.382-4.96a3.149 3.149 0 012.206-.504c1.307.19 2.659.29 4.045.29 11.046 0 20-6.274 20-14.014C40 6.274 31.046 0 20 0z"
          /></svg
        >
        <div>{commentCount}</div>
      </div>
    </div>
  </div>
</div>
