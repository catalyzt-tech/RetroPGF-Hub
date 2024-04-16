import React from 'react';
import Section from './Section';

const page = () => {
    const sections = [
      {
        title:"What is RetroPGF",
        description:"The mission will pave the way for innovative governance experiments, educational initiatives, and possibly even a new range of governance-centric products and services, all developed utilizing the open-source infrastructure. In deploying this open source SDK, we believe that we can make a large impact in a rather unexplored area of governance incentives, and hopefully pave the way for others to build and iterate upon governance design expirementations/iterations implementations in a permissionless, decentralized environment."
      },
      {
        title:"Pathway of Contribution (that 4 categories)",
        description:"The mission will pave the way for innovative governance experiments, educational initiatives, and possibly even a new range of governance-centric products and services, all developed utilizing the open-source infrastructure. In deploying this open source SDK, we believe that we can make a large impact in a rather unexplored area of governance incentives, and hopefully pave the way for others to build and iterate upon governance design expirementations/iterations implementations in a permissionless, decentralized environment."
      },
      {
        title:"Impact = Profit (How can we earn money)",
        description:"The mission will pave the way for innovative governance experiments, educational initiatives, and possibly even a new range of governance-centric products and services, all developed utilizing the open-source infrastructure. In deploying this open source SDK, we believe that we can make a large impact in a rather unexplored area of governance incentives, and hopefully pave the way for others to build and iterate upon governance design expirementations/iterations implementations in a permissionless, decentralized environment."
      },
      {
        title:"Type of Eligible Projects",
        description:"The mission will pave the way for innovative governance experiments, educational initiatives, and possibly even a new range of governance-centric products and services, all developed utilizing the open-source infrastructure. In deploying this open source SDK, we believe that we can make a large impact in a rather unexplored area of governance incentives, and hopefully pave the way for others to build and iterate upon governance design expirementations/iterations implementations in a permissionless, decentralized environment."
      },
      {
        title:"Builder Ideas",
        description:"The mission will pave the way for innovative governance experiments, educational initiatives, and possibly even a new range of governance-centric products and services, all developed utilizing the open-source infrastructure. In deploying this open source SDK, we believe that we can make a large impact in a rather unexplored area of governance incentives, and hopefully pave the way for others to build and iterate upon governance design expirementations/iterations implementations in a permissionless, decentralized environment."
      },
      {
        title:"How Voting System Works",
        description:"The mission will pave the way for innovative governance experiments, educational initiatives, and possibly even a new range of governance-centric products and services, all developed utilizing the open-source infrastructure. In deploying this open source SDK, we believe that we can make a large impact in a rather unexplored area of governance incentives, and hopefully pave the way for others to build and iterate upon governance design expirementations/iterations implementations in a permissionless, decentralized environment."
      },
      {
        title:"Importance of List",
        description:"The mission will pave the way for innovative governance experiments, educational initiatives, and possibly even a new range of governance-centric products and services, all developed utilizing the open-source infrastructure. In deploying this open source SDK, we believe that we can make a large impact in a rather unexplored area of governance incentives, and hopefully pave the way for others to build and iterate upon governance design expirementations/iterations implementations in a permissionless, decentralized environment."
      }
    ];
    const sectionLength = sections.length;
    return (
      <>

    <div className="relative max-h-[19rem] min-h-[19rem]">
            <div className="bg-gradient-to-br from-[#FFFEEA] to-100% via-[#FFDAAF] to-[#FFAB9F] w-full absolute -top-[4.5rem] left-0 h-[28rem] min-[300px]:h-[25rem] sm:h-[18rem] lg:h-[23.5rem]">
                <div className="mt-[4.5rem] lg:mt-24" />
                <div className=" py-4 md:py-8 px-4 lg:px-16 xl:px-64 flex flex-col justify-start  font-rubik h-[19rem] w-full">
                    <h1 className="mb-3 md:mb-7 text-3xl lg:text-5xl text-start font-semibold text-gray-800">Resources</h1>
                    <p className="mb-8 text-lg lg:text-xl font-normal text-gray-800 break-words">Guide 1: Introduction to RetroPGF Lesson 1: What is RetroPGF? (Video & Text) Lesson 2: Understanding the Optimism Ecosystem (Interactive Diagram & Quiz) Lesson 3: Benefits of Participating in RetroPGF (Text & Case Studies)</p>
                  
                </div>
            </div>
    </div>


    <div className="px-4 sm:px-16 w-full flex items-center justify-center mt-20 min-[300px]:mt-12">
        <div className="relative pl-[3rem] lg:pl-[4.5rem] flex flex-col justify-center items-center">
        {sections.map((section,index) => (
              <React.Fragment key={index}>
                <Section
                  title={section.title}
                  description={section.description}
                  index={index}         
                  sectionLength={sectionLength}  
                />
              </React.Fragment>
            ))}
        </div>
    </div>
      </>
    );
  };
  
  export default page;
