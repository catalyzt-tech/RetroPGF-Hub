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
  let ballotDistribution = createDynamicArray(20)
  let xLabel = createLabelArray(20)
  onMount(async () => {
    let opStack = await fetch(
      '../../../data/retroPGF3-dataset/listOpStackData.json'
    )
      .then((res) => res.json())
      .then((data) => {
        data.forEach((each) => {
          ballotDistribution[each.lists]++
        })
        return data
      })
    let collectiveGovernance = await fetch(
      '../../../data/retroPGF3-dataset/listCollectiveGovernanceData.json'
    )
      .then((res) => res.json())
      .then((data) => {
        data.forEach((each) => {
          ballotDistribution[each.lists]++
        })
        // ballotCollectiveGovernance[2] = data.length
        return data
      })
    let developer = await fetch(
      '../../../data/retroPGF3-dataset/listDeveloperEcosystemData.json'
    )
      .then((res) => res.json())
      .then((data) => {
        data.forEach((each) => {
          ballotDistribution[each.lists]++
        })
        // ballotDeveloper[2] = data.length
        return data
      })
    let endUserExperience = await fetch(
      '../../../data/retroPGF3-dataset/listEndUserExperienceAdoptionData.json'
    )
      .then((res) => res.json())
      .then((data) => {
        data.forEach((each) => {
          ballotDistribution[each.lists]++
        })
        // ballotEndUserExperience[2] = data.length
        return data
      })

    console.log(ballotDistribution)
    let chart = await Highcharts.chart('container4', {
      chart: {
        type: 'column',
      },
      colors: ['#fe6a35'],
      title: {
        text: 'List Included',
        align: 'center',
      },
      subtitle: {
        text: 'The number of lists included in each project.',
      },
      credits: {
        enabled: false,
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
      //   responsive: {
      //     rules: [
      //       {
      //         condition: {
      //           maxWidth: 200,
      //         },
      //         chartOptions: {
      //           legend: {
      //             enabled: false,
      //           },
      //         },
      //       },
      //     ],
      //   },
      tooltip: {
        headerFormat: '{point.key} Lists',
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
          name: 'Lists Included',
          data: ballotDistribution,
        },
      ],
    })
  })
</script>

<div class="m-10">
  <div id="container4" class="lg:h-[25em]" />
</div>
