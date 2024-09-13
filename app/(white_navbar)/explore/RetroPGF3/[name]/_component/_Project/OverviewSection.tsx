import { RetroRound3 } from "../../../RetroType3"
import { handleCategoryRound3 } from "@/app/lib/common";

export default function OverviewSection({
    data
}: {
    data: RetroRound3 
}) {

return (

    <> 
<div className="flex flex-col gap-6 bg-white rounded-lg p-4 lg:p-6 border">
            <h3 className="text-3xl font-semibold">
                Overview
            </h3>
            <hr className="border-t-gray-100"/>
            <p
            className="mb-1 text-base font-normal text-gray-600 break-all break-words"
            >
                {data.bio}
            </p>
            
            <div className="flex flex-col gap-1">
                <div className="flex flex-wrap gap-3 items-center">
                    <p className="mb-1 text-base font-normal text-gray-500">RetroPGF Received :</p>
                        <p className="mb-1 text-base font-semibold text-gray-600">
                            {data.scaled.toLocaleString("en-US", { maximumFractionDigits: 2 })} OP      
                        </p>
                </div>

                <div className="flex flex-wrap gap-3 items-center">
                    <p className="mb-1 text-base font-normal text-gray-500">Appears in:</p>
                    <div className="">
                        <p className="mb-1 text-base font-semibold text-gray-600">
                            {data.ballot} ballots   
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-3 items-center">
                    <p className="mb-1 text-base font-normal text-gray-500">Category:</p>
                        <div className="flex flex-wrap gap-4 ">
                        {handleCategoryRound3(data["New Main-Category"]!)}
                       
                    </div>
                </div>

                <div className="flex flex-wrap gap-3 items-center">
                    <p className="mb-1 text-base font-normal text-gray-500">Subcategory:</p>
                    <p className="mb-1 text-base font-semibold text-gray-600 break-all w-full md:w-auto">
                        {data["Sub-category"]}   
                    </p>
                </div>

            </div>
        </div>
    </>

    )

}

