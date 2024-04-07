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
    <div className="p-4 w-full flex items-center justify-center lg:mt-12 mt-4">
  
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
