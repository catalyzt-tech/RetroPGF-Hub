"use client";

import { Disclosure } from "@headlessui/react";
import ChevronDown from "@carbon/icons-react/lib/ChevronDown";
import { Transition } from "@headlessui/react";
import React from "react";


export default function QuestionPage() {
  const questions = [1, 2, 3, 4, 5];
  return (
    <>
      <div className="lg:w-auto w-full lg:mt-[3rem] mt-8">
        <hr className="flex border-t lg:border-gray-200 border-gray-100"></hr>
        {questions.map((i) => (
          <React.Fragment key={i}>
            <div
              className="flex flex-col py-5 lg:w-[48rem] items-center"
            >
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="w-full flex lg:w-[48rem] justify-between items-center font-inter text-base font-semibold text-left text-gray-800">
                      Question text goes here
                      <ChevronDown size={24}
                        className={`${
                          open ? "rotate-180" : ""
                        } transition-transform duration-150 ease-in-out`}
                      />
                    </Disclosure.Button>
                    <Transition
                      className="w-full pt-4 text-sm text-gray-500 text-left"
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel>
                        Question here
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </div>
            <hr className="flex border-t lg:border-gray-200 border-gray-100"></hr>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}