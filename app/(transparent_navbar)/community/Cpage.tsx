"use client"

import { Tab, Transition } from '@headlessui/react'
import { useState } from 'react'
import AllSection from './_component/AllSection'
import { FilterStateType } from './CommunityTytpe'
import SortByBtn from './_component/SortByBtn'
import FilterBtn from './_component/FilterBtn'
import Search from '@carbon/icons-react/lib/Search';
import Input from '@/app/component/Input/Input'

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Cpage({

}: {

    }) {
    const [selectedIndex, setSelectedIndex] = useState(0)

    const [filter, setFilter] = useState<FilterStateType>({
        // sort can be 3 options
        // b stand for buy
        // mp stand for most popular
        // n stand for n
        sort: "b",
        // filter can be 4 options
        // op stand for OP Stack
        // dc Developer Ecosystem
        // cg Collective Governance
        // eu End User Experience Adoption
        filter: "op",
    })

    const [search, setSearch] = useState("")

    function handleChangeSearch(e:React.ChangeEvent<HTMLInputElement>){
        setSearch(prev => e.target.value)
    }

    const tab = [
        {
            text: "All",
            index: 0,
        },
        {
            text: "Project feedback",
            index: 1,
        },
        {
            text: "Question",
            index: 2,
        },
    ]


    return (

        <>
            <div className="flex flex-col gap-4">
                <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
                    <Tab.List className="border-b flex gap-6">
                        {tab.map((item, i) => (
                            <Tab
                                key={i}
                                // className="hover:text-primaryRed  cursor-pointer flex items-center gap-2 px-4 py-1.5 relative"
                                className={({ selected }) =>
                                    classNames(
                                        'hover:text-primaryRed  cursor-pointer flex items-center gap-2 px-1 py-1.5 relative outline-none',
                                        selected
                                            ? 'text-slate-900'
                                            : 'text-slate-500'
                                    )
                                }
                            >
                                {item.text}
                                {item.index === selectedIndex && <div className="absolute inset-x-0 bottom-0 h-1 bg-primaryRed animate-slideup"></div>}
                            </Tab>
                        ))}

                    </Tab.List>

                    <div className="flex gap-3 items-center w-full">
                        <SortByBtn
                        filter={filter}
                        setFilter={setFilter}
                        />
                        
                        <FilterBtn
                        filter={filter}
                        setFilter={setFilter}
                        />

                        <div className="border-l w-[0.0625rem] h-[1.625rem] border-gray-200"></div>
                        
                        <div className="w-full ">
                            <Input
                                Icon={<Search size={24} className="fill-gray-500" />}
                                value={search}
                                onChange={handleChangeSearch}
                                className="border placeholder-slate-500 bg-white text-slate-500 focus:ring focus:ring-primaryRed w-full px-1 py-1.5 rounded-full min-h-[40px]"
                                placeholder="Search Project"
                            />
                        </div>
                    </div>

                    <Tab.Panels>
                        <Tab.Panel className="outline-none">
                            <Transition appear show={selectedIndex == 0}
                                enter="transition duration-200 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-200 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >

                                <AllSection
                    
                                />

                            </Transition>
                        </Tab.Panel>

                        <Tab.Panel>
                            <Transition appear show={selectedIndex == 1}
                                enter="transition duration-200 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-200 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                Content 2
                            </Transition>
                        </Tab.Panel>

                        <Tab.Panel>
                            <Transition appear show={selectedIndex == 2}
                                enter="transition duration-200 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-200 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                Content 3
                            </Transition>
                        </Tab.Panel>

                    </Tab.Panels>
                </Tab.Group>
            </div>
        </>

    )

}
