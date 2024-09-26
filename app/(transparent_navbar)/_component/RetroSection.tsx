"use client"

import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { Swiper,  SwiperSlide } from 'swiper/react';
import { classNames } from '@/app/lib/utils';
import { RetroRound1 } from '@/app/(white_navbar)/explore/RetroPGF1/RetroType1';
import { RetroRound2 } from '@/app/(white_navbar)/explore/RetroPGF2/RetroType2';
import { RetroRound3 } from '@/app/(white_navbar)/explore/RetroPGF3/RetroType3';
import { iRetroPGF4Project } from '@/app/(white_navbar)/explore/RetroPGF4/RetroType4';
import RetroCard4 from '@/app/component/Card/RetroCardRound4'
import RetroCard3 from '@/app/component/Card/RetroCardRound3';
import RetroCard2 from '@/app/component/Card/RetroCardRound2';
import { RetroCard1 } from '@/app/component/Card/RetroCardRound1';



export default function RetroSection({
  round1,
  round2,
  round3,
  round4
}:{
  round1:RetroRound1[], 
  round2:RetroRound2[], 
  round3:RetroRound3[],
  round4:iRetroPGF4Project[]

}) {
  
  let [state] = useState({
    RetroPGF4: round4,
    RetroPGF3: round3,
    RetroPGF2: round2,
    RetroPGF1: round1,
  })
  
  function handleDynamicRound(key:string) {
    switch (key) {
      case "RetroPGF4":
        return (
         state["RetroPGF4"].map((item, i) => (
            <SwiperSlide key={i} className="">
              <RetroCard4
              key={i}
                title={item.name}
                category={item.category}
                description={item.description}
                teamSize={item.team.length}
                opRecieve={item.reward ?? 0}
                rank={item.ranking}
                round="RetroPGF 4"
                // vote={0}
                icon={item.projectAvatarUrl}
                banner={item.proejctCoverImageUrl}
                isEligible={item.isEligibleFinal}
                />
            </SwiperSlide>
         ))
        )
      case "RetroPGF3":
        return (
         state["RetroPGF3"].map((item, i) => (
            <SwiperSlide key={i} className="">
              <RetroCard3
                title={item.displayName}
                category={item["New Main-Category"]}
                description={item.bio}
                opRecieve={item.scaled}
                rank={item.rank}
                round="RetroPGF 3"
                vote={item.ballot}
                icon={item.iconPath}
                banner={item.bannerPath}
                />
            </SwiperSlide>
         ))
        )
      case "RetroPGF2":
        return (
         state["RetroPGF2"].map((item, i) => (
            <SwiperSlide key={i}>
             <RetroCard2 
                title={item.name}
                category={item.Category}
                description={item.about}
                opRecieve={item["OP Received"]}
                round="RetroPGF 2"
                vote={item.Vote_Recieved}
                icon={item.iconPath}
                banner={item.bannerPath}
                />
            </SwiperSlide>
         ))
        )
      case "RetroPGF1":
        return (
         state["RetroPGF1"].map((item, i) => (
            <SwiperSlide key={i}>
               <RetroCard1 
                    description={item.Question}
                    title={item["Project Name"]}
                    opRecieve={item.allocation}
                    leader={item.Leader}
                  />
            </SwiperSlide>
         ))
        )
    
      default:
        break;
    }
}

function handleDynamicRoundNoSwiper(key:string) {
  switch (key) {
    case "RetroPGF4":
        return (
         state["RetroPGF4"].map((item, i) => (
              <RetroCard4
              key={i}
                title={item.name}
                category={item.category}
                description={item.description}
                teamSize={item.team.length}
                opRecieve={item.reward ?? 0}
                rank={item.ranking}
                round="RetroPGF 4"
                // vote={0}
                icon={item.projectAvatarUrl}
                banner={item.proejctCoverImageUrl}
                isEligible={item.isEligibleFinal}
                />
         ))
        )
    case "RetroPGF3":
      return (
       state["RetroPGF3"].map((item, i) => (
            <RetroCard3
            key={i}
              title={item.displayName}
              category={item["New Main-Category"]}
              description={item.bio}
              opRecieve={item.scaled}
              rank={item.rank}
              round="RetroPGF 3"
              vote={item.ballot}
              icon={item.iconPath}
              banner={item.bannerPath}
              />
       ))
      )
    case "RetroPGF2":
      return (
       state["RetroPGF2"].map((item, i) => (
           <RetroCard2 
           key={i}
              title={item.name}
              category={item.Category}
              description={item.about}
              opRecieve={item["OP Received"]}
              round="RetroPGF 2"
              vote={item.Vote_Recieved}
              icon={item.iconPath}
              banner={item.bannerPath}
              />
       ))
      )
    case "RetroPGF1":
      return (
       state["RetroPGF1"].map((item, i) => (
             <RetroCard1 
             key={i}
                  description={item.Question}
                  title={item["Project Name"]}
                  opRecieve={item.allocation}
                  leader={item.Leader}
                />
       ))
      )
  
    default:
      break;
  }
}


  return (
    <div className="flex flex-col md:w-full gap-6">
      <Tab.Group>
        <Tab.List className="flex justify-center sm:gap-6 gap-3 border-b-2 border-b-gray-200">
          {Object.keys(state).map((round, i) => (
            <Tab
              key={i}
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
              {round}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {Object.keys(state).map((round, i) => (
            <Tab.Panel
              key={i}
            >
              <ul className="hidden lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-12 xl:gap-16">
                {handleDynamicRoundNoSwiper(round)}
              </ul>
            
            <div className="lg:hidden flex " >
              <Swiper
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                      500: {
                        slidesPerView: 2,
                        spaceBetween: 100,
                      },
                      800: {
                        slidesPerView: 3,
                        spaceBetween: 60,
                      },
                    }}
                    initialSlide={0}
                    direction="horizontal"
                    className="mt-4 swiper-container "
                >
                  {handleDynamicRound(round)}
                </Swiper>
               
            </div>
            
            </Tab.Panel>
          ))}

        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

   // breakpoints={{
  //   640: {
  //     slidesPerView: 3,
  //     spaceBetween: 20,
  //     grid:{
  //       rows: 2
  //     }
  //   },
  //   768: {
  //     slidesPerView: 4,
  //     spaceBetween: 40,
  //     grid:{
  //       rows: 2
  //     }
  //   },
  //   1024: {
  //     slidesPerView: 5,
  //     spaceBetween: 50,
  //     grid:{
  //       rows:2
  //     }
  //   },
  // }}
  // grid={{
  //   rows:2
  // }}