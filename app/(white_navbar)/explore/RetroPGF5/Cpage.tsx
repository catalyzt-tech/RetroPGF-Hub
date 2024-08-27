'use client'

import { classNames, shuffle } from '@/app/lib/utils'
import { Tab, Transition } from '@headlessui/react'
import { useState } from 'react'
import { tab } from './_component/Text'
import ProjectTab from './_component/Tab/ProjectTab'
import { BadgeholderMetrics } from '@/app/(white_navbar)/explore/RetroPGF4/RetroType4'
import { iRetroPGF5Project } from './RetroType5'
import HistoryTab from './_component/Tab/HistoryTab'
import StatisticTab from './_component/Tab/StatisticTab'

interface iCpage {
  projectRound5: iRetroPGF5Project[]
  badgeholderData: BadgeholderMetrics[]
}

export default function Cpage({
  projectRound5: projectData,
  badgeholderData,
}: iCpage) {

  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  function handleChangeSelectedIndex(index: number) {
    setSelectedIndex(index)
  }

  return (
    <>
      <Tab.Group
        selectedIndex={selectedIndex}
        onChange={handleChangeSelectedIndex}
      >
        <Tab.List className="border-b flex gap-2 min-[400px]:gap-6">
          {tab.map((item, i) => (
            <Tab
              key={i}
              // className="hover:text-primaryRed  cursor-pointer flex items-center gap-2 px-4 py-1.5 relative"
              className={({ selected }) =>
                classNames(
                  'hover:text-primaryRed  cursor-pointer flex items-center gap-2 px-1 py-1.5 relative outline-none lg:text-lg lg:font-medium text-base font-semibold',
                  selected ? 'text-slate-900' : 'text-slate-500'
                )
              }
            >
              <span className={`line-clamp-1`}>{item.text}</span>
              {item.index === selectedIndex && (
                <div className="absolute inset-x-0 bottom-0 h-1 bg-primaryRed animate-slideup"></div>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel className="outline-none">
            <Transition
              appear
              show={selectedIndex === 0}
              enter="transition duration-200 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-200 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <ProjectTab projectData={projectData} />
            </Transition>
          </Tab.Panel>
          <Tab.Panel className="outline-none min-h-[70vh]">
            <Transition
              appear
              show={selectedIndex === 1}
              enter="transition duration-200 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-200 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <div className="font-rubik">
                <HistoryTab round={5} />
              </div>
            </Transition>
          </Tab.Panel>
          <Tab.Panel className="outline-none min-h-[70vh]">
            <Transition
              appear
              show={selectedIndex === 2}
              enter="transition duration-200 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-200 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <StatisticTab data={projectData} round={5} />
            </Transition>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  )
}
