import { iRetroPGF4Project } from '../../../RetroType4'
import { mapImpactMetrics } from '../../Text'
const ImpactMetricSection = ({ data }: { data: iRetroPGF4Project }) => {
  return (
    <section
      id="Github"
      //   ref={githubRef}
      className="flex flex-col gap-6 bg-white rounded-lg p-4 lg:p-6 border"
    >
      <h3 className="text-2xl font-semibold ">Impact Metrics</h3>
      <hr className="border-t-gray-100" />
      <div className="text-gray-500">
        Retro Funding 4 experiments with Metrics-based Evaluation, citizens are
        able to more accurately express their preferences for the types of
        impact they want to reward, as well as make more accurate judgements of
        the impact delivered by individual contributors.
      </div>
      <div className="flex flex-row flex-wrap gap-5  ">
        {Object.entries(data.impactMetrics)
          .filter(([key]) => key !== 'application_id' && key !== 'is_oss')
          .map(([impactName, impactValue], index) => {
            // Check if impactValue is a number before rendering
            const displayValue =
              typeof impactValue === 'number' ? impactValue.toFixed(2) : 'N/A'

            return (
              <div
                key={impactName}
                className="flex flex-col flex-grow w-72 bg-slate-50 rounded-lg px-8 py-6"
              >
                <div className="text-lg font-semibold font-rubik">
                  {displayValue}
                </div>
                <div className="text-base mt-2 text-gray-600">
                  {mapImpactMetrics(impactName)}
                </div>
              </div>
            )
          })}
      </div>
    </section>
  )
}
export default ImpactMetricSection
