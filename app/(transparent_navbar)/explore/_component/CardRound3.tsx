'use client'

import { useState } from 'react'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import { Pagination, Controller } from 'swiper/modules'
import Link from 'next/link'
import { RetroRound3 } from '@/app/(white_navbar)/explore/RetroPGF3/RetroType3'
import ChevronRight from '@carbon/icons-react/lib/ChevronRight'
import ArrowLeft from '@carbon/icons-react/lib/ArrowLeft'
import ArrowRight from '@carbon/icons-react/lib/ArrowRight'
import RetroCard3 from '@/app/component/Card/RetroCardRound3'
import { cleanParamsName } from '@/app/lib/utils'

interface iCardRound3 {
  title: string
  round3: RetroRound3[]
  cateRound3: Map<string, number>
}

export default function CardRound3({
  title,
  round3,
  cateRound3,
}: iCardRound3) {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null)
  const [state, setState] = useState({
    start: true,
    end: false,
    round3: round3,
  })

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
        <Link
          href={{
            pathname: `/explore/RetroPGF3`,
          }}
          className="lg:hidden flex gap-2"
        >
          <p className="text-sm font-semibold text-gray-600 hover:underline ">
            See all{' '}
          </p>
          <ChevronRight size={20} className="fill-gray-600" />
        </Link>
      </div>

      <div className="hidden lg:flex justify-between">
        <div className="flex flex-wrap gap-2">
          {Array.from(cateRound3).map(([category, count]) => (
            <Link
              href={`/explore/RetroPGF3?category=${category}`}
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
            pathname: `/explore/RetroPGF3`,
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
        {round3.length === 0 ? (
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
              {round3.map((item, i) => (
                <SwiperSlide className="mb-10 lg:mb-12" key={i}>
                  <RetroCard3
                    title={item.displayName}
                    category={item['New Main-Category']}
                    description={item.bio}
                    opRecieve={item.scaled}
                    rank={item.rank}
                    round="RetroPGF 3"
                    vote={item.ballot}
                    icon={item.iconPath}
                    banner={item.bannerPath}
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
