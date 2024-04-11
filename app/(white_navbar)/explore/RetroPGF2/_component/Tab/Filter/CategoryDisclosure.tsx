import ChevronDown from "@carbon/icons-react/lib/ChevronDown"
import { Disclosure, Transition } from "@headlessui/react"
import { category } from "../../Text"
import Checkbox from "@/app/component/Checkbox/Checkbox"
import { CheckBoxStateType } from "../../ExploreRoundType";

export default function CategoryDisclosure({
    checkBox,
    handleChangeCategory,
}:{
    checkBox: CheckBoxStateType;
    handleChangeCategory:(value: string) => void;

})  {



return (

    <> 
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
              <Disclosure.Panel className="text-sm text-gray-500 flex gap-1 flex-col">
                 {category.map((item, i) => (
                        <div
                        className=""
                        key={i}
                        >
                        <Checkbox
                        key={i}
                        label={item.name}
                        value={item.name}
                        className="cursor-pointer"
                        checked={checkBox.category.includes(item.name)}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>{
                          handleChangeCategory(e.target.value)
                        }}
                        />
                        </div>
                  ))}
                  {/* {checkBox.category[0]} */}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
      <hr className="h-[0.0625rem] bg-gray-200" />
    </>

    )

}
