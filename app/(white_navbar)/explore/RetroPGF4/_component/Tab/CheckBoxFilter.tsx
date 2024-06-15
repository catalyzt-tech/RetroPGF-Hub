"use client"
import { CheckBoxStateType } from "../ExploreRoundType";
import CategoryDisclosure from "./Filter/CategoryDisclosure";
import MultiSliderDisclosure from "./Filter/MultiSliderDisclosure";
import InBallotDisclosure from "./Filter/InBallotDisclosure";
import { Disclosure, Transition } from "@headlessui/react";
import ChevronDown from "@carbon/icons-react/lib/ChevronDown";

export default function CheckBoxFilter({
    checkBox,
    handleChangeCategory,
    handleClearFilter,
    minVal,
    setMinVal,
    maxVal,
    setMaxVal,
    handleChangeBallot,
    handleChangeSubCategory,
}:{
    checkBox: CheckBoxStateType;
    handleChangeCategory:(value: string) => void;
    handleChangeBallot(ballot: string): void
    handleClearFilter:() => void;
    minVal:number;
    maxVal:number;
    setMinVal:React.Dispatch<React.SetStateAction<number>>;
    setMaxVal:React.Dispatch<React.SetStateAction<number>>;
    handleChangeSubCategory:(subCate: string) => void;
})  {

return (

    <> 
     <div className="hidden lg:flex flex-col gap-4 border  min-w-60 max-w-60 h-fit rounded-lg p-4  animate-slideleft z-10 pb-4">
      <div className="flex items-center justify-between gap-1 ">
        <h6 className="text-sm font-bold text-gray-900 ">Filter</h6>
        <button onClick={handleClearFilter} className="underline">
          <h6 className="text-xs font-normal text-gray-900 ">Clear Filters</h6>
        </button>
      </div>
      <hr className="h-[0.0625rem] bg-gray-200" />

    {/* Category Disclosure */}
      <CategoryDisclosure
      checkBox={checkBox}
      handleChangeCategory={handleChangeCategory}
      handleChangeSubCategory={handleChangeSubCategory}
      />
      {/* End Category Disclosure */}



      {/* Multi Slider Input */}
        <MultiSliderDisclosure
        maxVal={maxVal}
        minVal={minVal}
        setMaxVal={setMaxVal}
        setMinVal={setMinVal}
        />
      {/* End Multi Slider Input */}

        {/* In Ballot */}
        <InBallotDisclosure
        checkBox={checkBox}
        handleChangeBallot={handleChangeBallot}
        allProjectId="all-project"
        secondProjectId="more-than-17"
        />
       
        {/* End In Ballot */}
      </div>
    </>

    )

}
 