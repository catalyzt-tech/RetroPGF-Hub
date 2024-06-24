"use client"
import { useRef } from "react";
import ProjectDetailSection from "./_component/_Project/ProjectDetailSection";
import OverviewSection from "./_component/_Project/OverviewSection";
import ContributionSection from "./_component/_Project/ContributionSection";
import { RetroRound2 } from "../RetroType2";
import QuestionSection from "./_component/_Project/DetailSection";
import ScrollSpy from "@/app/component/ScrollSpy";


export default function Cpage({
    data
}:{
    data: RetroRound2   
})  {

    const overViewRef = useRef<HTMLElement | null>(null)
    const contributionRef = useRef<HTMLElement | null>(null)
    const questionRef = useRef<HTMLElement | null>(null)
    const sections = [
        { name: "Overview", ref: overViewRef },
        { name: "Contribution", ref: contributionRef },
        { name: "Question", ref: questionRef },
      ];
    
return (

    <div className="flex mt-8 gap-10"> 
    {/* Scroll Spy */}
       
        <div className="lg:flex-grow flex flex-col gap-4 lg:gap-8">
            <section className="w-full h-full flex flex-col gap-4 lg:gap-12 lg:flex-grow" id="Overview" ref={overViewRef}>
                <ProjectDetailSection
                data={data}
                />
                <OverviewSection
                data={data}
                />
            </section>
            <ContributionSection data={data} contributionRef={contributionRef} />
            <QuestionSection data={data} questionRef={questionRef} />
        </div>

        <div className="hidden lg:block max-w-72 min-w-72 rounded-lg ">
            <ScrollSpy
            sections={sections}
            />
        </div>
    </div>

    )

}
