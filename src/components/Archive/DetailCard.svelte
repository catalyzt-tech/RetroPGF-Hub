<script lang="ts">
  export let detail: any
  let iconPath: string = `../../../public/data/retroPGF2-dataset/each_project/${detail.name}/icon.jpg`
  let bannerPath: string = `../../../public/data/retroPGF2-dataset/each_project/${detail.name}/banner.jpg`
</script>

<div class="flex justify-center">
  <div
    class=" overflow-hidden border-2 rounded-3xl border-black w-[55em] h-[100vh] m-20"
  >
    <img src={bannerPath} alt="" class="w-fit" />
    <div class="p-10">
      <div class="relative">
        <img src={iconPath} alt="" class="w-32 rounded-lg absolute" />
        <div class="absolute text-center text-3xl font-bold top-0 left-40">
          {detail?.name}
        </div>
        <div class="absolute divide-x-2 grid grid-cols-3 top-12 left-40 w-full">
          <div class="font-bold">Website</div>
          <div class="font-bold">Website</div>
          <div class="font-bold">Website</div>
        </div>

        <div class="absolute font-bold top-36">About the project</div>
        <div class="absolute top-44">{detail?.about}</div>

        <!-- <div class="font-bold">Funding allocation</div>
        <div class="font-bold">
          How do you support development and usage of the OP Stack? What public
          good do you provide to the Collective?
        </div> -->
        <!-- <div>{detail?.question_1}</div>
        <div class="font-bold">
          How do you sustain yourself? Please list sources of funding and
          revenue
        </div>
        <div>Recipient Address</div> -->
      </div>
    </div>
  </div>
</div>
