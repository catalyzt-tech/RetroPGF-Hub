import MultiRangeSlider from "@/app/component/MultiRangeSlider/MultiRangeSlider"
import { Disclosure, Transition } from "@headlessui/react"
import { max, min } from "../../Text"
import Input from "@/app/component/Input/Input"
import toast from "react-hot-toast"
import ChevronDown from "@carbon/icons-react/lib/ChevronDown"

export default function MultiSliderDisclosure({
    minVal,
    setMinVal,
    maxVal,
    setMaxVal,
}:{
    minVal:number;
    maxVal:number;
    setMinVal:React.Dispatch<React.SetStateAction<number>>;
    setMaxVal:React.Dispatch<React.SetStateAction<number>>;
})  {

return (

    <> 
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
              <Disclosure.Panel className="flex flex-col items-center justify-center text-sm text-gray-500">
                <MultiRangeSlider
                  min={min}
                  max={max}
                  minVal={minVal}
                  setMinVal={setMinVal}
                  maxVal={maxVal}
                  setMaxVal={setMaxVal}
                />
                <div className="flex  lg:justify-around items-center gap-2 mt-4">
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
                        setMinVal(Number(min))
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
    </>

    )

}
