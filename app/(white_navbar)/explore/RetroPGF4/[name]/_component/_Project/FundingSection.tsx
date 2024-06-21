import { iRetroPGF4Project } from '@/app/(white_navbar)/explore/RetroPGF4/RetroType4'
import { formatText } from './ContributionSection'

const fundingSourcesMap = {
  ventureFunding: 'Venture Funding',
  grants: 'Grants',
  revenue: 'Revenue',
}

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
  data: iRetroPGF4Project
  fundingRef: React.MutableRefObject<HTMLElement | null>
}) {
  // const grantsAndFundingArray = Object.entries(data.grantsAndFunding).flatMap(
  //   ([type, items]) => {
  //     return items.map((item) => ({
  //       type,
  //       ...item,
  //     }))
  //   }
  // )
  return (
    <section
      id="Funding Sources"
      ref={fundingRef}
      className="flex flex-col gap-6 bg-white rounded-lg p-4 lg:p-6"
    >
      <h3 className="text-2xl font-semibold">Funding Sources</h3>
      <hr className="border-t-gray-100" />
      {data.grantsAndFunding.ventureFunding.length != 0 &&
        data.grantsAndFunding.ventureFunding.map((item, i) => (
          <div className="flex flex-col gap-1" key={i}>
            <div className="flex flex-wrap gap-3 items-center">
              <p className="mb-1 text-base font-normal text-gray-500">
                {'Venture Funding'} :
              </p>
              <p className="mb-1 text-base font-semibold text-gray-600">
                {containsOnlyDigits(item.amount)
                  ? Number(item.amount).toLocaleString('en-US', {
                      maximumFractionDigits: 2,
                    }) + ' OP'
                  : formatGrant(item.amount) + ' USD'}
                {item.currency || ''}
              </p>
              {item.details && (
                <p className="text-sm text-gray-500">{item.details}</p>
              )}
            </div>
          </div>
        ))}
      {data.grantsAndFunding.grants.length != 0 &&
        data.grantsAndFunding.grants.map((item, i) => (
          <div className="flex flex-col gap-1" key={i}>
            <div className="flex flex-wrap gap-3 items-center">
              <p className="mb-1 text-base font-normal text-gray-500">
                {formatName(item.grant) as string} :
              </p>
              <p className="mb-1 text-base font-semibold text-gray-600">
                {containsOnlyDigits(item.amount)
                  ? Number(item.amount).toLocaleString('en-US', {
                      maximumFractionDigits: 2,
                    }) + ' OP'
                  : formatGrant(item.amount) + ' USD'}
                {item.currency || ''}
              </p>
              {item.details && (
                <p className="text-sm text-gray-500">{item.details}</p>
              )}
            </div>
          </div>
        ))}
      {data.grantsAndFunding.revenue.length != 0 &&
        data.grantsAndFunding.revenue.map((item, i) => (
          <div className="flex flex-col gap-1" key={i}>
            <div className="flex flex-wrap gap-3 items-center">
              <p className="mb-1 text-base font-normal text-gray-500">
                {'Revenue'} :
              </p>
              <p className="mb-1 text-base font-semibold text-gray-600">
                {containsOnlyDigits(item.amount)
                  ? Number(item.amount).toLocaleString('en-US', {
                      maximumFractionDigits: 2,
                    }) + ' OP'
                  : formatGrant(item.amount) + ' USD'}
                {item.currency || ''}
              </p>
              {item.details && (
                <p className="text-sm text-gray-500">{item.details}</p>
              )}
            </div>
          </div>
        ))}
    </section>
  )
}
