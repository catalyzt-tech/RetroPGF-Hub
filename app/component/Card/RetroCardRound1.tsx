import Events from "@carbon/icons-react/lib/Events";
import Trophy from "@carbon/icons-react/lib/Trophy";
import Link from "next/link";

export function RetroCard1({
    description,
    leader,
    opRecieve,
    title,
}:{
    title?:string;
    description?:string;
    opRecieve?:number;
    leader?:string;
}) {
    return (
    <div className="flex flex-col gap-2 flex-grow-1 flex-shrink-0 border rounded-lg shadow-sm h-[14rem] w-[14.25rem] relative mx-3">
        <div className="p-4 flex flex-col justify-start items-start gap-3 w-full h-full">
            <div className="flex flex-col gap-0.5">
                <Link href={`/explore/RetroPGF1/${title}`} className="text-sm font-bold text-gray-800 z-30 hover:underline line-clamp-2">{title}</Link>
                <p className="text-sm font-normal text-gray-600 line-clamp-3 break-all">
                    {description}
                </p>
            </div>

            <div className="flex-grow"></div>

            <div className="flex gap-2">
                <Events size={20} />
                    <div className="flex gap-1">
                        <p className="text-sm font-semibold text-gray-800 line-clamp-1">{leader}</p>
                    </div>
            </div>
       
            <div className="flex gap-2">
                <Trophy size={20} />
                <div className="flex gap-1">
                    <p className="text-sm font-semibold text-gray-800">{opRecieve!.toFixed(2)} OP</p>
                </div>

            </div>
        </div>
    </div>
    )
}