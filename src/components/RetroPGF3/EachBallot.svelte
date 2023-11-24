<script>
  import Highcharts from 'highcharts'
  import { onMount, createEventDispatcher } from 'svelte'
  import histogram from 'highcharts/modules/histogram-bellcurve'
  histogram(Highcharts)

  const createDynamicArray = (size) => {
    let dynamicArray = []
    for (let i = 0; i < size; i++) {
      dynamicArray.push(0)
    }
    return dynamicArray
  }

  const createLabelArray = (size) => {
    let labelArray = []
    for (let i = 0; i < size; i++) {
      labelArray.push(i)
    }
    return labelArray
  }
  let ballotDistribution = createDynamicArray(16)
  let xLabel = createLabelArray(16)
  onMount(async () => {
    let opStack = await fetch(
      '../../../data/retroPGF3-dataset/opStackData.json'
    )
      .then((res) => res.json())
      .then((data) => {
        data.forEach((each) => {
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
          ballotDistribution[each.value]++
        })
        // ballotEndUserExperience[2] = data.length
        return data
      })

    console.log(ballotDistribution)
    let chart = await Highcharts.chart('container1', {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Ballot Distribution',
        align: 'center',
      },
      subtitle: {
        text: '',
      },
      xAxis: {
        categories: xLabel,
        crosshair: true,
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Projects',
        },
      },
      tooltip: {
        headerFormat: '{point.key} Ballot',
        pointFormat:
          //   '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          //   '<td style="padding:0"><b>{point.y:.1f} Projects</b></td></tr>',
          ': <b>{point.y} Projects</b>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true,
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
          name: 'Ballot Distribution',
          data: ballotDistribution,
        },
      ],
    })
  })
</script>

<div id="container1" class="w-[40em]" />
