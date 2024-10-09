'use client'
import { CheckBoxStateType } from '../../ExploreRoundType'
import ApplicationCategoryDisclosure from '../Filter/ApplicationCategoryDisclosure'
import CategoryDisclosure from '../Filter/CategoryDisclosure'
import ChevronDown from '@carbon/icons-react/lib/ChevronDown'
import PriceModelDisclosure from '../Filter/PriceModelDisclosure'

interface CheckBoxFilterProps {
  checkBox: CheckBoxStateType
  handleChangeCategory: (value: string) => void
  handleChangeApplicationCategory: (value: string) => void
  handleChangePriceModel: (value: string) => void
  handleClearFilter: () => void
  minVal: number
  maxVal: number
  setMinVal: React.Dispatch<React.SetStateAction<number>>
  setMaxVal: React.Dispatch<React.SetStateAction<number>>
}
export default function CheckBoxFilter({
  checkBox,
  handleChangeCategory,
  handleChangeApplicationCategory,
  handleChangePriceModel,
  handleClearFilter,
  minVal,
  setMinVal,
  maxVal,
  setMaxVal,
}: CheckBoxFilterProps) {
  return (
    <>
      <div className="hidden lg:flex flex-col gap-4 border  min-w-60 max-w-60 h-fit rounded-lg p-4  animate-slideleft z-10 pb-4">
        <div className="flex items-center justify-between gap-1 ">
          <h6 className="text-sm font-bold text-gray-900 ">Filter</h6>
          <button onClick={handleClearFilter} className="underline">
            <h6 className="text-xs font-normal text-gray-900 ">
              Clear Filters
            </h6>
          </button>
        </div>
        <hr className="h-[0.0625rem] bg-gray-200" />
        <ApplicationCategoryDisclosure
          checkBox={checkBox}
          handleChangeApplicationCategory={handleChangeApplicationCategory}
        />
        <CategoryDisclosure
          checkBox={checkBox}
          handleChangeCategory={handleChangeCategory}
        />
        <PriceModelDisclosure
          checkBox={checkBox}
          handleChangePriceModel={handleChangePriceModel}
        />
        {/* <EligibilityDisclosure
          checkBox={checkBox}
          handleChangeEligibility={handleChangeEligibility}
        />
        <IsOpenSourceDisclosure
          checkBox={checkBox}
          handleChangeIsOpenSource={handleChangeIsOpenSource}
        /> */}
      </div>
    </>
  )
}
