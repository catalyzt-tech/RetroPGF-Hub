'use client'

import { FC } from 'react'
import RPGF2History from '@/app/component/History/RetroPGF2/RPGF2History'
interface HistorySectionProps {
  round?: number
}
const HistorySection: FC<HistorySectionProps> = ({ round }) => {
  return (
    <>
      {round === 2 ? (
        <div className="grid grid-cols-7 gap-x-10">
          <div className="col-span-5">
            <RPGF2History />
          </div>
          <div className="font-semibold">On This Page</div>
        </div>
      ) : (
        <>Wait for authors</>
      )}
      {/* <div>Test</div> */}
    </>
  )
}
export default HistorySection
