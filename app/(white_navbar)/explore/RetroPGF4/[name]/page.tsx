import Cpage from './Cpage'
import fs from 'fs'
import path from 'path'
import { RetroRound3 } from '../RetroType4'
import BreadCump from './_component/BreadCump'
import Error from '@/app/component/Error'

async function getSingleJson(
  projectName: string
): Promise<RetroRound3 | undefined> {
  const directoryPath = path.join(process.cwd(), 'public/static/rpgf3.json')

  const fileContents = await fs.promises.readFile(directoryPath, 'utf8')
  const jsonData: RetroRound3[] = JSON.parse(fileContents)

  return jsonData.find((elem) => elem.displayName === projectName)
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
      <div className="mx-2 sm:mx-6 lg:mx-20">
        <BreadCump projectName={res?.displayName} />
        <Cpage data={res} />
      </div>
    </div>
  )
}
