"use client"

import { useRef } from "react";
import toast from "react-hot-toast";
import Favorite from "@carbon/icons-react/lib/Favorite";
import Chat from "@carbon/icons-react/lib/Chat";
import InputRef from "@/app/component/Input/InputRef";
import Comment from "@/app/component/Comment/Comment";
import Image from "next/image";
import Help from "@carbon/icons-react/lib/Help";

export default function QuestionSection({

}: {

    }) {

    const textComment = useRef<HTMLInputElement>(null);

    async function handleCreateComment(e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) {
        e.preventDefault();

        if (!textComment.current?.value) {
            toast.error('You need to write some text first!')

        }
    }

    async function handleFavoriteProject(e:React.FormEvent<HTMLFormElement | HTMLButtonElement>) {
        
    }

    async function handleFavoriteComment(e:React.FormEvent<HTMLFormElement | HTMLButtonElement>) {
        
    }
    async function handleReplyComment(e:React.FormEvent<HTMLFormElement | HTMLButtonElement>) {
        
    }

    return (

        <div className="flex flex-col gap-8">

            {/* Question Detail */}
            <div className="flex flex-col gap-4 border-b border-gray-200 md:border rounded-lg p-2 md:p-6 bg-white">
                <div className="flex gap-1.5 bg-gray-100 px-2 py-1 rounded-2xl w-fit">
                    <Help size={20} className="fill-gray-500" />
                    <p className="text-sm font-medium text-gray-700">Question</p>
                </div>
                <p
                    className="textt-2xl font-semibold text-gray-800 "
                >Where do i even start with Web3</p>
                <p
                    className="text-base font-normal text-gray-600 line-clamp-2 mb-4"
                >
                    Okay, I want to get into this Web3 thing, but it feels like everyone's speaking a different language. Are there any newbie-friendly places to learn without getting overwhelmed?
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
                        <button 
                        onClick={handleFavoriteProject}
                        className="flex items-center gap-2 bg-gray-100 rounded-2xl px-3 py-1.5">
                            <Favorite size={24} />
                            <p className="text-base font-medium text-gray-800">12</p>
                        </button>
                        <button 
                        className="flex items-center gap-2 bg-gray-100 rounded-2xl px-3 py-1.5">
                            <Chat size={24} />
                            <p className="text-base font-medium text-gray-800">12</p>
                        </button>
                    </div>
                </div>

            </div>
            {/* End Question Detail */}




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
            <Comment
            handleFavorite={handleFavoriteComment}
            handleReply={handleReplyComment}
            />


        </div>

    )

}
