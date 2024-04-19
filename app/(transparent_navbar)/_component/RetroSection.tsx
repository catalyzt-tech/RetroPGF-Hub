"use client"

import { useState } from 'react'
import { Tab } from '@headlessui/react'
import RetroCard from "@/app/component/Card/RetroCard";
import { Swiper,  SwiperSlide } from 'swiper/react';
import { classNames } from '@/app/lib/utils';



export default function RetroSection() {
  let [categories] = useState({
    RetroPGF3: [1, 2, 3, 4, 5, 6, 7, 8],
    RetroPGF2: [1, 2, 3],
    RetroPGF1: [1, 2],
  })
  
  return (
    <div className="flex flex-col md:w-full gap-6">
      <Tab.Group>
        <Tab.List className="flex justify-center sm:gap-6 gap-3 border-b-2 border-b-gray-200">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-fit h-8 font-rubik md:text-lg sm:text-base text-sm font-medium text-left',
                  'ring-white/60 ring-offset-2 focus:outline-none focus:ring-2',
                  selected
                    ? 'text-gray-800 border-b-4 border-b-red-600'
                    : 'text-gray-500 hover:border-b-4 hover:border-b-red-200 border-b-4 border-b-transparent'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white justify-center',
              )}
            >
              <ul className="lg:flex-wrap justify-center gap-6 lg:flex hidden">
                {posts.map((postID) => (
                  <li
                    key={postID}
                  >
                   <RetroCard/>
                  </li>
                ))}
              </ul>
            
              <div className="relative lg:hidden flex">
            <Swiper
                    slidesPerView="auto"
                    spaceBetween={24}
                    initialSlide={0}
                    direction="horizontal"
                    className=" swiper-container"
                >
                    {posts.map((postID) => (
                        <SwiperSlide className="" key={postID}>
                            <RetroCard />
                        </SwiperSlide>
                    ))}

                </Swiper>
               
            </div>
            
            </Tab.Panel>
          ))}

        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
