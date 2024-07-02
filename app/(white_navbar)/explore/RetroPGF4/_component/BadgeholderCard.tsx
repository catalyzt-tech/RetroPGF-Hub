import react from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AudioConsole, RepoSourceCode } from '@carbon/icons-react'

const BadgeholderCard  = () => {
    const isPending = true
    return(
        <div
      className={`flex flex-col flex-grow-1 flex-shrink-0 border rounded-lg shadow-sm max-h-[20rem] min-h-[20rem] relative bg-white overflow-hidden`}
    >
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-16 lg:h-20 overflow-hidden">
        <Image
          src={'/random/OP-Banner.png'}
          alt="background image"
          // Not sure about the aspect ratio, so using object-fit
          className="opacity-75 object-cover z-10"
          fill
        />
      </div>

      {/* Submitted Status */}
      <div className="absolute top-1 right-1 px-1 py-0.5 rounded-[0.25rem] z-20">
        {isPending === true ? (
          <div className="flex items-center text-[0.75rem] bg-gray-50 border border-gray-400 font-medium text-gray-600 px-1.5 py-0.5 rounded-lg">
            {' '}
            <div className="w-2 h-2 rounded-full bg-gray-400 mr-1"></div>
            Pending
          </div>
        ) : (
          <div className="flex items-center text-[0.75rem] bg-green-50 border border-green-500 font-medium text-green-700 px-1.5 py-0.5 rounded-lg">
            {' '}
            <div className="w-2 h-2 rounded-full bg-red-500 mr-1"></div>Submitted
          </div>
        )}
      </div>

      {/* Avatar */}
      <div className="absolute top-8 lg:top-12 left-1/2 transform -translate-x-1/2 rounded-full bg-white flex flex-shrink-0 z-20 overflow-hidden">
        <Image
          src={'/random/OP-Logo.png'}
          alt="avatar image"
          className=""
          width={65}
          height={65}
        />
      </div>

      <div className="mt-24 lg:mt-28"></div>
      <div className="w-full h-full">
        <div className="p-4 flex flex-col justify-start items-start gap-3 h-full overflow-hidden">
          <div className="flex flex-col gap-0.5">
            <div
              className="text-sm font-normal text-gray-800 z-20 hover:underline line-clamp-1"
            >
              0x0090720fed7fed66ed658118b7b3bb0189d3a495
            </div>
            <p className="text-xs font-normal text-gray-400 line-clamp-2 break-all">
              Latest Update: 2 days ago
            </p>
          </div>

          <div className="flex-grow"></div>
          <div className="flex gap-2">
            <AudioConsole size={20} />
            <div className="flex gap-1">
              <p className="text-sm font-semibold text-gray-800">4</p>
              <p className="text-sm font-light text-gray-600">Metrics</p>
            </div>
          </div>
          <div className="flex gap-2">
            <RepoSourceCode size={20} />
            <div className="flex gap-1">
              <p className="text-sm font-semibold text-gray-800">x1.2</p>
              <p className="text-sm font-light text-gray-600">Open-source Multiplied</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>

    );
}

export default BadgeholderCard;