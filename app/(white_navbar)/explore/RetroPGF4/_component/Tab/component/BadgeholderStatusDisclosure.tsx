import ChevronDown from '@carbon/icons-react/lib/ChevronDown'
import { Disclosure, Transition } from '@headlessui/react'
import { badgeholderStatus, multiplyOpenSource } from '../../Text'
import Checkbox from '@/app/component/Checkbox/Checkbox'
import {
  CheckBoxStateBadgeholderType,
  CheckBoxStateType,
} from '../../ExploreRoundType'

interface IBadgeholderStatusDisclosure {
  checkBox: CheckBoxStateBadgeholderType
  handleChangeStatus: (string: string) => void
}
export default function BadgeholderStatusDisclosure({
  checkBox,
  handleChangeStatus,
}: IBadgeholderStatusDisclosure) {
  return (
    <>
      <Disclosure defaultOpen={true}>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex items-center w-full justify-between rounded-lg text-left text-sm font-medium focus:outline-none ">
              <h6 className="text-xs font-medium text-gray-400 self-center">
                Badgeholder Status
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
              <Disclosure.Panel className="text-sm text-gray-500 flex gap-1 flex-col gap-y-1.5">
                {badgeholderStatus.map((item, i) => (
                  <div key={i}>
                    <Checkbox
                      key={i}
                      label={item.name}
                      value={item.name}
                      className="cursor-pointer"
                      checked={checkBox.status === item.name}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        handleChangeStatus(e.target.value)
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
  )
}
