"use client"

import { classNames } from "@/app/lib/utils";
import { Menu, Tab, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { category, max, min, sorting, tab } from "./_component/Text";
import { CheckBoxStateType, ExploreRoundState } from "./_component/ExploreRoundType";
import InputAndFilterBtn from "./_component/Tab/InputAndFilterBtn";
import CheckBoxFilter from "./_component/Tab/CheckBoxFilter";


export default function Cpage({

}: {

    }) {

    const [search, setSearch] = useState("")
    const [slider, setSlider] = useState([0, 100000])
    const [state, setState] = useState<ExploreRoundState>({
        selectedIndex: 0,
        drawer: false,
        sort: "Award Ranking",
        // view have two option
        // g stand for grid
        // l stand for list
        view: "g",
        filter: true
    })
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const [checkBox, setCheckBox] = useState<CheckBoxStateType>({
        category: [],
        receiveOP: [],
        ballot: "",
    })

    
    function handleChangeSelectedIndex(index: number) {
        setState(prev => ({ ...prev, selectedIndex: index }))
    }

    function handleClearFilter () {
        setCheckBox({
            category: [],
            receiveOP: [],
            ballot: "",
        })
    }

    function handleChangeCategory(value: string) {
        setCheckBox(prev => {
            let temp = { ...prev }

            let index = temp.category.findIndex((elem) => elem === value)

            if (index === -1) {
                temp.category = [...temp.category, value]
            }
            else {
                temp.category = temp.category.filter((elem) => elem != value)
            }

            return temp
        })
    }


 
    return (

        <>
            <Tab.Group selectedIndex={state.selectedIndex} onChange={handleChangeSelectedIndex}>
                <Tab.List className="border-b flex gap-2 min-[400px]:gap-6">
                    {tab.map((item, i) => (
                        <Tab
                            key={i}
                            // className="hover:text-primaryRed  cursor-pointer flex items-center gap-2 px-4 py-1.5 relative"
                            className={({ selected }) =>
                                classNames(
                                    'hover:text-primaryRed  cursor-pointer flex items-center gap-2 px-1 py-1.5 relative outline-none lg:text-lg lg:font-medium text-base font-semibold',
                                    selected
                                        ? 'text-slate-900'
                                        : 'text-slate-500'
                                )
                            }
                        >
                            <span className={`line-clamp-1`}>{item.text}</span>
                            {item.index === state.selectedIndex && <div className="absolute inset-x-0 bottom-0 h-1 bg-primaryRed animate-slideup"></div>}
                        </Tab>
                    ))}

                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel className="outline-none">
                        <Transition appear show={state.selectedIndex === 0}
                            enter="transition duration-200 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-200 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                          <InputAndFilterBtn
                          state={state}
                          checkBox={checkBox}
                          search={search}
                          setState={setState}
                          setSearch={setSearch}
                          setCheckBox={setCheckBox}
                          handleClearFilter={handleClearFilter}
                          handleChangeCategory={handleChangeCategory}
                          />
                        <div className="mt-[2.5rem] relative animate-slideup">
                            {state.view === 'g' ? (
                            <div className="animate-slideleft flex gap-6">
                                
                                {state.filter && (
                                <CheckBoxFilter
                                    checkBox={checkBox}
                                    handleClearFilter={handleClearFilter}
                                    handleChangeCategory={handleChangeCategory}
                                    slider={slider}
                                    setSlider={setSlider}
                                    minVal={minVal}
                                    setMinVal={setMinVal}
                                    maxVal={maxVal}
                                    setMaxVal={setMaxVal}
                                />
                                )}

                                <div
                                className={`w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 h-fit`}
                                >
                                {/* {currentItems.length !== 0 ? (
                                    currentItems.map((item, i) => (
                                    <div className="" key={i}>
                                        <GridCard data={item} />
                                    </div>
                                    ))
                                ) : (
                                    <h6 className="col-span-1 lg:col-span-2 xl:col-span-3 text-xl font-medium text-gray-500 text-center w-full">
                                    0 Items Found
                                    </h6>
                                )} */}
                                </div>
                            </div>
                            ) : (
                            <div className="animate-slideright">
                                <div className="hidden md:block">
                                {/* <ListCard currentItems={currentItems} />
                                </div>
                                <div className="flex md:hidden flex-col gap-4">
                                {currentItems.map((item, i) => (
                                    <React.Fragment key={i}>
                                    <GridCard data={item} />
                                    </React.Fragment>
                                ))} */}
                                </div>
                            </div>
                            )}
                        </div>
                        </Transition>
                    </Tab.Panel>
                    <Tab.Panel className="outline-none">
                        <Transition appear show={state.selectedIndex === 1}
                            enter="transition duration-200 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-200 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                            History
                        </Transition>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </>

    )

}
