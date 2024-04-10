"use client"
import ChevronDown from "@carbon/icons-react/lib/ChevronDown";
import { Disclosure, Transition } from "@headlessui/react";
import { CheckBoxStateType } from "../../ExploreRoundType";

export default function InBallotDisclosure({
    checkBox,
    handleChangeBallot,
    allProjectId="all-project",
    secondProjectId=">-17-vote",
}:{
    checkBox: CheckBoxStateType;
    handleChangeBallot(ballot: string): void;
    allProjectId:string;
    secondProjectId:string;
})  {

    console.log(checkBox, checkBox.ballot === "All Project")

return (

    <> 
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
                <div className="flex flex-col gap-2 mt-4">
                <div className="inline-flex gap-1 items-center z-20">
                    <label className="relative flex items-center rounded-full cursor-pointer" htmlFor={allProjectId}>
                        <input 
                        name={allProjectId} 
                        type="radio"
                        id={allProjectId} 
                        checked={checkBox.ballot === "All Project"}
                        value={"All Project"}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChangeBallot(event.target.value)}
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                        />
                        <span className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5" viewBox="0 0 16 16" fill="currentColor">
                                <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                            </svg>
                        </span>
                    </label>
                    <label className="text-sm font-normal text-gray-800 ml-1" htmlFor={allProjectId}>
                        All Project
                    </label>
                </div>


                  <div 
                  className="inline-flex gap-1 items-center z-20">
                    <label 
                    onClick={() => handleChangeBallot("> 17 vote")}
                    className="relative flex items-center rounded-full cursor-pointer" htmlFor={secondProjectId}>
                      <input 
                        name={secondProjectId} 
                        type="radio"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                        id={secondProjectId} 
                        value={"> 17 vote"}
                        checked={checkBox.ballot === "> 17 vote"} 
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChangeBallot(event.target.value)}
                        />
                      <span
                        className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5" viewBox="0 0 16 16" fill="currentColor">
                          <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                        </svg>
                      </span>
                    </label>
                    <label className="text-sm font-normal text-gray-800 ml-1" htmlFor={secondProjectId}>
                    {'>'} 17 vote
                    </label>
                  </div>
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </>

    )

}
