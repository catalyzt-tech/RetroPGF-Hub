import { FC, useRef } from 'react'
import Image from 'next/image'
import ScrollSpy from '../../ScrollSpy'
const RPGF2History: FC = () => {

  const introRef = useRef<HTMLElement | null>(null);
  const experimentRef = useRef<HTMLElement | null>(null);
  const timelineRef = useRef<HTMLElement | null>(null);
  const scopeRef = useRef<HTMLElement | null>(null);
  const votingRef = useRef<HTMLElement | null>(null);
  const nominateRef = useRef<HTMLElement | null>(null);
  const resultRef = useRef<HTMLElement | null>(null);
  const learningRef = useRef<HTMLElement | null>(null);
  const journeyRef = useRef<HTMLElement | null>(null);

  const sections = [
    { name: "RetroPGF 2", ref: introRef },
    { name: "Experiment Overview", ref: experimentRef },
    { name: "Process and Timeline", ref: timelineRef },
    { name: "Scope of Round", ref: scopeRef },
    { name: "Nominate Projects", ref: nominateRef },
    { name: "Voting Badges", ref: votingRef },
    { name: "Results", ref: resultRef },
    { name: "Learnings & Reflections", ref: learningRef },
    { name: "Journey", ref: journeyRef },
  ];
  return (
    <>
      <div className="col-span-5 flex flex-col gap-10">
      <section className="" id="RetroPGF 2" ref={introRef}>
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
      <section className="" id="Experiment Overview" ref={experimentRef}>
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
      <section className="" id="Process and Timeline" ref={timelineRef}>
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
      <section className=""  id="Scope of Round" ref={scopeRef}>
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
      <section className="" id="Nominate Projects" ref={nominateRef}>
        <div className="font-semibold text-3xl text-gray-800 mt-3">
          Nominate Projects
        </div>
        <div className="text-gray-600 text-base font-normal mt-4">
          To nominate a project for RetroPGF, visit the designated forum posts
          for your chosen nomination category:
        </div>
        <div className="flex flex-row flex-wrap gap-6 my-5">
          <button className="flex flex-col  flex-grow  px-8 py-5 border-2  rounded-lg ">
            <div className="text-gray-700 font-semibold text-lg">
              Infrastructure & Dependencies
            </div>
            <div className="mt-3 text-gray-600">View Nominations &gt;</div>
          </button>
          <button className="flex flex-col  flex-grow  px-8 py-5 border-2  rounded-lg ">
            <div className="text-gray-700 font-semibold text-lg">
              Infrastructure & Dependencies
            </div>
            <div className="mt-3 text-gray-600">View Nominations &gt;</div>
          </button>
          <button className="flex flex-col  flex-grow  px-8 py-5 border-2  rounded-lg ">
            <div className="text-gray-700 font-semibold text-lg">
              Infrastructure & Dependencies
            </div>
            <div className="mt-3 text-gray-600">View Nominations &gt;</div>
          </button>
        </div>
        <div className="text-gray-700 text-lg font-semibold mt-4">
          What is things to consider when nominating a project?
        </div>
        <ol className="list-disc ml-5 mt-5 text-gray-600">
          <li>
            <div className="text-gray-700 font-medium">
              Provide Impact Details
            </div>
            <p className="text-gray-600">
              Describe how the project has made a positive impact within the
              scope of this round
            </p>
          </li>
          <li>
            <div className="text-gray-700  font-medium">
              Choose the Right Category
            </div>
            <p className="text-gray-600">
              Ensure that you nominate projects in the relevant category.
            </p>
          </li>
          <li>
            <div className="text-gray-700  font-medium">Avoid Duplicates</div>
            <p className="text-gray-600">
              Check if the project has already been nominated to prevent
              duplication.
            </p>
          </li>
        </ol>
        <div className="text-gray-700 text-lg font-semibold mt-4">
          For people or projects
        </div>
        <ol className="list-disc ml-5 mt-5 text-gray-600">
          <li>
            <div className="text-gray-700 font-medium">
              Read the Project Manual
            </div>
            <p className="text-gray-600">
              Familiarize yourself with the Project Manual, which provides an
              overview of the process and answers frequently asked questions.
            </p>
          </li>
          <li>
            <div className="text-gray-700  font-medium">
              Opt-In and Create a Project Profile
            </div>
            <p className="text-gray-600">
              To be eligible, opt into the round and complete your project
              profile in the RetroPGF application manager by Feb 21. This
              profile should include additional information about your project
              and verification of your GitHub or Twitter account.
            </p>
          </li>
          <li>
            <div className="text-gray-700  font-medium">Stay Updated</div>
            <p className="text-gray-600">
              Keep an eye out for the RetroPGF application manager, set to
              launch by the end of January. More details will follow soon!
            </p>
          </li>
        </ol>
        <div className="text-gray-600 text-base font-normal mt-4">
          It's essential to clarify that the term "project" encompasses both
          individual and group efforts. However, collections, referring to
          projects without a single verifiable entity on GitHub or Twitter, can
          only be nominated by the Optimism Foundation. Your participation is
          valued as we continue to shape the future of RetroPGF.
        </div>
        <div className="text-gray-700 text-lg font-semibold mt-4">
          Nominate Template
        </div>
        <div className="text-gray-600 text-base font-normal mt-4">
          This is a nomination to recognize and celebrate the outstanding
          contributions of a project within the OP Stack ecosystem. If you know
          of a project that has significantly supported the development and
          usage of the OP Stack, we encourage you to nominate it for
          recognition.
        </div>
        <div className=" bg-[#ffe9eb] p-6 rounded-lg mt-4">
          <div className="text-gray-700 font-semibold">
            For people or projects
          </div>
          <ol className="list-disc ml-5 my-2.5 text-gray-600">
            <li>
              <div>The projects name</div>
            </li>
            <li>
              <div>
                A description of how the project has supported development and
                usage of the OP Stack
              </div>
            </li>
            <li>
              <div>A link to the project’s GitHub or Twitter</div>
            </li>
            <li>
              <div>(Optional) Contact info for the project or project lead</div>
            </li>
          </ol>
          <div className="text-gray-700 font-semibold">For collections</div>
          <div className="text-gray-600 mt-4">
            The Foundation may also nominate collections for funding. A
            collection is different from a project in that a collection may not
            have a single entity that can be verified via GitHub or Twitter.
            Optimism’s Support NERDs or the set of code contributors to the
            Optimism monorepo are both examples of potential collections. To
            nominate a collection, the Foundation must comment on a forum thread
            with the collection’s name, the list of addresses in the collection,
            the breakdown of how funding would be distributed across those
            addresses, and a description of how they’ve provided public good to
            the Collective.
          </div>
          <div className="text-gray-600 mt-4">
            *Because of the high risk for fraud, collections will only be
            nominated by the Foundation in this round of RetroPGF (Round 2).
          </div>
        </div>
      </section>

      <section className="" id="Voting Badges" ref={votingRef}>
        <div className="font-semibold text-3xl text-gray-800 mt-3">
          Voting Badges
        </div>
        <div className="text-gray-600 text-base font-normal mt-4">
          Selecting the right badgeholders is like building a dream team for
          RetroPGF Round 2. We wanted a mix of experience, expertise, and fresh
          perspectives to ensure a robust and effective round. Here's how we did
          it
        </div>

        <div className="flex flex-row flex-wrap gap-6 my-5">
          <button className="flex flex-col  flex-grow  px-8 py-5 border-2  rounded-lg ">
            <div className="text-gray-700 font-semibold text-lg">
              14 Badgeholders
            </div>
            <div className="mt-3 text-gray-600">Round 1 Alumni</div>
          </button>
          <button className="flex flex-col  flex-grow  px-8 py-5 border-2  rounded-lg ">
            <div className="text-gray-700 font-semibold text-lg">
              21 Badgeholders
            </div>
            <div className="mt-3 text-gray-600">
              Optimism Foundation's Picks
            </div>
          </button>
          <button className="flex flex-col  flex-grow  px-8 py-5 border-2  rounded-lg ">
            <div className="text-gray-700 font-semibold text-lg">
              10 Badgeholders
            </div>
            <div className="mt-3 text-gray-600">Token House Elections</div>
          </button>

          <button className="flex flex-col  flex-grow  px-8 py-5 border-2  rounded-lg ">
            <div className="text-gray-700 font-semibold text-lg">
              29 Badgeholders
            </div>
            <div className="mt-3 text-gray-600">Badgeholders Nominates</div>
          </button>
        </div>
        <div className="text-gray-700 text-lg font-semibold mt-4">
          Let deep dive more to detail across four different criteria:
        </div>
        <ol className="list-disc ml-5 mt-5 text-gray-600">
          <li>
            <div className="text-gray-700 font-medium">Round 1 Alumni</div>
            <p className="text-gray-600">
              We welcomed back 14 badgeholders who had previously participated
              in Round 1 of RetroPGF. Their experience and insights from the
              first round make them valuable assets for Round 2.
            </p>
          </li>
          <li>
            <div className="text-gray-700  font-medium">
              Optimism Foundation's Picks
            </div>
            <p className="text-gray-600">
              The Optimism Foundation had a say in selecting 21 badgeholders,
              each bringing a unique perspective to the table. Their diverse
              backgrounds and expertise contribute to a well-rounded group.
            </p>
          </li>
          <li>
            <div className="text-gray-700  font-medium">
              Optimism's Token House Elections
            </div>
            <p className="text-gray-600">
              10 badgeholders were elected by Optimism's Token House , adding a
              democratic element to the selection process. One voting badge will
              be given to 10 Token House delegates
            </p>
          </li>
          <li>
            <div className="text-gray-700  font-medium">
              Badgeholders Nominates
            </div>
            <p className="text-gray-600">
              To ensure community representation, we opened up nominations for
              badgeholders from the three categories mentioned above. This
              approach allows us to include fresh voices and new perspectives in
              our badgeholder team. Each of badgeholders will be able to
              distribute a voting badge to one community member of their
              choosing.
            </p>
          </li>
        </ol>
        <Image
          src="/static/historyRPGF2/retropgf2_banner.jpeg"
          className="my-5 rounded-lg"
          width={1000}
          height={400}
          alt="Voting Badges"
        ></Image>
        <div className="text-gray-700 text-lg font-semibold mt-4">
          Things to aware
        </div>
        <div className="text-gray-600 text-base font-normal mt-4">
          Badgeholders have the power to distribute OP tokens to projects. They
          are instrumental in running an effective RetroPGF rounds. The
          information that badgeholders and citizens should know about the
          RetroPGF's process and rules.
        </div>
        <ol className="list-disc ml-5 my-5 text-gray-600">
          <li>
            <p className="text-gray-600">
              Holding a voting badge for one round does not guarantee voting
              rights in subsequent rounds; Citizenship criteria may change in
              the future.
            </p>
          </li>
          <li>
            <p className="text-gray-600">
              Voting badges in RetroPGF 2 are recorded as a simple attestation
              in the AttestationStation, not as a soulbound token, allowing for
              flexibility in future iterations.
            </p>
          </li>
          <li>
            <p className="text-gray-600">
              Badgeholders are expected to adhere to the Optimism Delegate Code
              of Conduct.
            </p>
          </li>
          <li>
            <p className="text-gray-600">
              Accepting a voting badge is optional; if an eligible person
              declines, the badge won't be distributed to someone else.
            </p>
          </li>

          <li>
            <p className="text-gray-600">
              Badgeholders with any participation or ownership stake in a
              project up for vote in RetroPGF 2 are expected not to vote in
              favor of that project. Detailed conflict of interest rules will be
              provided in a forthcoming Badgeholder Manual.
            </p>
          </li>

          <li>
            <p className="text-gray-600">
              Getting a badge for RetroPGF 2 doesn't mean you're guaranteed
              permanent participation in the Citizens' House or future RetroPGF
              iterations. Our citizenship criteria may evolve over time. The
              responsibility for citizenship distribution ultimately lies with
              Optimism's two-house governance system.
            </p>
          </li>
        </ol>
      </section>
      <section className="" id="Results" ref={resultRef}>
        <div className="font-semibold text-3xl text-gray-800 mt-3">Results</div>
        <div className="text-gray-600 text-base font-normal mt-4">
          Retroactive Public Goods Funding (RetroPGF) fuels the growth of the
          Optimism ecosystem by allocating capital to those who've contributed
          positively. With hindsight, it identifies builders who've provided
          public goods. This investment supercharges Optimism's tooling &
          utilities, education, infrastructure & dependencies, making it a
          premier crypto ecosystem.
        </div>
        <Image
          src="/static/historyRPGF2/kP8mPaEonsohaPk9Kn2lT.jpg"
          className="my-5 rounded-lg"
          width={1000}
          height={400}
          alt="Results"
        ></Image>
        <div className="text-gray-700 text-lg font-semibold mt-4">
          Allocation Overview
        </div>
        <div className="text-gray-600 text-base font-normal mt-4">
          In the Optimism Collective, positive impact earns rewards. RetroPGF
          Round 2, the second experiment, had 69 out of 71 selected badgeholders
          vote on allocating 10m OP to support OP Stack usage and development.
        </div>
        <div className="flex flex-row flex-wrap gap-6 my-5">
          <button className="flex flex-col  flex-grow  px-8 py-5 border-2  rounded-lg ">
            <div className="text-gray-700 font-semibold text-lg">195</div>
            <div className="mt-3 text-gray-600">Nominated Projects</div>
          </button>
          <button className="flex flex-col  flex-grow  px-8 py-5 border-2  rounded-lg ">
            <div className="text-gray-700 font-semibold text-lg">195</div>
            <div className="mt-3 text-gray-600">Projects Awarded Funding</div>
          </button>
          <button className="flex flex-col  flex-grow  px-8 py-5 border-2  rounded-lg ">
            <div className="text-gray-700 font-semibold text-lg">22,825 OP</div>
            <div className="mt-3 text-gray-600">Median Funding</div>
          </button>
          <button className="flex flex-col  flex-grow  px-8 py-5 border-2  rounded-lg ">
            <div className="text-gray-700 font-semibold text-lg">
              &gt; 140,000 OP
            </div>
            <div className="mt-3 text-gray-600">
              Top 10% of Projects received
            </div>
          </button>
        </div>
        <div className="text-gray-600 text-base font-normal mt-4">
          See more details on the results allocation and the projects that were
          funded in the statistic page.
        </div>

        <div className="text-gray-700 text-lg font-semibold mt-4">
          Voting Rationale
        </div>
        <div className="text-gray-600 text-base font-normal mt-4">
          While badgeholders are not obligated to reveal their voting choices,
          some may choose to share their voting rationale here. This
          transparency can provide valuable insights into the thought processes
          and considerations that guided their decisions, fostering a deeper
          understanding of the evaluation and allocation of Retroactive Public
          Goods Funding in Round 2. This is an example of a thoughtful and
          balanced voting rationale for Retroactive Public Goods Funding
          (RetroPGF) Round 2:
        </div>
        <div className=" bg-[#ffe9eb] p-6 rounded-lg mt-4">
          <div className="flex flex-row items-center">
            <Image
              src="/static/historyRPGF2/retropgf2_voting.jpeg"
              className="rounded-full"
              width={55}
              height={55}
              alt="Thomas Jay Rush"
            />
            <div className="ml-4 flex flex-col">
              <div className="text-gray-700 font-semibold">Thomas Jay Rush</div>
              <div className="text-gray-600">Badgeholder</div>
            </div>
          </div>
          <div className="text-gray-600 mt-4">
            My criteria is (1) impact (of course), (2) potential impact (is the
            idea sound), (3) current funding status. I weigh these things in
            order 3, 2, 1. If a project has raised money (through either token
            or VC), most likely I won’t be voting for that project. If a project
            has a great idea but is just starting to see impact, I will vote for
            them with the thinking that supporting a great idea is a good thing.
            And hopefully the support will help that team to execute on the idea
            in the future. (Yes, I know this is supposed to be retro-active, but
            see below…) If a project has already had impact, I think that’s
            excellent and deserves support, but many times early impactful
            things fade in the long run. Use Yahoo as an example. It had a huge
            impact in the early Internet, but it faded to insignificance. I’m
            not sure past impact is a good measure. Also, there’s a
            winner-take-all aspect to all of this. Everyone votes for “well
            known projects” and then “well known projects” become more well
            known because they have a marketing budget, spiral, spiral…
          </div>
          <div className="text-gray-600 mt-4">
            For these reasons, I think I’m going to do something similar to
            this.
          </div>
          <ol className="list-disc ml-5 mt-5 text-gray-600">
            <li>
              Identify project that I won’t be voting for due to already
              existing funding through VCs or token raises. Allocate 0% to those
              projects.
            </li>
            <li>
              Identify the 10-20 projects that either have great future
              potention and growing impact or past impact and a really good
              idea. Allocation about 50% of my vote to those project split up in
              a way that makes sense.
            </li>
            <li>
              Use the remaining 50% of my vote to vote evenly across the
              remaining projects in the belief that even 1% of my vote (or
              whatever it works out to) is a significant amount of money, and
              especially for small projects, any amount of money keeps them
              going and is a huge encouragement.
            </li>
          </ol>
        </div>

        <div className="text-gray-600 text-base font-normal mt-4">
          If you're curious to learn more about how other badgeholders are
          approaching their voting rotations, feel free to check out the
          discussions on the governance forum. It's a great way to get insights
          from the community and see the diverse strategies people are using!
        </div>

        <div className="text-gray-700 text-lg font-semibold mt-4">
          Infrastructure & Dependencies
        </div>
        <div className="text-gray-600 text-base font-normal mt-4">
          A total of 43 infrastructure projects received financial support.
          Notably, the top three recipients in this category were Protocol
          Guild, geth, and Solidity, reflecting their pivotal roles in
          bolstering the infrastructure of the Optimism ecosystem. This
          allocation of resources signifies a strategic investment in the
          backbone of the platform, ensuring its robustness and scalability.
        </div>
        <Image
          src="/static/historyRPGF2/retropgf2_result_4.webp"
          className="my-5 rounded-lg"
          width={1000}
          height={400}
          alt="Infrastructure & Dependencies"
        ></Image>
        <Image
          src="/static/historyRPGF2/retropgf2_result_5.webp"
          className="my-5 rounded-lg"
          width={1000}
          height={400}
          alt="Infrastructure & Dependencies"
        ></Image>
        <div className="text-gray-700 text-lg font-semibold mt-4">
          Tooling & Utilities
        </div>
        <div className="text-gray-600 text-base font-normal mt-4">
          There is a total of 82 projects within the Tooling & Utilities
          category were recipients of funding during this phase. Notably, among
          these recipients, OpenZeppelin, DefiLlama, and wagmi emerged as the
          top recipients in this category, demonstrating their significant
          contributions to the ecosystem's development and functionality. This
          allocation of resources highlights the commitment to enhancing the
          tools and utilities that empower the OP Stack, setting the stage for
          further growth and innovation.
        </div>
        <Image
          src="/static/historyRPGF2/retropgf2_result_2.webp"
          className="my-5 rounded-lg"
          width={1000}
          height={400}
          alt="Tooling & Utilities"
        ></Image>
        <Image
          src="/static/historyRPGF2/retropgf2_result_3.webp"
          className="my-5 rounded-lg"
          width={1000}
          height={400}
          alt="Tooling & Utilities"
        ></Image>
        <div className="text-gray-700 text-lg font-semibold mt-4">
          Education
        </div>
        <div className="text-gray-600 text-base font-normal mt-4">
          Within the Education category, the Collective demonstrated its
          commitment to knowledge dissemination by providing funding to a total
          of 70 individuals and projects. Notably, the top three recipients in
          this educational initiative were L2Beat, ETHGlobal, and BuidlGuidl,
          underlining their significant contributions to fostering a culture of
          learning and understanding within the Optimism Stack and ecosystem.
        </div>
        <Image
          src="/static/historyRPGF2/retropgf2_result_6.webp"
          className="my-5 rounded-lg"
          width={1000}
          height={400}
          alt="Education"
        ></Image>
        <Image
          src="/static/historyRPGF2/retropgf2_result_7.webp"
          className="my-5 rounded-lg"
          width={1000}
          height={400}
          alt="Education"
        ></Image>
        <div className="text-gray-700 text-lg font-semibold mt-4">
          Analyzing Results
        </div>
        <div className="text-gray-600 text-base font-normal mt-4">
          In conclusion, Results for Round 2 similar to Round 1, there was
          relatively low variance among the funded projects, with little
          distinction in payouts between projects of high and moderate impact.
          However, in contrast to Round 1, Round 2 witnessed a more widespread
          distribution of tokens. In Round 1, 58 out of 76 nominated projects
          received votes, while in Round 2, all 195 nominated projects received
          votes. This difference can be attributed to the relatively small
          number of badgeholders compared to the allocated tokens, where even a
          minor allocation by a single badgeholder could result in a significant
          token distribution to a project.
        </div>
        <Image
          src="/static/historyRPGF2/retropgf2_result_8.webp"
          className="my-5 rounded-lg"
          width={1000}
          height={400}
          alt="Analyzing Results"
        ></Image>
        <div className="text-gray-600 text-base font-normal mt-4">
          The diversity of projects funded during this round improved compared
          to Round 1. The majority of the funded projects in RetroPGF 2 were not
          specific to Optimism but were part of the broader Ethereum ecosystem.
          Funded projects spanned a wide range of areas, from infrastructure to
          education, and operated in different languages and regions.
        </div>
      </section>
      <section className="" id="Learnings & Reflections" ref={learningRef}>
        <div className="font-semibold text-3xl text-gray-800 mt-3">
          Learnings & Reflections
        </div>
        <div className="text-gray-600 text-base font-normal mt-4">
          As we find ourselves at the crossroads of completed endeavors and
          unfolding experiences, it's the perfect time for reflection. Let's
          take a moment to appreciate what we've achieved and the wealth of
          knowledge we've gained throughout this journey.
        </div>
        <div className="text-gray-700 text-lg font-semibold mt-4">
          How Badgeholders Assessed Impact
        </div>
        <div className="text-gray-600 text-base font-normal mt-4">
          Retroactive Public Goods Funding (RetroPGF) is an innovative approach
          aimed at rewarding past impact within the Optimism Collective. This
          concept is grounded in the belief that it's easier to gauge the
          usefulness of past projects than to predict their future utility. A
          key challenge in RetroPGF is how to present project information to
          voters effectively. Let's explore the process and its challenges.
        </div>
        <ol className="list-disc ml-5 my-5 text-gray-600">
          <li>
            <div className="text-gray-700 font-medium">Project Eligibility</div>
            <p className="text-gray-600">
              To be considered for RetroPGF, projects had to go through a
              two-step process: nomination in the forum and subsequent sign-up
              via the Project intake form. This process aimed to filter out
              qualifying projects and gather valuable information for
              badgeholders to assess impact.
            </p>
          </li>
          <li>
            <div className="text-gray-700  font-medium">
              Project Nominations
            </div>
            <p className="text-gray-600">
              The community was encouraged to signal which projects had
              generated impact for the Optimism Collective. However, the
              nominations process resembled a mini-dilemma of the commons, with
              few participants feeling responsible or incentivized to nominate
              relevant projects. Surprisingly, even some top recipients had to
              self-nominate. However, being nominated was a positive signal, as
              all nominated projects received some funding.
            </p>
          </li>
          <li>
            <div className="text-gray-700  font-medium">
              Project Intake Form
            </div>
            <p className="text-gray-600">
              This form aimed to collect information that would help
              badgeholders evaluate projects' impact and potential sources of
              external funding. Questions included
            </p>
            <div className="bg-[#ffe9eb] p-6 rounded-lg my-4">
              <div>
                "How do you support the development and usage of the OP Stack?
                What public good do you provide to the Collective?"
              </div>
              <div>
                "How do you sustain yourself? Please list sources of funding and
                revenue."
              </div>
            </div>
            <p className="text-gray-600 mt-4">
              Almost all of projects, information provided by projects was often
              too vague, making it challenging for badgeholders to assess impact
              accurately. This was due to the lack of guidance.
            </p>
          </li>
          <li>
            <div className="text-gray-700  font-medium">
              Unclear Information & States
            </div>
            <p className="text-gray-600">
              The community expressed the need for a more aligned and structured
              process
            </p>
            <div className="bg-[#ffe9eb] p-6 rounded-lg my-4 ">
              <div>
                "Many projects did not provide enough information on the
                elements they were evaluated on: what is their impact to
                optimism, and what is their funding situation like,” -
                Anonymous.
              </div>
              <div>
                “The application form for next season should be more aligned
                with the review assessment process,” - Krzysztof Urbanski.
              </div>
              <div>
                “…ask projects to more clearly submit information that will be
                relevant to the evaluation criteria (impact and access to
                funding being the main one),” - Cassidy.
              </div>
            </div>
            <li>
              <div className="text-gray-700  font-medium">Project Profiles</div>
              <p className="text-gray-600">
                Project descriptions and impact narratives were often
                narrative-driven, while funding sources lacked specific numbers.
                This resulted from a minimal prompt and limited examples for
                projects to follow. Projects tended to focus on future
                aspirations rather than describing their past impact.
              </p>
            </li>
          </li>
        </ol>
        <div className="text-gray-700 text-lg font-semibold mt-4">
          Scaling Impact Evaluation
        </div>
        <div className="text-gray-600 text-base font-normal mt-4">
          Evaluating project impact in Retroactive Public Goods Funding
          (RetroPGF) is no small feat. Badgeholders were tasked with assessing a
          multitude of projects, leading to significant challenges
        </div>
        <ol className="list-disc ml-5 my-5 text-gray-600">
          <li>
            <div className="text-gray-700 font-medium">Quantity Overload</div>
            <p className="text-gray-600">
              The volume of projects made it challenging for badgeholders to
              allocate sufficient time to each project, potentially impacting
              the quality of their evaluations. Badgeholders consistently
              expressed concerns about the sheer number of projects to review.
              Feedback included:
            </p>
            <div className="bg-[#ffe9eb] p-6 rounded-lg my-4">
              <div>"Smooth experience, but way too many projects."</div>
              <div>
                "...this is really about it being unmanageable for
                badgeholders."
              </div>
            </div>
            <p className="text-gray-600">
              In this round, a staggering 195 projects were eligible for voting,
              compared to 76 in Round 1. Most badgeholders distributed their
              votes across 20-40 projects, with the median badgeholder
              evaluating 30 projects.
            </p>
          </li>
          <li>
            <div className="text-gray-700  font-medium">
              Introducing "Collections"
            </div>
            <p className="text-gray-600">
              To address the issue of evaluating individual contributions at
              scale, the Optimism Foundation introduced the concept of
              "Collections." Each collection was a list of contributors with
              assigned weights for funding distribution. Five collections were
              nominated, including Monorepo Dependencies, EIP-4844 Contributors,
              and Optimism Support NERDS, Ambassadors, and Translators. The
              experiment aimed to simplify the allocation of funding to broader
              groups of contributors, which might have been more complex if
              individual contributors were considered.
            </p>
          </li>
          <li>
            <div className="text-gray-700  font-medium">
              Mixed Feedback on Collections
            </div>
            <p className="text-gray-600">
              While some collections were uncontroversial, the EIP-4844
              collection faced pushback from Ethereum contributors. Concerns
              included
            </p>
            <div className="bg-[#ffe9eb] p-6 rounded-lg my-4">
              <div>
                Incentive Distortion: Critics argued that collections created
                strong incentives for work that could be retroactively funded,
                potentially altering teams' priorities.
              </div>
              <div>
                Challenges in Assessment: Assessing individual contributions to
                determine collection weights raised concerns about biases
                towards visible work.
              </div>
            </div>
          </li>
          <li>
            <div className="text-gray-700  font-medium">
              High-Leverage Voting Through Categories
            </div>
            <p className="text-gray-600">
              Looking ahead, categories may offer a solution through
              high-leverage voting. Badgeholders without expertise in a
              particular area could allocate funding to an entire category,
              which would then be distributed proportionally to other
              badgeholders' votes.
            </p>
          </li>
        </ol>
        <div className="text-gray-700 text-lg font-semibold mt-4">
          Badgeholders Collaboration
        </div>
        <div className="text-gray-600 text-base font-normal mt-4">
          In Round 2, 71 badgeholders were entrusted with distributing 10
          million OP, a substantial responsibility. To facilitate this complex
          evaluation process, the Optimism Foundation emphasized collaboration
          and provided guidance through a badgeholder manual and onboarding
          calls.
        </div>
        <ol className="list-disc ml-5 my-5 text-gray-600">
          <li>
            <div className="text-gray-700 font-medium">
              BGuidance with Flexibility
            </div>
            <p className="text-gray-600">
              The provided guidelines were comprehensive yet flexible, offering
              frameworks for evaluation rather than rigid rules. This approach
              encouraged badgeholders to apply their own judgment in translating
              philosophical concepts into real-world assessments.
            </p>
          </li>
          <li>
            <div className="text-gray-700  font-medium">
              Emphasis on Collaboration
            </div>
            <p className="text-gray-600">
              Collaboration among badgeholders was strongly encouraged,
              fostering a high-context environment through asynchronous
              communication on platforms like Discord and Telegram.
              Additionally, collaborative calls hosted by Other Internet played
              a pivotal role.
            </p>
          </li>
          <li>
            <div className="text-gray-700  font-medium">
              The Impact of Collaborative Calls
            </div>
            <p className="text-gray-600">
              Co-Working and Collective Intelligence, The first call aimed to
              provide co-working time, allowing attendees to delve into projects
              with their breakout groups. It provided an opportunity to discuss
              questions and insights about decision-making processes. This
              collaborative approach leveraged the collective intelligence of
              badgeholders.
            </p>

            <div className="bg-[#ffe9eb] p-6 rounded-lg my-4">
              <div>
                “It was really helpful to have sessions like this one with
                fellow badgeholders to talk about the process, different methods
                people were using, and the different ways others were
                approaching voting.”
              </div>
            </div>
            <p className="text-gray-600">
              The second call focused on feedback, reflection, and the
              accumulation of ideas for future rounds. Badgeholders found these
              sessions immensely valuable, and they should continue to be an
              integral part of RetroPGF.
            </p>
            <div className="bg-[#ffe9eb] p-6 rounded-lg my-4">
              <div>
                "I found the call to be very helpful in understanding how others
                are thinking about evaluating projects." - Anonymous.
              </div>
            </div>
          </li>
        </ol>
        <div className="text-gray-700 text-lg font-semibold mt-4">
          Defining "Impact = Profit"
        </div>
        <div className="text-gray-600 text-base font-normal mt-4">
          One of the Optimism Collective's core values is "impact = profit," a
          principle that individuals should receive profit equivalent to the
          impact they contribute to the collective. However, applying this
          framework in practice can be challenging, particularly without a clear
          and quantitative definition of "impact" or "profit."
        </div>
        <ol className="list-disc ml-5 my-5 text-gray-600">
          <li>
            <div className="text-gray-700 font-medium">
              The Challenge of Interpretation
            </div>
            <p className="text-gray-600">
              Evaluating the types of public goods deserving funding is one of
              the most intricate aspects of Retroactive Public Goods Funding
              (RetroPGF). Badgeholders widely expressed the need for greater
              clarity in impact evaluation and philosophical alignment on the
              types of projects RetroPGF should support.
            </p>
            <div className="bg-[#ffe9eb] p-6 rounded-lg my-4">
              <div>"Are we taking impact vs. profit literally?”</div>
              <div>
                “On the philosophy of impact = profit, we wish there was a
                clearer definition of what impact looks like.”
              </div>
            </div>
          </li>
          <li>
            <div className="text-gray-700  font-medium">
              Seeking Clarity in Evaluation
            </div>

            <p className="text-gray-600">
              The lack of clear evaluation criteria led to a wide range of
              interpretations among badgeholders. Some badgeholders focused on
              the potential impact of projects, while others emphasized their
              past impact. This diversity of perspectives underscored the need
              for a more structured evaluation framework.
            </p>
            <div className="bg-[#ffe9eb] p-6 rounded-lg my-4">
              <div>
                “Introduce better categories and stronger evaluation heuristics
                for each category.”
              </div>
              <div>
                “More discussion and structure of what the assessment criteria
                are - what are the goals and criteria that everyone can agree
                on.”
              </div>
              <div>
                “Different people were assessing different ways and had their
                own criteria for assessing. People were not in sync on the
                criteria, and how we each determined that based on the
                applications was unclear.”
              </div>
            </div>
          </li>
          <li>
            <div className="text-gray-700  font-medium">
              Custom Evaluation Frameworks
            </div>
            <p className="text-gray-600">
              In response to the ambiguity, some badgeholders developed their
              own evaluation frameworks. These often included categorizations
              and combinations of criteria to simplify impact assessment.
              Examples ranged from binary criteria like
            </p>
            <div className="bg-[#ffe9eb] p-6 rounded-lg my-4">
              <div>"Is the Project Optimism specific [Y/N]"</div>
              <div>
                "to simplified impact sizing like "Contribution Type [Large,
                Medium, Small]."
              </div>
            </div>
          </li>
          <li>
            <div className="text-gray-700  font-medium">
              The Dilemma of Future Impact
            </div>
            <p className="text-gray-600">
              With the rise of proactive grant models, considering future impact
              during evaluation became a topic of debate. Badgeholders engaged
              in discussions about whether to factor in expected future impact.
              A Twitter poll by Tim Beiko on
            </p>
            <div className="bg-[#ffe9eb] p-6 rounded-lg my-4">
              <div>
                "How much should retroactive public goods funding (RPGF) weight
                'future value delivered' when allocating funds?"
              </div>
            </div>
            <p className="text-gray-600">
              Revealed mixed opinions. It highlighted the complexity of making
              the concept of retroactive funding well-understood.
            </p>
          </li>
          <li>
            <div className="text-gray-700  font-medium">
              Addressing the Challenges
            </div>
            <p className="text-gray-600">
              The path to aligning "impact" and "profit" in RetroPGF is laden
              with complexity and calls for continued dialogue, exploration, and
              refinement. The collective pursuit of a shared understanding and
              effective evaluation methods will be instrumental in realizing the
              vision of retroactive public goods funding.
            </p>
            <div className="bg-[#ffe9eb] p-6 rounded-lg my-4">
              <div>
                "How can we provide better mental models and definitions for
                impact evaluation?"
              </div>
              <div>
                "How can we support badgeholders in more effectively
                collaborating on impact assessment?"
              </div>
              <div>
                "How do we communicate the core mechanics of retro funding in a
                way that preserves badgeholder agency?"
              </div>
            </div>
          </li>
        </ol>
        <div className="text-gray-700 text-lg font-semibold mt-4">
          Voting Tool & User Experience
        </div>
        <div className="text-gray-600 text-base font-normal mt-4">
          Round 2 brought valuable insights into the voting process. While the
          voting experience faced challenges, it also demonstrated the
          resourcefulness of badgeholders in finding creative solutions. Let's
          explore the journey and future prospects of voting tooling within
          RetroPGF.
        </div>
        <ol className="list-disc ml-5 my-5 text-gray-600">
          <li>
            <div className="text-gray-700 font-medium">MVP Voting Solution</div>
            <p className="text-gray-600">
              Optimism Foundation opted for a Minimum Viable Product (MVP)
              voting solution instead of a fully integrated voting interface.
              Badgeholders submitted their votes using a DeForm form with wallet
              verification. To facilitate the vote allocation process,
              badgeholders were provided with a voting scratchpad, allowing them
              to allocate their votes, ensuring they added up to 100%, before
              copying them into the form. The scratchpad also served as a means
              for badgeholders to share their vote allocations with the
              community.
            </p>
          </li>
          <li>
            <div className="text-gray-700  font-medium">
              Resourcefulness Amidst Challenges
            </div>
            <p className="text-gray-600">
              While the voting user experience was not ideal, badgeholders
              showcased their ingenuity in addressing the issues. For instance,
              Ludens from Lattice developed a script that could export votes
              from the voting scratchpad and import them into the form.
              Additionally, in the final days of voting, Vitalik provided a
              script that allowed for the quick tallying of votes across the
              ballot using the browser console.
            </p>
          </li>
          <li>
            <div className="text-gray-700  font-medium">
              A Call for Better Voting Tooling
            </div>
            <p className="text-gray-600">
              Future rounds of RetroPGF must aim for a smoother and more
              user-friendly voting experience, eliminating operational issues
              for badgeholders. However, beyond addressing friction, the
              emergent behavior observed in Round 2 highlights a significant
              design hypothesis: RetroPGF should evolve into a permissionless
              protocol that empowers community members to build voting,
              evaluation, and aggregation experiences on top of it. This
              direction deserves exploration in future rounds.
            </p>
          </li>
          <li>
            <div className="text-gray-700  font-medium">
              Questions for Improvement
            </div>
            <p className="text-gray-600">
              The RetroPGF journey is one of continuous learning and adaptation,
              with the aim of creating a more inclusive, efficient, and
              community-driven platform for rewarding past contributions.
            </p>
            <div className="bg-[#ffe9eb] p-6 rounded-lg my-4">
              <div>
                "How can the Optimism Collective provide a more seamless voting
                experience to badgeholders?"
              </div>
              <div>
                "How can the Optimism community collaborate to develop tooling
                that enhances the RetroPGF system for all participants?"
              </div>
            </div>
          </li>
        </ol>
      </section>
      <section className="" id="Journey" ref={journeyRef}>
        <div className="font-semibold text-3xl text-gray-800 mt-3">
          The Next Journey
        </div>
        <div className="text-gray-600 text-base font-normal mt-4">
          Retroactive Public Goods Funding (RetroPGF) Round 2 marked a
          significant milestone, supporting nearly 200 creators of public goods
          within the Optimism Collective. Beyond the immediate impact, this
          round provided invaluable insights into the intricate design
          challenges of the retroactive results oracle, bringing us closer to
          realizing Ether's Phoenix.
        </div>
        <div className="text-gray-600 text-base font-normal mt-4">
          As we look ahead to Round 3, with an announcement coming soon™, the
          Optimism Collective is poised to iterate on the core challenges
          outlined in this piece. These challenges encapsulate the ongoing quest
          to create a more robust and community-driven RetroPGF
        </div>
        <div className="text-gray-600 text-base font-normal mt-4">
          As we embark on this journey, we invite contributors to join us in
          building the different pieces of the RetroPGF. RetroPGF is more than a
          funding mechanism; it's a pillar of the Collective, an ever-evolving
          cycle, an infinite game. When executed effectively, RetroPGF has the
          potential to transcend Optimism and serve as a model for a new global
          economy that truly rewards impact. Between the present and that
          future, there's ample room for experimentation and innovation. Stay
          tuned for requests for proposals, and let's continue to shape the
          future of Retroactive Public Goods Funding together.
        </div>
        <Image
          src="/static/historyRPGF2/retropgf2_journey.jpeg"
          className="my-5 rounded-lg"
          width={1000}
          height={400}
          alt="The Next Journey"
        ></Image>
      </section>
      </div>
      <div className=" flex flex-col gap-4 w-full col-span-2">
          <ScrollSpy
          defaultClass='border-l border-gray-100 hidden lg:block h-fit p-4 w-full sticky top-24'
          sections={sections}
          />
      </div>
    </>
  )
}
export default RPGF2History
