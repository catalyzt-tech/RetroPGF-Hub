<script lang="ts">
  import { onMount } from 'svelte'
  import Chart from 'chart.js/auto'
  let rpgfData: any[] = []

  const getRandomColor = (Category: string) => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    const alpha = 0.7
    if (Category === 'Infrastructure') return 'rgba(255, 24, 24, ' + alpha + ')'
    else if (Category === 'Education') return 'rgba(255, 195, 0, ' + alpha + ')'
    else if (Category === 'Tooling and utilities')
      return 'rgba(255, 140, 79, ' + alpha + ')'
  }

  const fetchData = async () => {
    try {
      const response: Response = await fetch(
        '/data/retroPGF2-dataset/results.json'
      )
      rpgfData = await response.json()
      console.log(rpgfData)
    } catch (error) {
      console.error('Error loading JSON data:', error)
    }
  }

  onMount(async () => {
    await fetchData()
    const ctx = document.getElementById('4').getContext('2d')
    const chartData = {
      labels: rpgfData.map((project) => project['OP Received']), // Labels for the x-axis
      datasets: rpgfData.map((project) => {
        return {
          label: project['Project Name'],
          backgroundColor: getRandomColor(project.Category),
          borderColor: getRandomColor(project.Category),
          data: [
            {
              x: parseFloat(project['OP Received'].replace(/,/g, '')),
              y: Math.random() * 10,
              r: 10,
            },
          ],
        }
      }),
    }
    console.log(chartData)
    const chart = new Chart(ctx, {
      type: 'bubble',
      data: chartData,
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'OP Awarded',
            },
            position: 'bottom',
            min: 0,
            max: 600000,
          },
          y: {
            display: false,
          },
        },
      },
    })
  })
</script>

<div class="md:w-[35em] md:h-[20em]"><canvas id="4" /></div>
