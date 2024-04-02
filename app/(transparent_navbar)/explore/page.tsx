
import CategorySection from "./_component/CategorySection";
import InputSearchExplore from "./_component/InputSearchExplore";
import Retro1Section from "./_component/Retro1Section";
import RetroDynamicSection from "./_component/RetroDynamicSection";


export default function page({

}: {

    }) {


    

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

                <RetroDynamicSection
                title="RetroPGF3"
                />

                <RetroDynamicSection
                title="RetroPGF2"
                />

               <Retro1Section
               
               />

            </div>

        </>

    )

}
