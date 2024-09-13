import { RetroRound2 } from "../../../RetroType2";
import { handleCategoryRound2 } from "@/app/lib/common";

export default function OverviewSection({
    data
}: {
    data: RetroRound2
}) {

    return (

        <>
            <div className="flex flex-col gap-6 bg-white rounded-lg p-4 lg:p-6 border">
                <h3 className="text-3xl font-semibold">
                    Overview
                </h3>
                <hr className="hidden sm:block border-t-gray-100" />
                <p
                    className="mb-1 text-base font-normal text-gray-600 break-all break-words"
                >
                    {data.about}
                </p>

                <div className="flex flex-col gap-1">
                    <div className="flex flex-wrap gap-3 items-center">
                        <p className="mb-1 text-base font-normal text-gray-500">RetroPGF Received :</p>
                        <p className="mb-1 text-base font-semibold text-gray-600">
                            {data["OP Received"].toLocaleString("en-US", { maximumFractionDigits: 2 })} OP
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3 items-center">
                        <p className="mb-1 text-base font-normal text-gray-500">Appears in:</p>
                        <div className="">
                            <p className="mb-1 text-base font-semibold text-gray-600">
                                {Number(data.Vote_Recieved).toFixed(2)} ballots
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3 items-center">
                        <p className="mb-1 text-base font-normal text-gray-500">Category:</p>
                        <div className="flex flex-wrap gap-4 ">
                        {handleCategoryRound2(data.Category!)}
                       
                    </div>
                    </div>


                </div>
            </div>
        </>

    )

}

