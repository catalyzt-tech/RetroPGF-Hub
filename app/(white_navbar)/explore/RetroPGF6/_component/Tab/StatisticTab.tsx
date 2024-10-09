import ComingSoon from '@/app/ComingSoon'
import { iRetroPGF6Project } from '../../RetroType6'
import { EASProjectMetadata } from '@/app/types/realtime-api-agora'
interface StatisticTabProps {
  data: iRetroPGF6Project[]
  round: number
}

export default function StatisticTab({ data, round }: StatisticTabProps) {
  return (
    <div>
      <ComingSoon />
    </div>
  )
}
