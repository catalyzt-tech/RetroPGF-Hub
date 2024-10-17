import { RiStarFill, RiEmotionSadFill } from '@remixicon/react'

export default function FeelingIfNotExist() {
  return (
    <div className="flex grow bg-slate-50 w-hull min-h-44 rounded-lg px-8 py-8">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col justify-center gap-y-3 text-lg font-medium h-full">
          <div className="flex-grow"></div>
          <RiEmotionSadFill size={30} />
          <div className="text-md font-semibold">
            Big Problem If This Doesn't Exist!
          </div>
          <div className="text-sm font-normal text-gray-600">
            Collective feelings upset if this contribution doesn't exist.
          </div>
        </div>
      </div>
    </div>
  )
}
