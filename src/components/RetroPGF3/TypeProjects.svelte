<script>
  import Highcharts from 'highcharts'
  import more from 'highcharts/highcharts-more'
  import { onMount } from 'svelte'

  //   more(Highcharts)
  let individual = 531
  let project = 112

  onMount(async () => {
    let chart = await Highcharts.chart('container3', {
      chart: {
        type: 'pie',
      },
      colors: ['#7cb5ec', '#8085e9'],
      title: {
        text: 'Projects Type',
      },
      subtitle: {
        text: 'The percentage of projects and individual projects.',
      },
      credits: {
        enabled: false,
      },
      tooltip: {
        // valueSuffix: 'project',
        headerFormat: '',
        pointFormat: '{point.name}: <b>{point.percentage} %</b>',
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
              format: '{point.percentage:.2f}%',
              style: {
                fontSize: '0.8em',
                textOutline: 'none',
                opacity: 1,
              },
              //   filter: {
              //     operator: '>',
              //     property: 'percentage',
              //     value: 10,
              //   },
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
              name: 'Project',
              y: Number(((project / 643) * 100).toFixed(2)),
            },
            {
              name: 'Individual',
              //   sliced: true,
              //   selected: true,
              y: Number(((individual / 643) * 100).toFixed(2)),
            },
          ],
        },
      ],
    })
  })
</script>

<div class="m-10">
  <div id="container3" class="lg:h-[25em]" />
</div>
