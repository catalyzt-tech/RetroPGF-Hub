import Highchart from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import data from '@/public/static/graphRPGF3/ballotEachCategory.json'
import { FC } from 'react'
const BallotEachCategory: FC = () => {
  let { opStack, collectiveGovernance, developerEcosystem, endUserExperience } =
    data

  opStack = opStack.map((item: number) => Number(item.toFixed(2)))
  collectiveGovernance = collectiveGovernance.map((item: number) =>
    Number(item.toFixed(2))
  )
  developerEcosystem = developerEcosystem.map((item: number) =>
    Number(item.toFixed(2))
  )
  endUserExperience = endUserExperience.map((item: number) =>
    Number(item.toFixed(2))
  )
  const option = {
    chart: {
      type: 'column',
      zoomType: 'x',
      style: {
        fontFamily: 'Inter',
      },
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
      valueSuffix: ' Ballots',
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
    <div className="w-[40em]">
      <HighchartsReact highcharts={Highchart} options={option} />
    </div>
  )
}

export default BallotEachCategory
