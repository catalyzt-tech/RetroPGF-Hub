<script>
  import { onMount } from 'svelte'
  import Chart from 'chart.js/auto'

  let data = [86193.7, 76752.08, 43780.85]

  onMount(() => {
    const ctx = document.getElementById('5').getContext('2d')
    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          'Infrastructure & Dependencies',
          'Tooling & Utilities',
          'Education',
        ],
        datasets: [
          {
            label: 'Amount of projects',
            backgroundColor: ['#ff1818', '#000000', '#FFC300'],
            data: data,
          },
        ],
      },
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
            type: 'category',
            title: {
              display: false,
              text: 'Category',
              font: {
                size: 14,
                weight: 'bold',
              },
            },
            ticks: {
              minRotation: 0,
              maxRotation: 0,
              maxTextWidth: 100,
            },
          },
        },
      },
    })
  })
</script>

<div class="md:w-[35em] md:h-[20em]"><canvas id="5" /></div>
