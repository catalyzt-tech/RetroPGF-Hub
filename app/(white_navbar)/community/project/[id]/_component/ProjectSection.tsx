"use client";

import Image from "next/image";
import Pin from '@carbon/icons-react/lib/Pin';
import Link from "next/link";
import Favorite from "@carbon/icons-react/lib/Favorite";
import Chat from "@carbon/icons-react/lib/Chat";
import User from "@carbon/icons-react/lib/User";
import InputRef from "@/app/component/Input/InputRef";
import { useRef } from "react";
import toast from "react-hot-toast";

export default function ProjectSection({

}: {

}) {

    const textComment = useRef<HTMLInputElement>(null);

    async function handleCreateComment(e:React.FormEvent<HTMLFormElement | HTMLButtonElement> ) {
        e.preventDefault();

        if(!textComment.current?.value) {
            toast.error('You need to write some text first!')

        }


    }

    return (
        <div className="flex flex-col gap-8">
            {/* Project Detail */}
            <div className="flex flex-col gap-4 border-b border-gray-200 md:border rounded-lg p-2 md:p-6 bg-white">
                <div className="flex gap-1.5 bg-gray-100 px-2 py-1 rounded-2xl w-fit mt-4 md:mt-0">
                    <Pin size={20} className="fill-gray-500" />
                    <p className="text-sm font-medium text-gray-700">Feedback Request</p>
                </div>
                <div className="flex flex-wrap gap-3">
                    <Image
                        src={"/random/metamask.png"}
                        alt="avatar image"
                        width={72}
                        height={72}
                        className="rounded-[4rem]"
                    />
                    <div className="flex flex-col gap-1">
                        <Link
                            href={`/community/project/${1}`}
                            className="text-2xl font-semibold text-gray-800 hover:text-blue-500 hover:underline">
                            Metamask
                        </Link>
                        <div className="px-2 py-1 rounded-2xl bg-sky-50 cursor-pointer hover:bg-sky-100">
                            <p className="text-sky-600 text-xs font-medium">Developer Ecosystem</p>
                        </div>
                    </div>
                </div>
                <p
                    className="text-base font-normal text-gray-600 mb-4"
                >
                    A decentralized marketplace for buying and selling music NFTs. We envision a world where artists have more control over their distribution, revenue streams, and can directly connect with fans in new ways. Our platform features easy minting, transparent royalty structures, and we're exploring ways to incorporate fan-driven rewards and exclusive content tied to NFT ownership.
                </p>

                <hr className="border-gray-100" />

                <div className="flex flex-wrap gap-4 justify-between">
                    <div className="flex flex-wrap gap-3">
                        <Image
                            alt="small avatar"
                            src={"/random/smallAvatar.png"}
                            width={48}
                            height={48}
                        />
                        <div className="flex flex-col gap-1">
                            <h6 className="text-sm font-medium text-gray-800">
                                @smartcontact
                            </h6>
                            <p className="text-sm font-normal text-gray-500">10 Feb 2024</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-2 bg-gray-100 rounded-2xl px-3 py-1.5">
                            <Favorite size={24} />
                            <p className="text-base font-medium text-gray-800">12</p>
                        </div>
                        <div className="flex items-center gap-2 bg-gray-100 rounded-2xl px-3 py-1.5">
                            <Chat size={24} />
                            <p className="text-base font-medium text-gray-800">12</p>
                        </div>
                    </div>
                </div>

            </div>
            {/* End Project Detail */}




            {/* Create Comment */}
            <form 
            onSubmit={handleCreateComment}
            className="flex flex-col gap-4 p-2 md:p-0">

                <InputRef
                    type="text"
                    placeholder="Add a comment"
                    ref={textComment}
                    className="border border-gray-200 placeholder-slate-600 bg-white text-slate-800 focus:ring focus:ring-primaryRed w-full px-5 py-3 rounded-md min-h-[40px]"
                    />

                <button
                className="self-end py-3 px-7 w-fit rounded-lg bg-gray-800 hover:bg-gray-800/90"
                >
                    <p className="text-white text-base font-semibold text-center self-center">Comment</p>
                </button>
                
            </form>
            {/* End Create Comment */}




            {/* Show Comment Section */}
            <div className="flex flex-wrap gap-4 p-2 md:p-0">
                <div className="min-w-12 min-h-12 max-w-12 max-h-12">
                    <Image
                        alt="small avatar"
                        src={"/random/smallAvatar.png"}
                        width={48}
                        height={48}
                    />
                </div>
                <div className="flex flex-col gap-4">
                   <div className="flex flex-col gap-1">
                        <div className="flex flex-wrap gap-1">
                            <h6 className="text-sm font-medium text-gray-800">
                                @commentaccount
                            </h6>    
    
                            <p className="text-sm font-medium text-gray-800">·</p>
    
                            <h6 className="text-sm font-normal text-gray-500">
                                10 Feb 2024
                            </h6>    

                        </div>    
                        <div className="flex items-center justify-center w-fit  gap-1 px-2 py-1 bg-red-50 hover:bg-red-100/70 rounded-2xl">
                            <User size={16} className="fill-red-700"/>
                            <h6 className="text-red-700 text-xs font-medium">RetroPGF3</h6>
                        </div>
                   </div>

                    <p className="text-base font-normal text-gray-800">
                    The Keccak project started in 2008 for the development of the Keccak hash function, winner of SHA3 competition and used in Ethereum. The project is a multi discipline effort of cryptography, software and hardware development. All the developments are open source, no patents and several incentives for 3rd party security analysis. The project is still active for providing improved implementations. 
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-2  px-3 py-1.5">
                            <Favorite size={24} />
                            <p className="text-base font-medium text-gray-800">12</p>
                        </div>
                        <div className="flex items-center gap-2  px-3 py-1.5">
                            <Chat size={24} />
                            <p className="text-base font-medium text-gray-800">Reply</p>
                        </div>
                    </div>

                </div>    
            </div>


        </div>

    )

}
