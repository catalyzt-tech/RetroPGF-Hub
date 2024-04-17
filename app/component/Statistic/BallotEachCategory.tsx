import Highchart from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import data from '@/public/static/graphRPGF3/ballotEachCategory.json'

const BallotEachCategory = () => {
  const {
    opStack,
    collectiveGovernance,
    developerEcosystem,
    endUserExperience,
  } = data

  const option = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Ballot Each Category',
      align: 'center',
    },
    subtitle: {
      text: 'The minimum, average, median, and maximum ballot of each category.',
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      categories: [
        'Min Ballot',
        'Average Ballot',
        'Median Ballot',
        'Max Ballot',
      ],
      crosshair: true,
      accessibility: {},
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Ballots',
      },
    },
    tooltip: {
      valueSuffix: ' Ballots Included',
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: 'OP Stack',
        data: opStack,
      },
      {
        name: 'Collective Governance',
        data: collectiveGovernance,
      },
      {
        name: 'Developer Ecosystem',
        data: developerEcosystem,
      },
      {
        name: 'End User Experience & Adoption',
        data: endUserExperience,
      },
    ],
  }

  return (
    <div className="w-[45em]">
      <HighchartsReact highcharts={Highchart} options={option} />
    </div>
  )
}

export default BallotEachCategory
