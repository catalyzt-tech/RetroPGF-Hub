import Highchart from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const TypeOfProject = () => {
  const project = 531
  const individual = 112
  const option = {
    chart: {
      type: 'pie',
      style: {
        fontFamily: 'Inter',
      },
    },
    colors: ['#7cb5ec', '#8085e9'],
    title: {
      text: 'Projects Type',
    },
    subtitle: {
      text: 'The percentage of projects and individual projects.',
    },
    credits: {
      enabled: false,
    },
    tooltip: {
      headerFormat: '',
      pointFormat: '{point.name}: <b>{point.percentage} %</b>',
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
            name: 'Project',
            y: Number(((project / 643) * 100).toFixed(2)),
          },
          {
            name: 'Individual',
            y: Number(((individual / 643) * 100).toFixed(2)),
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

export default TypeOfProject
