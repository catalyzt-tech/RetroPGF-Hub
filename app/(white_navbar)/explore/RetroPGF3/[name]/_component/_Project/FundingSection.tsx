import { RetroRound3 } from "../../../RetroType3"

export default function FundingSection({
    data,
    fundingRef
}: {
    data: RetroRound3
    fundingRef: React.MutableRefObject<HTMLElement | null>;

}) {

    function formatText(inputText: string) {
        // Convert text to lowercase and split it into words
        const words = inputText.toLowerCase().split('_');

        // Capitalize the first letter of each word
        const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

        // Join the words with a space and append " 2" at the end
        const formattedText = capitalizedWords.join(' ');

        return formattedText;
    }

    return (

            <section id="Funding Sources" ref={fundingRef} className="flex flex-col gap-6 bg-white rounded-lg p-2 lg:p-6">
                <h3 className="text-3xl font-semibold">
                    Funding Sources
                </h3>
                <hr className="border-t-gray-100" />

                {data.fundingSources.map((item, i) => (
                    <div className="flex flex-col gap-1" key={i}>
                        <div className="flex flex-wrap gap-3 items-center">
                            <p className="mb-1 text-base font-normal text-gray-500">{formatText(item.type)} :</p>
                            <p className="mb-1 text-base font-semibold text-gray-600">
                                {item.amount.toLocaleString("en-US", { maximumFractionDigits: 2 })} {item.currency}
                            </p>
                        </div>


                    </div>
                ))}
            </section>

    )

}
