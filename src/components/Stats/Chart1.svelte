<script lang="ts">
  import { onMount } from 'svelte'
  import { Grid } from 'gridjs'
  import 'gridjs/dist/theme/mermaid.css'

  let rpgfData: any[] = []
  let rpgfDataArray: any[] = []
  const fetchData = async () => {
    try {
      const response: Response = await fetch(
        '/data/retroPGF2-dataset/results.json'
      )
      rpgfData = await response.json()
      rpgfDataArray = rpgfData.map((project) => {
        return [
          project['Project Name'],
          project['OP Received'],
          project['Category'],
        ]
      })
      console.log(rpgfData)
    } catch (error) {
      console.error('Error loading JSON data:', error)
    }
  }

  onMount(async () => {
    await fetchData()
    const grid = new Grid({
      columns: ['Project', 'OP Awarded', 'Category'],
      width: 500,
      resizable: true,
      pagination: true,
      search: true,
      fixedHeader: true,
      height: '10em',
      width: '35rem',

      data: rpgfDataArray,
    }).render(document.getElementById('wrapper'))
  })
</script>

<div class="w-[35rem] h-[20em]" id="wrapper" />
