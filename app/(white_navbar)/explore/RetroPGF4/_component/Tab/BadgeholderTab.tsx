import { FC, Fragment, Suspense, useMemo, useState } from 'react'
import BadgeholderCard from './component/BadgeholderCard'
import { BadgeholderMetrics } from '../../RetroType4'
import Image from 'next/image'
import InputAndFilterBadgeholderTab from './component/InputAndFilterBadgeholderTab'
import {
  CheckBoxStateBadgeholderType,
  ExploreRoundState,
} from '../ExploreRoundType'
import CheckBoxFilterBadgeholder from './component/checkBoxFilterBadgeholder'

interface BadgeholderTabProps {
  badgeholderData: BadgeholderMetrics[]
}

const BadgeholderTab: FC<BadgeholderTabProps> = ({ badgeholderData }) => {
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState<string>('')
  const [state, setState] = useState({
    drawer: false,
    view: 'grid',
    sort: 'newest',
    filter: false,
  })
  const [checkBox, setCheckBox] = useState<CheckBoxStateBadgeholderType>({
    status: 'All',
    multiplyOpenSource: 'All',
  })

  function handleClearFilter() {
    setCheckBox({
      status: 'All',
      multiplyOpenSource: 'All',
    })

    setSearch('')
    setState((prev) => ({ ...prev, sort: 'Highest Rewards' }))
  }

  function handleChangeStatus(value: string) {
    setCheckBox((prev) => ({ ...prev, status: value }))
  }
  function handleChangeMultiplyOpenSource(value: string) {
    setCheckBox((prev) => ({ ...prev, multiplyOpenSource: value }))
  }

  console.log(checkBox)

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
      }
      // } else if{
      //   statusCondition = item.status === checkBox.status
      // }
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
    // console.log('filter' + filterJson.length)
    return filterJson
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
      />
      <div className="grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 flex-col gap-6 animate-slowfade">
        <div className=" relative animate-slideup">
          <div className="mt-[2.5rem] animate-slideleft flex gap-6">
            <CheckBoxFilterBadgeholder
              checkBox={checkBox}
              handleClearFilter={handleClearFilter}
              handleChangeStatus={handleChangeStatus}
              handleChangeMultiplyOpenSource={handleChangeMultiplyOpenSource}
            />
          </div>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <Fragment>
            {currentDataset.map((item, i) => (
              <BadgeholderCard
                key={i}
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
            ))}
          </Fragment>
        </Suspense>
      </div>
    </>
  )
}
export default BadgeholderTab
