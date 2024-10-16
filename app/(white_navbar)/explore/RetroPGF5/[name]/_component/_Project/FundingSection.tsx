import { formatText } from './ContributionSection'
import { iRetroPGF5Project } from '../../../RetroType5'
import LinkIcon from '@carbon/icons-react/lib/Link'
import {
  containsOnlyDigits,
  ConvertStringToTime,
  formatGrant,
  formatName,
  numberWithCommas,
} from '@/app/lib/utils'
import Link from 'next/link'

interface iFundingSection {
  data: iRetroPGF5Project
  fundingRef: React.MutableRefObject<HTMLElement | null>
}

export default function FundingSection({ data, fundingRef }: iFundingSection) {
  return (
    <section
      id="Funding Sources"
      ref={fundingRef}
      className="flex flex-col gap-6 bg-white rounded-lg p-4 lg:p-6 border"
    >
      <h3 className="text-2xl font-semibold">Funding Sources</h3>
      <hr className="hidden sm:block border-t-gray-100" />
      {data.grantsAndFunding.grants.length == 0 &&
        data.grantsAndFunding.revenue.length == 0 && (
          <p className="text-base font-normal text-gray-600">
            There is no funding sources or revenue information for this project.
          </p>
        )}

      {data.grantsAndFunding.grants.length != 0 &&
        data.grantsAndFunding.grants.map((item, i) => (
          <div
            className="flex flex-col gap-1 px-8 py-6 bg-slate-50 rounded-lg"
            key={item.details}
          >
            <div className="flex flex-wrap gap-3 items-center">
              <p className="mb-1 text-lg font-semibold font-rubik">
                {formatName(item.grant ?? '')}
              </p>
              <p className="flex flex-grow"></p>
              <p className="mb-1 text-base font-medium text-gray-600 font-rubik">
                {/* OP Grant Case */}
                {item.grant &&
                  containsOnlyDigits(item.amount) &&
                  numberWithCommas(item.amount) + ' OP'}

                {/* Only Number USD Grant Case */}
                {item.grant === null &&
                  containsOnlyDigits(item.amount) &&
                  numberWithCommas(item.amount) + ' USD'}

                {/* Not Number USD Grant Case */}
                {item.grant === null &&
                  !containsOnlyDigits(item.amount) &&
                  formatGrant(item.amount) + ' USD'}
              </p>
            </div>
            {item.date && (
              <p className="mb-1 text-sm text-gray-600 font-rubik">
                {ConvertStringToTime(item.date)}
              </p>
            )}
            {item.details && (
              <p className="text-sm text-gray-500">{item.details}</p>
            )}
          </div>
        ))}

      {data.grantsAndFunding.revenue.length != 0 &&
        data.grantsAndFunding.revenue.map((item, i) => (
          <div
            className="flex flex-col gap-1 px-8 py-6 bg-slate-50 rounded-lg"
            key={i}
          >
            <div className="flex flex-wrap gap-3 items-center">
              <p className="mb-1 text-lg font-semibold font-rubik">
                {'Revenue'}
              </p>
              <p className="flex flex-grow"></p>
              <p className="mb-1 text-base font-medium text-gray-600 font-rubik">
                {containsOnlyDigits(item.amount)
                  ? numberWithCommas(item.amount) + ' OP'
                  : formatGrant(item.amount) + ' USD'}
              </p>
            </div>
            {item.details && (
              <p className="text-sm text-gray-500">{item.details}</p>
            )}
          </div>
        ))}
    </section>
  )
}
