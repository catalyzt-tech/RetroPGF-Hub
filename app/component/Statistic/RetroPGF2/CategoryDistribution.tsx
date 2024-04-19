import HighchartsReact from 'highcharts-react-official'
import Highchart from 'highcharts'
import { FC } from 'react'
import data from '@/public/static/graphRPGF2/categoryDistribution.json'
const CategoryDistribution = () => {
  const option = {
    chart: {
      type: 'pie',
    },
    colors: ['#7cb5ec', '#8085e9', '#f7a35c'],
    title: {
      text: 'Projects Category',
    },
    subtitle: {
      text: 'The percentage of projects in each category.',
    },
    credits: {
      enabled: false,
    },
    tooltip: {
      headerFormat: '',
      pointFormat:
        '{point.name}: <b>{point.y}</b> ({Number(point.percentage).toFixed(2)} %)',
      formatter: function () {
        return `${this.point.name}: <b>${this.y}  Projects</b> (${Number(
          this.percentage
        ).toFixed(2)}%)`
      },
    },
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
            name: 'Education',
            y: data['Education'],
          },
          {
            name: 'Infrastructure',
            y: data['Infrastructure'],
          },
          {
            name: 'Tooling and utilities',
            y: data['Tooling and utilities'],
          },
        ],
      },
    ],
  }
  return (
    <div className="w-[50em]">
      <HighchartsReact highcharts={Highchart} options={option} />
    </div>
  )
}
export default CategoryDistribution
