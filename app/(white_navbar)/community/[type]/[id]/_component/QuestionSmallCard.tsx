// this card not have the owner who create it
import Help from '@carbon/icons-react/lib/Help';
import Link from "next/link";
import Favorite from "@carbon/icons-react/lib/Favorite";
import Chat from "@carbon/icons-react/lib/Chat";
import FavoriteFilled from '@carbon/icons-react/lib/FavoriteFilled';

export default function QuestionSmallCard({
    commentCount,
    description,
    favCount,
    id,
    title,
    handleFavoriteProject,
    favOrNot
}:{
    id:string;
    title:string;
    description:string;
    favCount:number;
    commentCount:number;
    handleFavoriteProject(projectId: string): Promise<void>
    favOrNot:boolean
})  {

return (

     <div className="flex flex-col gap-4 rounded-lg p-6 bg-white border border-gray-200">
            <div className="flex gap-1.5 bg-gray-100 px-2 py-1 rounded-2xl w-fit">
                <Help size={20} className="fill-gray-500" />
                <p className="text-sm font-medium text-gray-700">Question</p>
            </div>
            <Link 
            href={`/community/question/${id}`}
            className="textt-2xl font-semibold text-gray-800 hover:text-blue-500 hover:underline"
            >{title}</Link>
            <p
                className="text-base font-normal text-gray-600 line-clamp-2 mb-4"
            >
                {description}
            </p>

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

    )

}