import { FC, Fragment, Suspense, useMemo, useState } from 'react'
import BadgeholderCard from './component/BadgeholderCard'
import { BadgeholderMetrics } from '../../RetroType4'
import Image from 'next/image'
import InputAndFilterBadgeholderTab from './component/InputAndFilterBadgeholderTab'
import {
  CheckBoxStateBadgeholderType,
  ExploreRoundState,
} from '../ExploreRoundType'
import { isLetter, shuffle } from '@/app/lib/utils'
import CheckBoxFilterBadgeholder from './component/CheckBoxFilterBadgeholder'
import { Pagination } from 'react-headless-pagination'
import { itemsPerPage } from '../Text'

interface BadgeholderTabProps {
  badgeholderData: BadgeholderMetrics[]
}

const BadgeholderTab: FC<BadgeholderTabProps> = ({ badgeholderData }) => {
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState<string>('')
  const [state, setState] = useState<ExploreRoundState>({
    drawer: false,
    view: 'grid',
    sort: 'Badgeholder Name (A-Z)',
    filter: true,
  })
  const [checkBox, setCheckBox] = useState<CheckBoxStateBadgeholderType>({
    status: 'All',
    multiplyOpenSource: 'All',
  })

  const handlePageClick = (page: number) => {
    setCurrentPage((prev) => page)
  }

  function handleClearFilter() {
    setCheckBox({
      status: 'All',
      multiplyOpenSource: 'All',
    })
    setSearch('')
  }

  function handleChangeStatus(value: string) {
    setCheckBox((prev) => ({ ...prev, status: value }))
  }
  function handleChangeMultiplyOpenSource(value: string) {
    setCheckBox((prev) => ({ ...prev, multiplyOpenSource: value }))
  }
  function handleChangeSort(char: string) {
    setState((prev) => ({ ...prev, sort: char }))
  }

  const filterJson = useMemo(() => {
    const badgeholderFilterData = badgeholderData.filter((item) => {
      let searchCondition: boolean = false
      if (search === '') {
        searchCondition = true
      } else {
        searchCondition =
          item.ensName.toLowerCase().includes(search.toLowerCase()) ||
          item.address.includes(search)
      }

      let statusCondition: boolean = false
      if (checkBox.status === 'All') {
        statusCondition = true
      } else if (checkBox.status === 'Vote') {
        statusCondition = item.metricInBallot > 0
      } else if (checkBox.status === 'Not Vote') {
        statusCondition =
          item.metricInBallot === 0 || item.metricInBallot === null
      }

      let multiplyOpenSourceCondition: boolean = false
      if (checkBox.multiplyOpenSource === 'All') {
        multiplyOpenSourceCondition = true
      } else if (checkBox.multiplyOpenSource === 'Multiply Open-Source') {
        multiplyOpenSourceCondition = item.openSourceMultiplier > 1
      } else if (checkBox.multiplyOpenSource === 'Not Multiply Open-Source') {
        multiplyOpenSourceCondition =
          item.openSourceMultiplier === 1 ? true : false
      }
      // console.log(multiplyOpenSourceCondition)
      return searchCondition && statusCondition && multiplyOpenSourceCondition
    })
    return badgeholderFilterData
  }, [checkBox, badgeholderData, search])

  const currentDataset = useMemo(() => {
    let sortedItems = filterJson

    if (state.sort === 'Badgeholder Name (A-Z)') {
      sortedItems.sort((a, b) => {
        const nameA = (a.ensName ?? '').toLowerCase()
        const nameB = (b.ensName ?? '').toLowerCase()
        for (let i = 0; i < Math.min(nameA.length, nameB.length); i++) {
          const charCodeA = nameA.charCodeAt(i)
          const charCodeB = nameB.charCodeAt(i)
          const isALetter = isLetter(nameA[i])
          const isBLetter = isLetter(nameB[i])
          if (isALetter && isBLetter) {
            if (charCodeA !== charCodeB) {
              return charCodeA - charCodeB
            }
          } else if (isALetter) {
            return -1
          } else if (isBLetter) {
            return 1
          }
        }
        return nameA.length - nameB.length
      })
    } else if (state.sort === 'Badgeholder Name (Z-A)') {
      sortedItems.sort((a, b) => {
        const nameA = (a.ensName ?? '').toLowerCase()
        const nameB = (b.ensName ?? '').toLowerCase()

        for (let i = 0; i < Math.min(nameA.length, nameB.length); i++) {
          const charCodeA = nameA.charCodeAt(i)
          const charCodeB = nameB.charCodeAt(i)
          const isALetter = isLetter(nameA[i])
          const isBLetter = isLetter(nameB[i])

          if (!isALetter && isBLetter) {
            return -1
          } else if (isALetter && !isBLetter) {
            return 1
          } else if (isALetter && isBLetter) {
            if (charCodeA !== charCodeB) {
              return charCodeB - charCodeA
            }
          }
        }
        return nameB.length - nameA.length
      })
    } else if (state.sort === 'Random Order') {
      sortedItems = shuffle(sortedItems)
    }

    return sortedItems.slice(
      currentPage * itemsPerPage,
      (currentPage + 1) * itemsPerPage
    )
  }, [filterJson, state.sort, currentPage])

  const pageCount = useMemo(() => {
    return Math.ceil(filterJson.length / itemsPerPage)
  }, [filterJson])
  const load = () => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }
  load()
  if (loading)
    return (
      <div className="flex flex-col justify-center items-center animate-pulse h-[40em]">
        <Image
          src="/static/loading/small_sunny.svg"
          width={55}
          height={55}
          alt="loading"
        />
      </div>
    )
  return (
    <>
      <InputAndFilterBadgeholderTab
        search={search}
        setCheckBox={setCheckBox}
        setSearch={setSearch}
        setState={setState}
        checkBox={checkBox}
        state={state}
        handleClearFilter={handleClearFilter}
        handleChangeStatus={handleChangeStatus}
        handleChangeMultiplyOpenSource={handleChangeMultiplyOpenSource}
        handleChangeSort={handleChangeSort}
      />

      <div className="relative animate-slideup">
        <div className="mt-[2.5rem] animate-slideleft flex gap-6">
          {state.filter && (
            <CheckBoxFilterBadgeholder
              checkBox={checkBox}
              handleClearFilter={handleClearFilter}
              handleChangeStatus={handleChangeStatus}
              handleChangeMultiplyOpenSource={handleChangeMultiplyOpenSource}
            />
          )}
          <div className="w-full grid h-fit gap-6 grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
            <Suspense fallback={<div>Loading...</div>}>
              {currentDataset.map((item, i) => (
                <Fragment key={item.address}>
                  <BadgeholderCard
                    key={item.address}
                    address={item.address}
                    ensName={item.ensName}
                    joinMethod={item.joinMethod}
                    joinDate={item.joinDate}
                    invitedBy={item.invitedBy}
                    metricInBallot={item.metricInBallot}
                    metricViewed={item.metricViewed}
                    openSourceMultiplier={item.openSourceMultiplier}
                    avatarUrl={item.avatarUrl}
                    metricSelected={item.metricSelected}
                  />
                </Fragment>
              ))}
            </Suspense>
          </div>
        </div>
        {currentDataset.length !== 0 && (
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
      </div>
    </>
  )
}
export default BadgeholderTab
