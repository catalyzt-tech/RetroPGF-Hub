import Highchart from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import data from '@/public/static/graphRPGF2/CentralValueEachCategory.json'
import { FC } from 'react'
import { format } from 'path'

const CentralValueEachCategory: FC = () => {
  const centralValueDataset = data
  //   console.log(centralValueDataset)
  const option = {
    chart: {
      type: 'column',
      zoomType: 'x',

      style: {
        fontFamily: 'Inter',
      },
    },
    title: {
      text: 'Central Allocation Value Each Category',
      align: 'center',
    },
    subtitle: {
      text: 'The minimum, average, median, and maximum central value of each category.',
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      categories: [
        'Min Allcation',
        'Average Allocation',
        'Median Allocation',
        'Max Allocation',
      ],
      crosshair: true,
      accessibility: {},
    },
    yAxis: {
      //   min: 0,
      type: 'logarithmic',
      title: {
        text: 'OP',
      },
    },
    tooltip: {
      //   valueSuffix: ' Ballots'
      formatter: function () {
        return (
          '<b>' +
          this.series.name +
          '</b><br/><br/>' +
          this.x +
          ': <b>' +
          this.y.toFixed(2) +
          ' OP' +
          '</b><br/>'
        )
      },
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: 'Education',
        data: centralValueDataset['education'],
      },
      {
        name: 'Infrastructure',
        data: centralValueDataset['infrastructure'],
      },
      {
        name: 'Tooling and utilities',
        data: centralValueDataset['tooling'],
      },
    ],
  }
  return (
    <div className="w-[40em]">
      <HighchartsReact highcharts={Highchart} options={option} />
    </div>
  )
}
export default CentralValueEachCategory
