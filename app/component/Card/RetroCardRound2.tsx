import Trophy from "@carbon/icons-react/lib/Trophy";
import Events from "@carbon/icons-react/lib/Events";
import Image from "next/image";
import Link from "next/link";
import { handleCategoryRound2 } from "@/app/lib/InitialMount";
import { CategoryRound2 } from "@/app/(white_navbar)/explore/RetroPGF2/RetroType2";

export default function RetroCard2({
    marginX="mx-3",
    avatar,
    category,
    description,
    opRecieve,
    round,
    title,
    vote,
}: {
    marginX?:string;
    round?:string;
    title?:string;
    avatar?:string;
    description?:string;
    category?:CategoryRound2;
    vote?:number;
    opRecieve?:number;
}) {

    return (


    <div className={`flex flex-col gap-2 flex-grow-1 flex-shrink-0 border rounded-lg shadow-sm h-[17rem] w-[14.25rem] relative ${marginX}`}> 
        
        {/* Background Image */}
        <div className="absolute top-0 left-0 w-full max-h-12 overflow-hidden">
            <Image
            src="/random/bgPic.png"
            alt="background image"
            // not sure that this image background is all the same or not
            className="-mt-20 opacity-50"
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
            src={avatar ? avatar : "/random/avatar.png"}
            alt="avatar image"
            className=""
            width={48}
            height={48}
        />
        </div>

        <div className="mt-14"></div>
        <div className="w-full h-full">
            <div className="p-4 flex flex-col justify-start items-start gap-3 h-full">
                <div className="flex flex-col gap-0.5">
                    <Link href={`/explore/RetroPGF2/${title}`} className="line-clamp-1 text-sm font-bold text-gray-800 z-30 hover:underline">{title}</Link>
                    <p className="text-sm font-normal text-gray-600 line-clamp-2">
                        {description}
                    </p>
                </div>
                <div className="flex flex-wrap gap-2">
                    {handleCategoryRound2(category!)}
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
                    </div>

                </div>
            </div>
        </div>
        </div>

    )

}
