<script lang="ts">
  import { onMount } from "svelte";
  import DetailCard from '@/components/Projects/DetailCard.svelte'

  export let data;
  let detail = data;

  let loading = true;

  onMount(async () => {
    console.log(detail)
    if(detail) {
      loading = false;
    }
  });
</script>

<div class="flex flex-col min-h-screen">
  {#if loading}
    <div class="flex flex-row justify-center font-bold text-3xl my-64">
      Loading
    </div>
  {:else}
    <div>
      <div><DetailCard {detail} /></div>
    </div>
  {/if}
</div>
