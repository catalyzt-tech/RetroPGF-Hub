<script>
  import Highcharts from 'highcharts'
  import more from 'highcharts/highcharts-more'
  import { onMount, createEventDispatcher } from 'svelte'
  import { localStorageStore } from '../../stores/localStorage.ts'
  export let Ballot = [0, 0, 0, 0, 0] //[min, max, range 1-5, range > 5, range >= 17]

  more(Highcharts)
  const dispatch = createEventDispatcher()
  let allData = []

  onMount(async () => {
    let opStack = await fetch(
      '../../../data/retroPGF3-dataset/opStackData.json'
    )
      .then((res) => res.json())
      .then((data) => {
        allData = [...allData, ...data]
        data.forEach((each) => {
          if (each.value > Ballot[1]) {
            Ballot[1] = each.value //max
          } else if (each.value < Ballot[0]) {
            Ballot[0] = each.value //min
          }
        })
        return data
      })
    let collectiveGovernance = await fetch(
      '../../../data/retroPGF3-dataset/collectiveGovernanceData.json'
    )
      .then((res) => res.json())
      .then((data) => {
        allData = [...allData, ...data]
        data.forEach((each) => {
          if (each.value > Ballot[1]) {
            Ballot[1] = each.value
          } else if (each.value < Ballot[0]) {
            Ballot[0] = each.value
          }
        })
        return data
      })
    let developer = await fetch(
      '../../../data/retroPGF3-dataset/developerEcosystemData.json'
    )
      .then((res) => res.json())
      .then((data) => {
        allData = [...allData, ...data]
        data.forEach((each) => {
          if (each.value > Ballot[1]) {
            Ballot[1] = each.value
          } else if (each.value < Ballot[0]) {
            Ballot[0] = each.value
          }
        })
        return data
      })
    let endUserExperience = await fetch(
      '../../../data/retroPGF3-dataset/endUserExperienceAdoptionData.json'
    )
      .then((res) => res.json())
      .then((data) => {
        allData = [...allData, ...data]
        data.forEach((each) => {
          if (each.value > Ballot[1]) {
            Ballot[1] = each.value
          } else if (each.value < Ballot[0]) {
            Ballot[0] = each.value
          }
        })
        return data
      })

    allData.sort((a, b) => b.value - a.value)
    Ballot[2] = allData[0].value
    localStorageStore.setItem('max_Ballot', Ballot[2])
    allData.forEach((each) => {
      if (each.value >= Math.floor(Ballot[2] / 2)) {
        Ballot[3]++
      } else {
        Ballot[2]++
      }
      if (each.value >= 17) {
        Ballot[4]++
      }
    })

    await dispatch('sendData', { Ballot })
    // Create the chart
    let chart = await Highcharts.chart('chart-container', {
      chart: {
        type: 'packedbubble',
      },
      title: {
        text: 'Ballots Overview',
      },
      subtitle: {
        text: 'The size of the bubble represents the number of ballots and the color represents the category of the ballot.',
      },
      credits: {
        enabled: false,
      },
      tooltip: {
        useHTML: true,
        pointFormat: '<b>{point.name}:</b> {point.value} Ballot Received',
      },
      plotOptions: {
        packedbubble: {
          useSimulation: false,
          minSize: 0,
          maxSize: Ballot[1],
          zMin: 0,
          zMax: 1000,
          layoutAlgorithm: {
            splitSeries: true,
            gravitationalConstant: 0.1,
          },
          allowPointSelect: true,
          // filter: {
          //   property: 'y',
          //   operator: '>',
          //   value: 8,
          // },
          dataLabels: {
            enabled: true,
            // overflow: 'allow',
            // format: '{point.name}',
            // formatter: function () {
            //   return this.point.value >= Math.floor(Ballot[1] / 2)
            //     ? this.point.name
            //     : null
            // },
            formatter: function () {
              return this.point.value >= 17 ? this.point.name : null
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

<div id="chart-container" class="h-[40em] md:h-[70em] lg:h-[80em]" />

<style>
  /* #chart-container {
    height: 2000px;
    margin: 0.1em auto;
  } */
</style>
