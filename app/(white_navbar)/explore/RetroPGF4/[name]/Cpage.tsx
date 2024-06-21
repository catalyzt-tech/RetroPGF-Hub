'use client'
import { useRef } from 'react'
import ProjectDetailSection from './_component/_Project/ProjectDetailSection'
import OverviewSection from './_component/_Project/OverviewSection'
import ImpactSection from './_component/_Project/ImpactSection'
import FundingSection from './_component/_Project/FundingSection'
import ContributionSection from './_component/_Project/ContributionSection'
// import { iRetroPGF4Project } from '../RetroType4'
import ScrollSpy from './_component/ScrollSpy'
import { iRetroPGF4Project } from '@/app/(white_navbar)/explore/RetroPGF4/RetroType4'
import GithubSection from './_component/_Project/GithubSection'
import ContractSection from './_component/_Project/ContractSection'
import AppealSection from './_component/_Project/AppealSection'

export default function Cpage({ data }: { data: iRetroPGF4Project }) {
  const overViewRef = useRef<HTMLElement | null>(null)
  const contributionRef = useRef<HTMLElement | null>(null)
  const impactRef = useRef<HTMLElement | null>(null)
  const fundingRef = useRef<HTMLElement | null>(null)

  return (
    <div className="flex mt-8 gap-10">
      {/* Scroll Spy */}

      <div className="lg:flex-grow flex flex-col gap-4 lg:gap-8">
        <section
          className="w-full h-full flex flex-col gap-4 lg:gap-8 lg:flex-grow"
          id="Overview"
          ref={overViewRef}
        >
          <ProjectDetailSection data={data} />
          {/* (data.appealed == "Yes") ?? (
            <AppealSection data={data} />
          )   */}
          <OverviewSection data={data} />
        </section>
        <ContributionSection data={data} contributionRef={contributionRef} />
        {/* <ImpactSection data={data} impactRef={impactRef} /> */}
        <FundingSection data={data} fundingRef={fundingRef} />
        <GithubSection data={data} githubRef={fundingRef} />
        <ContractSection data={data} contractRef={fundingRef} />
      </div>

      <div className="hidden lg:block max-w-72 min-w-72 rounded-lg ">
        <ScrollSpy
          contributionRef={contributionRef}
          fundingRef={fundingRef}
          // impactRef={impactRef}
          overViewRef={overViewRef}
        />
      </div>
    </div>
  )
}
