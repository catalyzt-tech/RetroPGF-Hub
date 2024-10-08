import { BadgeholderMetrics } from '@/app/(white_navbar)/explore/RetroPGF4/RetroType4'
import Cpage from './Cpage'
import BreadcrumbExplore from './_component/BreadcrumbExplore'
import { iRetroPGF6Project } from './RetroType6'
import { getRealTimeRetroPGF6 } from '@/app/lib/realtime'
import React from 'react'

async function getJsonBadgeholderMetric(): Promise<BadgeholderMetrics[]> {
  // const directoryPath = path.join(
  //   process.cwd(),
  //   'public/static/rpgf4/rpgf4_badgeholder_metrics.json'
  // )
  // const fileContents = await fs.promises.readFile(directoryPath, 'utf8')
  // const jsonData: BadgeholderMetrics[] = JSON.parse(fileContents)
  return []
}

export const dynamic = 'force-dynamic'

async function getJsonRetroPGF6(): Promise<iRetroPGF6Project[]> {
  const data = await getRealTimeRetroPGF6()
  const filterUniqueData = data.filter((item, index, self) => {
    return (
      item.applicationCategory &&
      index === self.findIndex((x) => x.name === item.name)
    )
  })
  return filterUniqueData
}

export default async function page() {
  const badgeholderData = await getJsonBadgeholderMetric()
  const projectRound6 = await getJsonRetroPGF6()

  return (
    <>
      <div className="flex flex-col gap-6 ">
        <div className="bg-gradient-to-b from-[#ffdede]">
          <div className="flex flex-col mx-2 sm:mx-4 md:mx-6 lg:mx-20 gap-6">
            <div className="mt-10">
              <BreadcrumbExplore secondText={'RetroPGF 6'} />
            </div>
            <div className="mt-4 inline-flex">
              <h6 className="font-rubik text-3xl md:text-5xl font-semibold text-gray-800 mb-3 flex items-center justify-center">
                <div>Retro Funding 6</div>
                <div className="ml-4 flex items-center border border-red-500 text-xl bg-red-50 font-medium text-red-700 px-4 py-2 h-fit rounded-full">
                  <div className="animate-pulse w-3.5 h-3.5 rounded-full bg-red-500 mr-2.5"></div>
                  Live
                </div>
              </h6>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 mx-4 md:mx-6 lg:mx-20">
          <Cpage
            projectRound6={projectRound6}
            badgeholderData={badgeholderData}
          />
        </div>
      </div>
    </>
  )
}
