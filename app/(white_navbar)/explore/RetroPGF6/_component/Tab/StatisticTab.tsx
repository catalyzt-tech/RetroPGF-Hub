import ComingSoon from '@/app/ComingSoon'
import { iRetroPGF5Project } from '../../RetroType6'
interface StatisticTabProps {
  data: iRetroPGF5Project[]
  round: number
}

export default function StatisticTab({ data, round }: StatisticTabProps) {
  return (
    <div>
      <ComingSoon />
    </div>
  )
}
