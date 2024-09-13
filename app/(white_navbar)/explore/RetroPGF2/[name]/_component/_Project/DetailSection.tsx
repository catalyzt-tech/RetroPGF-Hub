
import { RetroRound2 } from "../../../RetroType2";
export default function DetailSection({
    data,
    questionRef
}: {
    data: RetroRound2
    questionRef :  React.MutableRefObject<HTMLElement | null>;

}) {

return (

    <> 

        {/* Impact Description (Impact Metrics) */}
        <section id="Question" ref={questionRef} className="flex flex-col gap-6 bg-white rounded-lg p-4 lg:p-6 border">
            <h6 className="text-3xl font-semibold text-gray-800">
                Detail
            </h6>
            <hr className="border-t-gray-100"/>

           <div className="flex flex-col gap-2">
                <h6 className="text-lg break-words font-semibold text-gray-800">
                    How do you support development and usage of the OP Stack? What public good do you provide to the Collective
                </h6>
                <p className="text-base break-words font-normal text-gray-600">
                {data.question_1}
                </p>
           </div>


            <div className="flex flex-col gap-2">
                <h6 className="text-lg break-words font-semibold text-gray-800">
                    How do you sustain yoursel? Please list sources of funding and revenue
                </h6>
                <p className="text-base break-words font-normal text-gray-600">
                {data.question_2}
                </p>
            </div>

        </section>


    </>

    )

}
