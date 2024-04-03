import Image from "next/image";
import Help from '@carbon/icons-react/lib/Help';

export default function QuestionCard({

}:{
    
})  {

return (

    <div className="flex flex-col gap-4 border rounded-lg p-6">
            <div className="flex gap-1.5 bg-gray-100 px-2 py-1 rounded-2xl w-fit">
                <Help size={20} className="fill-gray-500" />
                <p className="text-sm font-medium text-gray-700">Question</p>
            </div>
            <h6 
            className="textt-2xl font-semibold text-gray-800"
            >Where do i even start with Web3</h6>
            <p
                className="text-base font-normal text-gray-600 line-clamp-2 mb-4"
            >
                Okay, I want to get into this Web3 thing, but it feels like everyone's speaking a different language. Are there any newbie-friendly places to learn without getting overwhelmed?
            </p>

            <div className="flex gap-3">
                <Image
                    alt="small avatar"
                    src={"/random/smallAvatar.png"}
                    width={36}
                    height={36}
                />
                <div className="flex gap-2">
                    <h6 className="text-sm font-medium text-gray-800">
                        @smartcontact
                    </h6>
                    <p className="text-sm font-normal text-gray-500">10 Feb 2024</p>
                </div>
            </div>

        </div>
    )

}
