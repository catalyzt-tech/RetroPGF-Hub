<script>
  import Highcharts from 'highcharts'
  import { onMount, createEventDispatcher } from 'svelte'
  import histogram from 'highcharts/modules/histogram-bellcurve'

  histogram(Highcharts)

  let ballotDistribution = []
  let xLabel
  onMount(async () => {
    let opStack = await fetch(
      '../../../data/retroPGF3-dataset/opStackData.json'
    )
      .then((res) => res.json())
      .then((data) => {
        data.forEach((each) => {
          while (ballotDistribution.length <= each.value) {
            ballotDistribution.push(0)
          }
          ballotDistribution[each.value]++
        })
        return data
      })
    let collectiveGovernance = await fetch(
      '../../../data/retroPGF3-dataset/collectiveGovernanceData.json'
    )
      .then((res) => res.json())
      .then((data) => {
        data.forEach((each) => {
          while (ballotDistribution.length <= each.value) {
            ballotDistribution.push(0)
          }
          ballotDistribution[each.value]++
        })
        // ballotCollectiveGovernance[2] = data.length
        return data
      })
    let developer = await fetch(
      '../../../data/retroPGF3-dataset/developerEcosystemData.json'
    )
      .then((res) => res.json())
      .then((data) => {
        data.forEach((each) => {
          while (ballotDistribution.length <= each.value) {
            ballotDistribution.push(0)
          }
          ballotDistribution[each.value]++
        })
        // ballotDeveloper[2] = data.length
        return data
      })
    let endUserExperience = await fetch(
      '../../../data/retroPGF3-dataset/endUserExperienceAdoptionData.json'
    )
      .then((res) => res.json())
      .then((data) => {
        data.forEach((each) => {
          while (ballotDistribution.length <= each.value) {
            ballotDistribution.push(0)
          }
          ballotDistribution[each.value]++
        })
        console.log(ballotDistribution)
        // ballotEndUserExperience[2] = data.length
        return data
      })
    xLabel = ballotDistribution.length
    console.log(ballotDistribution)
    let chart = await Highcharts.chart('container1', {
      chart: {
        type: 'column',
      },
      colors: ['#ff0000'],
      title: {
        text: 'Ballot Distribution',
        align: 'center',
      },
      credits: {
        enabled: false,
      },
      subtitle: {
        text: 'The bar represent the distribution of ballot in each project.',
      },
      xAxis: {
        categories: xLabel,
        crosshair: true,
        plotLines: [
          {
            color: '#000000',
            dashStyle: 'dash',
            width: 2,
            value: 17,
            zIndex: 5,
            label: {
              text: 'Threshold',
              rotation: 270,
              textAlign: 'center',
              x: -10,
              y: +40,
              // style: {
              //   fontStyle: 'italic',
              //   background: 'white',
              //   backgroundColor: 'white',
              //   fontSize: '12px',
              //   padding: '20px',
              // },
            },
          },
        ],
      },

      yAxis: {
        min: 0,
        title: {
          text: 'Projects',
        },
      },
      tooltip: {
        headerFormat: '{point.key} Ballots',
        pointFormat:
          //   '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          //   '<td style="padding:0"><b>{point.y:.1f} Projects</b></td></tr>',
          ': <b>{point.y} Projects</b>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true,
      },
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 200,
            },
            chartOptions: {
              legend: {
                enabled: false,
              },
            },
          },
        ],
      },
      plotOptions: {
        column: {
          pointPadding: 0,
          borderWidth: 0,
          groupPadding: 0,
          shadow: false,
        },
      },
      series: [
        {
          name: 'Ballot Included',
          data: ballotDistribution,
        },
      ],
    })
  })
</script>

<div class="m-10">
  <div id="container1" class="lg:h-[25em]" />
</div>
