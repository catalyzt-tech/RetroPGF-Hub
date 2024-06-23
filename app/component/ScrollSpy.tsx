import React, { useState, useEffect, MutableRefObject } from 'react'

interface Section {
  name: string
  ref: MutableRefObject<HTMLElement | null>
}

interface ScrollSpyProps {
  sections: Section[]
  defaultClass?: string
  observerOptions?: IntersectionObserverInit
}

export default function ScrollSpy({
  sections,
  defaultClass = 'hidden lg:block bg-white h-fit p-4 rounded-md shadow-md w-full sticky top-24',
  observerOptions = {
    root: null,
    rootMargin: '-30px',
    threshold: 0.1,
  },
}: ScrollSpyProps) {
  const [currentContent, setCurrentContent] = useState<string>(
    sections[0]?.name || ''
  )
  const [visibleSections, setVisibleSections] = useState<
    Record<string, boolean>
  >(
    sections.reduce((acc, section) => {
      acc[section.name] = false
      return acc
    }, {} as Record<string, boolean>)
  )

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const sectionId =
          entry.target.getAttribute('id') || sections[0]?.name || ''
        setVisibleSections((prevSections) => ({
          ...prevSections,
          [sectionId]: entry.isIntersecting,
        }))
      })
    }, observerOptions)

    sections.forEach(({ ref }) => {
      if (ref.current) {
        observer.observe(ref.current)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [sections])

  useEffect(() => {
    const visibleSectionNames = Object.entries(visibleSections)
      .filter(([_, isVisible]) => isVisible)
      .map(([name]) => name)

    const lastVisibleSection =
      visibleSectionNames.length > 0
        ? visibleSectionNames[visibleSectionNames.length - 1]
        : sections[0]?.name || ''

    setCurrentContent(lastVisibleSection)
  }, [visibleSections, sections])

  return (
    <div className={defaultClass}>
      <div className="mx-4 my-4 font-medium text-gray-500 flex flex-col items-start gap-4 font-inter">
        <div className="text-base text-gray-800 font-bold">ON THIS PAGE</div>
        <ul className="flex flex-col items-start gap-4">
          {sections.map(({ name, ref }) => (
            <li key={name} className="list-none">
              <a
                className={`text-base font-medium  text-gray-500 active flex cursor-pointer hover:text-primaryRed ${
                  currentContent === name
                    ? 'pl-2 text-red-600 border-l-[3px] border-primaryRed'
                    : ''
                }`}
                onClick={() => {
                  if (ref.current) {
                    const topOffset =
                      ref.current.getBoundingClientRect().top +
                      window.pageYOffset
                    const navbarHeight = 4.5 * 16 + 10
                    const scrollToPosition = topOffset - navbarHeight

                    window.scrollTo({
                      top: scrollToPosition,
                      behavior: 'smooth',
                    })

                    setTimeout(() => {
                      setCurrentContent(ref.current ? ref.current.id : name)
                    }, 10)
                  }
                }}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
