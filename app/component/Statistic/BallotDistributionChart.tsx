import Highchart from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const BallotDistributionChart = () => {
  const ballotDataset = [
    0, 0, 0, 0, 5, 3, 11, 13, 11, 16, 9, 8, 17, 10, 10, 10, 18, 7, 17, 8, 9, 7,
    14, 12, 19, 21, 6, 16, 14, 10, 13, 21, 18, 15, 13, 9, 15, 7, 14, 14, 12, 9,
    8, 7, 12, 9, 8, 9, 6, 9, 9, 3, 4, 2, 5, 5, 3, 6, 5, 2, 4, 2, 3, 3, 2, 2, 2,
    2, 2, 0, 4, 0, 1, 2, 2, 2, 0, 3, 3, 2, 0, 0, 0, 1, 1, 2, 0, 2, 3, 2, 4, 0,
    1, 4, 1, 1, 0, 1, 0, 2, 0, 2, 0, 0, 0, 0, 0, 1, 0, 1,
  ]
  const option = {
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
      //   categories: 3,
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
      pointFormat: ': <b>{point.y} Projects</b>',
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
        name: 'Projects',
        data: ballotDataset,
      },
    ],
  }

  return (
    <div className="w-[45em]">
      <HighchartsReact highcharts={Highchart} options={option} />
    </div>
  )
}

export default BallotDistributionChart
