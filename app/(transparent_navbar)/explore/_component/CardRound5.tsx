'use client'

import { useState } from 'react'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import { Pagination, Controller } from 'swiper/modules'
import Link from 'next/link'
import ChevronRight from '@carbon/icons-react/lib/ChevronRight'
import ArrowLeft from '@carbon/icons-react/lib/ArrowLeft'
import ArrowRight from '@carbon/icons-react/lib/ArrowRight'
import { cleanParamsName } from '@/app/lib/utils'
import { RetroPGF5Project } from '@/app/(white_navbar)/explore/RetroPGF5/type'
import RetroCard5 from '@/app/component/Card/RetroCardRound5'

interface iCardRound5 {
  title: string
  round5: RetroPGF5Project[]
  cateRound5: Map<string, number>
}

export default function CardRound5({ title, round5, cateRound5 }: iCardRound5) {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null)
  const [state, setState] = useState({
    start: true,
    end: false,
    round5: round5,
  })

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
        <Link
          href={{
            pathname: `/explore/RetroPGF4`,
          }}
          className="md:hidden flex gap-2"
        >
          <p className="text-sm font-semibold text-gray-600 hover:underline ">
            See all{' '}
          </p>
          <ChevronRight size={20} className="fill-gray-600" />
        </Link>
      </div>

      <div className="hidden lg:flex justify-between">
        <div className="flex flex-wrap gap-2">
          {Array.from(cateRound5).map(([category, count]) => (
            <Link
              href={`/explore/RetroPGF5/?category=${category}`}
              key={category}
              className={` lg:block h-8
                     hover:bg-secondaryRed hover:text-primaryRed hover:border hover:border-primaryRed
                     rounded-full px-3 py-1.5 cursor-pointer transition-colors self-center shrink-0 text-slate-900 border
                     `}
            >
              <p className=" text-sm font-normal ">
                {category} ({count})
              </p>
            </Link>
          ))}
        </div>

        <Link
          href={{
            pathname: `/explore/RetroPGF5`,
          }}
          className=" lg:block h-8
                hover:bg-secondaryRed hover:text-primaryRed hover:border hover:border-primaryRed
                rounded-full px-3 py-1.5 cursor-pointer transition-colors self-center shrink-0 text-slate-900 border
                "
        >
          <p className=" text-sm font-normal ">See all</p>
        </Link>
      </div>

      <div className="relative">
        {round5.length === 0 ? (
          <h6 className="text-xl text-gray-600 font-semibold text-center">
            0 Item Found
          </h6>
        ) : (
          <>
            <Swiper
              onSwiper={setSwiper}
              slidesPerView="auto"
              pagination={true}
              modules={[Pagination, Controller]}
              initialSlide={0}
              direction="horizontal"
              className="mt-4 swiper-container"
              onActiveIndexChange={(e) => {
                setState((prev) => ({
                  ...prev,
                  start: e.isBeginning,
                  end: e.isEnd,
                }))
              }}
            >
              {round5.map((item, i) => (
                <SwiperSlide className="mb-10 lg:mb-12" key={i}>
                  <RetroCard5
                    title={item.name}
                    category={item.category ?? ''}
                    description={item.description ?? ''}
                    teamSize={item.team.length}
                    // opRecieve={0}
                    // rank={0}
                    round="RetroPGF 5"
                    // vote={0}
                    icon={item.projectAvatarUrl ?? ''}
                    banner={item.projectCoverImageUrl ?? ''}
                    isEligible={true}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            {!state.start && (
              <button
                className="
                        rounded-full p-1 bg-slate-100 hover:bg-slate-200 
                        hidden lg:block absolute top-1/2 transform -translate-y-1/2 -left-6 cursor-pointer z-50"
                onClick={() => swiper?.slidePrev()}
              >
                <ArrowLeft size={24} className="fill-gray-900" />
              </button>
            )}

            {!state.end && (
              <button
                className="
                    rounded-full p-1 bg-slate-100 hover:bg-slate-200 
                    hidden lg:block absolute top-1/2 transform -translate-y-1/2 -right-8 cursor-pointer z-50"
                onClick={() => swiper?.slideNext()}
              >
                <ArrowRight size={24} className="fill-gray-900" />
              </button>
            )}
          </>
        )}
      </div>
    </div>
  )
}
