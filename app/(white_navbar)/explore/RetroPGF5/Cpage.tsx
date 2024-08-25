'use client'

import { classNames, shuffle } from '@/app/lib/utils'
import { Tab, Transition } from '@headlessui/react'
import { useEffect, useState } from 'react'
import { tab } from './_component/Text'
import ProjectTab from './_component/Tab/ProjectTab'
import { BadgeholderMetrics } from '@/app/(white_navbar)/explore/RetroPGF4/RetroType4'
import HistorySection from '@/app/component/HistorySection'
import StatisticSection from '@/app/component/StatisticSection'
// import BadgeholderSection from '@/app/(white_navbar)/explore/RetroPGF4/_component/Tab/BadgeholderTab'
import { iRetroPGF5Project, RetroPGF5Response } from './RetroType5'
import { getRealTimeRetroPGF5 } from '@/app/lib/realtime'

interface iCpage {
  // projectData: iRetroPGF5Project[]
  badgeholderData: BadgeholderMetrics[]
}

export default function Cpage({ badgeholderData }: iCpage) {
  const [projectData, setProjectData] = useState<iRetroPGF5Project[]>([])
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  async function fetchData() {
    const dataRaw = await getRealTimeRetroPGF5()
    const data = dataRaw.data

    const filterUniqueData = data.filter((item, index, self) => {
      return index === self.findIndex((x) => x.name === item.name)
    })
    console.log(filterUniqueData)

    setProjectData(() => filterUniqueData)
    const newCateRound5Counter = new Map<string, number>()

    data.forEach((project: iRetroPGF5Project) => {
      const cateRound5 = project.category
      if (cateRound5) {
        if (newCateRound5Counter.has(cateRound5)) {
          newCateRound5Counter.set(
            cateRound5,
            newCateRound5Counter.get(cateRound5)! + 1
          )
        } else {
          newCateRound5Counter.set(cateRound5, 1)
        }
      }
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

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
                <HistorySection round={5} />
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
              <StatisticSection data={projectData} round={5} />
            </Transition>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  )
}
