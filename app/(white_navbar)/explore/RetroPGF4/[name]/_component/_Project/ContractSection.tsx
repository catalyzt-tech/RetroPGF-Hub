import { iRetroPGF4Project } from '../../../RetroType4'
import { mapChainId, getNameByChainId } from '@/app/lib/utils'
import Image from 'next/image'

interface iContract {
  data: iRetroPGF4Project
  contractRef: React.MutableRefObject<HTMLElement | null>
}
export default function ContractSection({ data, contractRef }: iContract) {
  return (
    <section
      id="Contract Address"
      ref={contractRef}
      className="flex flex-col gap-6 bg-white rounded-lg p-2 lg:p-6 border"
    >
      <h3 className="text-2xl font-semibold">Contract Address</h3>
      <hr className="border-t-gray-100" />
      <div className="text-gray-500">
        Project contract addresses on different chains are listed below. All
        contracts are verified for ownership on-chain, and off-chain
        verification is conducted by Open Source Observer (OSO).
      </div>
      {data.contracts.length == 0 && (
        <p className="text-base font-normal text-gray-600">
          There is no contract address for this project.
        </p>
      )}
      {data.contracts.length !== 0 &&
        data.contracts.map((item, i) => (
          <div
            className="flex flex-col gap-1 rounded-lg bg-slate-50 px-6 py-4"
            key={i}
          >
            <div className="flex flex-row flex-wrap gap-3 items-center ">
              <div className="flex gap-3">
                <Image
                  src={`/static/superchainLogo/${mapChainId(
                    item.chainId
                  )}.webp`}
                  alt="chain"
                  className="rounded-full"
                  width={25}
                  height={25}
                />
                <p className="font-medium font-rubik">
                  {getNameByChainId(item.chainId)}
                </p>
              </div>
              {/* <div>|</div> */}
              <p className="text-base text-gray-500 font-rubik">
                {item.address}
              </p>
            </div>
          </div>
        ))}
    </section>
  )
}
