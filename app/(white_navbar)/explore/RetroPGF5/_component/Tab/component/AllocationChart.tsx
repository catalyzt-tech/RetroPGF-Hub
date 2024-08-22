import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { FC } from 'react'
import { mapImpactMetrics } from '../../../[name]/Text'
import { ImpactMetrics } from '../../../type'

interface AllocationChartProps {
  metricSelected: Partial<ImpactMetrics[]>
}

const processDataFormat = (metricSelected: any[]) => {
  const tempData = [] as { name: string; y: number }[]
  metricSelected.map((metric) => {
    Object.keys(metric).map((key) => {
      let name = mapImpactMetrics(key) || ''
      tempData.push({
        name,
        y: metric[key],
      })
    })
  })
  return tempData
}

const AllocationChart: FC<AllocationChartProps> = ({ metricSelected }) => {
  const dataToDisplay = processDataFormat(metricSelected)
  const options = {
    chart: {
      type: 'pie',
      width: 400,
      height: 300,
      margin: [0, 0, 0, 0],
      spacingTop: 0,
      spacingBottom: 0,
      spacingLeft: 0,
      spacingRight: 0,
    },
    title: {
      text: '',
    },
    tooltip: {
      valueSuffix: '%',
      borderRadius: 8,
      formatter: function (
        this: Highcharts.TooltipFormatterContextObject
      ): string {
        if (this.key && this.y) {
          return `<b>${this.key}</b>: ${this.y.toFixed(2)} %`
        }
        return ''
      },
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      series: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: [
          {
            enabled: true,
            distance: 10,
            style: {
              fontSize: '0.8em',
              textOutline: 'none',
              crop: true,
              opacity: 0.7,
            },
            formatter: function (
              this: Highcharts.TooltipFormatterCallbackFunction & {
                point: { name: string }
              }
            ): string {
              return this.point.name.length > 8
                ? this.point.name.slice(0, 8) + '...'
                : this.point.name
            },
          },
          {
            enabled: true,
            distance: -50,
            format: '{point.percentage:.2f}%',
            style: {
              fontSize: '0.8em',
              textOutline: 'none',
              opacity: 0.7,
            },
            filter: {
              operator: '>',
              property: 'percentage',
              value: 10,
            },
          },
        ],
      },
    },
    series: [
      {
        name: 'Percentage',
        colorByPoint: true,
        data: dataToDisplay.map((item) => ({
          name: item.name,
          y: item.y,
        })),
      },
    ],
  }

  return (
    <div className="flex justify-center items-center w-full p-2">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default AllocationChart
