import Cpage from './Cpage'
import fs from 'fs'
import path from 'path'
// import { iRetroPGF4Project } from '../RetroType4'
import BreadCump from './_component/BreadCump'
import Error from '@/app/component/Error'
import { cleanParamsName } from '@/app/lib/utils'
import { getRealTimeRetroPGF5 } from '@/app/lib/realtime'

interface pageProps {
  params: {
    name: string
  }
}

async function FindRound5Data(decodedString:string) {
  try {
    const data = await getRealTimeRetroPGF5() 
    const projectData = data.data.find((elem) => {
      return cleanParamsName(elem.name) === decodedString
    })

    return projectData
  } catch (error) {
    console.log(error)
    return undefined
  } 
}

export default async function page({ params }: pageProps) {
  const decodedString = decodeURIComponent(params.name)


  const projectData = await FindRound5Data(decodedString)

  if (!projectData) {
    return <Error titleError='500 Failed to get project' subTitle='Cant find project that you looking for' desc='Something went wrong with finding the project that you looking for'  />
  }

  return (
    <div className="bg-gray-50 min-h-[calc(100vh-4.5rem)] h-full py-10">
      <div className="mx-2 sm:mx-6 lg:mx-20">
        <BreadCump projectName={projectData.name} />
        <Cpage data={projectData} />
      </div>
    </div>
  )
}
