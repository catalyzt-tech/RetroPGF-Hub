'use client'

import { useEffect, useMemo, useState } from 'react'
import CardRound1 from './_component/CardRound1'
import CardRound2 from './_component/CardRound2'
import CardRound3 from './_component/CardRound3'
import CardRound4 from './_component/CardRound4'
import InputSearchExplore from './_component/InputSearchExplore'
import { RetroRound3 } from '@/app/(white_navbar)/explore/RetroPGF3/RetroType3'
import { RetroRound2 } from '@/app/(white_navbar)/explore/RetroPGF2/RetroType2'
import { RetroRound1 } from '@/app/(white_navbar)/explore/RetroPGF1/RetroType1'
import { iRetroPGF4Project } from '@/app/(white_navbar)/explore/RetroPGF4/RetroType4'
import { iRetroPGF5Project } from '@/app/(white_navbar)/explore/RetroPGF5/RetroType5'
import CardRound5 from './_component/CardRound5'
import { iRetroPGF6Project } from '@/app/(white_navbar)/explore/RetroPGF6/RetroType6'
import CardRound6 from './_component/CardRound6'

interface iCpage {
  round1: RetroRound1[]
  round2: RetroRound2[]
  round3: RetroRound3[]
  round4: iRetroPGF4Project[]
  round5: iRetroPGF5Project[]
  round6: iRetroPGF6Project[]
  cateRound2: Map<string, number>
  cateRound3: Map<string, number>
  cateRound4: Map<string, number>
  cateRound5: Map<string, number>
  cateRound6: Map<string, number>
}
export default function Cpage({
  round1,
  round2,
  round3,
  round4,
  round5,
  round6,
  cateRound2,
  cateRound3,
  cateRound4,
  cateRound5: cateRound5Counter,
  cateRound6,
}: iCpage) {
  const [search, setSearch] = useState<string>('')

  const round6Data = useMemo(() => {
    return round6.filter((item) => {
      const searchCondition =
        search !== ''
          ? typeof item.name === 'string' &&
            item.name.toLowerCase().includes(search.toLowerCase())
          : true
      return searchCondition
    })
  }, [round6, search])

  const round5Data = useMemo(() => {
    return round5.filter((item) => {
      const searchCondition =
        search !== ''
          ? typeof item.name === 'string' &&
            item.name.toLowerCase().includes(search.toLowerCase())
          : true
      return searchCondition
    })
  }, [round5, search])

  const round4Data = useMemo(() => {
    return round4.filter((item) => {
      const searchCondition =
        search !== ''
          ? typeof item.name === 'string' &&
            item.name.toLowerCase().includes(search.toLowerCase())
          : true
      return searchCondition
    })
  }, [round4, search])

  const round3Data = useMemo(() => {
    return round3.filter((item) => {
      const searchCondition =
        search !== ''
          ? typeof item.displayName === 'string' &&
            item.displayName.toLowerCase().includes(search.toLowerCase())
          : true
      return searchCondition
    })
  }, [round3, search])

  const round2Data = useMemo(() => {
    // console.log(round3.length)
    return round2.filter((item) => {
      const searchCondition =
        search !== ''
          ? typeof item['Project Name'] === 'string' &&
            item['Project Name'].toLowerCase().includes(search.toLowerCase())
          : true
      return searchCondition
    })
  }, [round2, search])

  const round1Data = useMemo(() => {
    // console.log(round3.length)
    return round1.filter((item) => {
      const searchCondition =
        search !== ''
          ? typeof item['Project Name'] === 'string' &&
            item['Project Name'].toLowerCase().includes(search.toLowerCase())
          : true
      return searchCondition
    })
  }, [round1, search])

  return (
    <div className=" animate-slowfade">
      <div className="relative max-h-[19rem] min-h-[19rem]">
        <div className="bg-gradient-to-br from-[#FFFEEA] to-100% via-[#FFDAAF] to-[#FFAB9F] w-full absolute -top-[4.5rem] left-0 h-[23.5rem]">
          <div className="mt-[4.5rem]" />
          <div className="px-4 md:px-0 py-12 md:py-16  flex flex-col justify-center items-center font-rubik h-[19rem] w-full">
            <h1 className="mb-3 md:mb-7 text-3xl md:text-5xl font-semibold text-gray-800">
              Explore Project Ideas
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-900">
              Find inspiration from all RetroPGF projects
            </p>
            <div className="w-full min-[350px]:w-[20rem] lg:w-[26.25rem] ">
              <InputSearchExplore search={search} setSearch={setSearch} />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:mx-20 mx-4  flex flex-col gap-12 mt-12">
        {/* <CategorySection /> */}

        <CardRound6
          title="RetroPGF 6"
          round6={round6Data}
          cateRound6={cateRound6}
        />

        <CardRound5
          title="RetroPGF 5"
          round5={round5Data}
          cateRound5={cateRound5Counter}
        />
        <CardRound4
          title="RetroPGF 4"
          round4={round4Data}
          cateRound4={cateRound4}
        />
        <CardRound3
          title="RetroPGF 3"
          round3={round3Data}
          cateRound3={cateRound3}
        />

        <CardRound2
          title="RetroPGF 2"
          cateRound2={cateRound2}
          round2={round2Data}
        />

        <CardRound1 title="RetroPGF 1" round1={round1Data} />
      </div>
    </div>
  )
}
