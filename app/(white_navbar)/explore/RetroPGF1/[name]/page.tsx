import Cpage from './Cpage'
import Error from '@/app/component/Error'
import BreadCump from './_component/BreadCump'
import { getSpecifigJsonRound1 } from '../page'

export default async function page({
  params,
}: {
  params: {
    name: string
  }
}) {
  const decodedString = decodeURIComponent(params.name)

  const res = await getSpecifigJsonRound1(decodedString)

  if (!res) {
    return <Error />
  }

  return (
    <>
      <div className="bg-gray-50 min-h-[calc(100vh-4.5rem)] h-full py-4 lg:py-10">
        <div className="mx-4 sm:mx-6 lg:mx-20">
          <BreadCump projectName={res?.['Project Name']} />
          <Cpage data={res} />
        </div>
      </div>
    </>
  )
}
