<script lang="ts">
  export let data: string[] = []

  const getTime = (time: string) => {
    const date = new Date(time)
    return date.toLocaleDateString()
  }
  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  const title: string =
    data.title.indexOf(':') > -1 ? data.title.split(':')[1] : data.title
  const createTime: string = getTime(data.created_at)
  const status: string = capitalize(data.status)
</script>

<div
  class="flex flex-col m-4 px-5 py-4 w-80 border-2 border-black bg-white rounded-lg"
>
  {#if status === 'Open'}
    <div
      class=" bg-[#a2ffaa] rounded-full text-xs px-3 py-1 w-fit text-sm font-medium text-gray-700 mr-2 mb-2"
    >
      {status}
    </div>
  {:else if status === 'Done'}
    <div
      class=" bg-[#e881ff] rounded-full text-xs px-3 py-1 w-fit text-sm font-medium text-gray-700 mr-2 mb-2"
    >
      {status}
    </div>
  {:else}
    <div>{status}</div>
  {/if}

  <div class="font-medium">{title}</div>

  <div class="flex flex-row items-center my-2">
    <img
      src={data.user.avatar}
      alt="avatar"
      width={20}
      class="rounded-full mr-2"
    />
    <div class="text-sm">{data.user.name}</div>
  </div>
  <div class="flex flex-row flex-wrap mt-2">
    {#each data.tag as tag}
      {#if tag.name === 'Ecosystem Project Idea'}
        <div
          class=" bg-[#ffd30c] rounded-full text-xs px-3 py-1 w-fit text-sm font-normal text-gray-700 mr-2 mb-2"
        >
          {tag.name}
        </div>
      {:else if tag.name === 'Mad Science Project Idea'}
        <div
          class=" bg-[#ffc7be] rounded-full text-xs px-3 py-1 w-fit text-sm font-normal text-gray-700 mr-2 mb-2"
        >
          {tag.name}
        </div>
      {:else if tag.name === 'Contribution Opportunity'}
        <div
          class=" bg-[#98e7ff] rounded-full text-xs px-3 py-1 w-fit text-sm font-normal text-gray-700 mr-2 mb-2"
        >
          {tag.name}
        </div>
      {:else if tag.name === 'Draft Project Idea'}
        <div
          class=" bg-[#e5f13e] rounded-full text-xs px-3 py-1 w-fit text-sm font-normal text-gray-700 mr-2 mb-2"
        >
          {tag.name}
        </div>
      {:else}
        <div
          class=" bg-gray-200 rounded-full text-xs px-3 py-1 w-fit text-sm font-normal text-gray-700 mr-2 mb-2"
        >
          {tag.name}
        </div>
      {/if}
    {/each}
  </div>
  <div class="flex-grow"></div>
  <div class="mt-2">See more &gt</div>
  <!-- {#if data.body}
    <div class="text-sm">{data.body}</div>
  {/if} -->
  <!-- {createTime} -->
</div>
