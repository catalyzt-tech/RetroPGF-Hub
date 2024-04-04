"use client"
import BreadCumpCommunity from "@/app/component/BreadCump/BreadCumpCommunity";
import InputRef from "@/app/component/Input/InputRef";
import TextAreaRef from "@/app/component/Input/TextAreaRef";
import ChevronDownOutline from "@carbon/icons-react/lib/ChevronDownOutline";
import { useRef } from "react";

export default function page({

}:{
    
})  {

    const projectRef = useRef<HTMLInputElement>(null);

    const descRef = useRef<HTMLTextAreaElement>(null);
    return (

    <div className="px-2 sm:px-4  md:px-8 lg:px-20 py-10 bg-gradient-to-b  from-slate-200 to-10% to-[#E2E8F000]">
        {/* BreadCump */}
        <BreadCumpCommunity
        secondText="Ask Question"
        />

        <div className="flex gap-4 md:gap-8 lg:gap-12 mt-10">
            <div className="w-[38.75rem] mx-auto flex flex-col gap-8">
                <div className="flex flex-col gap-5 mb-4">
                    <div className="flex flex-wrap justify-center items-center gap-4">
                        <h3 className="text-3xl md:text-5xl font-semibold text-gray-800">
                            Ask Question
                        </h3>
                        <ChevronDownOutline className="w-8 h-8 md:w-12 md:h-12 fill-gray-800" />
                    </div>
                    <h6 className="w-full md:w-2/3 mx-auto text-center text-base md:text-xl font-normal text-gray-800">
                        Have anything it mind that still can’t find the answer, then it’s time to ask!
                    </h6>
                </div>

                <div className="flex flex-col gap-2.5">
                    <h6 className="text-sm font-semibold text-gray-800">Title</h6>
                    <InputRef
                        type="text"
                        placeholder="Title"
                        ref={projectRef}
                        className="border border-gray-200 bg-gray-50 text-slate-800 focus:ring focus:ring-primaryRed w-full px-5 py-3 rounded-md min-h-[40px]"
                    />
                </div>


                <div className="flex flex-col gap-2.5">
                    <h6 className="text-sm font-semibold text-gray-800">Detail</h6>
                    <TextAreaRef
                        type="text"
                        placeholder="Add more detail about your question"
                        ref={descRef}
                        className="border border-gray-200 bg-gray-50 text-slate-800 focus:ring focus:ring-primaryRed w-full px-5 py-3 rounded-md min-h-[40px]  h-48 "
                    />
                </div>

                <button
                className=" px-6 py-2.5 bg-primaryRed hover:bg-primaryRed/90 rounded-lg w-fit"
                >
                    <h6
                    className="text-baase font-medium text-white"
                    >
                        Submit
                    </h6>
                </button>
            </div>
        </div>
    </div>

    )

}
