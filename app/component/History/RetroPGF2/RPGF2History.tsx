import { FC } from 'react'
import Image from 'next/image'
const RPGF2History: FC = () => {
  return (
    <>
      <section className="mb-10" id="intro">
        <div className="font-semibold text-3xl text-gray-800">RetroPGF 2</div>
        <div className="text-gray-600 text-base font-normal mt-4">
          The Citizens' House employs a unique approach called "retroactive
          public goods funding" (RetroPGF), which believes it's easier to
          support what's proven valuable rather than guessing what might be
          useful. Each RetroPGF round begins with a defined funding scope,
          initially set by the Optimism Foundation and later by the community.
          Projects are then evaluated by the Citizens' House based on their
          impact within this scope, determining funding allocations. Optimism is
          committed to dedicating 20% of its OP token allocation to RetroPGF,
          and future rounds will tap into additional funding sources. This
          iterative process blends theory, practice, and community feedback to
          shape a retroactive funding system that benefits all.
        </div>
        <Image
          src="/static/historyRPGF2/header-illustration@2x-663726ee.png"
          className="my-5 rounded-lg"
          width={1000}
          height={400}
          alt="RetroPGF 2"
        ></Image>
      </section>
      <section className="mb-10" id="experiment">
        <div className="font-semibold text-3xl text-gray-800 mt-3">
          Experiment Overview
        </div>
        <div className="text-gray-600 text-base font-normal mt-4">
          The Optimism Collective recently held its second round of Retroactive
          Public Goods Funding (RetroPGF) in the first quarter of 2023. The
          RetroPGF 2 allocation of 10 million OP tokens was directed towards
          funding public goods that promote the development and usage of the OP
          Stack. The ultimate goal of the Collective is to establish a global
          system that rewards positive contributions with individual profit. The
          RetroPGF mechanism serves as an experiment towards achieving this goal
          of "impact = profit". By funding public goods in a sustainable manner,
          the Collective can foster a thriving ecosystem and a stronger economy.
          Overall, this initiative aims to create a positive impact on the
          world. The Optimism Collective believes that building public goods
          should be profitable.
        </div>
        <Image
          src="/static/historyRPGF2/Bicameral.webp"
          className="my-5 rounded-lg"
          width={1000}
          height={400}
          alt="Bicameral"
        ></Image>
      </section>
      <section className="mb-10" id="process">
        <div className="font-semibold text-3xl text-gray-800 mt-3">
          Process and Timeline
        </div>
        <div className="text-gray-600 text-base font-normal mt-4">
          This is the kick-off for the project nominations of the recently
          announced RetroPGF Round 2. Optimism’s vision is to build a global
          system where positive impact to the Collective is rewarded by profit
          to the individual. RetroPGF is an experimental mechanism to realize
          this goal of “impact = profit”. For more information, read the
          announcement post or visit our governance documentation.
        </div>
        <div>
          <ol className="relative border-l border-[#ff1818] dark:border-[#ff1818] my-6 ml-2">
            <li className="mb-6 ml-6">
              <div className="absolute w-3 h-3 bg-[#ff1818] rounded-full mt-1.5 -left-1.5 border border-white" />
              <time className="mb-1 text-sm font-normal leading-none text-[#ff1818] dark:text-gray-500">
                Prior January 2023
              </time>
              <div className="text-md font-semibold text-gray-700">
                Badgeholder Selection
              </div>
              <p className="text-gray-600">
                Badgeholders have the power to distribute OP tokens to projects.
                They’re instrumental in running an effective RetroPGF round. For
                RetroPGF Round 2, badgeholders were selected across four
                different criteria.
              </p>
            </li>
            <li className="mb-6 ml-6">
              <div className="absolute w-3 h-3 bg-[#ff1818] rounded-full mt-1.5 -left-1.5 border border-white" />
              <time className="mb-1 text-sm font-normal leading-none text-[#ff1818] dark:text-gray-500">
                17 - 31st January 2023
              </time>
              <div className="text-md font-semibold text-gray-700">
                Nominations
              </div>
              <p className="text-gray-600 font-base">
                Anyone could nominate a project on{' '}
                <a
                  href="https://gov.optimism.io/t/nominations-for-retropgf2/4636"
                  target="_blank"
                  className="text-[#ff1818] hover:underline"
                >
                  the forum
                </a>{' '}
                by providing a name, impact description and link to
                Github/Twitter.
              </p>
            </li>
            <li className="mb-6 ml-6">
              <div className="absolute w-3 h-3 bg-[#ff1818] rounded-full mt-1.5 -left-1.5 border border-white" />
              <time className="mb-1 text-sm font-normal leading-none text-[#ff1818] dark:text-gray-500">
                7 - 21st February 2023
              </time>
              <div className="text-md font-semibold text-gray-700">
                Project Profile Creation
              </div>
              <p className="text-gray-600">
                Projects had to create a profile where they were asked for
                general information, as well as a description of their project
                and its impact. Information provided by Projects can be viewed
                on the
                <a href="/archive" className="text-[#ff1818] hover:underline">
                  archive page
                </a>
                .
              </p>
            </li>
            <li className="mb-6 ml-6">
              <div className="absolute w-3 h-3 bg-[#ff1818] rounded-full mt-1.5 -left-1.5 border border-white" />
              <time className="mb-1 text-sm font-normal leading-none text-[#ff1818] dark:text-gray-500">
                7 - 21st March 2023
              </time>
              <div className="text-md font-semibold text-gray-700">Voting</div>
              <p className="text-gray-600">
                Badgeholders were provided with a{' '}
                <a
                  href="https://oplabs.notion.site/Optimism-RetroPGF-2-Badgeholder-Manual-11ef6cd63c254258a32246289f45925c#de8c93098c854a62951d721fb95bf51c"
                  className="text-[#ff1818] hover:underline"
                >
                  badgeholder manual
                </a>
                and asked to evaluate and vote on nominated projects via a
                <a
                  href="https://app.deform.cc/form/85e65189-6679-4a13-908e-c42ea3cf1498/"
                  className="text-[#ff1818] hover:underline"
                >
                  voting form
                </a>
              </p>
            </li>
            <li className="ml-6">
              <div className="absolute w-3 h-3 bg-[#ff1818] rounded-full mt-1.5 -left-1.5 border border-white" />
              <time className="mb-1 text-sm font-normal leading-none text-[#ff1818] dark:text-gray-500">
                After April 2023
              </time>
              <div className="text-md font-semibold text-gray-700">
                Payout / Funding Distribution
              </div>
              <p className="text-gray-600">
                Projects received rewards based on their received OP allocation
                votes from each badgeholders which can be viewed{' '}
                <a href="/archive" className="text-[#ff1818] hover:underline">
                  here
                </a>
              </p>
            </li>
          </ol>
        </div>
      </section>
      <section className="mb-10" id="scope">
        <div className="font-semibold text-3xl text-gray-800 mt-3">
          Scope of Round
        </div>
        <div className="text-gray-600 text-base font-normal mt-4">
          RetroPGF Round 2 has a clear mission which is allocate 10 million OP
          tokens to projects that enhance the development and utilization of the
          OP Stack. These projects fall into three key categories:
        </div>
        <ol className="list-disc ml-5 my-5">
          <li>
            <div className="font-semibold text-gray-700">
              Infrastructure & Dependencies
            </div>
            <p className="text-gray-600">
              Software used to build or deploy the OP Stack / contributions to
              protocols or standards upon which the OP Stack runs / experiments
              that support future development of the core OP Stack protocol.
            </p>
            <div />
          </li>
          <li>
            <div className="font-semibold text-gray-700">
              Tooling & Utilities
            </div>
            <p className="text-gray-600">
              Work that helps builders create applications on Optimism mainnet,
              build on the OP Stack, interact with governance of the Collective,
              or use applications built on Optimism.
            </p>
          </li>
          <li>
            <div className="font-semibold text-gray-700">Education</div>
            <p className="text-gray-600">
              Work to spread awareness and knowledge of how Optimism works,
              whether technically or socially.
            </p>
          </li>
        </ol>
        <Image
          src="/static/historyRPGF2/retropgf2_banner_3.jpeg"
          className="my-5 rounded-lg"
          width={1000}
          height={400}
          alt="Scope of Round"
        />
      </section>
      <section></section>
    </>
  )
}
export default RPGF2History
