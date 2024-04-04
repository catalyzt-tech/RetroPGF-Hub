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
        secondText="Create Idea"
        />

        <div className="flex gap-4 md:gap-8 lg:gap-12 mt-10">
            <div className="w-[38.75rem] mx-auto flex flex-col gap-8">
                <div className="flex flex-col gap-5 mb-4">
                    <div className="flex flex-wrap justify-center items-center gap-4">
                        <h3 className="text-3xl md:text-5xl font-semibold text-gray-800">
                            Submit your idea
                        </h3>
                        <ChevronDownOutline className="w-8 h-8 md:w-12 md:h-12 fill-gray-800" />
                    </div>
                    <h6 className="text-center text-base md:text-xl font-normal text-gray-800">
                        Share your project idea to get feedback from experienced contributor
                    </h6>
                </div>

                <div className="flex flex-col gap-2.5">
                    <h6 className="text-sm font-semibold text-gray-800">Project Name</h6>
                    <InputRef
                        type="text"
                        placeholder="Project Name"
                        ref={projectRef}
                        className="border border-gray-200 bg-gray-50 text-slate-800 focus:ring focus:ring-primaryRed w-full px-5 py-3 rounded-md min-h-[40px]"
                    />
                </div>


                <div className="flex flex-col gap-2.5">
                    <h6 className="text-sm font-semibold text-gray-800">Website or Link</h6>
                    <InputRef
                        type="text"
                        placeholder="e.g. https://www.example.com"
                        ref={projectRef}
                        className="border border-gray-200 bg-gray-50 text-slate-800 focus:ring focus:ring-primaryRed w-full px-5 py-3 rounded-md min-h-[40px]"
                    />
                    <h6 className="text-sm font-normal text-gray-500">Include the full URL to your project's main website.</h6>
                </div>
              
                <div className="flex flex-col gap-2.5">
                    <h6 className="text-sm font-semibold text-gray-800">Github Link</h6>
                    <InputRef
                        type="text"
                        placeholder="e.g. https://www.example.com"
                        ref={projectRef}
                        className="border border-gray-200 bg-gray-50 text-slate-800 focus:ring focus:ring-primaryRed w-full px-5 py-3 rounded-md min-h-[40px]"
                    />
                </div>

               
                <div className="flex flex-col gap-2.5">
                    <h6 className="text-sm font-semibold text-gray-800">Project Logo</h6>
                    <input 
                    className="w-full text-gray-800 text-sm font-normal bg-gray-50 border file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:bg-gray-800 file:hover:bg-gray-800/80 file:text-white rounded-lg file:mr-4" 
                    id="file_input" 
                    type="file"/>

                    <h6 className="text-sm font-normal text-gray-500">Supported JPG or PNG (Max size is 10 MB)</h6>
                </div>


                <div className="flex flex-col gap-2.5">
                    <h6 className="text-sm font-semibold text-gray-800">Category</h6>
                    <InputRef
                        type="text"
                        placeholder="Select Category"
                        ref={projectRef}
                        className="border border-gray-200 bg-gray-50 text-slate-800 focus:ring focus:ring-primaryRed w-full px-5 py-3 rounded-md min-h-[40px]"
                    />
                    <h6 className="text-sm font-normal text-gray-500">Include the full URL to your project's main website.</h6>
                </div>
                
                <div className="flex flex-col gap-2.5">
                    <h6 className="text-sm font-semibold text-gray-800">Project Description</h6>
                    <TextAreaRef
                        type="text"
                        placeholder="Briefly describe your project's purpose and features. What is this project used for?"
                        ref={descRef}
                        className="border border-gray-200 bg-gray-50 text-slate-800 focus:ring focus:ring-primaryRed w-full px-5 py-3 rounded-md min-h-[40px]  h-48 "
                    />
                </div>

                <div className="flex flex-col gap-2.5">
                    <h6 className="text-sm font-semibold text-gray-800">Feedback detail</h6>
                    <TextAreaRef
                        type="text"
                        placeholder="Describe the feedback you are looking for or Highlight what you concern or need help with"
                        ref={descRef}
                        className="border border-gray-200 bg-gray-50 text-slate-800 focus:ring focus:ring-primaryRed w-full px-5 py-3 rounded-md min-h-[40px]  h-40 md:h-32 "
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
