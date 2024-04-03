import Cpage from "./Cpage";

export default function page({

}: {

    }) {

    return (

        <>
            <div className="relative max-[220px]:min-h-[26rem] max-[220px]:max-h-[26rem] max-h-[19rem] min-h-[19rem]">
                <div className="bg-gradient-to-br from-[#FFDFDD] to-100% via-[#FFD2FF] to-[#DCDBFF] w-full absolute -top-[4.5rem] left-0 h-[23.5rem] max-[220px]:h-[26rem]">
                    <div className="mt-[4.5rem]" />

                    <div className="px-4 md:px-0 py-12 md:py-16  flex flex-col justify-center items-center font-rubik h-[19rem] w-full">
                        <h1 className="mb-2 md:mb-4 text-3xl md:text-5xl font-semibold text-gray-800">RetroPGF Hub Community</h1>
                        <p className="mb-4 md:mb-8 text-base md:text-lg font-normal text-gray-800">Share your ideas, thoughts and feedback to help and grow together!</p>

                        <div className="flex flex-wrap items-center justify-center gap-3">
                            <button className="w-44 h-10 bg-white hover:bg-gray-50 py-3 px-8 rounded-lg ">
                                <h6 className="text-sm font-semibold text-gray-800">Ask question</h6>
                            </button>
                            <button className="w-44 h-10 bg-gray-800 hover:bg-gray-800/80 py-3 px-7 rounded-lg ">
                                <h6 className="text-sm font-semibold text-white">Submit your idea</h6>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-20 py-8 md:max-w-[1300px] mx-auto">
              <Cpage/>
            </div>

        </>

    )

}
