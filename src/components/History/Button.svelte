<script lang="ts">
  export let round: string
</script>

<div
  class="flex mt-4 mx-20 text-xl px-16 py-5 border-2 bg-white font-semibold border-black rounded-xl hover:border-white hover:text-white transition ease-in-out duration-200 hover:bg-[#ff1818]"
>
  <div class="flex items-center">
    <div class="flex">{round}</div>
    <div class="flex hover:invert">
      <img src="./img/new_tab.png" alt="open" class="ml-2 w-5 h-5" />
    </div>
  </div>
</div>
