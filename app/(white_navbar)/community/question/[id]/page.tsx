import RecentlyShareSection from "../../project/[id]/_component/RecentlyShareSection";
import QuestionSection from "./_component/QuestionSection";
import BreadCumpCommunity from "@/app/component/BreadCump/BreadCumpCommunity";

export default function page({

}:{
    
})  {

return (

   <div className="px-1 sm:px-4  md:px-8 lg:px-20 py-10 bg-gradient-to-b  from-slate-200 to-10% to-[#E2E8F000]">
            {/* BreadCump */}
            <BreadCumpCommunity/>

            <div className="flex gap-4 md:gap-8 lg:gap-12 mt-10">
                <div className="flex-grow">
                    <QuestionSection/>
                </div>

               <div className="hidden md:block">
                    <RecentlyShareSection/>
               </div>
               
            </div>
        </div>

    )

}
