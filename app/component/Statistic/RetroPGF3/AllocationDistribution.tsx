import Highchart, { color } from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import data from '@/public/static/graphRPGF3/allocationDistribution.json'
import { FC } from 'react'

interface Allocation {
  projectName: string
  amount: number | string
}

const AllocationDistribution: FC = () => {
  const allocationDataset: Allocation[] = data as Allocation[]
  const option = {
    //column

    chart: {
      type: 'column',
      zoomType: 'x',
      style: {
        fontFamily: 'Inter',
      },
    },
    title: {
      text: 'Allocation Distribution',
      align: 'center',
    },
    credits: {
      enabled: false,
    },
    subtitle: {
      text: 'The bar represent the distribution of allocation in each project.',
    },
    xAxis: {
      categories: allocationDataset.map((item) => item.projectName),
      crosshair: true,
      labels: {
        // rotation: 270,
        style: {
          fontSize: '8px',
        },
        formatter: function (this: Highcharts.AxisLabelsFormatterContextObject) {
          return this.value.toString().length  > 10
            ? this.value.toString().substring(0, 10) + '...'
            : this.value.toString();
        },
      },

      //   plotLines: [
      //     {
      //       color: '#000000',
      //       dashStyle: 'dash',
      //       width: 2,
      //       value: 17,
      //       zIndex: 5,
      //       label: {
      //         text: 'Threshold',
      //         rotation: 270,
      //         textAlign: 'center',
      //         x: -10,
      //         y: +40,
      //       },
      //     },
      //   ],
    },
    yAxis: {
      min: 0,
      title: {
        text: 'OP',
      },
    },
    tooltip: {
      headerFormat: '{point.key}',
      pointFormat: ': <b>{point.y} OP</b>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0,
        groupPadding: 0.1,
        borderWidth: 0,
      },
    },
    // responsive: {
    //   rules: [
    //     {
    //       condition: {
    //         maxWidth: 200,
    //       },
    //     },
    //   ],
    // },
    series: [
      {
        name: 'OP Awarded',
        data: allocationDataset.map((item) => Number(item.amount)),
        color: '#ff0420',
      },
    ],
  }
  return (
    <div className="w-[40em]">
      <HighchartsReact highcharts={Highchart} options={option} />
    </div>
  )
}
export default AllocationDistribution
