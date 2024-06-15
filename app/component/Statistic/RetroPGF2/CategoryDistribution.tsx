import HighchartsReact from 'highcharts-react-official'
import Highchart from 'highcharts'
import { FC, use } from 'react'
import data from '@/public/static/graphRPGF2/categoryDistribution.json'
const CategoryDistribution = () => {
  const option = {
    chart: {
      type: 'pie',
      style: {
        fontFamily: 'Inter',
      },
    },
    colors: ['#7cb5ec', '#8085e9', '#f7a35c'],
    title: {
      text: 'Projects Category',
    },
    subtitle: {
      text: 'The amount of projects in each category.',
    },
    credits: {
      enabled: false,
    },
    tooltip: {
      // headerFormat: '',
      pointFormat:
        '{point.name}: <b>{point.y}</b> ({Number(point.percentage).toFixed(2)} %)',
      // formatter: function () {
      //   return `${this.point.name}: <b>${this.y}  Projects</b> (${Number(
      //     this.percentage
      //   ).toFixed(2)}%)`
      // },
      formatter: function (this: Highcharts.TooltipFormatterContextObject) {
        return `${this.point.name}: <b>${this.y} Projects</b> (${this.percentage.toFixed(2)}%)`;
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
            distance: -60,
            // format: '{point.percentage:.2f}%',

            formatter: function (this: Highcharts.TooltipFormatterContextObject) {
              return ` <b>${this.y} Projects</b> <br/>`
            },
            style: {
              fontSize: '0.7em',
              textOutline: 'none',

              opacity: 0.8,
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
    <div className="w-[40em]">
      <HighchartsReact highcharts={Highchart} options={option} />
    </div>
  )
}
export default CategoryDistribution
