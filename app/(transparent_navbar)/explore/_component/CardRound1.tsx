"use client";

import { useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Pagination, Controller } from 'swiper/modules';
import NextOutline from "@carbon/icons-react/lib/NextOutline";
import PreviousOutline from "@carbon/icons-react/lib/PreviousOutline";
import { RetroCard1 } from "@/app/component/Card/RetroCardRound1";
import { RetroRound1 } from "@/app/(white_navbar)/explore/RetroPGF1/RetroType1";
import Link from "next/link";


export default function CardRound1({
    title,
    round1,
}:{
    title: string;
    round1:RetroRound1[];
})  {

    const [swiper, setSwiper] = useState<SwiperClass | null>(null)
    const [state, setState] = useState({
        start: true,
        end: false,
    })

return (

     <div className="flex flex-col gap-4 w-full">
            <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
            <div className="flex justify-between">
                <div className=""></div>
                <Link
                href={{
                    pathname:`/explore/${title}`,
                }}
                className=" lg:block h-8
                hover:bg-secondaryRed hover:text-primaryRed hover:border hover:border-primaryRed
                rounded-full px-3 py-1.5 cursor-pointer transition-colors self-center shrink-0 text-slate-900 border
                ">
                        <p className=" text-sm font-normal ">See all</p>
                </Link>
           </div>
           
            <div className="relative">
            <Swiper
                    onSwiper={setSwiper}
                    slidesPerView="auto"
                    // spaceBetween={24}
                    modules={[Pagination, Controller]}
                    initialSlide={0}
                    direction="horizontal"
                    className="mt-4 swiper-container"
                    onActiveIndexChange={(e) => {
                        setState(prev => ({ ...prev, start: e.isBeginning, end: e.isEnd }));
                    }}
                >
                    {round1.map((item, i) => (
                        <SwiperSlide className="" key={i}>
                            <RetroCard1 
                             description={item.Question}
                             title={item["Project Name"]}
                             opRecieve={item.allocation}
                             leader={item.Leader}
                            />
                        </SwiperSlide>
                    ))}

                </Swiper>

                {!state.start &&
                    <button className="hidden md:block absolute top-1/2 transform -translate-y-1/2 -left-4 md:-left-6 cursor-pointer z-50" onClick={() => swiper?.slidePrev()}>
                        <PreviousOutline size={32} />
                    </button>
                }

                {!state.end &&
                    <button className="hidden md:block absolute top-1/2 transform -translate-y-1/2 -right-4 md:-right-6 cursor-pointer z-50" onClick={() => swiper?.slideNext()}>
                        <NextOutline size={32} />
                    </button>
                }
            </div>
        </div>

    )

}


