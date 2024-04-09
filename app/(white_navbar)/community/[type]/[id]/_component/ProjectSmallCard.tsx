import Pin from '@carbon/icons-react/lib/Pin';
import Image from "next/image";
import Link from "next/link";
import Favorite from "@carbon/icons-react/lib/Favorite";
import Chat from "@carbon/icons-react/lib/Chat";
import FavoriteFilled from '@carbon/icons-react/lib/FavoriteFilled';

export default function ProjectSmallCard({
    commentCount,
    description,
    favCount,
    id,
    logoUrl,
    title,
    category,
    handleFavoriteProject,
    favOrNot,
}: {
    id:string;
    logoUrl:string;
    title:string;
    description:string;
    favCount:number;
    commentCount:number;
    category:string;
    handleFavoriteProject(projectId: string): Promise<void>
    favOrNot:boolean
}) {

    return (

        <div className="p-6 bg-white flex flex-col gap-4 rounded-lg border border-gray-200">
            <div className="flex items-center gap-1.5 bg-gray-100 px-2 py-1 rounded-2xl w-fit">
                <Pin size={20} className="fill-gray-500" />
                <p className="text-sm font-medium text-gray-700">Feedback Request</p>
            </div>
            <div className="flex gap-3">
                <Image
                    src={logoUrl || "/random/metamask.png"}
                    alt="avatar image"
                    className="rounded-[4rem]"
                    width={72}
                    height={72}
                />
                <div className="flex flex-col gap-1">
                    <Link
                        href={`/community/project/${id}`}
                        className="text-xl font-semibold text-gray-800 hover:text-blue-500 hover:underline">
                        {title}
                    </Link>
                    <div className="px-2 py-1 rounded-2xl bg-sky-50 cursor-pointer hover:bg-sky-100 w-fit">
                        <p className="text-sky-600 text-xs font-medium">{category}</p>
                    </div>
                </div>
            </div>

            <p
                className="text-base font-normal text-gray-600 line-clamp-2"
            >
                {description}
            </p>

            <div className="flex items-center gap-4">
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