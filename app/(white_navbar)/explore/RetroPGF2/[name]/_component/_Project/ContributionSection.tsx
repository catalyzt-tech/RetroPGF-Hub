import { RetroRound2 } from "../../../RetroType2";

export default function ContributionSection({
    data,
    contributionRef
}: {
    data: RetroRound2
    contributionRef: React.MutableRefObject<HTMLElement | null>;
}) {
    return (

        <section id="Contribution" ref={contributionRef} className="flex flex-col gap-6 bg-white rounded-lg p-4 lg:p-6">
            <h6 className="text-3xl font-semibold text-gray-800">
                Contribution
            </h6>
            <hr className="border-t-gray-100" />

            {/* contributionDescription */}
            <p className="text-base break-word font-normal text-gray-600">
                {data.team}
            </p>

        </section>

    )

}
