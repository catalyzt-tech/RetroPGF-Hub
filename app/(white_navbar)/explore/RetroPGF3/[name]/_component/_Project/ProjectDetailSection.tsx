import { handleCategoryRound3 } from "@/app/lib/InitialMount";
import LinkIcon from "@carbon/icons-react/lib/Link";
import Image from "next/image";
import { RetroRound3 } from "../../../RetroType3";
import { ThumbsUp } from "@carbon/icons-react";
import { convertImageClodinary } from "@/app/lib/utils";
export default function ProjectDetailSection({
    data
}: {
    data: RetroRound3 
    }) {


    return (

        <>
        <div className="flex flex-col bg-white rounded-lg overflow-hidden border">
            <div className="block relative w-full h-60 mb-16">
                <Image
                    // convertImageClodinary(data.bannerPath, 947, 150)
                    src={data.bannerPath || "/random/OP-Banner.png"}
                    alt="background"
                    fill
                    className="w-fit object-cover"
                />
            </div>
            <div className="relative flex flex-col gap-4 p-2 sm:p-4 lg:p-6">
                <div className="absolute -top-24 lg:-top-32 left-4 rounded-[0.25rem] flex flex-shrink-0 z-20">
                    <div className="relative w-16 h-16 lg:w-32 lg:h-32">
                        <Image
                            src={data.iconPath || "/random/OP-Logo.png"}
                            alt="avatar image"
                            className="rounded-lg object-cover"
                            fill
                        />
                    </div>
                </div>

                <h3 className="text-3xl lg:text-5xl font-semibold text-gray-800">
                    {data.displayName}
                </h3>

                {/* Link */}
                <div className="flex flex-wrap gap-6 mt-3">
                    <a
                        href={data.websiteUrl}
                        target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-500 hover:text-primaryRed">
                        <LinkIcon size={20} />
                        <p className="text-sm font-normal line-clamp-1">
                        {data.websiteUrl}
                        </p>
                    </a>

                
                </div>

            </div>
        </div>
       

        </>

    )

}
