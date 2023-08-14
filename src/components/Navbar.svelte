<script lang="ts">
  let isMobile = true
</script>

<div
  class="h-[80px] w-screen flex flex-row justify-between items-center px-4 lg:px-10"
>
  <div class="lg:h-fit h-fit w-[200px]">
    <img src="/img/hub-logo.png" alt="logo" height={100} />
  </div>
  {#if isMobile}
    <div>hee</div>
  {:else}
    <div class="flex flex-row gap-10">
      <div>History</div>
      <div>Dashboard</div>
      <div>Button</div>
    </div>
  {/if}
</div>
