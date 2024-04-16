import Trophy from "@carbon/icons-react/lib/Trophy";
import Events from "@carbon/icons-react/lib/Events";
import Image from "next/image";
import Link from "next/link";
import { handleCategoryRound3 } from "@/app/lib/InitialMount";
import { NewCategory } from "@/app/(white_navbar)/explore/RetroPGF3/RetroType3";

export default function RetroCard3({
    marginX="mx-3",
    icon,
    category,
    description,
    opRecieve,
    rank,
    round,
    title,
    vote,
    banner,
}: {
    marginX?:string;
    round?:string;
    title?:string;
    icon?:string;
    banner?:string;
    description?:string;
    category?:NewCategory;
    vote?:number;
    opRecieve?:number;
    rank?:number;
}) {

    return (


    <div className={`flex flex-col gap-2 flex-grow-1 flex-shrink-0 border rounded-lg shadow-sm h-[17rem] w-[14.25rem] relative ${marginX}`}> 
        
        {/* Background Image */}
        <div className="absolute top-0 left-0 w-full max-h-12 overflow-hidden">
            <Image
            src={`${banner || "/random/OP-Banner.png"}`}
            alt="background image"
            // not sure that this image background is all the same or not
            className="opacity-50 object-cover z-10"
            width={228}
            height={48}
            />
        </div>

        {/* Round Indicator */}
        <div className="absolute top-1 right-1 bg-white px-1 py-0.5 rounded-[0.25rem]">
            <p className="text-gray-600 text-[0.5rem] font-semibold leading-4 tracking-[0.05rem]">{round}</p>
        </div>

        {/* Avatar */}
        <div className="absolute top-4 left-4 rounded-[0.25rem] flex flex-shrink-0">
        <Image
            src={icon || "/random/OP-Logo.png"}
            alt="icon image"
            className=""
            width={48}
            height={48}
        />
        </div>

        <div className="mt-14"></div>
        <div className="w-full h-full">
            <div className="p-4 flex flex-col justify-start items-start gap-3 h-full">
                <div className="flex flex-col gap-0.5">
                    <Link href={`/explore/RetroPGF3/${title}`} className="line-clamp-1 text-sm font-bold text-gray-800 z-30 hover:underline">{title}</Link>
                    <p className="text-sm font-normal text-gray-600 line-clamp-2">
                        {description}
                    </p>
                </div>
                <div className="flex flex-wrap gap-2">
                    {handleCategoryRound3(category!)}
                </div>
                <div className="flex flex-grow"></div>
                <div className="flex gap-2">
                    <Events size={20} />
                    <div className="flex gap-1">
                        <p className="text-sm font-semibold text-gray-800">{Math.ceil(vote || 0).toString()}</p>
                        <p className="text-sm font-light text-gray-600">Votes</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Trophy size={20} />
                    <div className="flex gap-1">
                        <p className="text-sm font-semibold text-gray-800"> {opRecieve?.toLocaleString("en-US", { maximumFractionDigits: 2 })} OP</p>
                        <p className="text-sm font-light text-gray-600">#{rank}</p>
                    </div>

                </div>
            </div>
        </div>
        </div>

    )

}
