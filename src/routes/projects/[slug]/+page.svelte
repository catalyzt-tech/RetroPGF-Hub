<script lang="ts">
  import { onMount } from "svelte";
  export let data: any;
  const { detail } = data;
  let loading = true;
  onMount(async () => {
    loading = !detail ? true : false;
  });
</script>

<div class="flex flex-col min-h-screen">
  {#if loading}
    <div class="flex flex-row justify-center font-bold text-3xl my-64">
      Loading
    </div>
  {:else}
    <div>
      <!-- to do: copy detailCard then parse here -->
    </div>
  {/if}
</div>
