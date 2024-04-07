"use client"
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import Favorite from "@carbon/icons-react/lib/Favorite";
import FavoriteFilled from "@carbon/icons-react/lib/FavoriteFilled";
import Chat from "@carbon/icons-react/lib/Chat";
import InputRef from "@/app/component/Input/InputRef";
import CommentComponent from "@/app/component/Comment/Comment";
import Image from "next/image";
import { FullProjectRes, RandomProject } from "@/app/hook/projectRequestType";
import { ConvertStringToTime } from "@/app/lib/utils";
import { PushOrPullFav } from "@/app/hook/favorite";
import { GlobalContextType, useGlobal } from "@/app/provider/globalContext";
import Cookies from 'js-cookie';
import { Circular } from "@/app/component/Loading/Circular";
import { CreateComment } from "@/app/hook/comment";
import { CommentType } from "@/app/hook/commentType";
import QuestionDescription from "./QuestionDescription";
import ProjectDescription from "./ProjectDescription";

export default function MainSection({
    project,
    type,
}: {
    project: FullProjectRes;
    type:"question" | "project";
}) {
    

    const accessCheckerCookieValue: string | undefined = Cookies.get('accessChecker');
    const textComment = useRef<HTMLInputElement>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const { globalState }: GlobalContextType = useGlobal?.()!;
    const [state, setState] = useState
    <{
        favCount: number,
        commentCount: number,
        favOrNot: boolean,
        comment: CommentType[],
    }>
    ({
        favCount: project.favCount,
        commentCount: project.commentCount,
        favOrNot: project.favOrNot,
        comment: project.comment
    })
    
    async function handleCreateComment(e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) {
        e.preventDefault();

        if (!textComment.current?.value) {
            toast.error('You need to write some text first!')
        }
        else if(!globalState.user || !globalState.user.userId || typeof accessCheckerCookieValue !== "string"){
            toast.error("You need to be authorized first")
        }
        else {
            setLoading(true)
            const res = await CreateComment(project._id, textComment.current.value)
            textComment.current.value = ""
            if (res.data && "comment" in res.data) {
                const { comment, msg } = res.data
                toast.success("Comment have been created!")
                setState(prev => ({...prev, commentCount:prev.commentCount + 1, comment:[comment, ...prev.comment]}))
                setLoading(false)
            }
            else {
                toast.error(res.error?.data.msg! || "Something went wrong when try to added or removed favorite project")
                setLoading(false)
            }
        }
    }

    async function handleFavoriteProject(e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) {
        if (!globalState.user || !globalState.user.userId || typeof accessCheckerCookieValue !== "string") {
            toast.error("You need to be authorized first")
        }
        else {
            setLoading(true)
            const res = await PushOrPullFav(project._id)
            if (res.data && "opera" in res.data) {
                const { opera, msg } = res.data
                switch (opera) {
                    case "pull":
                        setState(prev => ({ ...prev, favCount: prev.favCount - 1, favOrNot: false }))
                        toast.success("This project have been removed from your favorite")
                        break;

                    case "push":
                        setState(prev => ({ ...prev, favCount: prev.favCount + 1, favOrNot: true }))
                        toast.success("This project have been added to your favorite")
                        break;

                    default:
                        break;
                }
                setLoading(false)
            }
            else {
                toast.error(res.error?.data.msg! || "Something went wrong when try to added or removed favorite project")
                setLoading(false)
            }
        }
    }




    return (

        <>

        <Circular
        loading={loading}
        />

            <div className="flex flex-col gap-8">
                {/* Question Detail */}
                <div className="flex flex-col gap-4 border-b border-gray-200 md:border rounded-lg p-2 pt-4 md:p-6 bg-white">
                    {type === "question" && 
                        <QuestionDescription
                        description={project.description}
                        title={project.name}
                        />
                    }

                    {type === "project" && 
                        <ProjectDescription
                        category={project.category}
                        description={project.description}
                        logoUrl={project.logoUrl}
                        title={project.name}
                        feedback={project.feedback}
                        githubLink={project.githubUrl}
                        websiteLink={project.websiteUrl}
                        />
                    }

                    <hr className="border-gray-100" />

                    <div className="flex flex-wrap gap-4 justify-between">
                        <div className="flex flex-wrap gap-3">
                            <Image
                                alt="small avatar"
                                src={project.owner.profile || "/random/smallAvatar.png"}
                                width={48}
                                height={48}
                                className="rounded-full"
                            />
                            <div className="flex flex-col gap-1">
                                <h6 className="text-sm font-medium text-gray-800">
                                    {project.owner.username}
                                </h6>
                                <p className="text-sm font-normal text-gray-500">{ConvertStringToTime(project.createdAt)}</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-4">
                            <button
                                onClick={handleFavoriteProject}
                                className="flex items-center gap-2 group bg-gray-100 hover:bg-gray-200/80 rounded-2xl px-3 py-1.5">
                                {state.favOrNot ?
                                    <FavoriteFilled size={24} className="fill-primaryRed" />
                                    :
                                    <Favorite size={24} className="group-hover:fill-primaryRed fill-gray-800" />

                                }
                                <p className="text-base font-medium text-gray-800">{state.favCount}</p>
                            </button>

                            <button
                                className="flex items-center gap-2 group bg-gray-100 hover:bg-gray-200/80 rounded-2xl px-3 py-1.5">
                                <Chat size={24} className="group-hover:fill-gray-900 fill-gray-800" />
                                <p className="text-base font-medium text-gray-800">{state.commentCount}</p>
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
               {state.comment.length !== 0 && 
               state.comment.map((item:CommentType, i:number) => (
                <CommentComponent
                key={i}
                commentData={item}  
                />
               ))
               }


            </div>

        </>
    )

}
