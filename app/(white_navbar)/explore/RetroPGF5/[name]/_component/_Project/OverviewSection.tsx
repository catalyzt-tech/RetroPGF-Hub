import {
  handleApplicationCategoryRound5,
  handleProjectCategoryRound,
  splitTextNewLine,
} from '@/app/lib/common'
import { iRetroPGF5Project } from '../../../RetroType5'

interface iOverviewSection {
  data: iRetroPGF5Project
}

export default function OverviewSection({ data }: iOverviewSection) {
  return (
    <>
      <div className="flex flex-col gap-6 bg-white rounded-lg p-4 lg:p-6 border">
        <h3 className="text-2xl font-semibold">Overview</h3>
        <hr className="hidden sm:block border-t-gray-100" />
        <p className="mb-1 text-base font-normal text-gray-600 break-words">
          {data.description
            ? splitTextNewLine(data.description)
            : 'No description'}
        </p>
        <div className="flex flex-col gap-1">
          <div className="flex flex-wrap gap-3 items-center">
            <p className="mb-1 text-base font-normal text-gray-500">Category</p>
            <div className=" text-base font-semibold text-gray-600">
              {handleProjectCategoryRound(data.category, 'text-sm')}
            </div>
            {/* <p className="mb-1 text-sm font-normal text-gray-500">
              Application Category:
            </p> */}
            <div className=" text-base font-semibold text-gray-600">
              {handleApplicationCategoryRound5(
                data.applicationCategory ?? '',
                'text-sm'
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
