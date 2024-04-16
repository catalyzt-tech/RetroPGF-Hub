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
        <div className="flex flex-col bg-white rounded-lg">
            <div className="block relative w-full h-36 mb-16">
                <Image
                    src={convertImageClodinary(data.bannerPath, 947, 150) || "/random/OP-Banner.png"}
                    alt="background"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="relative flex flex-col gap-4 p-2 lg:p-6">
                <div className="absolute -top-24 lg:-top-32 left-4 rounded-[0.25rem] flex flex-shrink-0 z-20">
                    <div className="relative w-16 h-16 lg:w-32 lg:h-32">
                        <Image
                            src={data.iconPath || "/random/OP-Logo.png"}
                            alt="avatar image"
                            className="rounded-full object-cover"
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
                        className="flex flex-wrap gap-1.5">
                        <LinkIcon size={24} className="fill-gray-500" />
                        <p className="text-base font-medium text-gray-600 hover:underline">
                            Website
                        </p>
                    </a>

                    <a
                        href={data["Agora URL"]}
                        target="_blank" rel="noopener noreferrer"
                        className="flex flex-wrap gap-1.5">
                        <ThumbsUp size={24} className="fill-gray-500" />
                        <p className="text-base font-medium text-gray-600 hover:underline">
                            Agora Url
                        </p>
                    </a>

                    <a
                        href={data["West URL"]}
                        target="_blank" rel="noopener noreferrer"
                        className="flex flex-wrap gap-1.5">
                        <LinkIcon size={24} className="fill-gray-500" />
                        <p className="text-base font-medium text-gray-600 hover:underline">
                            OP Mainnet
                        </p>
                    </a>
                
                </div>

                {/* Category */}
                <div className="">
                    <div className="flex  flex-wrap gap-4 ">
                        {handleCategoryRound3(data["New Main-Category"])}
                        <div className="inline-flex px-2 py-1 rounded-full bg-slate-50 hover:bg-slate-100/75 cursor-pointer w-fit">
                            <h6 className="text-xs font-normal text-gray-600 line-clamp-1 break-all">
                                {data['Sub-category']}
                            </h6>
                        </div>
                    </div>
                </div>

            </div>
        </div>
       

        </>

    )

}
