<script lang="ts">
  import Card from '@/components/ProjectIdea/Card.svelte'
  import { onMount } from 'svelte'
  let issueData: string[] = []
  const syncData = async () => {
    const data = await fetch('/data/project-idea/cleanIssue.json')
    issueData = await data.json()
    console.log(issueData[0])
  }
  onMount(() => {
    syncData()
  })
</script>

<div>
  <div class="text-center text-xl font-semibold">
    Optimism Ecosystem Contributions
  </div>
  <div class="flex flex-row flex-wrap justify-center">
    {#each issueData as issue}
      <Card data={issue} />
    {/each}
  </div>
</div>
