import { useEffect, useState } from 'react'
import { ImpactGardenMetrics, iRetroPGF6Project } from '../../../RetroType6'
import AmountAttestation from './component/AmountAttestation'
import AverageStar from './component/AverageStar'
import FeelingIfNotExist from './component/FeelingIfNotExist'
import Link from 'next/link'
import axios from 'axios'
async function fetchImpactGardenMetrics(
  projectUID: string
): Promise<ImpactGardenMetrics[] | null> {
  const baseUrl =
    'https://metrics-garden-api.vercel.app/api/reviews/primaryProjectUid'
  const query = `?primaryProjectUid=${projectUID}`
  const reviewListUrl = baseUrl + query

  try {
    const response = await axios
      .get<ImpactGardenMetrics[]>(reviewListUrl)
      .then((res) => res.data)
    if (!response) {
      throw new Error('Failed to fetch impact garden metrics')
    }
    const data = response
    if (!Array.isArray(data)) {
      return []
    }
    return data
  } catch (error) {
    console.error('Failed to fetch impact garden metrics:', error)
    return []
  }
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
    ImpactGardenMetrics[] | null
  >([
    {
      attestationUID: '',
      category: '',
      contribution: '',
      createdAt: '',
      ecosystem: '',
      explanation: '',
      feeling_if_didnt_exist: '0',
      id: 0,
      likely_to_recommend: '0',
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
  }, [projectUID])
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
          rel="noopener noreferrer"
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
