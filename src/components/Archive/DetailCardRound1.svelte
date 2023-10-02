<script lang="ts">
    export let detail: any
    let iconPath: string = `/data/retroPGF2-dataset/${detail['Project Name']}/icon.jpg`
    console.log(detail['OP Allocation'])
  </script>
  
  <div class="flex justify-center w-screen bg-white">
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
  
      
        <div class="h-10" />
  
      <div class="flex flex-col py-5 px-10 lg:p-10">
        <div class="lg:flex gap-10">
          <div
            class="lg:flex-col lg:items-center text-[2em] font-bold "
          >
            {detail['Project Name']}
          </div>
          <div
            class="flex lg:flex-col lg:items-center "
          >
            <a
              href={detail['Project Website']}
              target="_blank"
              class="font-bold flex flex-col justify-center items-center"
            >
              <img src="/img/web_logo.png" alt="website" class="w-6 h-6 m-1" />
              <div class="hidden lg:flex">Website</div>
            </a>
          </div>
        </div>
        <div class=" font-bold mt-4 lg:mt-4 text-lg">RetroPGF Received</div>
        <div class="mt-1 mb-5 text-[#616161]">{detail['allocation'] != "" ? detail['allocation'] : "0"} USD</div>
        <div class="font-bold text-lg">
            Why should this project receive retroactive public goods funding?
        </div>
        <div class="mt-1 mb-5 text-[#616161]">{detail?.Question}</div>
        <div class="font-bold text-lg">
            Project Lead
        </div>
        <div class=" mt-1 mb-5 text-[#616161]">{detail?.Leader}</div>
        <div class="font-bold text-lg">
            Project Contact
        </div>
        <div class=" mt-1 text-[#616161]">{detail['Project Lead Email']}</div>
    </div>
    </div>
  </div>
  