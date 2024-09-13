import LinkIcon from "@carbon/icons-react/lib/Link";
import Image from "next/image";
import { RetroRound1 } from "../../../RetroType1";
export default function ProjectDetailSection({
    data
}: {
    data: RetroRound1
}) {

    return (

        <>
            <div className="flex flex-col bg-white rounded-lg overflow-hidden border">
                <div className="block relative w-full h-36 mb-16">
                    <Image
                        src={"/random/OP-Banner.png"}
                        alt="background"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative flex flex-col gap-4 p-2 sm:p-4 lg:p-6">
                    <div className="absolute -top-24 lg:-top-32 left-4 rounded-[0.25rem] flex flex-shrink-0 z-20">
                        <div className="relative w-16 h-16 lg:w-32 lg:h-32">
                            <Image
                                src={"/random/OP-Logo.png"}
                                alt="avatar image"
                                className="rounded-full object-cover"
                                fill
                            />
                        </div>
                    </div>

                    <h3 className="text-3xl lg:text-5xl font-semibold text-gray-800">
                        {data["Project Name"]}
                    </h3>

                    <div className="flex flex-col gap-1">
                        <div className="flex flex-wrap gap-3 items-center">
                            <p className="mb-1 text-base font-normal text-gray-500">Leader :</p>
                            <p className="mb-1 text-base font-semibold text-gray-600">
                                {data["Leader"]}
                            </p>
                        </div>
                        
                        <div className="flex flex-wrap gap-3 items-center">
                            <p className="mb-1 text-base font-normal text-gray-500">Project Lead Email :</p>
                            <p className="mb-1 text-base font-semibold text-gray-600">
                                {data["Project Lead Email"]}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3 items-center">
                            <p className="mb-1 text-base font-normal text-gray-500">Allocation:</p>
                            <div className="">
                                <p className="mb-1 text-base font-semibold text-gray-600">
                                    {data.allocation}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Link */}
                    <div className="flex flex-wrap gap-6 mt-3">
                        <a
                            href={data["Project Website"]}
                            target="_blank" rel="noopener noreferrer"
                            className="flex flex-wrap gap-1.5 text-gray-500 hover:text-primaryRed">
                            <LinkIcon size={20}/>
                            <p className="text-sm font-normal line-clamp-1">
                                {data["Project Website"]}
                            </p>
                        </a>
                    </div>


                </div>
            </div>

            <section id="Question" className="flex flex-col gap-6 bg-white rounded-lg p-4 lg:p-6 border">
                <h6 className="text-3xl font-semibold text-gray-800">
                Why should this project receive retroactive public goods funding?
                </h6>
                <hr className="border-t-gray-100" />

                <div className="flex flex-col gap-2">
                    <p className="text-base break-words font-normal text-gray-600">
                        {data.Question}
                    </p>
                </div>



            </section>

        </>

    )

}
