import ChevronRight from "@carbon/icons-react/lib/ChevronRight";
import Link from "next/link";

export default function BreadCumpCommunity({
    secondText="Post"
}:{
    secondText?:string
})  {

return (

    <> 
     <div className="flex flex-wrap gap-2 p-2 md:p-0">
            <Link 
            href={"/community"}
            className="text-xs font-normal text-gray-800 hover:text-blue-500 hover:underline"> Community </Link>
                <ChevronRight />
            <p className="text-xs font-normal text-gray-500"> {secondText} </p>
        </div>
    </>

    )

}
