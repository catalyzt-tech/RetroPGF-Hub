import { FC, useState } from 'react'
import RPGF2History from '@/app/component/History/RetroPGF2/RPGF2History'
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
      {round === 2 ? (
        <div className="grid grid-cols-7 gap-x-10 animate-slowfade">
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
