import { Dispatch, SetStateAction } from 'react'
import { CheckBoxStateType, ExploreRoundState } from '../ExploreRoundType'
import Input from '@/app/component/Input/Input'
import { category } from '../Text'
import Search from '@carbon/icons-react/lib/Search'
import Grid from '@carbon/icons-react/lib/Grid'
import List from '@carbon/icons-react/lib/List'
import SettingsAdjust from '@carbon/icons-react/lib/SettingsAdjust'
import SortExploreRound from '../SortExploreRound'

interface IInputAndFilterBadgeholderTabProps {
  search: string
  setSearch: Dispatch<SetStateAction<string>>
  setState: Dispatch<SetStateAction<ExploreRoundState>>
  state: ExploreRoundState
  handleChangeSort(char: string): void
}
export default function InputAndFilterBtn({
  search,
  setSearch,
  setState,
  state,
  handleChangeSort,
}: IInputAndFilterBadgeholderTabProps) {
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
              placeholder="Search Project"
            />
          </div>
          <div className="">
            {/* Open drawer btn */}
            <div
              onClick={() => {
                setState((prev) => ({ ...prev, drawer: !prev.drawer }))
              }}
              className={`flex lg:hidden h-10 items-center gap-2 border  rounded-full px-3 py-2 cursor-pointer hover:bg-gray-100 ${
                state.drawer && 'bg-gray-50'
              }`}
            >
              <SettingsAdjust size={24} className="" />
            </div>

            {/* Sort button */}
            <SortExploreRound
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
                onClick={() => setState((prev) => ({ ...prev, view: 'g' }))}
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
                onClick={() => setState((prev) => ({ ...prev, view: 'l' }))}
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
              setState((prev) => ({ ...prev, filter: !prev.filter }))
            }}
            className={`flex h-10 items-center gap-2 border  rounded-full px-3 py-2 cursor-pointer hover:bg-gray-100 ${
              state.filter && 'bg-gray-50'
            }`}
          >
            <SettingsAdjust size={24} className="" />
            <h6 className="text-base font-normal text-gray-600">Filter</h6>
          </div>
        </div>
      </div>
    </>
  )
}
