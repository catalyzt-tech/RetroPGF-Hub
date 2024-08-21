import { Dispatch, FC, SetStateAction } from 'react'
import {
  CheckBoxStateBadgeholderType,
  CheckBoxStateType,
  ExploreRoundState,
} from '../../ExploreRoundType'
import Input from '@/app/component/Input/Input'
import { badgeholderStatus, category } from '../../Text'
import Search from '@carbon/icons-react/lib/Search'
import Grid from '@carbon/icons-react/lib/Grid'
import List from '@carbon/icons-react/lib/List'
import SettingsAdjust from '@carbon/icons-react/lib/SettingsAdjust'
import SortExploreRound from '../../SortExploreRound'
import SortBadgeholder from './SortBadgeholder'

interface IInputAndFilterBadgeholderTabProps {
  search: string
  setCheckBox: Dispatch<SetStateAction<any>>
  setSearch: Dispatch<SetStateAction<string>>
  setState: Dispatch<SetStateAction<any>>
  checkBox: CheckBoxStateBadgeholderType
  state: ExploreRoundState
  handleClearFilter(): void
  handleChangeStatus(char: string): void
  handleChangeMultiplyOpenSource(char: string): void
  handleChangeSort(char: string): void
}

const InputAndFilterBadgeholderTab: FC<IInputAndFilterBadgeholderTabProps> = ({
  search,
  setCheckBox,
  setSearch,
  setState,
  checkBox,
  state,
  handleClearFilter,
  handleChangeStatus,
  handleChangeMultiplyOpenSource,
  handleChangeSort,
}) => {
  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch((prev) => e.target.value)
  }

  return (
    <>
      <div className="flex flex-col gap-4 ">
        <div className="flex flex-wrap items-center gap-3 lg:gap-4 mt-4">
          <div className="flex-grow">
            <Input
              Icon={<Search size={24} className="fill-gray-500" />}
              value={search}
              onChange={handleSearchChange}
              className="
                            w-full pl-12  border placeholder-slate-500 bg-white text-slate-800 focus:ring focus:ring-primaryRed px-1 py-1.5 rounded-full  min-h-6 lg:min-h-10
                            "
              placeholder="Search Badgeholder Name"
            />
          </div>
          <div className="">
            {/* Open drawer btn */}
            <div
              onClick={() => {
                setState((prev: { drawer: any }) => ({
                  ...prev,
                  drawer: !prev.drawer,
                }))
              }}
              className={`flex lg:hidden h-10 items-center gap-2 border  rounded-full px-3 py-2 cursor-pointer hover:bg-gray-100 ${
                state.drawer && 'bg-gray-50'
              }`}
            >
              <SettingsAdjust size={24} className="" />
            </div>

            {/* Sort button */}
            <SortBadgeholder
              handleChangeSort={handleChangeSort}
              state={state}
            />
          </div>
          <div className="">
            <div className="hidden lg:flex gap-2 border p-1.5  rounded-full min-h-10 max-h-10">
              <div
                className={`px-1  cursor-pointer hover:bg-gray-50  rounded-tl-xl rounded-bl-xl rounded-br-sm rounded-tr-sm ${
                  state.view === 'g' && 'bg-gray-100'
                }`}
                onClick={() =>
                  setState((prev: any) => ({ ...prev, view: 'g' }))
                }
              >
                <Grid
                  size={28}
                  className={`${
                    state.view === 'g' ? '#161616' : '#94A3B8'
                  } p-0.5`}
                />
              </div>

              <div className="border w-[0.0625rem] border-gray-200"></div>

              <div
                className={`px-1  cursor-pointer hover:bg-gray-50  rounded-tl-sm rounded-bl-sm rounded-br-xl rounded-tr-xl ${
                  state.view === 'l' && 'bg-gray-100'
                }`}
                onClick={() =>
                  setState((prev: any) => ({ ...prev, view: 'l' }))
                }
              >
                <List
                  size={28}
                  className={`${
                    state.view === 'l' ? '#161616' : '#94A3B8'
                  } p-0.5`}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex gap-2 items-center flex-wrap mt-4">
          <div
            onClick={() => {
              setState((prev: any[]) => ({ ...prev, filter: !prev.filter }))
            }}
            className={`flex h-10 items-center gap-2 border  rounded-full px-3 py-2 cursor-pointer hover:bg-gray-100 ${
              state.filter && 'bg-gray-50'
            }`}
          >
            <SettingsAdjust size={24} className="" />
            <h6 className="text-base font-normal text-gray-600">Filter</h6>
          </div>

          <div className="border w-[0.0625rem] h-[1.625rem] border-gray-200"></div>

          <div
            className={` 
                            h-10
                            hover:bg-secondaryRed hover:text-primaryRed hover:border hover:border-primaryRed
                            border rounded-full px-3 py-2 cursor-pointer transition-colors self-center shrink-0
                            ${
                              Object.keys(checkBox).every(
                                (key) =>
                                  checkBox[
                                    key as keyof CheckBoxStateBadgeholderType
                                  ].length === 0
                              )
                                ? 'bg-secondaryRed text-primaryRed border-secondaryRed'
                                : 'text-slate-900 border'
                            }
                                                    `}
            onClick={handleClearFilter}
          >
            <p className="text-sm font-normal ">All</p>
          </div>

          {/* Badge */}
          {badgeholderStatus.map((item, i) => {
            if (item.name !== 'All') {
              return (
                <div
                  data-tooltip-id={item.name}
                  key={i}
                  className={` lg:block h-10 group relative ctn-category shadow-
                            hover:bg-secondaryRed hover:text-primaryRed hover:border hover:border-primaryRed
                            border rounded-full px-3 py-2 cursor-pointer transition-colors self-center shrink-0
              ${
                checkBox.status === item.name
                  ? 'bg-secondaryRed text-primaryRed border-secondaryRed'
                  : 'text-slate-900 border'
              }
                            }`}
                  onClick={() => {
                    handleChangeStatus(item.name)
                  }}
                >
                  <p className=" text-sm font-normal ">{item.name}</p>
                </div>
              )
            }
          })}
        </div>
      </div>
    </>
  )
}
export default InputAndFilterBadgeholderTab
