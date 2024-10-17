import { RiStarFill } from '@remixicon/react'

export default function AverageStar() {
  return (
    <div className="flex grow bg-slate-50 w-80 min-h-44 rounded-lg px-8 py-8">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col justify-center gap-y-3 text-lg font-medium h-full">
          <div className="flex-grow"></div>
          <RiStarFill size={30} />
          <div className="text-md font-semibold">8.5 Average Scores</div>
          <div className="text-sm font-normal text-gray-600">
            Badgeholders and delegates likely to recommend this project to
            someone else.
          </div>
        </div>
      </div>
    </div>
  )
}
