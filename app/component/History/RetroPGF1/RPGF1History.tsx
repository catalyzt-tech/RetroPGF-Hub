import { FC } from 'react'
import Image from 'next/image'

const RPGF1History: FC = () => {
  return (
    <div>
      <section className="mb-10" id="intro">
        <div className="font-semibold text-3xl text-gray-800">RetroPGF 1</div>
        <div className="text-gray-600 text-base font-normal mt-4">
          Welcome to RetroPGF Experiment #1, where we're pioneering a
          groundbreaking approach to funding public goods! We're excited to
          announce our commitment to donating $1 million of network profits in
          this inaugural experiment. At RetroPGF, we're all about leveling the
          playing field between profit-driven startups and nonprofit/open-source
          projects. Our goal is to provide the same benefits and incentives for
          those who contribute to the greater good of technology.
        </div>
        <Image
          src="/static/historyRPGF1/retropgf1_banner_2.jpg"
          className="my-5 rounded-lg"
          layout="responsive"
          width={1000}
          height={400}
          alt="RetroPGF 1"
        ></Image>
      </section>

      <section className="mb-10" id="experiment">
        <div className="font-semibold text-3xl text-gray-800">
          Experiment Overview
        </div>
        <div className="text-gray-600 text-base font-normal mt-4">
          Our first experiment is focused on creating a fair and effective
          system for allocating funds to deserving projects. We understand that
          this process is challenging, and we're dedicated to refining it
          through multiple iterations. In this MVP (Minimum Viable Product)
          phase, a group of 24 "badgeholders" will use quadratic voting to
          decide how to allocate the $1 million. These badge holders consist of
          8 Optimists and 16 members from the Ethereum community. The allocation
          process will primarily consider the value projects have contributed to
          the Optimistic Ethereum ecosystem.
        </div>
        <Image
          src="/static/historyRPGF1/retropgf1_banner_3 (1).jpg"
          className="my-5 rounded-lg"
          layout="responsive"
          width={1000}
          height={400}
          alt="RetroPGF 1"
        ></Image>
      </section>
      <section className="mb-10" id="timeline">
        <div className="font-semibold text-3xl text-gray-800">
          Process and Timeline
        </div>

        <div className="text-gray-600 text-base font-normal mt-4">
          Over the next month, we invite the Optimistic Ethereum community to
          nominate projects that they believe should receive a portion of this
          funding. The 24 badgeholders will openly discuss these projects via a
          public, read-only Discord channel named #retroactive-public-goods.
          Your participation is essential in shaping the future of this
          initiative.
        </div>
        <ol className="relative border-l border-[#ff1818] dark:border-[#ff1818] my-6 ml-2">
          <li className="mb-6 ml-6">
            <div className="absolute w-3 h-3 bg-[#ff1818] rounded-full mt-1.5 -left-1.5 border border-white" />
            <time className="mb-1 text-sm font-normal leading-none text-[#ff1818] dark:text-gray-500">
              Prior October 2022
            </time>
            <div className="text-md font-semibold text-gray-700">
              Badgeholder Selection
            </div>
            <p className="text-gray-600">
              In RetroPGF Round 1, 24 badgeholders, made up of 8 Optimists and
              16 Ethereum community members, were selected to vote on
              distributing retrofunding to nominated projects. The badgeholders
              were chosen based on their contribution to Ethereum and Optimism.
            </p>
          </li>
          <li className="mb-6 ml-6">
            <div className="absolute w-3 h-3 bg-[#ff1818] rounded-full mt-1.5 -left-1.5 border border-white" />
            <time className="mb-1 text-sm font-normal leading-none text-[#ff1818] dark:text-gray-500">
              5th - 21st October 2022
            </time>
            <div className="text-md font-semibold text-gray-700">
              Nominations
            </div>
            <p className="text-gray-600 font-base">
              Anybody could nominate a project via a form submission by
              providing a project name, project lead name, project lead e-mail
              and impact description.
            </p>
          </li>
          <li className="mb-6 ml-6">
            <div className="absolute w-3 h-3 bg-[#ff1818] rounded-full mt-1.5 -left-1.5 border border-white" />
            <time className="mb-1 text-sm font-normal leading-none text-[#ff1818] dark:text-gray-500">
              24th October 2022 - 1th November 2022
            </time>
            <div className="text-md font-semibold text-gray-700">Voting</div>
            <p className="text-gray-600">
              Badgeholders were provided with a badgeholder manual and asked to
              evaluate and vote on nominated projects via quadraticvote.co's
              interface.
            </p>
          </li>
          <li className="mb-6 ml-6">
            <div className="absolute w-3 h-3 bg-[#ff1818] rounded-full mt-1.5 -left-1.5 border border-white" />
            <time className="mb-1 text-sm font-normal leading-none text-[#ff1818] dark:text-gray-500">
              After November 2022
            </time>
            <div className="text-md font-semibold text-gray-700">
              Payout & Funding Distribution
            </div>
            <p className="text-gray-600">
              Projects receive rewards proportional to how many quadratic votes
              they received
            </p>
          </li>
        </ol>
      </section>
      <section className="mb-10" id="scope">
        <div className="font-semibold text-3xl text-gray-800">
          Scope of Round
        </div>
        <div className="text-gray-600 text-base font-normal mt-4">
          As it is the first experiment, there is no specific scope for the type
          of projects that can be nominated. The only requirement is that the
          project must have contributed to the Ethereum ecosystem.
        </div>
      </section>
      <section className="mb-10" id="voting">
        <div className="font-semibold text-3xl text-gray-800">
          Voting Badges
        </div>
        <div className="text-gray-600 text-base font-normal mt-4">
          The 24 badgeholders will be divided into two groups: Optimists and
          Ethereum community members. The Optimists will have 8 badges, and the
          Ethereum community members will have 16 badges. All of badgeholders
          was selected by Optimism Foundation. The badgeholders will use these
          badges to vote on the nominated projects.
        </div>
        <div className="flex flex-row flex-wrap gap-6 my-5">
          <button className="flex flex-col  flex-grow  px-8 py-5 border-2  rounded-lg ">
            <div className="text-gray-700 font-semibold text-lg">
              16 Badgeholders
            </div>
            <div className="mt-3 text-gray-600">Ethereum Community Members</div>
          </button>
          <button className="flex flex-col  flex-grow  px-8 py-5 border-2  rounded-lg ">
            <div className="text-gray-700 font-semibold text-lg">
              8 Badgeholders
            </div>
            <div className="mt-3 text-gray-600">Optimism Collective</div>
          </button>
        </div>
        <div className="text-gray-600 text-base font-normal mt-4">
          Badgeholders were given a manual detailing guidelines and regulations
          for nominating and distributing votes to nominees.
        </div>
      </section>
      <section className="mb-10" id="result">
        <div className="font-semibold text-3xl text-gray-800">Results</div>
        <div className="text-gray-600 text-base font-normal mt-4">
          Probably the most obvious property of the RetroPGF 1 results that can
          be seen without any comparisons is the category of the winners, every
          major Optimism RetroPGF winner was a technology project. Curious about
          the outcomes of our first round? Here's a quick summary
        </div>
        <div className="text-gray-700 text-lg font-semibold mt-4">
          Allocation Overview
        </div>
        <div className="text-gray-600 text-base font-normal mt-4">
          A sum of $1 million worth of ETH was allocated towards supporting
          public goods. The initial round of results proved highly successful,
          and we eagerly anticipate the further growth and development of the
          RetroPGF initiative. We aspire that this endeavor will serve as a
          model, encouraging other organizations to embrace a comparable method
          of funding public goods.
        </div>
        <div className="flex flex-row flex-wrap gap-6 my-5">
          <button className="flex flex-col  flex-grow  px-8 py-5 border-2  rounded-lg ">
            <div className="text-gray-700 font-semibold text-lg">76</div>
            <div className="mt-3 text-gray-600">Nominated Projects</div>
          </button>
          <button className="flex flex-col  flex-grow  px-8 py-5 border-2  rounded-lg ">
            <div className="text-gray-700 font-semibold text-lg">58</div>
            <div className="mt-3 text-gray-600">Projects Awarded Funding</div>
          </button>
          <button className="flex flex-col  flex-grow  px-8 py-5 border-2  rounded-lg ">
            <div className="text-gray-700 font-semibold text-lg">$14,670</div>
            <div className="mt-3 text-gray-600">Median Funding</div>
          </button>
          <button className="flex flex-col  flex-grow  px-8 py-5 border-2  rounded-lg ">
            <div className="text-gray-700 font-semibold text-lg">
              &gt; $36,919
            </div>
            <div className="mt-3 text-gray-600">
              Top 10% of Projects received
            </div>
          </button>
        </div>

        <div className="text-gray-600 text-base font-normal mt-4">
          For a detailed list of funded projects and their allocations, please
          check it out on project page.
        </div>
        <Image
          src="/static/historyRPGF1/retropgf1_reslt.webp"
          className="my-5 rounded-lg"
          layout="responsive"
          width={1000}
          height={400}
          alt="RetroPGF 1"
        ></Image>
      </section>
      <section className="mb-10" id="learning">
        <div className="font-semibold text-3xl text-gray-800">
          Learnings & Reflections
        </div>
        <div className="text-gray-600 text-base font-normal mt-4">
          The first round of RetroPGF provided us with invaluable lessons, and
          we're eager to disseminate these insights within the community. Here,
          we present a condensed overview of the significant takeaways and
          valuable learnings from our experiment. For a more comprehensive
          understanding, we invite you to explore further details in the this
          blog.
        </div>
        <ol className="list-disc ml-5 my-5 text-gray-600">
          <li>
            <div className="text-gray-700 font-medium">
              The Fairness Ratio and Public Goods Definition
            </div>
            <p className="text-gray-600">
              The Ethereum community expanded the definition of public goods,
              focusing on outcomes rather than strict economic characteristics.
              This shift led to projects like Etherscan, although not
              traditionally public goods, receiving support due to their
              contributions.
            </p>
          </li>
          <li>
            <div className="text-gray-700 font-medium">The Fairness Ratio</div>
            <p className="text-gray-600">
              The Fairness Ratio The concept of value created vs. value captured
              (Value Created / Value Captured = 1) played a crucial role in
              allocation decisions. Projects like Etherscan, despite extracting
              value through ads, were considered to create more value than they
              captured.
            </p>
          </li>
          <li>
            <div className="text-gray-700 font-medium">
              Conflicts of Interest
            </div>
            <p className="text-gray-600">
              Many badgeholders had affiliations or connections with nominated
              projects, raising questions about conflicts of interest.
              Strategies for badgeholder voting were often influenced by their
              areas of expertise.
            </p>
          </li>
          <li>
            <div className="text-gray-700 font-medium">
              The Role of Optimism Foundation
            </div>
            <p className="text-gray-600">
              The Optimism team played a significant role in the experiment,
              providing guidance and support to badgeholders. This involvement
              was crucial in ensuring the success of the initiative. The
              community expressed a desire for more transparency and
              communication from the foundation.
            </p>
          </li>
          <li>
            <div className="text-gray-700 font-medium">Nominee Curation</div>
            <p className="text-gray-600">
              The nomination process lacked detail, with proposals often failing
              to describe how the nominated project benefited the public good. A
              significant number of proposals were accepted.
            </p>
          </li>
          <li>
            <div className="text-gray-700 font-medium">
              Missing Transparency
            </div>
            <p className="text-gray-600">
              The process lacked transparency, with badgeholders voting behind
              closed doors. This lack of transparency raised concerns about the
              integrity of the process.Also, some information was not publicly
              available, the badgeholder manual, and nominee curation details.
            </p>
          </li>
        </ol>
        <div className="text-gray-700 text-lg font-semibold mt-4">
          Improvements For Next Round
        </div>
        <div className="text-gray-600 text-base font-normal mt-4">
          These enhancements aim to make RetroPGF2 more effective, inclusive,
          and transparent, ensuring that public goods contributors are duly
          rewarded. Stay tuned for more exciting developments in the world of
          Retroactive Public Goods Funding!
        </div>
        <ol className="list-disc ml-5 my-5 text-gray-600">
          <li>
            <div className="text-gray-700 font-medium">
              Badgeholder Expertise
            </div>
            <p className="text-gray-600">
              Implement a two-phase process for nominations, separating the
              identification of projects that contribute to the public good from
              quantifying their value. Use a token-curated registry model to
              curate high-quality nominees, reducing the burden on badgeholders.
            </p>
          </li>
          <li>
            <div className="text-gray-700 font-medium">
              Improving Nomination Process with Optimistic Curation
            </div>
            <p className="text-gray-600">
              Instead of expecting a small group of badge holders to have
              expertise across the entire ecosystem, elect badgeholders with
              strong knowledge in various areas. This approach ensures that
              expertise is leveraged to benefit the ecosystem effectively.
            </p>
          </li>
          <li>
            <div className="text-gray-700 font-medium">
              Managing Conflicts of Interest
            </div>
            <p className="text-gray-600">
              Establish clear guidelines and increase transparency regarding
              conflicts of interest. Rules in the badge holder manual can forbid
              voting for one's own projects and require transparent disclosure
              of potential conflicts.
            </p>
          </li>
        </ol>
        <Image
          src="/static/historyRPGF1/retropgf1_banner_4.jpeg"
          className="my-5 rounded-lg"
          layout="responsive"
          width={1000}
          height={400}
          alt="RetroPGF 1"
        ></Image>
      </section>
    </div>
  )
}
export default RPGF1History
