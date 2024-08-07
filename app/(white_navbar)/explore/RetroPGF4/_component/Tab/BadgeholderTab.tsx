import { FC, Fragment, Suspense } from 'react'
import BadgeholderCard from './component/BadgeholderCard'
import { BadgeholderMetrics } from '../../RetroType4'

interface BadgeholderTabProps {
  badgeholderData: BadgeholderMetrics[]
}

const BadgeholderTab: FC<BadgeholderTabProps> = ({ badgeholderData }) => {
  console.log(badgeholderData)
  return (
    <>
      {/* <div className="font-rubik text-black text-2xl">Search Bar & Filter</div> */}
      <div className="grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 flex-col gap-6">
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
              />
            ))}
          </Fragment>
        </Suspense>
      </div>
    </>
  )
}
export default BadgeholderTab
