<script lang="ts">
  import { onMount } from 'svelte'
  import { Grid } from 'gridjs'
  import 'gridjs/dist/theme/mermaid.css'

  let rpgfData: any[] = []
  let rpgfDataArray: any[] = []
  let grid: any

  const fetchData = async () => {
    try {
      const response: Response = await fetch(
        '/data/retroPGF2-dataset/results.json'
      )
      rpgfData = await response.json()
      rpgfDataArray = rpgfData.map((project) => {
        return [
          project['Project Name'],
          `${project['OP Received']} OP`,
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
    grid = new Grid({
      columns: ['Project Name', 'OP Awarded', 'Category'],
      resizable: true,
      // pagination: true,
      search: true,
      fixedHeader: true,
      data: rpgfDataArray,
      pagination: {
        limit: 5,
        summary: true,
      },
      style: {
        th: {
          'background-color': '#ff1818',
          color: '#fff',
          'font-size': '16px',
          'text-align': 'center',
        },
        td: {
          'background-color': '#fff',
          color: '#000',
          'font-size': '14px',
        },
        footer: {
          color: '#fff',
          'font-size': '14px',
        },
      },
    })

    const wrapper = document.getElementById('wrapper')
    if (wrapper) {
      grid.render(wrapper)
      grid.setWidth(wrapper.clientWidth)
    }
  })
</script>

<div id="wrapper" />
