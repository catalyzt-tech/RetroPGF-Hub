import React, { useState, useEffect, useRef } from "react";

export default function ScrollSpy({
  overViewRef,
  contributionRef,
  impactRef,
  fundingRef,
}: {
  overViewRef: React.MutableRefObject<HTMLElement | null>;
  contributionRef: React.MutableRefObject<HTMLElement | null>;
  impactRef: React.MutableRefObject<HTMLElement | null>;
  fundingRef: React.MutableRefObject<HTMLElement | null>;
}) {
  const [currentContent, setCurrentContent] = useState<string>("overview");


  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry.target.getAttribute("id"))
          setCurrentContent(entry.target.getAttribute("id") || "overview");
        }
      });
    }, observerOptions);

    const observeSection = (sectionRef: React.MutableRefObject<HTMLElement | null>) => {
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
    };

    observeSection(overViewRef);
    observeSection(contributionRef);
    observeSection(impactRef);
    observeSection(fundingRef);

    return () => {
      observer.disconnect();
    };
  }, [overViewRef, contributionRef, impactRef, fundingRef]);

  return (
    <div className="hidden lg:block bg-white h-fit p-4 rounded-md shadow-md w-full sticky top-24">
      <div className="mx-4 my-4 font-medium text-gray-500 flex flex-col items-start gap-4">
        <div className="text-base text-gray-900 font-bold">ON THIS PAGE</div>
        <ul className="flex flex-col items-start gap-4">
          {[
            { content: "Overview", ref: overViewRef },
            { content: "Contribution", ref: contributionRef },
            { content: "Impact", ref: impactRef },
            { content: "Funding Sources", ref: fundingRef },
          ].map(({ content, ref }) => (
            <li key={content} className="list-none">
              <a
                className={`active flex cursor-pointer hover:text-primaryRed ${
                  currentContent === content
                    ? "pl-2 text-red-600 border-l-[3px] border-primaryRed"
                    : ""
                }`}
                onClick={() => {
                  if (ref && ref.current) {
                    ref.current.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                      inline: "start",
                    });
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
  );
}
