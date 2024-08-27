import { formatText } from './ContributionSection'
import { iRetroPGF5Project } from '../../../RetroType5'
import LinkIcon from '@carbon/icons-react/lib/Link'
import { ConvertStringToTime } from '@/app/lib/utils'

function formatGrant(amount: string): string {
  return amount
    .split('-')
    .map((word, index) =>
      word ? word.charAt(0).toUpperCase() + word.slice(1) : word
    )
    .join('-')
}

function formatName(name: string): string {
  if (name == '') {
    return 'Not Disclosed'
  }
  return name
    .split(/[-_ .,]/)
    .map((word, index) =>
      word ? word.charAt(0).toUpperCase() + word.slice(1) : word
    )
    .join(' ')
}

function containsOnlyDigits(str: string) {
  return /^\d+$/.test(str)
}

export default function FundingSection({
  data,
  fundingRef,
}: {
  data: iRetroPGF5Project
  fundingRef: React.MutableRefObject<HTMLElement | null>
}) {
  return (
    <section
      id="Funding Sources"
      ref={fundingRef}
      className="flex flex-col gap-6 bg-white rounded-lg p-4 lg:p-6 border"
    >
      <h3 className="text-2xl font-semibold">Funding Sources</h3>
      <hr className="border-t-gray-100" />
      {data.grantsAndFunding.ventureFunding.length == 0 &&
        data.grantsAndFunding.grants.length == 0 &&
        data.grantsAndFunding.revenue.length == 0 && (
          <p className="text-base font-normal text-gray-600">
            There is no funding sources or revenue information for this project.
          </p>
        )}

      {data.grantsAndFunding.ventureFunding.length != 0 &&
        data.grantsAndFunding.ventureFunding.map((item, i) => (
          <div
            className="flex flex-col gap-1 px-8 py-6 bg-slate-50 rounded-lg"
            key={i}
          >
            <div className="flex flex-wrap gap-3 items-center">
              <p className="mb-1 text-base font-semibold font-rubik">
                {'Venture Funding'}
              </p>
              <div className="flex flex-grow"></div>
              <p className="mb-1 text-base font-medium text-gray-600 font-rubik">
                {containsOnlyDigits(item.amount)
                  ? Number(item.amount).toLocaleString('en-US', {
                      maximumFractionDigits: 2,
                    }) + ' OP'
                  : formatGrant(item.amount) + ' USD'}
              </p>
            </div>
            {item.details && (
              <p className="text-sm text-gray-500">{item.details}</p>
            )}
          </div>
        ))}

      {data.grantsAndFunding.grants.length != 0 &&
        data.grantsAndFunding.grants.map((item, i) => (
          <div
            className="flex flex-col gap-1 px-8 py-6 bg-slate-50 rounded-lg"
            key={i}
          >
            <div className="flex flex-wrap gap-3 items-center">
              <p className="mb-1 text-lg font-semibold font-rubik">
                {item.link ? (
                  <a
                    href={item.link || ''}
                    key={i}
                    className="flex items-center gap-2 group"
                  >
                    <LinkIcon
                      size={20}
                      className="group-hover:text-primaryRed"
                    />
                    {formatName(item.grant || '')}
                  </a>
                ) : (
                  formatName(item.grant || '')
                )}
              </p>
              <p className="flex flex-grow"></p>
              <p className="mb-1 text-base font-medium text-gray-600 font-rubik">
                {containsOnlyDigits(item.amount)
                  ? Number(item.amount).toLocaleString('en-US', {
                      maximumFractionDigits: 2,
                    }) + ' OP'
                  : formatGrant(item.amount) + ' USD'}
              </p>

              {item.date && (
                <p className="mb-1 text-base font-medium text-gray-600 font-rubik">
                  {ConvertStringToTime(item.date)}
                </p>
              )}
            </div>
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
                  ? Number(item.amount).toLocaleString('en-US', {
                      maximumFractionDigits: 2,
                    }) + ' OP'
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
