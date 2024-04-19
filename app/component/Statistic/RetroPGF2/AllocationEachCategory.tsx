import Highchart from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { FC } from 'react'
import data from '@/public/static/graphRPGF2/allocationEachCategory.json'

const AllocationEachCategory: FC = () => {
  const allocationDataset = data
  const education = allocationDataset['Education']
  const infrastructure = allocationDataset['Infrastructure']
  const tooling = allocationDataset['Tooling and utilities']
  const option = {
    //column

    chart: {
      type: 'column',
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
      //   categories: allocationDataset.map((item) => item.projectName),
      categories: ['Education', 'Infrastructure', 'Tooling and utilities'],
      crosshair: true,
      labels: {
        // rotation: 270,
        style: {
          fontSize: '8px',
        },
        formatter: function () {
          return this.value.length > 10
            ? this.value.substring(0, 10) + '...'
            : this.value
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
        // pointPadding: 0.2,
        // groupPadding: 0,
        borderWidth: 6,
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
        data: [
          { y: education, color: '#ff0420' },
          { y: infrastructure, color: '#8085e9' },
          { y: tooling, color: '#f7a35c' },
        ],
      },
    ],
  }
  return (
    <div className="w-[45em]">
      <HighchartsReact highcharts={Highchart} options={option} />
    </div>
  )
}
export default AllocationEachCategory
