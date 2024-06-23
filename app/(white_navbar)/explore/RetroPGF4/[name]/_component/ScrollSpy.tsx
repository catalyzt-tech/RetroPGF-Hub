import React, { useState, useEffect, useRef } from 'react'

interface ScrollSpyProps {
  overViewRef: React.MutableRefObject<HTMLElement | null>
  // contributionRef: React.MutableRefObject<HTMLElement | null>
  // impactRef: React.MutableRefObject<HTMLElement | null>
  fundingRef: React.MutableRefObject<HTMLElement | null>
  githubRef: React.MutableRefObject<HTMLElement | null>
  contractRef: React.MutableRefObject<HTMLElement | null>
}
export default function ScrollSpy({
  overViewRef,
  // contributionRef,
  // impactRef,
  fundingRef,
  githubRef,
  contractRef,
}: ScrollSpyProps) {
  const [currentContent, setCurrentContent] = useState<string>('Overview')
  const [sections, setSections] = useState({
    Overview: false,
    // Contribution: false,
    // Impact: false,
    Funding: false,
    Github: false,
    Contract: false,
  })

  const observerOptions = {
    root: null,
    rootMargin: '-30px',
    threshold: 0.1,
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.getAttribute('id') || 'Overview'
        setSections((prevSections) => ({
          ...prevSections,
          [sectionId]: entry.isIntersecting,
        }))
      })
    }, observerOptions)

    const observeSection = (
      sectionRef: React.MutableRefObject<HTMLElement | null>
    ) => {
      if (sectionRef.current) {
        observer.observe(sectionRef.current)
      }
    }

    observeSection(overViewRef)
    // observeSection(contributionRef)
    // observeSection(impactRef)
    observeSection(fundingRef)
    observeSection(githubRef)
    observeSection(contractRef)

    return () => observer.disconnect()
  }, [overViewRef, fundingRef, githubRef, contractRef])

  useEffect(() => {
    const visibleSections = Object.entries(sections)
      .filter(([key, visible]) => visible)
      .map(([key]) => key)

    const lastVisibleSection =
      visibleSections.length > 0
        ? visibleSections[visibleSections.length - 1]
        : null

    setCurrentContent(lastVisibleSection || 'overview')
  }, [sections])

  return (
    <div className="hidden lg:block bg-white h-fit p-4 rounded-lg w-full sticky top-24">
      <div className="mx-4 my-4 font-medium text-gray-500 flex flex-col items-start gap-4">
        <div className="text-base text-gray-900 font-bold">On This Page</div>
        <ul className="flex flex-col items-start gap-4">
          {[
            { content: 'Overview', ref: overViewRef },
            // { content: 'Contribution', ref: contributionRef },
            // { content: "Impact", ref: impactRef },
            { content: 'Funding Sources', ref: fundingRef },
            { content: 'Github', ref: githubRef },
            { content: 'Contract Addresses', ref: contractRef },
          ].map(({ content, ref }) => (
            <li key={content} className="list-none">
              <a
                className={`active flex cursor-pointer hover:text-primaryRed ${
                  currentContent === content
                    ? 'pl-2 text-red-600 border-l-[3px] border-primaryRed'
                    : ''
                }`}
                onClick={() => {
                  if (ref && ref.current) {
                    ref.current.scrollIntoView({
                      behavior: 'smooth',
                      block: 'center',
                      inline: 'start',
                    })
                  }
                }}
              >
                {content}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
