"use client";

import { useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Pagination, Controller } from 'swiper/modules';
import NextOutline from "@carbon/icons-react/lib/NextOutline";
import PreviousOutline from "@carbon/icons-react/lib/PreviousOutline";
import LinkIcon from "@carbon/icons-react/lib/Link";
import Trophy from "@carbon/icons-react/lib/Trophy";
import Link from "next/link";


export default function Retro1Section({

}:{
    
})  {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const [swiper, setSwiper] = useState<SwiperClass | null>(null)
    const [state, setState] = useState({
        start: true,
        end: false,
    })

return (

     <div className="flex flex-col gap-4 w-full">
            <h2 className="text-2xl font-semibold text-gray-900">RetroPGF1</h2>
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
                    {arr.map((item) => (
                        <SwiperSlide className="" key={item}>
                            <CardRound1 />
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


function CardRound1() {
    return (
        <div className="flex flex-col gap-2 flex-grow-1 flex-shrink-0 border rounded-lg shadow-sm h-[14rem] w-[14.25rem] relative mx-3">
        <div className="p-4 flex flex-col justify-start items-start gap-3">
            <div className="flex flex-col gap-0.5">
                <Link href={"/explore"} className="text-sm font-bold text-gray-800 z-30 hover:underline">L2BEAT</Link>
                <p className="text-sm font-normal text-gray-600 line-clamp-2">
                    Ethereum Layer Two (L2) scaling analysis and research website.
                </p>
            </div>
            <div className="px-2 py-1 bg-yellow-50 rounded-full">
                <p className="text-yellow-700 text-xs font-medium">OP Stack</p>
            </div>
            <div className="flex gap-2">
                <LinkIcon size={20} />
                <p className="text-sm font-light text-gray-600">Supranationbal</p>
            </div>
            <div className="flex gap-2">
                <LinkIcon size={20} />
                <p className="text-sm font-light text-gray-600">Github</p>
            </div>
            <div className="flex gap-2">
                <Trophy size={20} />
                <div className="flex gap-1">
                    <p className="text-sm font-semibold text-gray-800">256,294.36 OP</p>
                    <p className="text-sm font-light text-gray-600">#17</p>
                </div>

            </div>
        </div>
    </div>
    )
}