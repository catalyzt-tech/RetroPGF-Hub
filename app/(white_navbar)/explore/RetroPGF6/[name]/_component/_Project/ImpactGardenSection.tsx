import { useEffect } from 'react'
import { iRetroPGF6Project } from '../../../RetroType6'
import AmountAttestation from './component/AmountAttestation'
import AverageStar from './component/AverageStar'
import FeelingIfNotExist from './component/FeelingIfNotExist'
async function fetchImpactGardenMetrics({
  projectUID,
}: {
  projectUID: string
}) {
  //   const url = `https://metrics-garden-api.vercel.app/api/projects/primaryProjectUid?primaryProjectUid=${projectUID}`
  const reviewListUrl = `https://metrics-garden-api.vercel.app/api/reviews/primaryProjectUid?primaryProjectUid=${projectUID}`
  console.log(reviewListUrl)
  const response = await fetch(reviewListUrl)
  const data = await response.json()
  console.log(data)
  return data
}

interface iImpactGardenSectionProps {
  data: iRetroPGF6Project
}

const ImpactGardenSection = ({ data }: iImpactGardenSectionProps) => {
  const projectUID: string =
    '0x4d840826049258b3895326fd67680cca25df9543d67859df49b9ff5635b62598'
  useEffect(() => {
    fetchImpactGardenMetrics({ projectUID })
  }, [])
  return (
    <section
      id="Impact Metrics"
      className="flex flex-col gap-6 bg-white rounded-lg p-4 lg:p-6 border"
    >
      <h3 className="text-2xl font-semibold ">Impact Garden</h3>
      <hr className="hidden sm:block border-t-gray-100" />
      <div className="text-gray-500">
        These metrics are collected based on attestations from the badgeholders,
        top 100 delegates, and other community members.
      </div>
      <div className="flex flex-row flex-grow flex-wrap gap-5  ">
        <AmountAttestation />
        <AverageStar />
        <FeelingIfNotExist />
      </div>
    </section>
  )
}
export default ImpactGardenSection
