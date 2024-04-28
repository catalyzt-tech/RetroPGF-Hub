import { isLetter } from '@/app/lib/utils'
import { RetroRound1 } from '../RetroType1'
import Cpage from './Cpage'
import fs from 'fs'
import path from 'path'
import Error from '@/app/component/Error'
import BreadCump from './_component/BreadCump'

export async function getJsonRound1(
  projectName: string
): Promise<RetroRound1 | undefined> {
  const directoryPath = path.join(process.cwd(), 'public/static/rpgf1.json')

  const fileContents = await fs.promises.readFile(directoryPath, 'utf8')
  const jsonData: RetroRound1[] = JSON.parse(fileContents)

  jsonData.sort((a, b) => {
    const nameA = (a['Project Name'] ?? '').toLowerCase()
    const nameB = (b['Project Name'] ?? '').toLowerCase()

    for (let i = 0; i < Math.min(nameA.length, nameB.length); i++) {
      const charCodeA = nameA.charCodeAt(i)
      const charCodeB = nameB.charCodeAt(i)

      // Check if both characters are letters
      const isALetter = isLetter(nameA[i])
      const isBLetter = isLetter(nameB[i])

      if (isALetter && isBLetter) {
        // Both characters are letters, compare them normally
        if (charCodeA !== charCodeB) {
          return charCodeA - charCodeB
        }
      } else if (isALetter) {
        // Character in nameA is a letter, prioritize it
        return -1
      } else if (isBLetter) {
        // Character in nameB is a letter, prioritize it
        return 1
      }
    }

    // If both names are equal so far, the shorter name should come first
    return nameA.length - nameB.length
  })

  return jsonData.find((elem) => elem['Project Name'] === projectName)
}

export default async function page({
  params,
}: {
  params: {
    name: string
  }
}) {
  const decodedString = decodeURIComponent(params.name)

  const res = await getJsonRound1(decodedString)

  if (!res) {
    return <Error />
  }

  return (
    <>
      <div className="bg-gray-100 min-h-[calc(100vh-4.5rem)] h-full py-10">
        <div className="mx-2 sm:mx-6 lg:mx-20">
          <BreadCump projectName={res?.['Project Name']} />
          <Cpage data={res} />
        </div>
      </div>
    </>
  )
}
