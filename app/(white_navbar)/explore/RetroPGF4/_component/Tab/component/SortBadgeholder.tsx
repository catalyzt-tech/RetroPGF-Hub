import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { sortBadgeholderChoice } from '../../Text'
import SortAscending from '@carbon/icons-react/lib/SortAscending'
import Checkmark from '@carbon/icons-react/lib/Checkmark'
import { ExploreRoundState } from '../../ExploreRoundType'

export default function SortBadgeholder({
  state,
  handleChangeSort,
}: {
  state: ExploreRoundState
  handleChangeSort: (char: string) => void
}) {
  return (
    <>
      <Menu as="div" className="relative hidden lg:inline-block text-left">
        <div>
          <Menu.Button className="">
            <div
              className={` h-10 group
                            hover:bg-secondaryRed hover:text-primaryRed hover:border hover:border-primaryRed
                            border rounded-full px-3 py-2 cursor-pointer transition-colors 
                            text-slate-900 flex items-center gap-2 self-center shrink-0}
                            `}
            >
              <SortAscending
                size={24}
                className="fill-gray-500 group-hover:fill-red-500"
              />
              <p className=" text-sm font-normal self-center text-gray-600 group-hover:text-red-500">
                {state.sort}
              </p>
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
          <Menu.Items className="absolute p-4 z-30 right-0 mt-2 w-56 origin-top-right  rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <h6 className="text-sm font-bold text-center text-gray-900">
              Sort By
            </h6>

            <div className="mt-4">
              {sortBadgeholderChoice.map((item, i) => (
                <Menu.Item key={i}>
                  {({ active }) => (
                    <button
                      className={`${
                        state.sort === item.name
                          ? 'bg-gray-100 hover:bg-gray-200'
                          : 'text-gray-900'
                      } group flex justify-between w-full items-center rounded-md px-2 py-2 text-sm font-normal hover:bg-gray-50`}
                      onClick={() => handleChangeSort(item.name)}
                    >
                      <h6>{item.name}</h6>
                      {state.sort === item.name && <Checkmark size={24} />}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  )
}
