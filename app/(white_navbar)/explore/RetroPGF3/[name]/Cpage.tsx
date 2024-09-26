'use client'
import { useRef } from 'react'
import ProjectDetailSection from './_component/_Project/ProjectDetailSection'
import OverviewSection from './_component/_Project/OverviewSection'
import ImpactSection from './_component/_Project/ImpactSection'
import FundingSection from './_component/_Project/FundingSection'
import ContributionSection from './_component/_Project/ContributionSection'
import { RetroRound3 } from '../RetroType3'
import ScrollSpy from '@/app/component/ScrollSpy'

export default function Cpage({ data }: { data: RetroRound3 }) {
  const overViewRef = useRef<HTMLElement | null>(null)
  const contributionRef = useRef<HTMLElement | null>(null)
  const impactRef = useRef<HTMLElement | null>(null)
  const fundingRef = useRef<HTMLElement | null>(null)
  const sections = [
    { name: 'Overview', ref: overViewRef },
    { name: 'Contribution', ref: contributionRef },
    { name: 'Impact', ref: impactRef },
    { name: 'Funding Sources', ref: fundingRef },
  ]
  return (
    <div className="flex mt-4 lg:mt-8 gap-10 justify-center">
      {/* Scroll Spy */}

      <div className="w-full lg:flex-grow flex flex-col gap-4 lg:gap-8 animate-slowfade max-w-[56rem]">
        <section
          className="w-full h-full flex flex-col gap-4 lg:gap-8 lg:flex-grow"
          id="Overview"
          ref={overViewRef}
        >
          <ProjectDetailSection data={data} />
          <OverviewSection data={data} />
        </section>
        <ContributionSection data={data} contributionRef={contributionRef} />
        <ImpactSection data={data} impactRef={impactRef} />
        <FundingSection data={data} fundingRef={fundingRef} />
      </div>

      <div className="hidden lg:block max-w-72 min-w-72 rounded-lg ">
        <ScrollSpy sections={sections} />
      </div>
    </div>
  )
}
