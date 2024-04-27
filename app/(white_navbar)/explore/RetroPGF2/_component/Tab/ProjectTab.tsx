'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { CheckBoxStateType, ExploreRoundState } from '../ExploreRoundType'
import { category, itemsPerPage, max, min } from '../Text'
import InputAndFilterBtn from './InputAndFilterBtn'
import CheckBoxFilter from './CheckBoxFilter'
import { Pagination } from 'react-headless-pagination'
import DynamicCard from '../DynamicCard'
import ListCard from './ListCard'
import DialogFilter from './Filter/DialogFilter'
import { RetroRound2 } from '../../RetroType2'
import { useSearchParams } from 'next/navigation'
import { isLetter } from '@/app/lib/utils'

export default function ProjectTab({ round2 }: { round2: RetroRound2[] }) {
  const searchParams = useSearchParams()

  const [search, setSearch] = useState('')
  const [state, setState] = useState<ExploreRoundState>({
    drawer: false,
    // sort have 4 options
    // - Most in ballots
    // - Least in ballots
    // Project Name (A-Z)
    // Project Name (Z-A)
    sort: 'Most in ballots',
    // view have two option
    // - g stand for grid
    // - l stand for list
    view: 'g',
    filter: true,
  })
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [minVal, setMinVal] = useState(min)
  const [maxVal, setMaxVal] = useState(max)
  const [checkBox, setCheckBox] = useState<CheckBoxStateType>({
    category: [],
    receiveOP: [],
  })

  function handleClearFilter() {
    setCheckBox({
      category: [],
      receiveOP: [],
      // ballot can be two option
      // - > 17 vote
      // - All Project
    })
    setMinVal(min)
    setMaxVal(max)
    setSearch('')
    setState((prev) => ({ ...prev, sort: 'Award Ranking' }))
  }

  function handleChangeCategory(value: string) {
    setCheckBox((prev) => {
      let temp = { ...prev }

      let index = temp.category.findIndex((elem) => elem === value)
      // add new category
      if (index === -1) {
        temp.category = [...temp.category, value]
      }
      // get rid off category
      else {
        temp.category = temp.category.filter((elem) => elem != value)
      }

      return temp
    })
  }

  const handlePageClick = (page: number) => {
    setCurrentPage((prev) => page)
  }

  function handleChangeSort(char: string) {
    setState((prev) => ({ ...prev, sort: char }))
  }

  const filterJson = useMemo(() => {
    setCurrentPage(0)
    // console.log(round3.length)
    return round2.filter((item) => {
      const searchCondition =
        search !== ''
          ? typeof item.name === 'string' &&
            item.name.toLowerCase().includes(search.toLowerCase())
          : true

      let categoryCondition: boolean
      if (checkBox.category.length !== 0) {
        categoryCondition = checkBox.category.some(
          (elem) => elem === item.Category
        )
      } else {
        categoryCondition = true
      }

      let recieveOP: boolean =
        item['OP Received'] >= minVal && item['OP Received'] <= maxVal

      return searchCondition && categoryCondition && recieveOP
    })
  }, [round2, search, checkBox, minVal, maxVal])

  const pageCount = useMemo(() => {
    return Math.ceil(filterJson.length / itemsPerPage)
  }, [filterJson])

  const currentItems = useMemo(() => {
    let sortedItems = filterJson
    // - Award Ranking
    // - Most in ballots
    // - Least in ballots
    // Project Name (A-Z)
    // Project Name (Z-A)
    // if (state.sort === 'Award Ranking') {
    //     // sortedItems.sort((a, b) => {
    //     //     if (a.rank === -1 && b.rank === -1) return 0;
    //     //     if (a.rank === -1) return 1;
    //     //     if (b.rank === -1) return -1;

    //     //     return a.rank - b.rank;
    //     // });
    // }
    if (state.sort === 'Most in ballots') {
      sortedItems.sort((a, b) => {
        return b.Vote_Recieved - a.Vote_Recieved
      })
    } else if (state.sort === 'Least in ballots') {
      sortedItems.sort((a, b) => {
        return a.Vote_Recieved - b.Vote_Recieved
      })
    } else if (state.sort === 'Project Name (A-Z)') {
      sortedItems.sort((a, b) => {
        const nameA = (a.name ?? '').toLowerCase()
        const nameB = (b.name ?? '').toLowerCase()

        for (let i = 0; i < Math.min(nameA.length, nameB.length); i++) {
          const charCodeA = nameA.charCodeAt(i)
          const charCodeB = nameB.charCodeAt(i)

          // Check if both characters are letters
          const isALetter = isLetter(nameA[i])
          const isBLetter = isLetter(nameB[i])

          if (isALetter && isBLetter) {
            // Both characters are letters, compare them normally
            if (charCodeA !== charCodeB) {
              return charCodeA - charCodeB
            }
          } else if (isALetter) {
            // Character in nameA is a letter, prioritize it
            return -1
          } else if (isBLetter) {
            // Character in nameB is a letter, prioritize it
            return 1
          }
        }

        // If both names are equal so far, the shorter name should come first
        return nameA.length - nameB.length
      })
    } else if (state.sort === 'Project Name (Z-A)') {
      sortedItems.sort((a, b) => {
        const nameA = (a.name ?? '').toLowerCase()
        const nameB = (b.name ?? '').toLowerCase()

        for (let i = 0; i < Math.min(nameA.length, nameB.length); i++) {
          const charCodeA = nameA.charCodeAt(i)
          const charCodeB = nameB.charCodeAt(i)

          // Check if both characters are letters
          const isALetter = isLetter(nameA[i])
          const isBLetter = isLetter(nameB[i])

          if (!isALetter && isBLetter) {
            // Special character in nameA, prioritize it
            return -1
          } else if (isALetter && !isBLetter) {
            // Special character in nameB, prioritize it
            return 1
          } else if (isALetter && isBLetter) {
            // Both characters are letters
            if (charCodeA !== charCodeB) {
              // Compare letters in descending order (Z-A)
              return charCodeB - charCodeA
            }
          }
        }

        // If both names are equal so far, the shorter name should come first
        return nameB.length - nameA.length // Sort by length if everything else is equal
      })
    }

    return sortedItems.slice(
      currentPage * itemsPerPage,
      (currentPage + 1) * itemsPerPage
    )
  }, [currentPage, filterJson, state.sort])

  useEffect(() => {
    const searchCategory = decodeURIComponent(
      searchParams.get('category') || ''
    )
    category.forEach((elem) => {
      if (elem.name === searchCategory) {
        setCheckBox((prev) => {
          return { ...prev, category: [searchCategory] }
        })
      }
    })
  }, [searchParams])
  const [loading, setLoading] = useState<boolean>(true)

  const load = () => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }
  load()
  if (loading)
    return (
      <div className="flex flex-row justify-center items-center animate-pulse h-[40em]">
        Loading...
      </div>
    )

  return (
    <>
      {/* // this file include
        // - search input
        // - sort by button
        // - change view (list, grid) data
        // - filter btn
        // - badge */}

      <InputAndFilterBtn
        state={state}
        checkBox={checkBox}
        search={search}
        setState={setState}
        setSearch={setSearch}
        setCheckBox={setCheckBox}
        handleClearFilter={handleClearFilter}
        handleChangeCategory={handleChangeCategory}
        handleChangeSort={handleChangeSort}
      />
      <div className=" relative animate-slideup">
        {state.view === 'g' ? (
          <div className="mt-[2.5rem] animate-slideleft flex gap-6">
            {state.filter && (
              <CheckBoxFilter
                checkBox={checkBox}
                handleClearFilter={handleClearFilter}
                handleChangeCategory={handleChangeCategory}
                minVal={minVal}
                setMinVal={setMinVal}
                maxVal={maxVal}
                setMaxVal={setMaxVal}
              />
            )}

            <div
              className={`
                            w-full grid h-fit gap-6 
                            ${
                              state.filter
                                ? 'grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4'
                                : 'grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5'
                            }
                            `}
            >
              {currentItems.length !== 0 ? (
                currentItems.map((item, i) => (
                  <React.Fragment key={i}>
                    <DynamicCard
                      category={item.Category}
                      description={item.about}
                      title={item.name}
                      opRecieve={item['OP Received']}
                      round="2"
                      votes={item['Vote_Recieved']}
                      banner={item.bannerPath}
                      icon={item.iconPath}
                    />
                  </React.Fragment>
                ))
              ) : (
                <h6 className="col-span-1 lg:col-span-2 xl:col-span-3 text-xl font-medium text-gray-500 text-center w-full">
                  0 Items Found
                </h6>
              )}
            </div>
          </div>
        ) : (
          <div className="animate-slideright flex gap-0 lg:gap-6 mt-8">
            {state.filter && (
              <div className="mt-14">
                <CheckBoxFilter
                  checkBox={checkBox}
                  handleClearFilter={handleClearFilter}
                  handleChangeCategory={handleChangeCategory}
                  minVal={minVal}
                  setMinVal={setMinVal}
                  maxVal={maxVal}
                  setMaxVal={setMaxVal}
                />
              </div>
            )}
            <div className="hidden md:block">
              <ListCard currentItems={currentItems} />
            </div>
            <div className=" grid grid-cols-1 min-[450px]:grid-cols-2 md:hidden flex-col gap-4">
              {currentItems.map((item, i) => (
                <React.Fragment key={i}>
                  <DynamicCard
                    category={item.Category}
                    description={item.about}
                    title={item.name}
                    opRecieve={item['OP Received']}
                    round="2"
                    votes={item.Vote_Recieved}
                  />
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {currentItems.length !== 0 && (
          <div className="mt-12 text-sm font-medium text-gray-500">
            <Pagination
              currentPage={currentPage}
              setCurrentPage={handlePageClick}
              className="flex flex-wrap justify-end"
              truncableText="..."
              truncableClassName="border min-w-[2rem] min-h-[2rem] max-w-[2rem] max-h-[2rem] text-sm font-medium text-gray-500 flex items-center justify-center cursor-pointer hover:bg-gray-50"
              edgePageCount={2}
              middlePagesSiblingCount={1}
              totalPages={pageCount}
            >
              <Pagination.PrevButton className="px-2 border min-h-[2rem] max-h-[2rem] text-sm font-medium text-gray-500 flex items-center justify-center cursor-pointer hover:bg-gray-50">
                Previous
              </Pagination.PrevButton>

              <div className="flex justify-center">
                <div className="flex flex-wrap lg:items-center justify-start lg:justify-center list-none">
                  <Pagination.PageButton
                    as={<div />}
                    activeClassName="bg-gray-100 cursor-pointer hover:bg-gray-50 list-none"
                    inactiveClassName="list-none"
                    className=" border min-w-[2rem] min-h-[2rem] max-w-[2rem] max-h-[2rem] flex items-center justify-center cursor-pointer hover:bg-gray-50 list-none"
                    dataTestIdInactive="list-none"
                  />
                </div>
              </div>

              <Pagination.NextButton className="px-2 border  min-h-[2rem] max-h-[2rem] text-sm font-medium text-gray-500 flex items-center justify-center cursor-pointer hover:bg-gray-50">
                Next
              </Pagination.NextButton>
            </Pagination>
          </div>
        )}

        <DialogFilter
          onClose={() => setState((prev) => ({ ...prev, drawer: false }))}
          open={state.drawer}
          checkBox={checkBox}
          handleChangeCategory={handleChangeCategory}
          maxVal={maxVal}
          minVal={minVal}
          setMaxVal={setMaxVal}
          setMinVal={setMinVal}
          handleClearFilter={handleClearFilter}
        />
      </div>
    </>
  )
}
