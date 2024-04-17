import StatsBox from '@/app/component/Statistic/StatsBox'
import BallotDistributionChart from '@/app/component/Statistic/BallotDistributionChart'
import BallotEachCategory from '@/app/component/Statistic/BallotEachCategory'
import { ArrowDown, ArrowUp, Star, Growth, Rocket } from '@carbon/icons-react'
import { FC } from 'react'

interface StatisticProps {
  data: any
  round: number
}

const StatisticSection: FC<StatisticProps> = ({ data, round }) => {
  const round1 = [
    {
      title: 'Min Ballot 1',
      value: '0 Ballot',
      icon: <ArrowDown size={25} />,
    },
  ]
  const round2 = [
    {
      title: 'Min Ballot 2',
      value: '0 Ballot',
      icon: <ArrowDown size={25} />,
    },
  ]
  const round3 = [
    {
      title: 'Min Ballot',
      value: '0 Ballot',
      icon: <ArrowDown size={25} />,
    },
    {
      title: 'Max Ballot',
      value: '109 Ballots',
      icon: <ArrowUp size={25} />,
    },
    {
      title: 'Average Ballot',
      value: '2 Ballots',
      icon: <Star size={25} />,
    },

    {
      title: 'Least Awarded',
      value: '0 OP',
      icon: <Rocket size={25} />,
    },
    {
      title: 'Max Awarded',
      value: '663,853 OP',
      icon: <Growth size={25} />,
    },
  ]
  console.log(data)
  return (
    <>
      {/* <div className="text-xl font-bold ">RetroPGF 3 Analysis</div> */}
      <div className="flex flex-row flex-wrap gap-5 mt-2">
        {round === 3 &&
          round3.map((item, index) => (
            <StatsBox
              key={index}
              icon={item.icon}
              value={item.value}
              title={item.title}
            />
          ))}
      </div>
      <div className="flex mt-8 gap-y-3">
        <BallotDistributionChart />
        <BallotEachCategory />
      </div>
    </>
  )
}
export default StatisticSection
