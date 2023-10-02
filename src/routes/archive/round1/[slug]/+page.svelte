<script lang="ts">
  import DetailCard from '@/components/Archive/DetailCardRound1.svelte'
  import { onMount } from 'svelte'
  export let data: any
  const { detail } = data
  let loading = true
  onMount(async () => {
    loading = !detail ? true : false
  })
</script>

<div class="flex flex-col min-h-screen">
  {#if loading}
    <div class="flex flex-row justify-center font-bold text-3xl my-64">
      Loading
    </div>
  {:else}
    <div><DetailCard {detail} /></div>
  {/if}
</div>
