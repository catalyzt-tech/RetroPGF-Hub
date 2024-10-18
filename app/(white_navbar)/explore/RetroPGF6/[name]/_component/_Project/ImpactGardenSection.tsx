import { useEffect, useState } from 'react'
import { impactGardenMetrics, iRetroPGF6Project } from '../../../RetroType6'
import AmountAttestation from './component/AmountAttestation'
import AverageStar from './component/AverageStar'
import FeelingIfNotExist from './component/FeelingIfNotExist'
import Link from 'next/link'
async function fetchImpactGardenMetrics(
  projectUID: string
): Promise<impactGardenMetrics[]> {
  //   const url = `https://metrics-garden-api.vercel.app/api/projects/primaryProjectUid?primaryProjectUid=${projectUID}`
  const reviewListUrl = `https://metrics-garden-api.vercel.app/api/reviews/primaryProjectUid?primaryProjectUid=${projectUID}`
  const response = await fetch(reviewListUrl)
  const data = await response.json()
  if (!Array.isArray(data)) {
    return []
  }
  return data
}

interface iImpactGardenSectionProps {
  data: iRetroPGF6Project
  impactGardenRef: React.MutableRefObject<HTMLElement | null>
}

const ImpactGardenSection = ({
  data,
  impactGardenRef,
}: iImpactGardenSectionProps) => {
  const [impactGardenMetrics, setImpactGardenMetrics] = useState<
    impactGardenMetrics[]
  >([
    {
      attestationUID: '',
      category: '',
      contribution: '',
      createdAt: '',
      ecosystem: '',
      explanation: '',
      feeling_if_didnt_exist: '',
      id: 0,
      likely_to_recommend: '',
      logoUrl: '',
      pfp: '',
      projectName: '',
      subcategory: '',
      userFid: '',
      username: '',
    },
  ])
  const projectUID: string = data.projectRefUid
  useEffect(() => {
    fetchImpactGardenMetrics(projectUID).then((data) => {
      setImpactGardenMetrics(data)
    })
  }, [])
  return (
    <section
      id="Impact Garden"
      ref={impactGardenRef}
      className="flex flex-col gap-6 bg-white rounded-lg p-4 lg:p-6 border"
    >
      <h3 className="text-2xl font-semibold ">Impact Garden</h3>
      <hr className="hidden sm:block border-t-gray-100" />
      <div className="text-gray-500">
        These metrics are collected based on attestations from the badgeholders,
        top 100 delegates, and other community members.{' '}
        <Link
          className=" font-medium text-primaryRed self-start"
          href={`https://www.metricsgarden.xyz/projects/${projectUID}/?tab=insights`}
          target="_blank"
        >
          View More &gt;
        </Link>
      </div>

      <div className="flex flex-row flex-grow flex-wrap gap-5  ">
        <AmountAttestation impactGardenMetrics={impactGardenMetrics} />
        <AverageStar impactGardenMetrics={impactGardenMetrics} />
        <FeelingIfNotExist impactGardenMetrics={impactGardenMetrics} />
      </div>
    </section>
  )
}
export default ImpactGardenSection
