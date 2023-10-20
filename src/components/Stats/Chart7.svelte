<script>
  import { onMount } from 'svelte'
  import Chart from 'chart.js/auto'

  let data1 = []
  const fetchData = async () => {
    data1 = await fetch('/data/retroPGF2-dataset/results.json')
    data1 = await data1.json()
    data1 = await data1.map((project) =>
      parseFloat(project['OP Received'].replace(/,/g, ''))
    )
    console.log(data1)
  }

  const gaussianRandom = (mean = 0, stdev = 1) => {
    let u = 1 - Math.random()
    let v = Math.random()
    let z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v)
    return z * stdev + mean
  }

  onMount(async () => {
    await fetchData()
    var canvas = document.getElementById('7')
    var data = {
      labels: ['20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'],
      datasets: [
        {
          data: data1,
          backgroundColor: [
            'rgba(255, 0, 0, 0.6)',
            'rgba(255, 48, 0, 0.6)',
            'rgba(255, 102, 0, 0.6)',
            'rgba(255, 154, 0, 0.6)',
            'rgba(255, 205, 0, 0.6)',
            'rgba(255, 255, 0, 0.6)',
            'rgba(203, 255, 0, 0.6)',
            'rgba(150, 255, 0, 0.6)',
            'rgba(94, 255, 0, 0.6)',
            'rgba(0, 255, 0, 0.6)',
          ],
        },
      ],
    }
    var option = {
      tooltips: {
        enabled: false,
      },
      legend: {
        display: false,
      },
      annotation: {
        annotations: [
          {
            type: 'line',
            mode: 'vertical',
            scaleID: 'x-axis-0',
            value: '70%',
            borderColor: 'black',
            label: {
              content: 'Your Score',
              enabled: true,
              position: 'center',
            },
          },
        ],
      },
      scales: {
        yAxes: [
          {
            display: false,
          },
        ],
        xAxes: [
          {
            barPercentage: 1.0,
            categoryPercentage: 1.0,
            gridLines: {
              display: false,
            },
            scaleLabel: {
              display: true,
              labelString: 'Average Score',
            },
          },
        ],
      },
    }

    var myBarChart = new Chart(canvas, {
      type: 'bar',
      data: data,
      options: option,
    })
  })
</script>

<div class="md:w-[35em] md:h-[20em]"><canvas id="7" /></div>
