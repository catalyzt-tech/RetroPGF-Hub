import ComingSoon from '@/app/ComingSoon'
interface HistoryTabProps {
  round: number
}

export default function HistoryTab({ round }: HistoryTabProps) {
  return (
    <div>
      <ComingSoon></ComingSoon>
    </div>
  )
}
