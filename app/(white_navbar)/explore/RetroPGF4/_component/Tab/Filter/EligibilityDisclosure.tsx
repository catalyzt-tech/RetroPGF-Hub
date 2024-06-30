import { CheckBoxStateType } from '../../ExploreRoundType'
import { Disclosure, Transition } from '@headlessui/react'
import { eligibilityStatus } from '../../Text'
import { ChevronDown } from '@carbon/icons-react'
import Checkbox from '@/app/component/Checkbox/Checkbox'

interface IEligibilityDisclosure {
  checkBox: CheckBoxStateType
  handleChangeEligibility: (eligibility: string) => void
}

export default function EligibilityDisclosure({
  checkBox,
  handleChangeEligibility,
}: IEligibilityDisclosure) {
  return (
    <div>
      <>
        <Disclosure defaultOpen={true}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex items-center w-full justify-between rounded-lg text-left text-sm font-medium focus:outline-none ">
                <h6 className="text-xs font-medium text-gray-400 self-center">
                  Project Status
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
                <Disclosure.Panel className="text-sm text-gray-500 flex gap-1 flex-col mt-3 gap-y-1.5">
                  {eligibilityStatus.map((item, i) => (
                    <div key={i}>
                      <Checkbox
                        key={i}
                        label={item.name}
                        value={item.name}
                        className="cursor-pointer"
                        checked={checkBox.eligibility === item.name}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          handleChangeEligibility(e.target.value)
                        }}
                      />
                    </div>
                  ))}
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </>
    </div>
  )
}
