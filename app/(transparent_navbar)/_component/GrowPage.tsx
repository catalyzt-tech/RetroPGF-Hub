"use client";

import { useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import ProjectFeedBackCard from "../community/_component/ProjectFeedBackCard";
import QuestionCard from "../community/_component/QuestionCard";
import { Controller } from "swiper/modules";

async function handleFavProject(projectId:string) {
    
}
function ProjectCardMock() {
    return (
    <ProjectFeedBackCard
        category="Developer Ecosystem"
        commentCount={12}
        favCount={12}
        createdAt={new Date().toString()}
        description="A decentralized marketplace for buying and selling music NFTs. We envision a world where artists have more control over their distribution, revenue streams, and can directly connect with fans in new ways. Our platform features easy minting, transparent royalty structures, and we're exploring ways to incorporate fan-driven rewards and exclusive content tied to NFT ownership.
        We're particularly interested in feedback on the UI/UX design. Are we simplifying the minting and listing process enough for non-technical musicians? We also want to ensure the browsing and discovery experience feels intuitive for fans. Additionally, we'd appreciate suggestions on innovative ways to use NFTs beyond simple ownership – how might we facilitate deeper engagement between artists and their communities?"
        favOrNot={false}
        handleFavoriteProject={handleFavProject}
        id="/"
        logoUrl="/random/metamask.png"
        owner={{
            profile:"/random/smallAvatar.png",
            username:"@smartcontact",
        }}
        title="Metamask"
        background="bg-white max-[350px]:min-h-[300px] max-[350px]:max-h-[300px] h-full"
        />
        )
    }
    
    function QuestionCardMock() {
        return (
        <QuestionCard
        category="Developer Ecosystem"
        commentCount={12}
        createdAt={new Date().toString()}
        description="Okay, I want to get into this Web3 thing, but it feels like everyone's speaking a different language. Are there any newbie-friendly places to learn without getting overwhelmed?"
        favCount={12}
        favOrNot={false}
        handleFavoriteProject={handleFavProject}
        id="/"
        owner={{
            profile:"/random/smallAvatar.png",
            username:"@smartcontact",
        }}
        title="Where do I even start with Web3?"
        background="bg-white max-[350px]:min-h-[300px] max-[350px]:max-h-[300px] h-full"
        />
    )
}

export default function GrowPage() {




  return (
    <>
        <div className="w-full lg:flex flex-col gap-4 hidden ">
            <ProjectCardMock/>
            <QuestionCardMock/>
        </div>
        <div className="block lg:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={24}
          initialSlide={0}
          direction="horizontal"
          className="swiper-container"
        >
          <SwiperSlide className="h-full">
            <ProjectCardMock/>
          </SwiperSlide>
          <SwiperSlide className="h-full">
                <QuestionCardMock/>
          </SwiperSlide>
        </Swiper>
        </div>


    </>
  );
}

    