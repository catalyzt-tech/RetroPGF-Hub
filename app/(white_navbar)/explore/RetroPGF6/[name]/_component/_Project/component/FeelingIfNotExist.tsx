import {
  RiStarFill,
  RiEmotionSadFill,
  RiEmotionNormalFill,
  RiEmotionUnhappyFill,
} from '@remixicon/react'
import FeelingChart from './FeelingChart'
import data from '@/public/static/graphRPGF2/CentralValueEachCategory.json'
import { impactGardenMetrics } from '../../../../RetroType6'
import { useEffect, useMemo } from 'react'

const titleMap: {
  [key: string]: { title: string; color: string; icon: JSX.Element }
} = {
  '🙂 Neutral': {
    title: `Not A Problem I'f This Doesn't Exist!`,
    color: '#D9D9D9',
    icon: <RiEmotionNormalFill size={30} color="black" />,
  },
  '🫠 Somewhat Upset': {
    title: `Some Problem If This Doesn't Exist!`,
    color: '#F6AD55',
    icon: <RiEmotionUnhappyFill size={30} color="#F6AD55" />,
  },
  '😭 Extremely Upset': {
    title: `Big Problem If This Doesn't Exist!`,
    color: '#F56565',
    icon: <RiEmotionSadFill size={30} color="#F56565" />,
  },
}
export default function FeelingIfNotExist({
  impactGardenMetrics,
}: {
  impactGardenMetrics: impactGardenMetrics[]
}) {
  const feelingArray = useMemo(() => {
    return impactGardenMetrics.reduce(
      (acc, cur) => {
        if (cur.feeling_if_didnt_exist === 'Neutral') {
          acc[0].y++
        } else if (cur.feeling_if_didnt_exist === 'Somewhat Upset') {
          acc[1].y++
        } else if (cur.feeling_if_didnt_exist === 'Extremely Upset') {
          acc[2].y++
        }
        return acc
      },
      [
        { name: '🙂 Neutral', y: 0 },
        { name: '🫠 Somewhat Upset', y: 0 },
        { name: '😭 Extremely Upset', y: 0 },
      ]
    )
  }, [impactGardenMetrics])

  const maxFeelingTopic = feelingArray.reduce((acc, cur) =>
    acc.y > cur.y ? acc : cur
  )
  const maxFeelingTopicTitle =
    titleMap[maxFeelingTopic.name as keyof typeof titleMap].title
  return (
    <div className="flex  grow bg-slate-50 w-hull min-h-44 rounded-lg px-8 py-8">
      <div className="flex flex-row gap-x-12 ">
        <div className="flex flex-col justify-center gap-y-3 text-lg font-medium h-full">
          {/* <RiEmotionSadFill size={30} color="#D04848" /> */}
          {titleMap[maxFeelingTopic.name as keyof typeof titleMap].icon}
          <div className="text-md font-semibold">{maxFeelingTopicTitle}</div>
          {feelingArray.map((item) => (
            <div key={item.name} className="text-sm font-normal text-gray-600">
              <span className="font-medium">{item.name}</span>: {item.y}{' '}
              reviewers if this doesn't exist.
            </div>
          ))}
        </div>
        {impactGardenMetrics.length !== 0 && (
          <FeelingChart feelingArray={feelingArray} />
        )}
      </div>
      {/* <div className="flex-grow"></div> */}
    </div>
  )
}
