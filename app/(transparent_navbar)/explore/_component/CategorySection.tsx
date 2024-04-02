"use client"

import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Pagination, Controller } from 'swiper/modules';
import NextOutline from "@carbon/icons-react/lib/NextOutline";
import PreviousOutline from "@carbon/icons-react/lib/PreviousOutline";
import { useState } from "react";
import CategoryCard from './CategoryCard';

export default function CategorySection({

}: {

}) {

    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const [swiper, setSwiper] = useState<SwiperClass | null>(null)
    const [state, setState] = useState({
        start: true,
        end: false,
    })



    return (

        <div className="flex flex-col gap-4 w-full">
            <h2 className="text-2xl font-semibold text-gray-900">Category</h2>
            <div className="relative">
                <Swiper
                    onSwiper={setSwiper}
                    slidesPerView="auto"
                    modules={[Pagination, Controller]}
                    initialSlide={0}
                    direction="horizontal"
                    className="mt-4 swiper-container"
                    onActiveIndexChange={(e) => {
                        setState(prev => ({ ...prev, start: e.isBeginning, end: e.isEnd }));
                    }}
                >
                    {arr.map((item) => (
                        <SwiperSlide key={item}>
                            <CategoryCard i={item} />
                        </SwiperSlide>
                    ))}

                </Swiper>
                {!state.start &&
                    <button className="hidden md:block absolute top-1/2 transform -translate-y-1/2 -left-4 lg:-left-5 cursor-pointer z-50" onClick={() => swiper?.slidePrev()}>
                        <PreviousOutline size={32} />
                    </button>
                }

                {!state.end &&
                    <button className="hidden md:block absolute top-1/2 transform -translate-y-1/2 -right-4 lg:-right-5 cursor-pointer z-50" onClick={() => swiper?.slideNext()}>
                        <NextOutline size={32} />
                    </button>
                }

            </div>
        </div>

    )

}
