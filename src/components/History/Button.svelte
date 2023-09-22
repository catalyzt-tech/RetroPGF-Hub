<script lang="ts">
  import { onMount } from 'svelte'
  export let round: string
  let path: any
  if (round == 'Round 1') {
    path = 'retropgf-1'
  } else if (round == 'Round 2') {
    path = 'retropgf-2'
  } else if (round == 'Round 3') {
    path = 'retropgf-3'
  }
</script>

<div
  class="flex mt-4 mx-20 text-xl px-16 py-5 border-2 bg-white font-semibold border-black rounded-xl hover:border-white hover:text-white transition ease-in-out duration-200 hover:bg-[#ff1818]"
>
  <div class="flex items-center">
    <a href="/history/{path}" class="flex">{round}</a>
    <div class="flex hover:invert">
      <img src="./img/new_tab.png" alt="open" class="ml-2 w-5 h-5" />
    </div>
  </div>
</div>
