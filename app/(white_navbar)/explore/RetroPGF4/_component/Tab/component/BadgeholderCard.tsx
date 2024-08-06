import React, { FC, Fragment, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AudioConsole, RepoSourceCode, Star } from '@carbon/icons-react'
import { truncateProjectId } from '../../../[name]/_component/_Project/ProjectDetailSection'
import { Dialog, Transition } from '@headlessui/react'
import detailDialog from './DialogDetail'

interface BadgeholderCardProps {
  address: string
  ensName: string
  joinMethod: string
  joinDate: string
  invitedBy: string
  metricInBallot: number
  metricViewed: number
  openSourceMultiplier: number
}

const BadgeholderCard: FC<BadgeholderCardProps> = ({
  address,
  ensName,
  joinMethod,
  joinDate,
  invitedBy,
  metricInBallot,
  metricViewed,
  openSourceMultiplier,
}) => {
  let [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={`flex flex-col flex-grow-1 flex-shrink-0 border rounded-lg shadow-sm relative min-w-16 bg-white overflow-hidden`}
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
        {status === 'PENDING' ? (
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
          //resolve from ens name
          src={'/random/OP-Logo.png'}
          alt="avatar image"
          className=""
          width={65}
          height={65}
        />
      </div>
      <div className="mt-24 lg:mt-28 p-4 flex flex-col justify-start items-start gap-3 w-full h-full">
        <div className="w-full flex flex-col flex-wrap items-center">
          <p className="text-md font-medium text-gray-800 break-words line-clamp-1 max-w-full">
            {ensName ? ensName : truncateProjectId(address)}
          </p>
          <p className="text-xs font-light text-gray-600 break-words truncate max-w-full">
            Invitation By {invitedBy}
          </p>

          {/* {openSourceMultiplier === number ? (
            <p className="text-xs font-light text-green-700 px-1.5 py-0.5 bg-green-50 border border-green-600 rounded-full mt-2">
              Open Source Only
            </p>
          ) : (
            <p className="text-xs font-light text-gray-500 px-1.5 py-0.5 bg-gray-50 border border-gray-500 rounded-full mt-2">
              Mixed
            </p>
          )} */}
        </div>
        <div className="flex-grow"></div>
        <div className="flex gap-2">
          <AudioConsole size={20} />
          <div className="flex gap-1">
            <p className="text-sm font-semibold text-gray-800">
              {metricInBallot}
            </p>
            <p className="text-sm font-light text-gray-600">Metrics Selected</p>
          </div>
        </div>
        <div className="flex gap-2">
          <RepoSourceCode size={20} />
          <div className="flex gap-1">
            <p className="text-sm font-semibold text-gray-800">
              x {openSourceMultiplier}
            </p>
            <p className="text-sm font-light text-gray-600">
              Open-Source Multiplied
            </p>
          </div>
        </div>

        <button
          className="flex justify-center items-center gap-2 bg-red-50 rounded-md px-4 py-2.5 w-full group"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* <Trophy size={20} /> */}

          <div className="flex flex-row justify-center items-center gap-x-2 group-hover:scale-105 transition-all ease-linear">
            <Star size={20} />
            <div className="text-sm font-semibold text-gray-800">
              View Metrics
            </div>
          </div>
          {detailDialog({ isOpen, setIsOpen })}
        </button>
      </div>
    </div>
  )
}

export default BadgeholderCard
