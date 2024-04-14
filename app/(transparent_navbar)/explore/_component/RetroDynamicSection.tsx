"use client";

import RetroCard from "@/app/component/Card/RetroCardRound3";
import { useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Pagination, Controller } from 'swiper/modules';
import NextOutline from "@carbon/icons-react/lib/NextOutline";
import PreviousOutline from "@carbon/icons-react/lib/PreviousOutline";
import Link from "next/link";


export default function RetroDynamicSection({
    title
}: {
    title: string
}) {

    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const [swiper, setSwiper] = useState<SwiperClass | null>(null)
    const [state, setState] = useState({
        start: true,
        end: false,
    })

    return (

        <div className="flex flex-col gap-4 w-full">
            <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>

           <div className="flex justify-between">
            <div className="flex gap-3">
                    {/* {newFilter['category'].map((item, i) => ( */}
                    <div
                        data-tooltip-id={"hello"}
                        // key={i}
                        className={`
                                lg:block h-8 group relative content-center
                                hover:bg-secondaryRed hover:text-primaryRed hover:border hover:border-primaryRed
                                border rounded-full px-3 py-1.5 cursor-pointer transition-colors self-center shrink-0 bg-secondaryRed text-primaryRed border-secondaryRed
                                `}
                        // ${
                        // checkBox['Category'].some(
                        //     (elem) =>
                        //     elem ===
                        //     newFilter.category.find((elem) => elem.id === item.id)
                        //         ?.id
                        // )
                        //     ? 'bg-secondaryRed text-primaryRed border-secondaryRed'
                        //     : 'text-slate-900 border'
                        // }
                        onClick={() => {
                            // handleChangeCheckBox(
                            //     'Category' as keyof CheckBoxStateType,
                            //     item.id
                            // )
                        }}
                    >
                        <p className=" text-sm font-normal ">some category</p>

                        {/* Tool tip */}
                        {/* <ReactTooltip
                        opacity={100}
                        id={item.id}
                        place="top"
                        variant="error"
                        style={{ zIndex: 99 }}
                        className="text-sm font-light"
                        content={item.description}
                        /> */}
                    </div>
                    {/* ))} */}
                </div>
                
                <Link
                href={{
                    pathname:`/explore/${title}`,
                    // query:{round: [title, "test"]}
                }}
                className="lg:block h-8 group relative content-center
                    hover:bg-gray-50 hover:text-gray-500 hover:border hover:border-gray-600
                    border rounded-full px-3 py-1.5 cursor-pointer transition-colors self-center shrink-0 text-slate-900">
                        See all
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
                    {arr.map((item) => (
                        <SwiperSlide className="" key={item}>
                            <RetroCard />
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
