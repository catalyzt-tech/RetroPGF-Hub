import { mapImpactMetrics } from '../../Text'
import { numberWithCommas } from '@/app/lib/utils'
import { iRetroPGF4Project } from '@/app/(white_navbar)/explore/RetroPGF4/RetroType4'

interface iImpactMetric {
  data: iRetroPGF4Project
  impactRef: React.MutableRefObject<HTMLElement | null>
}
const ImpactMetricSection = ({ data, impactRef }: iImpactMetric) => {
  return (
    <section
      id="Impact Metrics"
      ref={impactRef}
      className="flex flex-col gap-6 bg-white rounded-lg p-4 lg:p-6 border"
    >
      <h3 className="text-2xl font-semibold ">Impact Metrics</h3>
      <hr className="hidden sm:block border-t-gray-100" />
      <div className="text-gray-500">
        These metrics are collected based on the data provided on-chain by Open
        Source Observer (OSO).
      </div>
      <div className="flex flex-row flex-wrap gap-5  ">
        {Object.entries(data.impactMetrics ?? {})
          .filter(
            ([key]) =>
              key !== 'application_id' &&
              key !== 'is_oss' &&
              key !== 'project_name'
          )
          .map(([impactName, impactValue], index) => {
            const displayValue =
              typeof impactValue === 'number'
                ? numberWithCommas(impactValue.toFixed(2))
                : 'N/A'

            return (
              <div
                key={impactName}
                className="flex flex-col flex-grow w-72 bg-slate-50 rounded-lg px-8 py-6"
              >
                <div className="text-lg font-semibold font-rubik">
                  {numberWithCommas(displayValue)}
                </div>
                <div className="flex flex-row flex-wrap items-center text-base mt-2 text-gray-600">
                  {mapImpactMetrics(impactName)}{' '}
                </div>
              </div>
            )
          })}
      </div>
    </section>
  )
}
export default ImpactMetricSection
