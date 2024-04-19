import Highchart from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import data from '@/public/static/graphRPGF2/allocationDistributionEachCategory.json'
const AllocationDistributionInfrastructure = () => {
  const allocationDataset = data

  const option = {
    chart: {
      type: 'pie',
    },
    // colors: ['#7cb5ec', '#8085e9', '#f7a35c'],
    title: {
      text: 'Infrastructure Category Distribution',
    },
    subtitle: {
      text: 'The allocation distribution OP in infrastructure category.',
    },
    credits: {
      enabled: false,
    },
    tooltip: {
      headerFormat: '',
      pointFormat:
        '{point.name}: <b>{point.y}</b> ({Number(point.percentage).toFixed(2)} %)',
      formatter: function () {
        return `${this.point.name}: <b>${this.y}  OP</b> (${Number(
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
            formatter: function () {
              return this.point.name.length > 10
                ? this.point.name.substring(0, 10) + '...'
                : this.point.name
            },
          },
          //   {
          //     enabled: true,
          //     distance: -40,
          //     format: '{point.percentage:.2f}%',
          //     style: {
          //       fontSize: '0.8em',
          //       textOutline: 'none',
          //       opacity: 1,
          //     },
          //   },
        ],
      },
    },
    series: [
      {
        name: 'Percentage',
        colorByPoint: true,
        // data: [
        //   {
        //     name: 'Education',
        //     y: data['Education'],
        //   },
        //   {
        //     name: 'Infrastructure',
        //     y: data['Infrastructure'],
        //   },
        //   {
        //     name: 'Tooling and utilities',
        //     y: data['Tooling and utilities'],
        //   },
        // ],
        data: allocationDataset.Infrastructure.map((item) => {
          return {
            name: item['projectName'],
            y: item['amount'],
          }
        }),
      },
    ],
  }
  return (
    <div className="w-[45em]">
      <HighchartsReact highcharts={Highchart} options={option} />
    </div>
  )
}
export default AllocationDistributionInfrastructure
