import Cpage from './Cpage'
import fs from 'fs'
import path from 'path'
import { iRetroPGF4Project } from '../RetroType4'
import BreadCump from './_component/BreadCump'
import Error from '@/app/component/Error'

async function getSingleJson(
  projectName: string
): Promise<iRetroPGF4Project | undefined> {
  const directoryPath = path.join(process.cwd(), 'public/static/rpgf4.json')

  const fileContents = await fs.promises.readFile(directoryPath, 'utf8')
  const jsonData: iRetroPGF4Project[] = JSON.parse(fileContents)

  return jsonData.find((elem) => elem.name === projectName)
}

export default async function page({
  params,
}: {
  params: {
    name: string
  }
}) {
  const decodedString = decodeURIComponent(params.name)
  console.log(params)
  const res = await getSingleJson(decodedString)

  if (!res) {
    console.log('err')
    return <Error />
  }

  return (
    <div className="bg-gray-100 min-h-[calc(100vh-4.5rem)] h-full py-10">
      <div className="mx-2 sm:mx-6 lg:mx-20">
        <BreadCump projectName={res?.name} />
        <Cpage data={res} />
      </div>
    </div>
  )
}
