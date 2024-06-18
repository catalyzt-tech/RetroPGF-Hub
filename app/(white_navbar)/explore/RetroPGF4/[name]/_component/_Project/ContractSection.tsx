import { iRetroPGF4Project } from '../../../RetroType4'
import { mapChainId } from '@/app/lib/utils'
export default function GithubSection({
  data,
  contractRef,
}: {
  data: iRetroPGF4Project
  contractRef: React.MutableRefObject<HTMLElement | null>
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
      id="Contract"
      ref={contractRef}
      className="flex flex-col gap-6 bg-white rounded-lg p-2 lg:p-6"
    >
      <h3 className="text-3xl font-semibold">Contracts</h3>
      <hr className="border-t-gray-100" />
      {data.contracts.map((item, i) => (
        <div className="flex flex-col gap-1" key={i}>
          <div className="flex flex-wrap gap-3 items-center">
            <p className="mb-1 text-base font-normal text-gray-500">
              {item.address}
            </p>
            <p className="mb-1 text-base font-semibold text-gray-600">
              {/* Chain ID: {item.chainId} */}
              {mapChainId(item.chainId) || ''}
            </p>
          </div>
        </div>
      ))}
    </section>
  )
}
