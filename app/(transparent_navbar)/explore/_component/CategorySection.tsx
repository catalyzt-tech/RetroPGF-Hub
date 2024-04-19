"use client"

import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Pagination, Controller } from 'swiper/modules';
import { useState } from "react";
import CategoryCard from './CategoryCard';
import ArrowLeft from '@carbon/icons-react/lib/ArrowLeft';
import ArrowRight from '@carbon/icons-react/lib/ArrowRight';

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
                    pagination={true}
                    modules={[Pagination, Controller]}
                    initialSlide={0}
                    direction="horizontal"
                    className="mt-4 swiper-container"
                    onActiveIndexChange={(e) => {
                        setState(prev => ({ ...prev, start: e.isBeginning, end: e.isEnd }));
                    }}
                >
                    {arr.map((item) => (
                        <SwiperSlide className="lg:mb-12" key={item}>
                            <CategoryCard i={item} />
                        </SwiperSlide>
                    ))}

                </Swiper>
                {!state.start &&
                    <button 
                    className="
                        rounded-full p-1 bg-slate-100 hover:bg-slate-200 
                        hidden lg:block absolute top-1/2 transform -translate-y-1/2 -left-6 cursor-pointer z-50" 
                        onClick={() => swiper?.slidePrev()}
                        >
                        <ArrowLeft size={24} className="fill-gray-900" />
                    </button>
                }

                {!state.end &&
                    <button className="
                    rounded-full p-1 bg-slate-100 hover:bg-slate-200 
                    hidden lg:block absolute top-1/2 transform -translate-y-1/2 -right-8 cursor-pointer z-50" 
                    onClick={() => swiper?.slideNext()}>
                        <ArrowRight size={24} className="fill-gray-900"/>
                    </button>
                }

            </div>
        </div>

    )

}
