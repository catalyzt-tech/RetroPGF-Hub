"use client"
import SettingsAdjust from "@carbon/icons-react/lib/SettingsAdjust";
import Checkmark from "@carbon/icons-react/lib/Checkmark";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { StateCommunityType } from "../CommunityTytpe";

export const filter = [
  {
    name:"All",
    id:"all",
  },
  {
    name:"OP Stack",
    id:"OP Stack",
  },
  {
    name:"Developer Ecosystem",
    id:"Developer Ecosystem",
  },
  {
    name:"Collective Governance",
    id:"Collective Governance",
  },
  {
    name:"End User Experience Adoption",
    id:"End User Experience Adoption",
  },
]

export default function FilterBtn({
  state,
  setState
}:{
  state: StateCommunityType;
  setState: React.Dispatch<React.SetStateAction<StateCommunityType>>
})  {

    function handleChangeFilter(char: string) {
        setState(prev => ({...prev, filter: char}))
    }

return (

    <> 
    <div className="text-right">
      <Menu 
      as="div" 
      className="relative inline-block text-left">
        <div>
          <Menu.Button className="">
            <div
              className={` h-10
            hover:bg-secondaryRed hover:text-primaryRed hover:border hover:border-primaryRed
            border rounded-full px-3 py-2 cursor-pointer transition-colors 
            text-slate-900 flex items-center gap-2 self-center shrink-0}
            `}
            >
              <SettingsAdjust size={24}  className="fill-gray-500" />
              <p className=" text-sm font-normal self-center">Filters</p>
            </div>
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute p-4 z-20 left-0 mt-2 w-64 origin-top-right  rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <h6 className="text-sm font-bold text-center text-gray-900">
              Filter By
            </h6>

            <div className="mt-4">

              {filter.map((item, i) => (
                <Menu.Item key={i}>
                {({ active }) => (
                  <button
                    className={`${state.filter === item.id ? 'bg-gray-100 hover:bg-gray-200' : 'text-gray-900'
                      } group w-full items-center rounded-md px-2 py-2 text-sm flex justify-between hover:bg-gray-50`}
                      onClick={() => handleChangeFilter(item.id)}
                  >
                    <h6>{item.name}</h6>
                    {state.filter === item.id && 
                    <Checkmark  size={24}/>
                    }
                  </button>
                )}
              </Menu.Item>
              ))}
              
          
            </div>

          </Menu.Items>
        </Transition>
      </Menu>
    </div>
    </>

    )

}
