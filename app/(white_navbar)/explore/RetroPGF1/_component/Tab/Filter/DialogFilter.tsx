"use client"
import Close from "@carbon/icons-react/lib/Close"
import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"
import { CheckBoxStateType } from "../../ExploreRoundType"
import MultiSliderDisclosure from "./MultiSliderDisclosure"

export default function DialogFilter({
    onClose,
    open,
    checkBox,
    minVal,
    setMinVal,
    maxVal,
    setMaxVal,
    handleClearFilter
}:{
    open: boolean
    onClose: () => void
    checkBox: CheckBoxStateType;
    minVal:number;
    maxVal:number;
    setMinVal:React.Dispatch<React.SetStateAction<number>>;
    setMaxVal:React.Dispatch<React.SetStateAction<number>>;
    handleClearFilter: () => void;
})  {

return (

    <Transition appear show={open} as={Fragment}>
    <Dialog
      as="div"
      className="block lg:hidden relative z-40 h-full w-full"
      onClose={onClose}
    >
      <div className="fixed inset-0 bg-black/25" />

      <div className="fixed inset-0 overflow-y-auto h-full w-screen">
        <div className="flex h-full items-center justify-center text-center ">
          <Transition.Child
            as={Fragment}
            enter="duration-500"
            enterFrom="-translate-x-full opacity-0"
            enterTo="translate-x-0 opacity-100"
            leave="ease-out duration-500"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="w-full h-full transform overflow-x-hidden bg-white p-4 text-left shadow-xl transition-all overflow-y-scroll flex flex-col">
              <Dialog.Title as="div" className="flex justify-between ">
                <div />
                <h6 className="text-base text-gray-900 font-bold">
                  Filter By
                </h6>
                <div className="cursor-pointer" onClick={onClose}>
                  <Close size={24} />
                </div>
              </Dialog.Title>

              <hr className="my-3 border-gray-200 m-0  w-full" />
                <div className="flex flex-col gap-4">
                   
                    <MultiSliderDisclosure
                      maxVal={maxVal}
                      minVal={minVal}
                      setMaxVal={setMaxVal}
                      setMinVal={setMinVal}
                      />
                </div>
              <div className="mt-8" />

              <div className="grid grid-cols-1 min-[305px]:grid-cols-2 gap-4 items-center content-center  w-full mt-auto ">
                <div
                  onClick={handleClearFilter}
                  className="bg-inherit hover:bg-gray-100 hover:text-primaryRed text-gray-900 flex items-center justify-center rounded-lg py-3 px-7 cursor-pointer"
                >
                  <h6 className="text-base font-semibold text-center ">
                    Clear All
                  </h6>
                </div>

                <div
                  className="bg-primaryRed hover:bg-primaryRed/90 flex items-center justify-center rounded-lg py-3 px-7 cursor-pointer"
                  onClick={onClose}
                >
                  <h6 className="text-base font-semibold text-white">
                    Apply
                  </h6>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>
    )

}
