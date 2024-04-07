import LinkIcon from "@carbon/icons-react/lib/Link";
import LogoGithub from "@carbon/icons-react/lib/LogoGithub";
import Pin from "@carbon/icons-react/lib/Pin";
import Image from "next/image";

export default function ProjectDescription({
    title,
    description,
    category,
    logoUrl,
    feedback,
    githubLink,
    websiteLink
}:{
    title: string;
    description: string;
    category: string;
    logoUrl: string;
    feedback: string;
    websiteLink:string;
    githubLink:string;
})  {

return (

    <> 
     <div className="flex items-center gap-1.5 bg-gray-100 px-2 py-1 rounded-2xl w-fit mt-4 md:mt-0">
        <Pin size={20} className="fill-gray-500" />
        <p className="text-sm font-medium text-gray-700">Feedback Request</p>
    </div>
    <div className="flex flex-wrap gap-3">
       <div className="relative min-w-16 min-h-16 max-w-16 max-h-16 lg:min-h-24 lg:min-w-24 lg:max-h-24 lg:max-w-24">
            <Image
            src={logoUrl || "/random/metamask.png"}
            alt="avatar image"
            fill
            className="rounded-[4rem]"
            />
       </div>
        <div className="flex flex-col gap-1">
            <p
                className="text-2xl font-semibold text-gray-800">
                {/* Title Project */}
                {title}
            </p>
            <div className="flex items-center gap-4">
                <a
                href={websiteLink}
                target="_blank" rel="noopener noreferrer" 
                
                className="flex items-center gap-1 hover:underline">
                    <LinkIcon size={20} className="fill-gray-500"/>
                    <p>Website</p>
                </a>
                <a
                href={githubLink}    
                target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-1 hover:underline">
                    <LogoGithub size={20} className="fill-gray-500"/>
                    <p>Github</p>
                </a>
            </div>
            <div className="px-2 py-1 rounded-2xl bg-sky-50 cursor-pointer hover:bg-sky-100 w-fit">
                <p className="text-sky-600 text-xs font-medium">{category}</p>
            </div>
        </div>
    </div>
    <p
        className="text-base font-normal text-gray-600 mb-4"
    >
        {description}
    </p>
    <p
        className="text-base font-normal text-gray-600 mb-4"
    >
        {feedback}
    </p>
    </>

    )

}
