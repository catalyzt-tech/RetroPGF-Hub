<script>
  import Highcharts from 'highcharts'
  import more from 'highcharts/highcharts-more'
  import { onMount, createEventDispatcher } from 'svelte'

  //   more(Highcharts)
  let ballotOPStack = [1000, 0, 0] //min max
  let ballotCollectiveGovernance = [1000, 0, 0]
  let ballotDeveloper = [1000, 0, 0]
  let ballotEndUserExperience = [1000, 0, 0]

  onMount(async () => {
    let opStack = await fetch(
      '../../../data/retroPGF3-dataset/opStackData.json'
    )
      .then((res) => res.json())
      .then((data) => {
        data.forEach((each) => {
          if (each.value < ballotOPStack[0]) {
            ballotOPStack[0] = each.value
          }
          if (each.value > ballotOPStack[2]) {
            ballotOPStack[2] = each.value
          }
          ballotOPStack[1] += each.value
        })
        ballotOPStack[1] = Number((ballotOPStack[1] / data.length).toFixed(2))
        console.log(ballotOPStack)
        return data
      })
    let collectiveGovernance = await fetch(
      '../../../data/retroPGF3-dataset/collectiveGovernanceData.json'
    )
      .then((res) => res.json())
      .then((data) => {
        data.forEach((each) => {
          if (each.value < ballotCollectiveGovernance[0]) {
            ballotCollectiveGovernance[0] = each.value
          }
          if (each.value > ballotCollectiveGovernance[2]) {
            ballotCollectiveGovernance[2] = each.value
          }
          ballotCollectiveGovernance[1] += each.value
        })
        ballotCollectiveGovernance[1] = Number(
          (ballotCollectiveGovernance[1] / data.length).toFixed(2)
        )
        return data
      })
    let developer = await fetch(
      '../../../data/retroPGF3-dataset/developerEcosystemData.json'
    )
      .then((res) => res.json())
      .then((data) => {
        data.forEach((each) => {
          if (each.value < ballotDeveloper[0]) {
            ballotDeveloper[0] = each.value
          }
          if (each.value > ballotDeveloper[2]) {
            ballotDeveloper[2] = each.value
          }
          ballotDeveloper[1] += each.value
        })
        ballotDeveloper[1] = Number(
          (ballotDeveloper[1] / data.length).toFixed(2)
        )
        return data
      })
    let endUserExperience = await fetch(
      '../../../data/retroPGF3-dataset/endUserExperienceAdoptionData.json'
    )
      .then((res) => res.json())
      .then((data) => {
        data.forEach((each) => {
          if (each.value < ballotEndUserExperience[0]) {
            ballotEndUserExperience[0] = each.value
          }
          if (each.value > ballotEndUserExperience[2]) {
            ballotEndUserExperience[2] = each.value
          }
          ballotEndUserExperience[1] += each.value
        })
        ballotEndUserExperience[1] = Number(
          (ballotEndUserExperience[1] / data.length).toFixed(2)
        )
        return data
      })

    let chart = await Highcharts.chart('container3', {
      chart: {
        type: 'pie',
      },
      title: {
        text: 'Projects Type',
      },
      tooltip: {
        valueSuffix: '%',
      },
      //   subtitle: {
      //     text: 'Source:<a href="https://www.mdpi.com/2072-6643/11/3/684/htm" target="_default">MDPI</a>',
      //   },
      plotOptions: {
        series: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: [
            {
              enabled: true,
              distance: 20,
            },
            {
              enabled: true,
              distance: -40,
              format: '{point.percentage:.1f}%',
              style: {
                fontSize: '1.2em',
                textOutline: 'none',
                opacity: 0.7,
              },
              filter: {
                operator: '>',
                property: 'percentage',
                value: 10,
              },
            },
          ],
        },
      },
      series: [
        {
          name: 'Percentage',
          colorByPoint: true,
          data: [
            {
              name: 'Water',
              y: 55.02,
            },
            {
              name: 'Fat',
              //   sliced: true,
              //   selected: true,
              y: 26.71,
            },
            {
              name: 'Carbohydrates',
              y: 1.09,
            },
            {
              name: 'Protein',
              y: 15.5,
            },
            {
              name: 'Ash',
              y: 1.68,
            },
          ],
        },
      ],
    })
  })
</script>

<div id="container3" class="w-[40em]" />
