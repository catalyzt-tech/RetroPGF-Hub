import { FC, useState } from 'react'
import RPGF1History from '@/app/component/History/RetroPGF1/RPGF1History'
import RPGF2History from '@/app/component/History/RetroPGF2/RPGF2History'
import RPGF3History from '@/app/component/History/RetroPGF3/RPGF3History'
interface HistorySectionProps {
  round?: number
}
const HistorySection: FC<HistorySectionProps> = ({ round }) => {
  const [loading, setLoading] = useState<boolean>(true)
  const load = () => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }
  load()
  if (loading)
    return (
      <div className="flex flex-row justify-center items-center animate-pulse h-[40em]">
        Loading...
      </div>
    )
  return (
    <>
      {round === 1 && (
        <div className="grid grid-cols-7 gap-x-10 animate-slowfade">
          <div className="col-span-5">
            <RPGF1History />
          </div>
          <div className="font-semibold">On This Page</div>
        </div>
      )}

      {round === 2 && (
        <div className="grid grid-cols-7 gap-x-10 animate-slowfade">
          <div className="col-span-5">
            <RPGF2History />
          </div>
          <div className="font-semibold">On This Page</div>
        </div>
      )}
      {round === 3 && (
        <div className="grid grid-cols-7 gap-x-10 animate-slowfade">
          <div className="col-span-5">
            <RPGF3History />
          </div>
          <div className="font-semibold">On This Page</div>
        </div>
      )}
    </>
  )
}
export default HistorySection
