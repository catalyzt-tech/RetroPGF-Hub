<script>
  import Highcharts from 'highcharts'
  import more from 'highcharts/highcharts-more'
  import { onMount } from 'svelte'

  more(Highcharts)

  onMount(async () => {
    // Define your chart option
    let opStack = await fetch(
      '../../../data/retroPGF3-dataset/opStackData.json'
    )
      .then((res) => res.json())
      .then((data) => {
        return data
      })
    let collectiveGovernance = await fetch(
      '../../../data/retroPGF3-dataset/collectiveGovernanceData.json'
    )
      .then((res) => res.json())
      .then((data) => {
        return data
      })
    let developer = await fetch(
      '../../../data/retroPGF3-dataset/developerEcosystemData.json'
    )
      .then((res) => res.json())
      .then((data) => {
        return data
      })
    let endUserExperience = await fetch(
      '../../../data/retroPGF3-dataset/endUserExperienceAdoptionData.json'
    )
      .then((res) => res.json())
      .then((data) => {
        return data
      })

    // Create the chart
    let chart = await Highcharts.chart('chart-container', {
      chart: {
        type: 'packedbubble',
      },
      title: {
        text: '',
      },
      tooltip: {
        useHTML: true,
        pointFormat: '<b>{point.name}:</b> {point.value} Bollot',
      },
      plotOptions: {
        packedbubble: {
          useSimulation: false,
          minSize: 0,
          maxSize: 643,
          zMin: 0,
          zMax: 1000,
          layoutAlgorithm: {
            splitSeries: true,
            gravitationalConstant: 0.1,
          },
          // filter: {
          //   property: 'y',
          //   operator: '>',
          //   value: 8,
          // },
          dataLabels: {
            enabled: true,
            // overflow: 'allow',
            // format: '{point.name}',
            formatter: function () {
              return this.point.value >= 5 ? this.point.name : null
            },
            style: {
              color: 'black',
              textOutline: 'none',
              fontWeight: 'Bold',
              fontSize: '0.8em',
            },
          },
        },
      },
      series: [
        {
          name: 'OP Stack',
          data: opStack,
        },
        {
          name: 'Collective Governance',
          data: collectiveGovernance,
        },
        {
          name: 'Developer Ecosystem',
          data: developer,
        },
        {
          name: 'End User Experience & Adoption',
          data: endUserExperience,
        },
      ],
    })

    // Optional: Handle updates or cleanup when the component is destroyed
    return () => {
      chart.destroy()
    }
  })
</script>

<div id="chart-container" class="h-[80em]" />

<style>
  /* #chart-container {
    height: 2000px;
    margin: 0.1em auto;
  } */
</style>
