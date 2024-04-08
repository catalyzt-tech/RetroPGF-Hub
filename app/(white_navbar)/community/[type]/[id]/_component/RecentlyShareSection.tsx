"use client"
import { RandomProject } from "@/app/hook/projectRequestType";
import ProjectSmallCard from "./ProjectSmallCard";
import QuestionSmallCard from "./QuestionSmallCard";
import { useState } from "react";
import { GlobalContextType, useGlobal } from "@/app/provider/globalContext";
import toast from "react-hot-toast";
import Cookies from 'js-cookie';
import { PushOrPullFav } from "@/app/hook/favorite";


export default function RecentlyShareSection({
    recently
}: {
    recently: RandomProject[];
}) {
    const { globalState }: GlobalContextType = useGlobal?.()!;
    const accessCheckerCookieValue: string | undefined = Cookies.get('accessChecker');

    const [data, setData] = useState(recently)
    async function handleFavoriteProject(projectId:string) {
        if (!globalState.user || !globalState.user.userId || typeof accessCheckerCookieValue !== "string") {
            toast.error("You need to be authorized first")
        }
        else {
            const res = await PushOrPullFav(projectId)
            if (res.data && "opera" in res.data) {
                const { opera, msg } = res.data
                switch (opera) {
                    case "pull":
                        setData(prev => {
                            return prev.map(item => {
                                if (item._id === projectId) {
                                    return { ...item, favCount: item.favCount - 1, favOrNot:false };
                                }
                                return item;
                            });
                        })
                        toast.success("This project have been removed from your favorite")
                        break;
                        
                        case "push":
                        setData(prev => {
                            return prev.map(item => {
                                if (item._id === projectId) {
                                    return { ...item, favCount: item.favCount + 1, favOrNot:true };
                                }
                                return item;
                            });
                        })
                        toast.success("This project have been added to your favorite")
                        break;

                    default:
                        break;
                }
            }
            else {
                toast.error(res.error?.data.msg! || "Something went wrong when try to added or removed favorite project")
            }
        }
    }

    return (

        <div className="max-w-[21rem] min-w-[21rem] flex flex-col gap-6 px-6 rounded-lg">
            <h6 className="text-2xl font-semibold text-gray-800">Recently Shared</h6>
            {data.length !== 0 &&
            data.map((item, i) => {
                if(item.type === "q") {
                    return (
                        <QuestionSmallCard
                        commentCount={item.commentCount}
                        description={item.description}
                        favCount={item.favCount}
                        id={item._id}
                        title={item.name}
                        key={i}
                        handleFavoriteProject={handleFavoriteProject}
                        favOrNot={item.favOrNot}
                        />
                        )
                    }   
                    else if(item.type === "p"){
                        return (
                            <ProjectSmallCard
                            key={i}
                            commentCount={item.commentCount}
                            description={item.description}
                            favCount={item.favCount}
                            id={item._id}
                            title={item.name}
                            category={item.category}
                            logoUrl={item.logoUrl}
                            handleFavoriteProject={handleFavoriteProject}
                            favOrNot={item.favOrNot}
                        />
                    )
                }
            })
            } 
        </div>

    )

}