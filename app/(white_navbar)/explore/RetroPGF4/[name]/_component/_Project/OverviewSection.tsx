import { iRetroPGF4Project } from '../../../RetroType4'
export default function OverviewSection({ data }: { data: iRetroPGF4Project }) {
  return (
    <>
      <div className="flex flex-col gap-6 bg-white rounded-lg p-4 lg:p-6">
        <h3 className="text-3xl font-semibold">Overview</h3>
        <hr className="border-t-gray-100" />
        <p className="mb-1 text-base font-normal text-gray-600 break-all break-words">
          {data.description ?? 'No description'}
        </p>

        <div className="flex flex-col gap-1">
          <div className="flex flex-wrap gap-3 items-center">
            <p className="mb-1 text-base font-normal text-gray-500">
              Category:
            </p>
            <p className="mb-1 text-base font-semibold text-gray-600">
              {data.category}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
