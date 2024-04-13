
import LinkIcon from "@carbon/icons-react/lib/Link";
import { RetroRound3 } from "../../../RetroType3";
export default function ImpactSection({
    data,
    impactRef
}: {
    data: RetroRound3
    impactRef :  React.MutableRefObject<HTMLElement | null>;

    }) {

return (

    <> 

        {/* Impact Description (Impact Metrics) */}
        <section id="Impact" ref={impactRef} className="flex flex-col gap-6 bg-white rounded-lg p-4 lg:p-6">
            <h6 className="text-3xl font-semibold text-gray-800">
                Impact
            </h6>
            <hr className="border-t-gray-100"/>

            {/* Impact Description */}
            <p className="text-base break-words font-normal text-gray-600">
            {data.impactDescription}
            </p>

            <div className="flex flex-col gap-4 overflow-hidden max-w-[80vw]">
                <h6 className="text-base font-bold text-gray-800">Impact Metrics</h6>
              {data.impactMetrics.map((item, i) => (
                  <div className="flex gap-2 group" key={i}>
                  <LinkIcon  className="min-w-6 max-w-6 min-h-6 max-h-6 text-gray-500"/>
                  <a 
                  href={item.url}
                  className="flex flex-col gap-0.5 group-hover:underline cursor-pointer">
                      <h6 className="text-base font-semibold text-gray-600 line-clamp-1 ">
                          {item.number}  {item.description}
                      </h6>
                      <h6 className="text-base font-normal text-gray-700 line-clamp-1 ">
                        {item.url}
                      </h6>
                  </a>
              </div>
              ))}
            </div>
        </section>


    </>

    )

}
