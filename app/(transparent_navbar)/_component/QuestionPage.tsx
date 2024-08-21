'use client'

import { Disclosure } from '@headlessui/react'
import ChevronDown from '@carbon/icons-react/lib/ChevronDown'
import { Transition } from '@headlessui/react'
import React from 'react'

export default function QuestionPage() {
  const questions = [
    {
      question: 'Can we receive funding through RetroPGF Hub?',
      answer:
        'No, RetroPGF Hub is a platform for project creators to submit their project ideas and get feedback. RetroPGF Hub does not provide funding to projects. However, if you are looking for funding, you can submit your project idea to RetroPGF (by Optimism) and if your project is selected, you will receive funding.',
    },
    {
      question: 'Is Retro PGF Hub built by Optimism?',
      answer:
        'No, RetroPGF Hub is not built by Optimism. RetroPGF Hub is a community-driven platform.',
    },
  ]
  return (
    <>
      <div className="lg:w-auto w-full lg:mt-[3rem] mt-8">
        <hr className="flex border-t lg:border-gray-200 border-gray-100"></hr>
        {questions.map((item, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-col py-5 lg:w-[48rem] items-center">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="w-full flex lg:w-[48rem] justify-between items-center font-inter text-base font-semibold text-left text-gray-800">
                      {item.question}
                      <ChevronDown
                        size={24}
                        className={`${
                          open ? 'rotate-180' : ''
                        } transition-transform duration-150 ease-in-out`}
                      />
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel>
                        <div className="w-full pt-4 text-sm text-gray-500 text-left">
                          {item.answer}
                        </div>
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
  )
}
