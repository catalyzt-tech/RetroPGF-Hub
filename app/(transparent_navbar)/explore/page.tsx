import { RetroRound3 } from "@/app/(white_navbar)/explore/RetroPGF3/RetroType3";
import CategorySection from "./_component/CategorySection";
import InputSearchExplore from "./_component/InputSearchExplore";
import Retro1Section from "./_component/CardRound1";
import { RetroRound2 } from "@/app/(white_navbar)/explore/RetroPGF2/RetroType2";
import { RetroRound1 } from "@/app/(white_navbar)/explore/RetroPGF1/RetroType1";
import { getJsonRound1 } from "@/app/(white_navbar)/explore/RetroPGF1/page";
import { getJsonRound2 } from "@/app/(white_navbar)/explore/RetroPGF2/page";
import { getJsonRound3 } from "@/app/(white_navbar)/explore/RetroPGF3/page";
import CardRound3 from "./_component/CardRound3";
import CardRound2 from "./_component/CardRound2";


async function getAllRound(): Promise<{round1:RetroRound1[], round2:RetroRound2[], round3:RetroRound3[], cateRound3: Map<string, number>, cateRound2: Map<string, number>}> {
    
    const round1 = (await getJsonRound1());

    const round2 = (await getJsonRound2());

    const round3 = (await getJsonRound3());
    const cateRound2Counter = new Map<string, number>();
    const cateRound3Counter = new Map<string, number>();


    round2.forEach(project => {
        const cateRound2 = project.Category;
        if (cateRound2) {
            if (cateRound2Counter.has(cateRound2)) {
                cateRound2Counter.set(cateRound2, cateRound2Counter.get(cateRound2)! + 1);
            } else {
                cateRound2Counter.set(cateRound2, 1);
            }
        }
    });

    round3.forEach(project => {
        const cateRound3 = project["New Main-Category"];
        if (cateRound3) {
            if (cateRound3Counter.has(cateRound3)) {
                cateRound3Counter.set(cateRound3, cateRound3Counter.get(cateRound3)! + 1);
            } else {
                cateRound3Counter.set(cateRound3, 1);
            }
        }
    });

    


    return {round1:round1.slice(0, 20), round2:round2.slice(0, 20), round3:round3.slice(0, 20), cateRound3:cateRound3Counter, cateRound2:cateRound2Counter};
}


export default async function page({

}: {

}) {


    const { round1, round2, round3, cateRound2, cateRound3 } = await getAllRound()

    return (

        <>
            <div className="relative max-h-[19rem] min-h-[19rem]">
                <div className="bg-gradient-to-br from-[#FFFEEA] to-100% via-[#FFDAAF] to-[#FFAB9F] w-full absolute -top-[4.5rem] left-0 h-[23.5rem]">
                    <div className="mt-[4.5rem]" />
                    <div className="px-4 md:px-0 py-12 md:py-16  flex flex-col justify-center items-center font-rubik h-[19rem] w-full">
                        <h1 className="mb-3 md:mb-7 text-3xl md:text-5xl font-semibold text-gray-800">Explore Project Ideas</h1>
                        <p className="mb-8 text-lg font-normal text-gray-900">Find inspiration from all RetroPGF projects</p>
                        <div className="w-full min-[350px]:w-[20rem] lg:w-[26.25rem] ">
                            <InputSearchExplore />
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:px-20 px-4 flex flex-col gap-12 mt-12">
                <CategorySection />

                <CardRound3
                title="RetroPGF3"
                round3={round3}
                cateRound3={cateRound3}
                
                />

                <CardRound2
                title="RetroPGF2"
                cateRound2={cateRound2}
                round2={round2}
                />

               <Retro1Section
                title="RetroPGF1"
                round1={round1}
               
               />

            </div>

        </>

    )

}
