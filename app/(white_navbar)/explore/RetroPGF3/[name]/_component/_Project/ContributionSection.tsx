import LinkIcon from "@carbon/icons-react/lib/Link";
import { RetroRound3 } from "../../../RetroType3";

export default function ContributionSection({
    data,
    contributionRef
}: {
    data: RetroRound3
    contributionRef: React.MutableRefObject<HTMLElement | null>;
}) {
    return (

        <section id="Contribution" ref={contributionRef} className="flex flex-col gap-6 bg-white rounded-lg p-4 lg:p-6 border">
            <h6 className="text-3xl font-semibold text-gray-800">
                Contribution
            </h6>
            <hr className="hidden sm:block border-t-gray-100" />

            {/* contributionDescription */}
            <p className="text-base break-word font-normal text-gray-600">
                {data.contributionDescription}
            </p>

            <div className="flex flex-col gap-4 overflow-hidden max-w-[80vw]">
                {data.contributionLinks.map((item, i) => (
                    <div className="flex gap-2 group" key={i}>
                  <LinkIcon  className="min-w-6 max-w-6 min-h-6 max-h-6 text-gray-500"/>
                    <a
                        href={item.url}
                        className="flex flex-col gap-0.5 group-hover:underline cursor-pointer"
                    >
                        <h6 className="text-base font-semibold text-gray-600 line-clamp-1 ">
                        {item.description}
                        </h6>
                        <h6 className="text-base font-normal text-gray-700 line-clamp-1">
                        {item.url}
                        </h6>
                    </a>
                    </div>
                ))}
                </div>

        </section>

    )

}
