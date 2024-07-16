import Cpage from './Cpage'
import BreadCumpExplore from './_component/BreadCumpExplore'
import fs from 'fs'
import path from 'path'
import { RetroRound2 } from './RetroType2'

export async function getJsonRound2(): Promise<RetroRound2[]> {
  const directoryPath = path.join(process.cwd(), 'public/static/rpgf2.json')

  const fileContents = await fs.promises.readFile(directoryPath, 'utf8')
  const jsonData: RetroRound2[] = JSON.parse(fileContents)

  // default filter is most ballot
  // baloot = vote received
  jsonData.sort((a, b) => {
    return b.Vote_Recieved - a.Vote_Recieved
  })

  return jsonData
}

export default async function page({}: {}) {
  const round2 = await getJsonRound2()

  return (
    <>
      {/* <div className="bg-gradient-to-b from-slate-200 to-5% sm:to-10% to-[#E2E8F000]"> */}

      <div className="flex flex-col gap-6 ">
        <div className="bg-gradient-to-b from-[#ffdede]">
          <div className="flex flex-col mx-2 sm:mx-4 md:mx-6 lg:mx-20 gap-6">
            <div className="mt-10">
              <BreadCumpExplore secondText={'RetroPGF 2'} />
            </div>

            <div className="mt-4">
              <h6 className="font-rubik text-3xl md:text-5xl font-semibold text-gray-800 mb-3">
                Retro Funding 2
              </h6>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 mx-2 sm:mx-4 md:mx-6 lg:mx-20">
          <Cpage round2={round2} />
        </div>
      </div>
    </>
  )
}
