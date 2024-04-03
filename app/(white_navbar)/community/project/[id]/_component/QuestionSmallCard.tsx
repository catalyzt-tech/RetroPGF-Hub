// this card not have the owner who create it
import Image from "next/image";
import Help from '@carbon/icons-react/lib/Help';
import Link from "next/link";
import Favorite from "@carbon/icons-react/lib/Favorite";
import Chat from "@carbon/icons-react/lib/Chat";

export default function QuestionSmallCard({

}:{
    
})  {

return (

     <div className="flex flex-col gap-4 rounded-lg p-6 bg-white border border-gray-200">
            <div className="flex gap-1.5 bg-gray-100 px-2 py-1 rounded-2xl w-fit">
                <Help size={20} className="fill-gray-500" />
                <p className="text-sm font-medium text-gray-700">Question</p>
            </div>
            <Link 
            href={`/community/question/${1}`}
            className="textt-2xl font-semibold text-gray-800 hover:text-blue-500 hover:underline"
            >Where do i even start with Web3</Link>
            <p
                className="text-base font-normal text-gray-600 line-clamp-2 mb-4"
            >
                Okay, I want to get into this Web3 thing, but it feels like everyone's speaking a different language. Are there any newbie-friendly places to learn without getting overwhelmed?
            </p>

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

    )

}
