'use client'
import { useState } from 'react'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import { Pagination, Controller } from 'swiper/modules'
import { RetroCard1 } from '@/app/component/Card/RetroCardRound1'
import { RetroRound1 } from '@/app/(white_navbar)/explore/RetroPGF1/RetroType1'
import Link from 'next/link'
import ChevronRight from '@carbon/icons-react/lib/ChevronRight'
import ArrowLeft from '@carbon/icons-react/lib/ArrowLeft'
import ArrowRight from '@carbon/icons-react/lib/ArrowRight'

export default function CardRound1({
  title,
  round1,
}: {
  title: string
  round1: RetroRound1[]
}) {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null)
  const [state, setState] = useState({
    start: true,
    end: false,
  })

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
        <Link
          href={{
            pathname: `/explore/${title}`,
          }}
          className=" flex gap-2"
        >
          <p className="text-sm font-semibold text-gray-600 hover:underline ">
            See all{' '}
          </p>
          <ChevronRight size={20} className="fill-gray-600" />
        </Link>
      </div>

      <div className="relative">
        {round1.length === 0 ? (
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
              {round1.map((item, i) => (
                <SwiperSlide className="mb-10 lg:mb-12" key={i}>
                  <RetroCard1
                    description={item.Question}
                    title={item['Project Name']}
                    opRecieve={item.allocation}
                    leader={item.Leader}
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
