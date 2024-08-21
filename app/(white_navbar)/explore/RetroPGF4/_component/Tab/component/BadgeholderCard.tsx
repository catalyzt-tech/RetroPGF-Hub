import React, { FC, Fragment, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  AudioConsole,
  DataAnalytics,
  RepoSourceCode,
  Star,
} from '@carbon/icons-react'
import { truncateProjectId } from '../../../[name]/_component/_Project/ProjectDetailSection'
import { Dialog, Transition } from '@headlessui/react'
import DialogDetail from './DialogDetail'
import { ImpactMetrics, MetricSelected } from '../../../RetroType4'

interface BadgeholderCardProps {
  address: string
  ensName: string
  joinMethod: string
  joinDate: string
  invitedBy: string
  metricInBallot: number
  metricViewed: number
  openSourceMultiplier: number
  avatarUrl: string
  metricSelected: Partial<ImpactMetrics[]>
}
export const truncateAddress = (address: string) => {
  if (address.length <= 10) return address
  return `${address.slice(0, 5)}...${address.slice(-5)}`
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
  avatarUrl,
  metricSelected,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const invitedByFormat = invitedBy.startsWith('0x')
    ? truncateAddress(invitedBy)
    : invitedBy
  return (
    <>
      <DialogDetail
        metricSelected={metricSelected}
        metricInBallot={metricInBallot}
        metricViewed={metricViewed}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <div
        className={`flex flex-col flex-grow-1 flex-shrink-0 border rounded-lg shadow-sm relative min-w-16 bg-white overflow-hidden`}
      >
        {/* Background Image */}
        <div className="absolute top-0 left-0 w-full h-16 lg:h-20 overflow-hidden">
          <Image
            src={`${avatarUrl ? avatarUrl : '/random/OP-Logo.png'}`}
            alt="background image"
            // Not sure about the aspect ratio, so using object-fit
            className="opacity-70 object-cover z-10"
            fill
          />
        </div>

        {/* Submitted Status */}
        {/* <div className="absolute top-1 right-1 px-1 py-0.5 rounded-[0.25rem] z-20">
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
      </div> */}

        {/* Avatar */}
        <div className="absolute top-8 lg:top-12 left-1/2 transform -translate-x-1/2 rounded-full bg-white flex flex-shrink-0 z-20 overflow-hidden">
          <Image
            //resolve from ens name
            src={`${
              avatarUrl ? avatarUrl : '/static/loading/retropgf_sun-2.svg'
            }`}
            alt="avatar image"
            className={`${!avatarUrl && 'bg-[#ff0420]'} w-16`}
            width={25}
            height={25}
          />
        </div>
        <div className="mt-24 lg:mt-28 p-4 flex flex-col justify-start items-start gap-3 w-full h-full">
          <div className="w-full flex flex-col flex-wrap items-center">
            <p className="text-md font-medium text-gray-800 break-words line-clamp-1 max-w-full">
              {ensName ? ensName : truncateAddress(address)}
            </p>
            <p className="text-xs font-light text-gray-600 break-words truncate max-w-full">
              Selected By {invitedByFormat}
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
          <div className="flex justify-center items-center gap-2">
            <AudioConsole size={20} />
            <div className="flex gap-1">
              <p className="text-xs font-semibold text-gray-800">
                {metricInBallot ? metricInBallot : '-'}
              </p>
              <p className="text-xs font-light text-gray-600">
                Metrics Selected
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <RepoSourceCode size={20} />
            <div className="flex gap-1">
              <p className="text-xs font-semibold text-gray-800">
                {openSourceMultiplier ? `x ${openSourceMultiplier}` : '-'}
              </p>
              <p className="text-xs font-light text-gray-600">
                Open-Source Multiplied
              </p>
            </div>
          </div>

          <button
            className="flex justify-center items-center gap-2 bg-red-50 rounded-md px-4 py-2.5 w-full group"
            onClick={() => setIsOpen(true)}
          >
            {/* <Trophy size={20} /> */}

            <div className="flex flex-row justify-center items-center gap-x-2 group-hover:scale-105 transition-all ease-linear">
              <DataAnalytics size={18} />
              <div className="text-sm font-semibold text-gray-800">
                View Metrics
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  )
}

export default BadgeholderCard
