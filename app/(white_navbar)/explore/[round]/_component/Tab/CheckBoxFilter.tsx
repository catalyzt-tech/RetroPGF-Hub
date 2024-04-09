import { Disclosure, Transition } from "@headlessui/react";
import { category, max, min } from "../Text";
import Checkbox from "@/app/component/Checkbox/Checkbox";
import { CheckBoxStateType } from "../ExploreRoundType";
import MultiRangeSlider from "@/app/component/MultiRangeSlider/MultiRangeSlider";
import Input from "@/app/component/Input/Input";
import toast from "react-hot-toast";
import ChevronDown from "@carbon/icons-react/lib/ChevronDown";

export default function CheckBoxFilter({
    checkBox,
    handleChangeCategory,
    handleClearFilter,
    setSlider,
    slider,
    minVal,
    setMinVal,
    maxVal,
    setMaxVal
}:{
    checkBox: CheckBoxStateType
    handleChangeCategory:(value: string) => void
    handleClearFilter:() => void;
    setSlider: React.Dispatch<React.SetStateAction<number[]>>
    slider: number[];
    minVal:number;
    maxVal:number;
    setMinVal:React.Dispatch<React.SetStateAction<number>>;
    setMaxVal:React.Dispatch<React.SetStateAction<number>>;
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
      <Disclosure defaultOpen={true}>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex items-center w-full justify-between rounded-lg text-left text-sm font-medium focus:outline-none ">
              <h6 className="text-xs font-medium text-gray-400 self-center">
                Category
              </h6>
              <ChevronDown
              size={24}
              className={`${
                open ? 'rotate-180 transform' : ''
              } h-5 w-5 text-gray-600`}
              />
            </Disclosure.Button>
            <Transition
              enter="transition duration-200 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-200 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="text-sm text-gray-500">
                 {category.map((item, i) => (
                        <Checkbox
                        key={i}
                        label={item.name}
                        value={item.name}
                        className="cursor-pointer"
                        checked={checkBox.category.includes(item.name)}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handleChangeCategory(e.target.value)
                        }
                        />
                    ))}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
      {/* End Category Disclosure */}


      {/* Multi Slider Input */}
      <Disclosure defaultOpen={true}>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex items-center w-full justify-between rounded-lg text-left text-sm font-medium focus:outline-none ">
              <h6 className="text-xs font-medium text-gray-400 self-center">
                Received OP
              </h6>
              <ChevronDown
              size={24}
              className={`${
                open ? 'rotate-180 transform' : ''
              } h-5 w-5 text-gray-600`}
              />
            </Disclosure.Button>
            <Transition
              enter="transition duration-200 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-200 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="text-sm text-gray-500">
                <MultiRangeSlider
                  min={0}
                  max={663855}
                  minVal={minVal}
                  setMinVal={setMinVal}
                  maxVal={maxVal}
                  setMaxVal={setMaxVal}
                />
                <div className="flex justify-around items-center gap-2 mt-4">
                 <div className="w-20">
                 <Input
                  type="text"
                  value={minVal}
                  onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                    if(Number(e.target.value) > max){
                      toast.error("Max range is " + max)
                      setMinVal(Number(max))
                      
                    }
                    else if(Number(e.target.value) < min){
                       setMinVal(Number(0))
                       toast.error("Min range is " + max)
                    }
                    else {
                      setMinVal(Number(e.target.value))
                    }
                  }}
                  className="w-full p-2 border border-gray-200 rounded bg-gray-50 text-sm font-normal text-gray-500 focus:ring focus:ring-primaryRed"
                  />
                 </div>
                  
                  <p className="text-sm font-normal text-gray-700">to</p>            

                <div className="w-20">
                <Input
                    type="text"
                    value={maxVal}
                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                     if(Number(e.target.value) > max){
                        toast.error("Max range is " + max)
                        setMaxVal(Number(max))
                        
                      }
                      else if(Number(e.target.value) < min){
                        setMaxVal(Number(0))
                        toast.error("Min range is " + max)
                      }
                      else {
                        setMaxVal(Number(e.target.value))
                      }
                    }}
                    className="w-full p-2 border border-gray-200 rounded bg-gray-50 text-sm font-normal text-gray-500 focus:ring focus:ring-primaryRed"
                    />
                </div>
                </div>    
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
      <hr className="h-[0.0625rem] bg-gray-200" />
      {/* End Multi Slider Input */}

        {/* In Ballot */}

        <Disclosure defaultOpen={true}>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex items-center w-full justify-between rounded-lg text-left text-sm font-medium focus:outline-none ">
              <h6 className="text-xs font-medium text-gray-400 self-center">
                In Ballot
              </h6>
              <ChevronDown
              size={24}
              className={`${
                open ? 'rotate-180 transform' : ''
              } h-5 w-5 text-gray-600`}
              />
            </Disclosure.Button>
            <Transition
              enter="transition duration-200 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-200 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="text-sm text-gray-500">
                <h6
                className="text-xs font-normal text-gray-500"
                >
                  Only project got more than 17 votes received award.
                </h6>
                <div className="flex flex-col gap-2">
                <div className="inline-flex items-center">
                  <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="react">
                    <input name="type" type="radio"
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                      id="react" checked />
                    <span
                      className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2" viewBox="0 0 16 16" fill="currentColor">
                        <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                      </svg>
                    </span>
                  </label>
                  <label className="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="react">
                    React
                  </label>
                </div>
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
        {/* End In Ballot */}
      </div>
    </>

    )

}
 