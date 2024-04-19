import Highchart from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import data from '@/public/static/graphRPGF3/ballotDistribution.json'
import { FC } from 'react'
const BallotDistributionChart: FC = () => {
  const ballotDataset: number[] = data as number[]
  const option = {
    chart: {
      type: 'column',
      zoomType: 'x',
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
