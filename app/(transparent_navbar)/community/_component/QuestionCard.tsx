import Image from "next/image";
import Help from '@carbon/icons-react/lib/Help';
import Link from "next/link";
import Favorite from "@carbon/icons-react/lib/Favorite";
import Chat from "@carbon/icons-react/lib/Chat";
import { ConvertStringToTime } from "@/app/lib/utils";
import { Owner } from "@/app/hook/projectRequestType";
import FavoriteFilled from "@carbon/icons-react/lib/FavoriteFilled";
import { handleCategoryRound3 } from "@/app/lib/InitialMount";

// this card will have the owner who create it
export default function QuestionCard({
    commentCount,
    description,
    favCount,
    id,
    title,
    createdAt,
    owner,
    favOrNot,
    category,
    handleFavoriteProject,
}:{
    id:string;
    title:string;
    description:string;
    favCount:number;
    commentCount:number;
    createdAt: string;
    owner: Owner;
    favOrNot:boolean;
    category:string;
    handleFavoriteProject(projectId: string): Promise<void>
})  {

return (

    <div className="flex flex-col gap-4 border rounded-lg  p-3 lg:p-6">
            <div className="flex gap-1.5 bg-gray-100 px-2 py-1 rounded-2xl w-fit">
                <Help size={20} className="fill-gray-500" />
                <p className="text-sm font-medium text-gray-700">Question</p>
            </div>
            <Link 
            href={`/community/question/${id}`}
            className="text-xl lg:text-2xl font-semibold text-gray-800 hover:text-red-500 hover:underline"
            >{title}</Link>
            {handleCategoryRound3(category)}
            <p
                className="text-base font-normal text-gray-600 line-clamp-2 mb-4"
            >
                {description}
            </p>

            <div className="flex justify-between flex-wrap gap-4">

                <div className="hidden md:flex gap-3">
                    <div className="relative min-w-9 min-h-9 max-w-9 max-h-9">
                        <Image
                        src={owner.profile || "/random/metamask.png"}
                        alt="avatar image"
                        fill
                        className="rounded-[4rem]"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <h6 className="text-sm font-medium text-gray-800">
                            {owner.username}
                        </h6>
                        <p className="text-sm font-normal text-gray-500">{ConvertStringToTime(createdAt)}</p>
                    </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                    <div 
                    onClick={() => handleFavoriteProject(id)}
                    className="flex items-center gap-2 bg-gray-100 rounded-2xl px-3 py-1.5 cursor-pointer hover:bg-gray-200/80">
                            {favOrNot ?
                                <FavoriteFilled size={24} className="fill-primaryRed" />
                                :
                                <Favorite size={24} className="group-hover:fill-primaryRed fill-gray-800" />

                            }
                        <p className="text-base font-medium text-gray-800">{favCount}</p>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-100 rounded-2xl px-3 py-1.5">
                        <Chat size={24} />
                        <p className="text-base font-medium text-gray-800">{commentCount}</p>
                    </div>
                </div>
            </div>

        </div>
    )

}
