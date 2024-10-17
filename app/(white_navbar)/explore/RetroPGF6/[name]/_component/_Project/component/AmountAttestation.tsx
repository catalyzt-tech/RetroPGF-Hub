import { RiUser2Fill } from '@remixicon/react'

export default function AmountAttestation() {
  return (
    <div className="flex grow bg-slate-50 w-80 min-h-44 rounded-lg px-8 py-8">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col justify-center gap-y-3 text-lg font-medium h-full">
          <div className="flex-grow"></div>
          <RiUser2Fill size={30} />
          <div className="text-md font-semibold">100 Reviews</div>
          <div className="text-sm font-normal text-gray-600">
            Attestations from the badgeholders, top 100 delegates, and other
          </div>
        </div>
      </div>
    </div>
  )
}
