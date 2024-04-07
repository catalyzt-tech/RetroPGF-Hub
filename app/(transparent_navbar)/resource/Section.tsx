"use client"
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const Section = ({
  title,
  description,
  index,
  sectionLength,
}: {
  title: string;
  description: string;
  index: number;
  sectionLength: number;
}) => {

  return (
    <div className="flex relative lg:w-[968px] lg:h-[268px] gap-6 z-10 lg:py-0 py-4 lg:mb-8 mb-2 w-full">
      {index < sectionLength - 1 && (
        <div className="absolute h-[calc(100%+40px)] top-4  lg:top-0 left-[-1.5rem] lg:left-[-3.05rem] w-1 bg-gray-100" />
      )}
      <div className="flex items-center justify-center absolute -left-[2.5rem] lg:-left-[4.5rem] top-4 lg:top-0 bg-gray-100 rounded-full lg:w-12 w-8 lg:h-12 h-8 p-2 gap-2">
        <p className="lg:text-2xl text-base lg:font-semibold font-bold text-gray-800 text-center self-center">
          {index + 1}
        </p>
      </div>
      <Disclosure
        as="div"
        className="flex flex-col lg:w-[896px] w-full lg:p-8 lg:gap-6 gap-4 lg:rounded-[8px] lg:border lg:border-t-1"
      >
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between items-center lg:text-3xl text-xl font-semibold font-rubik text-left leading-9 text-gray-800 hover:cursor-default w-full">
              <div>{title}</div>
              <div className="mx-4">
                <ChevronUpIcon
                  className={`lg:hidden flex justify-center text-gray-800 relative w-[28px] h-[28px] transition-transform duration-300 ease-in-out ${
                    open ? "transform rotate-180" : ""
                  }`}
                />
              </div>
            </Disclosure.Button>
            <div className="lg:flex hidden">{description}</div>
            <div className="relative lg:hidden flex">
              <div
                className={`transition-opacity duration-300 top-0 left-0 w-full h-full ${
                  open ? "opacity-100" : "opacity-0"
                } ${open ? "flex" : "absolute"}`}
              >
                <Disclosure.Panel className="lg:w-[832px] gap-4 text-gray-600">
                  {description}
                </Disclosure.Panel>
              </div>
              <div
                className={`transition-opacity duration-300 top-0 left-0 w-full h-full ${
                  open ? "opacity-0" : "opacity-100"
                } ${open ? "absolute" : "flex"}`}
              >
                {!open && (
                  <div className="lg:w-[832px] gap-4 text-gray-600 line-clamp-4">
                    {description}
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Section;
