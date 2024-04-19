import HighchartsReact from 'highcharts-react-official'
import Highchart from 'highcharts'
import { FC, use } from 'react'
import data from '@/public/static/graphRPGF2/allocationDistribution.json'
import { background } from '@cloudinary/url-gen/qualifiers/focusOn'

const AllocationDistribution: FC = () => {
  const allocationDataset = data
  const average = 51282.05
  const median = 23641.12

  const option = {
    //column

    chart: {
      type: 'column',
      zoomType: 'x',
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
        formatter: function () {
          return this.value.length > 10
            ? this.value.substring(0, 10) + '...'
            : this.value
        },
      },
      max: allocationDataset.length, // Add this line
    },
    yAxis: {
      min: 0,
      title: {
        text: 'OP',
      },
      plotLines: [
        {
          color: 'black',
          width: 1.5,
          value: average,
          dashStyle: 'shortdash',
          label: {
            text: 'Average: ' + average + ' OP',
            align: 'right', // Align to the right
            y: -4, // Align with the line
            x: 10, // Move the label to the right
            style: {
              fontSize: '10px',
              //set background color for label
            },
          },
        },
        {
          color: 'black',
          width: 1.5,
          value: median,
          dashStyle: 'shortdash',
          label: {
            // useHTML: true,
            text: 'Median: ' + median + ' OP',
            align: 'right', // Align to the right
            y: 8, // Align with the line
            x: 10, // Move the label to the right
            style: {
              fontSize: '10px',
              // backgroundColor: 'white',
            },
          },
        },
      ],
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
        groupPadding: 0,
        borderWidth: 0.2,
      },
    },
    series: [
      {
        name: 'OP Awarded',
        data: allocationDataset.map((item) => Number(item.amount)),
        color: '#ff0420',
      },
    ],
  }
  return (
    <div className="w-[50em]">
      <HighchartsReact highcharts={Highchart} options={option} />
    </div>
  )
}
export default AllocationDistribution
