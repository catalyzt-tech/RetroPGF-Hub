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
}:{
    title: string;
    description: string;
    category: string;
    logoUrl: string;
    feedback: string;
})  {

return (

    <> 
     <div className="flex gap-1.5 bg-gray-100 px-2 py-1 rounded-2xl w-fit mt-4 md:mt-0">
        <Pin size={20} className="fill-gray-500" />
        <p className="text-sm font-medium text-gray-700">Feedback Request</p>
    </div>
    <div className="flex flex-wrap gap-3">
        <Image
            src={logoUrl || "/random/metamask.png"}
            alt="avatar image"
            width={72}
            height={72}
            className="rounded-[4rem]"
            />
        <div className="flex flex-col gap-1">
            <p
                className="text-2xl font-semibold text-gray-800">
                {/* Title Project */}
                {title}
            </p>
            <div className="flex gap-4">
                <a
                // href={websiteLink}
                className="flex gap-1">
                    <LinkIcon />
                    <p>Website</p>
                </a>
                <a
                // href={githubLink}    
                className="flex gap-1">
                    <LogoGithub />
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
