<script lang="ts">
  export let detail: any
</script>

<div class="flex justify-center">
  <div class=" border-2 rounded-3xl p-10 border-black w-[50em] h-fit m-20">
    <div class="text-center text-xl font-bold">{detail?.name}</div>
    <div class="font-bold">About the project</div>
    <div>{detail?.about}</div>
    <div class="font-bold">Website</div>
    <div class="font-bold">Funding allocation</div>
    <div class="font-bold">
      How do you support development and usage of the OP Stack? What public good
      do you provide to the Collective?
    </div>
    <div>{detail?.question_1}</div>
    <div class="font-bold">
      How do you sustain yourself? Please list sources of funding and revenue
    </div>
    <div>Recipient Address</div>
  </div>
</div>
