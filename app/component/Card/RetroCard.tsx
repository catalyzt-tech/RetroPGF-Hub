import Trophy from "@carbon/icons-react/lib/Trophy";
import Events from "@carbon/icons-react/lib/Events";
import Image from "next/image";
import Link from "next/link";

export default function RetroCard({
    marginX="mx-3"
}: {
    marginX?:string;
}) {

    return (


    <div className={`flex flex-col gap-2 flex-grow-1 flex-shrink-0 border rounded-lg shadow-sm h-[16rem] w-[14.25rem] relative ${marginX}`}> 
        
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
            <p className="text-gray-600 text-[0.5rem] font-semibold leading-4 tracking-[0.05rem]">RetroPGF 3</p>
        </div>

        {/* Avatar */}
        <div className="absolute top-4 left-4 rounded-[0.25rem] flex flex-shrink-0">
        <Image
            src="/random/avatar.png"
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
                    <Link href={"/explore"} className="text-sm font-bold text-gray-800 z-30 hover:underline">L2BEAT</Link>
                    <p className="text-sm font-normal text-gray-600 line-clamp-2">
                        Ethereum Layer Two (L2) scaling analysis and research website.
                    </p>
                </div>
                <div className="px-2 py-1 bg-yellow-50 rounded-full">
                    <p className="text-yellow-700 text-xs font-medium">OP Stack</p>
                </div>
                <div className="flex gap-2">
                    <Events size={20} />
                    <div className="flex gap-1">
                        <p className="text-sm font-semibold text-gray-800">36</p>
                        <p className="text-sm font-light text-gray-600">Votes</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Trophy size={20} />
                    <div className="flex gap-1">
                        <p className="text-sm font-semibold text-gray-800">256,294.36 OP</p>
                        <p className="text-sm font-light text-gray-600">#17</p>
                    </div>

                </div>
            </div>
        </div>
        </div>

    )

}
