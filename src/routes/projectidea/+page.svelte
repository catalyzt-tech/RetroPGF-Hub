<script>
  import Card from '@/components/ProjectIdea/Card.svelte'
  import { onMount } from 'svelte'
  let issueData = []
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
  <div>{issueData.length}</div>
  <Card></Card>
</div>
