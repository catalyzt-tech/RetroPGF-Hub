<script lang="ts">
  export let data: string[] = []
</script>

<div class="m-4 px-4 py-3 w-64 border-2 border-black rounded">
  {#each data.tag as tag}
    <div
      class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
    >
      {tag.name}
    </div>
  {/each}
  <div>{data.title}</div>
</div>
