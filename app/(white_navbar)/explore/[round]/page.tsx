"use client";

import Cpage from "./Cpage";
import BreadCumpExplore from "./_component/BreadCumpExplore";

export default function page({
    params
}:{
    params:{
        round:string
    }
})  {

return (

    <> 
        <div className="bg-gradient-to-b  from-slate-200 to-10% to-[#E2E8F000">
            <div className="flex flex-col gap-6  mx-20">
                <div className="mt-10">
                    <BreadCumpExplore
                    secondText={params.round}
                    />
                </div>

                <div className="mt-4">
                    <h6 className="text-5xl font-semibold text-gray-800 mb-3">{params.round}</h6>
                </div>

                <Cpage/>
            </div>
        </div>
    </>

    )

}
