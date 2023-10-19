<script>
  import { onMount } from 'svelte'
  import Chart from 'chart.js/auto'
  let data = [43, 82, 70]
  onMount(() => {
    const ctx = document.getElementById('2').getContext('2d')
    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          'Infrastructure & Dependencies',
          'Tooling & Utilities',
          'Educations',
        ],
        datasets: [
          {
            label: 'Category',
            backgroundColor: ['#ff1818', '#000000', '#FFC300', '#FF8C4F'],
            data: data,
          },
        ],
      },
      options: {
        indexAxis: 'x',
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              font: {
                size: 14,
                weight: 'bold',
              },
            },
          },
          x: {
            title: {
              display: true,
              text: 'Amount of projects',
              font: {
                size: 14,
                weight: 'bold',
              },
            },
            ticks: {
              maxRotation: 0,
              minRotation: 0,
            },
          },
        },
      },
    })
  })
</script>

<div class="w-[35rem] h-[20em]"><canvas id="2" /></div>
