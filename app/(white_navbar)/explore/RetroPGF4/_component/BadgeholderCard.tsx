import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AudioConsole, RepoSourceCode } from '@carbon/icons-react'

const BadgeholderCard = () => {
  const isPending = true
  return (
    <div
      className={`flex flex-col flex-grow-1 flex-shrink-0 border rounded-lg shadow-sm h-72 relative bg-white overflow-hidden`}
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
            <div className="w-2 h-2 rounded-full bg-red-500 mr-1"></div>
            Submitted
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
      <div className="mt-24 lg:mt-28 p-4 flex flex-col justify-start items-start gap-3 w-full  h-full">
        <div className="w-full flex flex-col flex-wrap items-center">
          <p className="text-sm font-semibold text-gray-800 break-words overflow-hidden whitespace-normal">
            0x.........32432923
          </p>
          <p className="text-sm font-light text-gray-600">Open Source</p>
        </div>
        <div className="flex-grow"></div>
        <div className="flex gap-2">
          <AudioConsole size={20} />
          <div className="flex gap-1">
            <p className="text-sm font-semibold text-gray-800">4</p>
            <p className="text-sm font-light text-gray-600">Metrics Selected</p>
          </div>
        </div>
        <div className="flex gap-2">
          <RepoSourceCode size={20} />
          <div className="flex gap-1">
            <p className="text-sm font-semibold text-gray-800">x1.2</p>
            <p className="text-sm font-light text-gray-600">
              Open-Source Multiplied
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BadgeholderCard
