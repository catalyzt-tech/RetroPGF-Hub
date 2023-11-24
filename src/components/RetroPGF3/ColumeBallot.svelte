<script>
  import Highcharts from 'highcharts'
  import more from 'highcharts/highcharts-more'
  import { onMount, createEventDispatcher } from 'svelte'

  let ballotOPStack = [1000, 0, 0, 0] //min avg median max
  let ballotCollectiveGovernance = [1000, 0, 0, 0]
  let ballotDeveloper = [1000, 0, 0, 0]
  let ballotEndUserExperience = [1000, 0, 0, 0]

  const median = (array) => {
    if (array.length === 0) {
      throw new Error('Input array is empty')
    }
    let tempArray = array.map((each) => each.value)
    tempArray = [...tempArray].sort((a, b) => a - b)
    const half = Math.floor(tempArray.length / 2)
    const data =
      tempArray.length % 2
        ? tempArray[half]
        : (tempArray[half - 1] + tempArray[half]) / 2
    console.log(tempArray)
    return data
  }

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
          if (each.value > ballotOPStack[3]) {
            ballotOPStack[3] = each.value
          }
          ballotOPStack[1] += each.value
        })
        ballotOPStack[1] = Number((ballotOPStack[1] / data.length).toFixed(2))
        ballotOPStack[2] = median(data)
        // console.log('median', ballotOPStack[2])
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
          if (each.value > ballotCollectiveGovernance[3]) {
            ballotCollectiveGovernance[3] = each.value
          }
          ballotCollectiveGovernance[1] += each.value
        })
        ballotCollectiveGovernance[1] = Number(
          (ballotCollectiveGovernance[1] / data.length).toFixed(2)
        )
        ballotCollectiveGovernance[2] = median(data)
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
          if (each.value > ballotDeveloper[3]) {
            ballotDeveloper[3] = each.value
          }
          ballotDeveloper[1] += each.value
        })
        ballotDeveloper[1] = Number(
          (ballotDeveloper[1] / data.length).toFixed(2)
        )
        ballotDeveloper[2] = median(data)
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
          if (each.value > ballotEndUserExperience[3]) {
            ballotEndUserExperience[3] = each.value
          }
          ballotEndUserExperience[1] += each.value
        })
        ballotEndUserExperience[1] = Number(
          (ballotEndUserExperience[1] / data.length).toFixed(2)
        )
        ballotEndUserExperience[2] = median(data)
        return data
      })

    let chart = await Highcharts.chart('container2', {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Ballot For Each Category',
        align: 'center',
      },
      //   subtitle: {
      //     text:
      //       'Source: <a target="_blank" ' +
      //       'href="https://www.indexmundi.com/agriculture/?commodity=corn">indexmundi</a>',
      //     align: 'left',
      //   },
      xAxis: {
        categories: [
          'Min Ballot(s)',
          'Average Ballots',
          'Median Ballots',
          'Max Ballots',
        ],
        crosshair: true,
        accessibility: {
          description: 'Countries',
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Ballots',
        },
      },
      tooltip: {
        valueSuffix: ' Ballot',
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: 'OP Stack',

          data: ballotOPStack,
        },
        {
          name: 'Collective Governance',

          data: ballotCollectiveGovernance,
        },
        {
          name: 'Developer Ecosystem',

          data: ballotDeveloper,
        },
        {
          name: 'End User Experience & Adoption',

          data: ballotEndUserExperience,
        },
      ],
    })
  })
</script>

<div id="container2" class="w-[40em]" />
