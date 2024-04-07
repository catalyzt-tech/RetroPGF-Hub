import Help from "@carbon/icons-react/lib/Help";

export default function QuestionDescription({
    title,
    description
}:{
    title:string;
    description:string;
})  {

return (

    <> 
    <div className="flex gap-1.5 bg-gray-100 px-2 py-1 rounded-2xl w-fit mt-4 md:mt-0">
        <Help size={20} className="fill-gray-500" />
        <p className="text-sm font-medium text-gray-700">Question</p>
    </div>

    <p
        className="textt-2xl font-semibold text-gray-800 "
    >
        {/* Title Project */}
        {title}
    </p>
    <p
        className="text-base font-normal text-gray-600 line-clamp-2 mb-4"
    >
        {/* Description Project */}
        {description}
    </p>

    </>

    )

}
