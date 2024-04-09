import Image from "next/image";
import User from "@carbon/icons-react/lib/User";
import { CommentType } from "@/app/hook/commentType";
import { ConvertStringToTime } from "@/app/lib/utils";

export default function CommentComponent({
    commentData
}:{
    commentData:CommentType
})  {

    
return (

    <div className="flex flex-wrap min-[350px]:flex-nowrap gap-4 p-2 md:px-0 md:pt-0  md:pb-4 border-b border-gray-200">
                <div className="min-w-12 min-h-12 max-w-12 max-h-12">
                    <Image
                        alt="small avatar"
                        src={commentData.createdBy.profile || "/random/smallAvatar.png"}
                        width={48}
                        height={48}
                        className="rounded-full"
                    />
                </div>
                <div className="flex flex-col gap-4">
                   <div className="flex flex-col gap-1">
                        <div className="flex flex-wrap gap-1">
                            <h6 className="text-sm font-medium text-gray-800 line-clamp-1">
                                {commentData.createdBy.username}
                            </h6>    
    
                            <p className="hidden md:block text-sm font-medium text-gray-800">·</p>
    
                            <h6 className="text-sm font-normal text-gray-500">
                                {ConvertStringToTime(commentData.createdAt)}
                            </h6>    

                        </div>    
                        <div className="flex items-center justify-center w-fit  gap-1 px-2 py-1 bg-red-50 hover:bg-red-100/70 rounded-2xl">
                            <User size={16} className="fill-red-700"/>
                            <h6 className="text-red-700 text-xs font-medium">RetroPGF3</h6>
                        </div>
                   </div>

                    <p className="text-base font-normal text-gray-800">
                        {commentData.content} 
                    </p>

                 

                </div>    
    </div>

    )

}
