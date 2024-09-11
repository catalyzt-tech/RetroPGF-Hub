import Cpage from './Cpage'
import fs from 'fs'
import path from 'path'
import BreadCump from './_component/BreadCump'
import Error from '@/app/component/Error'
import { RetroRound2 } from '../RetroType2'
import { cleanParamsName } from '@/app/lib/utils'

async function getSingleJson(
  projectName: string
): Promise<RetroRound2 | undefined> {
  const directoryPath = path.join(process.cwd(), 'public/static/rpgf2.json')

  const fileContents = await fs.promises.readFile(directoryPath, 'utf8')
  const jsonData: RetroRound2[] = JSON.parse(fileContents)

  return jsonData.find((elem) => cleanParamsName(elem.name) === projectName)
}

export default async function page({
  params,
}: {
  params: {
    name: string
  }
}) {
  const decodedString = decodeURIComponent(params.name)

  const res = await getSingleJson(decodedString)

  if (!res) {
    return <Error />
  }

  return (
    <div className="bg-gray-100 min-h-[calc(100vh-4.5rem)] h-full py-10">
      <div className="mx-4 sm:mx-6 lg:mx-20">
        <BreadCump projectName={res?.name} />
        <Cpage data={res} />
      </div>
    </div>
  )
}
