import { FC, Fragment, Suspense, useState } from 'react'
import BadgeholderCard from './component/BadgeholderCard'
import { BadgeholderMetrics } from '../../RetroType4'
import Image from 'next/image'
interface BadgeholderTabProps {
  badgeholderData: BadgeholderMetrics[]
}

const BadgeholderTab: FC<BadgeholderTabProps> = ({ badgeholderData }) => {
  console.log(badgeholderData)
  const [loading, setLoading] = useState(true)
  const load = () => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }
  load()
  if (loading)
    return (
      <div className="flex flex-col justify-center items-center animate-pulse h-[40em]">
        <Image
          src="/static/loading/small_sunny.svg"
          width={55}
          height={55}
          alt="loading"
        />
      </div>
    )
  return (
    <>
      {/* <div className="font-rubik text-black text-2xl">Search Bar & Filter</div> */}
      <div className="grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 flex-col gap-6 animate-slowfade">
        <Suspense fallback={<div>Loading...</div>}>
          <Fragment>
            {badgeholderData.map((item, i) => (
              <BadgeholderCard
                key={i}
                address={item.address}
                ensName={item.ensName}
                joinMethod={item.joinMethod}
                joinDate={item.joinDate}
                invitedBy={item.invitedBy}
                metricInBallot={item.metricInBallot}
                metricViewed={item.metricViewed}
                openSourceMultiplier={item.openSourceMultiplier}
                avatarUrl={item.avatarUrl}
                metricSelected={item.metricSelected}
              />
            ))}
          </Fragment>
        </Suspense>
      </div>
    </>
  )
}
export default BadgeholderTab
