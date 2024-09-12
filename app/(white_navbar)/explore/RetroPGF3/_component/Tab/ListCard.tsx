import Link from 'next/link'
import { RetroRound3 } from '@/app/(white_navbar)/explore/RetroPGF3/RetroType3'
import { handleCategoryRound3 } from '@/app/lib/common'
import { ArrowRight, ArrowUpRight } from '@carbon/icons-react'
import Image from 'next/image'

export default function ListCard({
  currentItems,
}: {
  currentItems: RetroRound3[]
}) {
  return (
    <>
      {currentItems.length !== 0 ? (
        <div className="relative overflow-x-hidden  ">
          <table className="w-full text-sm text-left rtl:text-right table-fixed rounded-xl">
            <thead className="text-gray-700 text-base font-semibold ">
              <tr>
                <th scope="col" className="py-4 px-3 w-[50%]">
                  <h6 className="text-base/semibold text-gray-700">Project</h6>
                </th>
                <th scope="col" className="py-4 px-3 w-[25%]">
                  <h6 className="text-base/semibold text-gray-700">
                    Categories
                  </h6>
                </th>
                <th scope="col" className="py-4 px-3 w-[15%]">
                  <h6 className="text-base/semibold text-gray-700">
                    In ballot
                  </h6>
                </th>
                <th scope="col" className="py-4 px-3 w-[20%] ">
                  <h6 className="text-end text-base/semibold text-gray-700 shrink-0">
                    OP Received
                  </h6>
                </th>
              </tr>
            </thead>
            <tbody className="" style={{ borderRadius: '1.5rem' }}>
              {currentItems.map((item, i) => (
                <tr className="border rounded-3xl " key={i}>
                  <th className="p-5 flex gap-2">
                    <div className="relative min-w-16 min-h-16 max-w-16 max-h-16 self-center">
                      <Image
                        src={'/random/avatar.png'}
                        alt="avatar image"
                        className=""
                        fill
                      />
                    </div>
                    <div className="flex flex-col">
                      <Link
                        href={`/explore/RetroPGF3/${item.displayName}`}
                        className="flex gap-1 pb-2  items-center cursor-pointer hover:underline w-fit"
                      >
                        <h6 className="text-sm font-bold text-gray-900">
                          {item.displayName}
                        </h6>
                        <ArrowUpRight size={20} className="fill-gray-600" />
                      </Link>
                      <p className="text-sm font-normal text-gray-500 line-clamp-2 ">
                        {item.contributionDescription}
                      </p>
                    </div>
                  </th>

                  <td className="py-4 px-3 ">
                    <div className="flex flex-col flex-wrap gap-2 ">
                      {handleCategoryRound3(item['New Main-Category'])}
                      {/* <div className="inline-flex px-2 py-1 rounded-full bg-slate-50 hover:bg-slate-100/75 cursor-pointer w-fit">
                        <h6 className="text-xs font-normal text-gray-600 line-clamp-1 break-all">
                          {item['Sub-category']}
                        </h6>
                      </div> */}
                    </div>
                  </td>
                  <td className="py-4 px-3">
                    <h6 className="text-sm font-normal text-gray-500">
                      {item.ballot}
                    </h6>
                  </td>
                  <td className="py-4 px-3">
                    <h6 className="text-sm text-end font-normal text-gray-500">
                      #{item.rank}
                    </h6>
                    <h6 className="text-sm text-end font-bold text-gray-700">
                      {item.median}
                    </h6>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h6 className="col-span-1 lg:col-span-2 xl:col-span-3 text-xl font-medium text-gray-500 text-center w-full">
          0 Items Found
        </h6>
      )}
    </>
  )
}
