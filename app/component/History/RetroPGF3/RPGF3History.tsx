import Image from 'next/image'
import { FC } from 'react'

const RPGF3History: FC = () => {
  return (
    <>
      <section className="mb-10" id="intro">
        <div className="font-semibold text-3xl text-gray-800">RetroPGF 3</div>
        <div className="text-gray-600 text-base font-normal mt-4">
          RetroPGF Rounds 1 & 2 were a resounding success, benefitting numerous
          dedicated individuals and teams who are passionate about creating
          public goods. These retroactive grants have not only made a
          significant impact on their projects but have also reinforced their
          commitment to the Optimism ecosystem. At the heart of the Optimism
          Collective's mission is the belief that those who contribute to public
          goods should be rewarded for their efforts. RetroPGF is like a
          refreshing twist on the traditional market economy, specifically
          designed to champion public goods. And the best part? It's already
          proving to be a game-changer for many builders within the Collective.
          RetroPGF, in essence, serves as Optimism's vehicle for nurturing the
          development of a free, open, and decentralized internet that puts the
          power and value back into the hands of those who create and maintain
          it.
        </div>
        <Image
          src="/static/historyRPGF3/retropgf3_banner.webp"
          className="my-5 rounded-lg"
          width={1000}
          height={400}
          layout="responsive"
          alt="RetroPGF 3"
        />
      </section>
      <section className="mb-10" id="experiment">
        <div className="font-semibold text-3xl text-gray-800">
          Experiment Overview
        </div>
        <div className="text-gray-600 text-base font-normal mt-4">
          The Optimism Collective is thrilled to unveil the much-anticipated
          third round of RetroPGF this autumn! We're spreading the love with a
          whopping 30 million OP set to be distributed among the amazing
          builders, creators, and educators who've have supported the
          development and adoption of Optimism.
        </div>
        <div className="text-gray-600 text-base font-normal mt-4">
          At Optimism, we're on a mission to craft an economy that celebrates
          and rewards our community members for their incredible contributions.
          These regular RetroPGF rounds play a pivotal role in fueling
          Optimism's economy, with the ultimate goal of taking the mantra
          "impact = profit" and sharing it with the world. Join us in making a
          difference! We can't wait to see what you'll build.
        </div>
        <Image
          src="/static/historyRPGF3/retropgf3_banner_2.png"
          className="my-5 rounded-lg"
          width={1000}
          height={400}
          layout="responsive"
          alt="Experiment Overview"
        />
      </section>
      <section className="mb-10" id="timeline">
        <div className="font-semibold text-3xl text-gray-800">
          Process and Timeline
        </div>
        <div className="text-gray-600 text-base font-normal mt-4">
          The Optimism Collective’s third round of Retroactive Public Goods
          Funding (Retro Funding) took place in the fall of 2023. Chance to get
          involved and make a difference!
        </div>
        <ol className="relative border-l border-[#ff1818] dark:border-[#ff1818] my-6 ml-2">
          <li className="mb-6 ml-6">
            <div className="absolute w-3 h-3 bg-[#ff1818] rounded-full mt-1.5 -left-1.5 border border-white" />
            <time className="mb-1 text-sm font-normal leading-none text-[#ff1818] dark:text-gray-500">
              1st August - 15th September 2023
            </time>
            <div className="text-md font-semibold text-gray-700">
              Badgeholder Selection
            </div>
            <p className="text-gray-600">
              Badgeholders will be selected based on their contributions by
              three ways which total badgeholders in this round up to 208
              people!
            </p>
          </li>
          <li className="mb-6 ml-6">
            <div className="absolute w-3 h-3 bg-[#ff1818] rounded-full mt-1.5 -left-1.5 border border-white" />
            <time className="mb-1 text-sm font-normal leading-none text-[#ff1818] dark:text-gray-500">
              19th September - 23rd October 2023
            </time>
            <div className="text-md font-semibold text-gray-700">
              Project Applications
            </div>
            <p className="text-gray-600 font-base">
              During this phase, builders, creators, and educators had the
              chance to submit their applications, showcasing their positive
              impact within the Optimism Collective.Theres no nominations
              process in this round, instead projects sign-up directly. You can
              apply here through the sign-up period.
            </p>
          </li>
          <li className="mb-6 ml-6">
            <div className="absolute w-3 h-3 bg-[#ff1818] rounded-full mt-1.5 -left-1.5 border border-white" />
            <time className="mb-1 text-sm font-normal leading-none text-[#ff1818] dark:text-gray-500">
              23rd October - 5th November 2023
            </time>
            <div className="text-md font-semibold text-gray-700">
              Application Review & Appeal
            </div>
            <p className="text-gray-600">
              An Application Review Process was initiated to address any
              violations of RetroPGF Application Rules, allowing individuals to
              submit reports on applications that were not compliant. More than
              1,000 applications were flagged for breaching these rules.
            </p>
          </li>
          <li className="mb-6 ml-6">
            <div className="absolute w-3 h-3 bg-[#ff1818] rounded-full mt-1.5 -left-1.5 border border-white" />
            <time className="mb-1 text-sm font-normal leading-none text-[#ff1818] dark:text-gray-500">
              6th November - 7th December 2023
            </time>
            <div className="text-md font-semibold text-gray-700">Voting</div>
            <p className="text-gray-600">
              Badgeholders will vote on the projects they believe should receive
              funding. Each badgeholder will have a certain amount of OP to
              distribute to the projects they believe are most deserving in
              axiom of "impact = profit".
            </p>
          </li>
          <li className="ml-6">
            <div className="absolute w-3 h-3 bg-[#ff1818] rounded-full mt-1.5 -left-1.5 border border-white" />
            <time className="mb-1 text-sm font-normal leading-none text-[#ff1818] dark:text-gray-500">
              After January 2024
            </time>
            <div className="text-md font-semibold text-gray-700">
              Payout / Funding Distribution
            </div>
            <p className="text-gray-600">
              Projects received rewards based on their received OP allocation
              votes from each badgeholder, celebrating their valuable work and
              impact.
            </p>
          </li>
        </ol>
      </section>
      <section className="mb-10" id="scope">
        <div className="font-semibold text-3xl text-gray-800">
          Scope of Round
        </div>
        <div className="text-gray-600 text-base font-normal mt-4">
          The third iteration of RetroPGF marks a significant milestone for the
          Optimism Collective, as 30 million OP tokens are poised to be
          distributed among developers, innovators, and educators who have
          played a role in the advancement and adoption of Optimism. This round
          underscores the Collective's dedication to acknowledging community
          members for their contributions and cultivating a thriving ecosystem
          that benefits all involved. At Optimism, we believe in recognizing
          every form of contribution through Retroactive Public Goods Funding
          (RetroPGF). Whether you're a skilled programmer crafting an Ethereum
          execution client or a content creator spreading enthusiasm for
          Optimism through videos, if you're making a positive impact, you're
          welcomed!
        </div>
        <div className="text-gray-600 text-base font-normal mt-4">
          We're rolling out the red carpet for Optimism artists, creators,
          writers, builders, and all the passionate folks who make our ecosystem
          thrive.
        </div>
        <ol className="list-disc ml-5 mt-5 text-gray-600">
          <li>
            <div className="text-gray-700 font-medium">OP Stack</div>
            <p className="text-gray-600">
              If you've contributed to making the OP Stack more efficient,
              secure, resilient, or simply raised awareness about it, you're
              eligible!
            </p>
          </li>
          <li>
            <div className="text-gray-700 font-medium">
              Collective Governance
            </div>
            <p className="text-gray-600">
              Did your work benefit governance participants within the Optimism
              Collective or bring new faces into the governance fold? You're in!
            </p>
          </li>
          <li>
            <div className="text-gray-700 font-medium">
              Developer Ecosystem{' '}
            </div>
            <p className="text-gray-600">
              If you've had a hand in improving the lives of application
              developers within the Optimism Collective or helped newcomers find
              their way in, you're a RetroPGF candidate!
            </p>
          </li>
          <li>
            <div className="text-gray-700 font-medium">
              End User Experience & Adoption
            </div>
            <p className="text-gray-600">
              Perhaps you've improved the experience for end users in the
              Optimism Collective, or you've been a champion in bringing new
              users on board. Your impact matters!
            </p>
          </li>
        </ol>
        <div className="text-gray-600 text-base font-normal mt-4">
          You can select multiple categories, but try to select the categories
          that best describe your impact! The more specific you are, the better
          the badgeholders can understand your impact and reward you
          accordingly.
        </div>
        <div className="text-gray-600 text-base font-normal mt-4">
          RetroPGF isn't just for a select few. It's for all the amazing
          individuals who've left their mark in these categories. So, if you've
          made a difference, don't hesitate to submit an application and let's
          celebrate your contributions together!
        </div>
        <Image
          src="/static/historyRPGF3/retropgf3_scope.png"
          className="my-5 rounded-lg"
          width={1000}
          height={400}
          layout="responsive"
          alt="Scope of Round"
        />
        <div className="text-gray-700 text-lg font-semibold mt-4">
          How to get involved
        </div>
        <div className="text-gray-600 text-base font-normal mt-4">
          If you're ready to make a difference and get involved in the third
          round of RetroPGF, here's how you can participate:
        </div>
        <div className=" bg-[#ffe9eb] p-6 rounded-lg mt-4">
          <ol className="list-disc ml-5 my-5 text-gray-600">
            <li>
              <div className="text-gray-700 font-medium">
                If You're a Developer
              </div>
              <p className="text-gray-600">
                Take a look at the Ecosystem Contributions board where you'll
                find a treasure trove of ideas and projects waiting for your
                magic touch. Who knows, these could be your ticket to RetroPGF
                funding and making an impact!
              </p>
            </li>
            <li>
              <div className="text-gray-700 font-medium">
                Got a Project in Mind?
              </div>
              <p className="text-gray-600">
                If you're working on something that aligns with our Collective
                Intents but need a little financial boost to kickstart it, check
                out the guide on how to apply for a grant. We've got your back!
              </p>
            </li>
            <li>
              <div className="text-gray-700 font-medium">
                Community Builder Extraordinaire
              </div>
              <p className="text-gray-600">
                If you're all about building communities, consider exploring the
                NERD program for support and onboarding or the Ambassador
                program if you're into marketing and business development.
                There's a place for you to shine!
              </p>
            </li>
            <li>
              <div className="text-gray-700 font-medium">
                Choose Your Adventure
              </div>
              <p className="text-gray-600">
                Feel like charting your own course? That's cool too! In RetroPGF
                2, we celebrated and funded 195 incredible projects and people.
                You can check out project page to get inspired and find your
                unique way to contribute.
              </p>
            </li>
          </ol>
        </div>
      </section>
      <section className="mb-10" id="design">
        <div className="font-semibold text-3xl text-gray-800">Round Design</div>
        <div className="text-gray-600 text-base font-normal mt-4">
          Retroactive Public Goods Funding is a dynamic experiment, always
          evolving to better serve our amazing community. In this post, we're
          taking you behind the scenes to share the nitty-gritty of RetroPGF 3's
          design process.
        </div>
        <div className="text-gray-600 text-base font-normal mt-4">
          Let's talk about what we've cooked up for Round 3. These design
          choices are like ingredients in our recipe for success, and they come
          with their own set of assumptions. We're super excited to test these
          out in the upcoming Round and use your feedback to keep making
          RetroPGF even better.
        </div>
        <div className="flex flex-row flex-wrap gap-6 my-5">
          <button className="flex flex-col  flex-grow  px-8 py-5 border-2  rounded-lg ">
            <div className="text-gray-700 font-semibold text-lg">
              RetroPGF Sign up
            </div>
            <div className="mt-3 text-gray-600">
              Gathering the right data from Projects
            </div>
          </button>
          <button className="flex flex-col  flex-grow  px-8 py-5 border-2  rounded-lg ">
            <div className="text-gray-700 font-semibold text-lg">
              Lists Application
            </div>
            <div className="mt-3 text-gray-600">
              Scaling the Evaluation of Projects
            </div>
          </button>
          <button className="flex flex-col  flex-grow  px-8 py-5 border-2  rounded-lg ">
            <div className="text-gray-700 font-semibold text-lg">
              Impact Evaluation
            </div>
            <div className="mt-3 text-gray-600">Frameworks & Definitions</div>
          </button>
          <button className="flex flex-col  flex-grow  px-8 py-5 border-2  rounded-lg ">
            <div className="text-gray-700 font-semibold text-lg">
              Voting Application
            </div>
            <div className="mt-3 text-gray-600">
              How badgeholders cast their vote allocation
            </div>
          </button>
        </div>
        <div className="text-gray-700 text-lg font-semibold mt-4">
          RetroPGF Sign up
        </div>
        <div className="text-gray-600 text-base font-normal mt-4">
          We're on a mission to make Retroactive Public Goods Funding (RetroPGF)
          even better by helping projects showcase their impact and profit more
          effectively. Our goal is to empower projects to quantify their
          contributions and give badgeholders the insights they need.
        </div>
        <Image
          src="/static/historyRPGF3/retropgf3_design_1.jpg"
          className="my-5 rounded-lg"
          width={1000}
          height={400}
          layout="responsive"
          alt="RetroPGF Sign up"
        />
        <div className="text-gray-600 text-base font-normal mt-4">
          Our new feature, the Optimist Profile, is our first step towards this
          exciting future. It allows projects to share their impact and profit
          metrics, along with references to data sources that support their
          claims. We believe that projects are the experts in measuring their
          own impact, and we want to give them the tools to do it.
        </div>
        <div className="text-gray-600 text-base font-normal mt-4">
          In RetroPGF 3, we're introducing a revamped sign-up process with a
          focus on gathering high-quality data:
        </div>
        <ol className="list-disc ml-5 mt-5 text-gray-600">
          <li>
            <div className="text-gray-700 font-medium">
              More Detailed Questions
            </div>
            <p className="text-gray-600">
              We've added thoughtful questions that align with the impact
              evaluation process, helping projects provide a comprehensive view
              of their work.
            </p>
          </li>
          <li>
            <div className="text-gray-700 font-medium">
              Standardized Data Sources
            </div>
            <p className="text-gray-600">
              Now, projects can input relevant standardized external data
              sources like Github repositories or on-chain contracts. This
              allows us to create more powerful analytical tools for evaluation.
            </p>
          </li>
          <li>
            <div className="text-gray-700 font-medium">
              Self-Reported Impact Metrics
            </div>
            <p className="text-gray-600">
              Projects can share their impact metrics and back them up with
              references to external data sources. This helps us identify
              standardized metrics and evaluation frameworks for the future.
            </p>
          </li>
        </ol>
        <div className="text-gray-600 text-base font-normal mt-4">
          Good news for projects! We've simplified the process. No More
          Nominations, Just Direct Sign-up. This makes the experience smoother,
          reducing the steps from nomination and sign-up to a single,
          straightforward process. Join us in making RetroPGF even better, one
          step at a time! Together, we're building a brighter future for project
          evaluation!
        </div>

        <div className="text-gray-700 text-lg font-semibold mt-4">
          Lists Application
        </div>
        <div className="text-gray-600 text-base font-normal mt-4">
          Ever wondered how we can accurately assess the impact and
          profitability of all the amazing projects nominated for Retroactive
          Public Goods Funding (RetroPGF)? It's a big task, and no single
          badgeholder can have all the answers. But fret not, because we have a
          plan to make it happen! In previous rounds, we've seen badgeholders
          sharing their project evaluations with each other. Now, in Round 3,
          we're taking it up a notch. We're introducing a cool new feature
          called "Lists."
        </div>
        <Image
          src="/static/historyRPGF3/retropgf3_design_3.jpg"
          className="my-5 rounded-lg"
          width={1000}
          height={400}
          layout="responsive"
          alt="Lists Application"
        />
        <div className="text-gray-600 text-base font-normal mt-4">
          Think of Lists as a super flexible way to collaborate and delegate.
          Each List consists of a group of projects carefully chosen from the
          pool of RetroPGF applicants. Not only that, but it also comes with a
          suggested allocation of OP token for each project.
        </div>
        <ol className="list-disc ml-5 mt-5 text-gray-600">
          <li>
            <div className="text-gray-700 font-medium">Knowledge Sharing</div>
            <p className="text-gray-600">
              Lists are all about sharing knowledge. Since no one can be an
              expert on everything, Lists allow badgeholders to bring their
              unique insights and expertise to the table within specific areas.
            </p>
          </li>
          <li>
            <div className="text-gray-700 font-medium">
              Collaboration Made Easy
            </div>
            <p className="text-gray-600">
              With Lists, badgeholders can easily share their project
              evaluations with others. You can replicate or tweak someone else's
              votes if you find their approach appealing.
            </p>
          </li>
          <li>
            <div className="text-gray-700 font-medium">Methodology Matters</div>
            <p className="text-gray-600">
              Each List creator provides a methodology for distributing OP to
              each project based on their expertise and data evaluation. It adds
              transparency and trust to the process.
            </p>
          </li>
        </ol>
        <div className="text-gray-600 text-base font-normal mt-4">
          Lists empower badgeholders to tap into each other's expertise when
          making their own voting decisions. It's a step toward transitioning
          from subjective reviews to standardized impact evaluation frameworks.
          We believe that Lists will become an invaluable tool for badgeholders
          to collaborate and leverage each other's strengths. Our bet is that
          this will lead to badgeholders supporting more projects than ever
          before.
        </div>
        <div className="text-gray-700 text-lg font-semibold mt-4">
          Impact Evaluation
        </div>
        <div className="text-gray-600 text-base font-normal mt-4">
          Retroactive Funding is a pretty new and exciting concept in the world
          of grant funding. It flips the script by rewarding projects for the
          positive impact they've already made, rather than guessing at their
          future contributions.
        </div>
        <div className="text-gray-600 text-base font-normal mt-4">
          In Round 3, we're all about providing badgeholders with a clearer
          roadmap for evaluating impact as
        </div>
        <ol className="list-disc ml-5 mt-5 text-gray-600">
          <li>
            <div className="text-gray-700 font-medium">Clearer Roles</div>
            <p className="text-gray-600">
              We're giving badgeholders a more defined role. Instead of just
              sharing personal preferences or experiences, they're stepping into
              the shoes of impact and profit judges. It's all about assessing
              the real impact a project has had.
            </p>
          </li>
          <li>
            <div className="text-gray-700 font-medium">
              Impact Evaluation Frameworks
            </div>
            <p className="text-gray-600">
              We're not leaving badgeholders in the dark. We're working together
              to create frameworks that help us nail down what impact really
              means. This isn't a solo effort; it's a team endeavor with
              badgeholders playing a crucial role.
            </p>
          </li>
        </ol>
        <div className="text-gray-600 text-base font-normal mt-4">
          These changes benefit everyone. Badgeholders get a better
          understanding of what they're voting for, and projects get a clearer
          picture of what they'll be rewarded for. It's a win-win! But here's
          the thing, defining impact and building these frameworks is an ongoing
          journey. Round 3 is just the beginning of our mission to establish a
          shared understanding of impact assessment.
        </div>
        <div className="text-gray-700 text-lg font-semibold mt-4">
          Voting Application
        </div>
        <div className="text-gray-600 text-base font-normal mt-4">
          At RetroPGF, we're all about making the voting process smoother and
          more enjoyable for our valued badgeholders. We've learned from past
          rounds and are excited to introduce some exciting changes in Round 3.
        </div>
        <Image
          src="/static/historyRPGF3/retropgf3_design_4.jpg"
          className="my-5 rounded-lg"
          width={1000}
          height={400}
          layout="responsive"
          alt="Voting Application"
        />

        <ol className="list-disc ml-5 mt-5 text-gray-600">
          <li>
            <div className="text-gray-700 font-medium">
              All-in-One Application
            </div>
            <p className="text-gray-600">
              We get it, reviewing dozens or even hundreds of projects can be
              overwhelming. That's why we've designed a single application that
              lets badgeholders review projects, check out Lists, allocate their
              votes, and submit their choices—all in one place.
            </p>
          </li>
          <li>
            <div className="text-gray-700 font-medium">
              Integration Made Easy
            </div>
            <p className="text-gray-600">
              Project profiles and applications are seamlessly integrated with
              additional tools. This simplifies the process and helps
              badgeholders make informed decisions.
            </p>
          </li>
          <li>
            <div className="text-gray-700 font-medium">Role-Aligned Design</div>
            <p className="text-gray-600">
              Our voting design is now perfectly in sync with the role of our
              badgeholders. It's designed to help them understand their
              responsibilities and vote accordingly.
            </p>
          </li>
          <li>
            <div className="text-gray-700 font-medium">
              Flexible Voting Power
            </div>
            <p className="text-gray-600">
              Each badgeholder can allocate up to 30 million OP token across
              projects, but the beauty is that they can choose to use only a
              portion of their voting power if they wish. It's all about giving
              them flexibility.
            </p>
          </li>
          <li>
            <div className="text-gray-700 font-medium">Project Allocation</div>
            <p className="text-gray-600">
              Badgeholders can allocate up to 10 million OP per project,
              allowing for more nuanced voting decisions.
            </p>
          </li>
          <li>
            <div className="text-gray-700 font-medium">Privacy Matters</div>
            <p className="text-gray-600">
              Your votes are kept private. Only the Optimism Foundation can
              access them, and that's just to enforce our Code of Conduct.
            </p>
          </li>
        </ol>
        <div className="text-gray-600 text-base font-normal mt-4">
          We believe these new voting applications will not only simplify the
          life of our badgeholders but also encourage them to vote in a way that
          aligns with RetroPGF's vision and goals. So, get ready for a more
          user-friendly, efficient, and exciting voting experience in Round 3.
          Let's make RetroPGF even better, one vote at a time!
        </div>
      </section>
      <section className="mb-10" id="tooling">
        <div className="font-semibold text-3xl text-gray-800">Tooling</div>
        <div className="text-gray-600 text-base font-normal mt-4">
          The Optimism community is all about coming together to create amazing
          tools that make Retroactive Public Goods Funding (RetroPGF) even
          better for everyone involved. We believe that the more builders,
          researchers, and regenerators who join in, the faster we'll reach our
          goal of summoning Ether's Phoenix. And here's the exciting part: by
          contributing to RetroPGF development, you not only help improve the
          system but also earn RetroPGF rewards!
        </div>

        <div className="text-gray-700 text-lg font-semibold mt-4">
          Core Applications
        </div>
        <ol className="list-disc ml-5 mt-5 text-gray-600">
          <li>
            <div className="text-gray-700 font-medium">RetroPGF Sign-up</div>
            <p className="text-gray-600">
              Our friends at OP Labs, EcoPod are crafting this gem. It makes it
              a breeze for projects to sign up for RetroPGF 3.
            </p>
          </li>
          <li>
            <div className="text-gray-700 font-medium">Discovery & Voting</div>
            <p className="text-gray-600">
              Supermodular and Agora are hard at work on these apps. They will
              empower badgeholders to review and vote on projects. Plus, they're
              designing two different voting experiences, so badgeholders can
              choose what suits them best.
            </p>
          </li>
          <li>
            <div className="text-gray-700 font-medium">List Creation UI</div>
            <p className="text-gray-600">
              Supermodular is also cooking up a cool feature that lets
              badgeholders create Lists.
            </p>
          </li>
        </ol>
        <div className="text-gray-700 text-lg font-semibold mt-4">
          Community & Additional Tools
        </div>
        <ol className="list-disc ml-5 mt-5 text-gray-600">
          <li>
            <div className="text-gray-700 font-medium">OpenSource Observer</div>
            <p className="text-gray-600">
              This tool provides analytics to evaluate the impact of open-source
              projects.
            </p>
          </li>
          <li>
            <div className="text-gray-700 font-medium">Pairwise</div>
            <p className="text-gray-600">
              Imagine a "Tinder-like" voting experience for badgeholders. It's
              here!
            </p>
          </li>
          <li>
            <div className="text-gray-700 font-medium">RetroPGF Hub</div>
            <p className="text-gray-600">
              We're making it easy for community members to suggest projects
              that should sign up for RetroPGF which is us!
            </p>
          </li>
          <li className="mb-6">
            <div className="text-gray-700 font-medium">BuidlGuidl</div>
            <p className="text-gray-600">
              They're experimenting with a RetroPGF voting application. Exciting
              stuff! Got Ideas?
            </p>
          </li>
        </ol>
        <div className="text-gray-600 text-base font-normal mt-4">
          If you're want to contribute and need inspiration, head over to our
          builder ideas or ecosystem contributions for some fantastic ideas. And
          if you've got an experiment or project in mind, share it with the
          community in the governance forum. Together, we're building RetroPGF
          into something extraordinary. Join us in this exciting journey!
        </div>
      </section>
      <section className="mb-10" id="faq">
        <div className="font-semibold text-3xl text-gray-800">
          Voting Badges
        </div>
        <div className="text-gray-600 text-base font-normal mt-4">
          In RetroPGF 3, we're distributing voting badges to 208 community
          members to ensure a fair and diverse voting process. If you're a
          badgeholder, you can go to the badgeholder hub to find relevant
          resources and stay up to date.
        </div>
        <Image
          src="/static/historyRPGF3/retropgf3_voting_2.jpg"
          className="my-5 rounded-lg"
          width={1000}
          height={400}
          layout="responsive"
          alt="Voting Badges"
        />
        <div className="text-gray-700 text-lg font-semibold mt-4">
          Badge Distribution
        </div>
        <ol className="list-disc ml-5 mt-5 text-gray-600">
          <li>
            <div className="text-gray-700 font-medium">
              Existing Badgeholders Choose
            </div>
            <p className="text-gray-600">
              If you voted in RetroPGF 2, you'll receive a new voting badge.
              Plus, you can give one to a community member of your choice.
            </p>
          </li>
          <li>
            <div className="text-gray-700 font-medium">
              Top 50 Recipients of RetroPGF 2
            </div>
            <p className="text-gray-600">
              If you're a badgeholder, you can access the badgeholder hub to
              find resources, updates, and other relevant information.
            </p>
          </li>
          <li>
            <div className="text-gray-700 font-medium">
              Optimism Foundation Choose
            </div>
            <p className="text-gray-600">
              They have 10 voting badges to distribute to community members of
              their choice who have made significant contributions to the
              Optimism.
            </p>
          </li>
        </ol>
        <div className="text-gray-600 text-base font-normal mt-4">
          Just so you know, the criteria for citizenship may change in the
          future, and it'll be decided by governance. Voting in RetroPGF 3
          doesn't guarantee a permanent spot in the Citizens' House or future
          RetroPGF rounds.
        </div>
        <div className="text-gray-700 text-lg font-semibold mt-4">
          Rules & Code of Conduct
        </div>
        <div className="text-gray-600 text-base font-normal mt-4">
          Badgeholders must abide by the following rules and the Code of
          Conduct. In case of a violation, the voting badge that has been
          distributed may be revoked.
        </div>
        <ol className="list-disc ml-5 mt-5 text-gray-600">
          <li>
            <div className="text-gray-700 font-medium">Untransferred Badge</div>
            <p className="text-gray-600">
              You’re not allowed to distribute your voting badge to a co-worker
              with whom you work on your primary project. “Primary” is defined
              as a project to which you dedicate &gt; 25% of working hours or
              derive &gt;25% of your compensation. This rule is established to
              counteract the concentration of voting badges among the members of
              a small number of projects.
            </p>
          </li>
          <li>
            <div className="text-gray-700 font-medium">Be Independent</div>
            <p className="text-gray-600">
              You should vote independently and not be influenced by project,
              company, and others. This rule is established to ensure that the
              voting process is fair and transparent.
            </p>
          </li>
          <li>
            <div className="text-gray-700 font-medium">
              Use Your Badge Wisely
            </div>
            <p className="text-gray-600">
              Your badge is a powerful tool. Use it wisely and responsibly.
            </p>
          </li>
        </ol>
        <div className="text-gray-700 text-lg font-semibold mt-4">
          Guidelines for Sharing Badges
        </div>
        <div className="text-gray-600 text-base font-normal mt-4">
          The Optimism Foundation has some handy guidelines for distributing
          voting badges, and they encourage everyone to consider these criteria
          when making their own choices. Here are some things to keep in mind:
        </div>
        <ol className="list-disc ml-5 mt-5 text-gray-600">
          <li>
            <div className="text-gray-700 font-medium">
              Contribution to RetroPGF
            </div>
            <p className="text-gray-600">
              Can this person help make RetroPGF even better as a funding
              mechanism?
            </p>
          </li>
          <li>
            <div className="text-gray-700 font-medium">Expertise</div>
            <p className="text-gray-600">
              Is this person a pro in any of the categories we're funding in
              RetroPGF?
            </p>
          </li>
          <li>
            <div className="text-gray-700 font-medium">Commitment</div>
            <p className="text-gray-600">
              Has this person shown a strong commitment to the long-term growth
              of the Optimism ecosystem and our Collective's mission?
            </p>
          </li>
          <li>
            <div className="text-gray-700 font-medium">Fresh Perspectives</div>
            <p className="text-gray-600">
              Can this person bring fresh perspectives and insights to the
              table, enriching our evaluations?
            </p>
          </li>
        </ol>
        <div className="text-gray-700 text-lg font-semibold mt-4">
          Why these badgeholder selection method?
        </div>
        <ol className="list-disc ml-5 mt-5 text-gray-600">
          <li>
            <div className="text-gray-700 font-medium">
              Learning from RetroPGF 2
            </div>
            <p className="text-gray-600">
              In RetroPGF 2, we noticed something cool. When we allowed each
              badgeholder from the previous round to choose a new badgeholder,
              it created a super-committed and value-aligned group of voters.
              That's what we want!
            </p>
          </li>
          <li>
            <div className="text-gray-700 font-medium">
              Steering Clear of Centralization
            </div>
            <p className="text-gray-600">
              But here's the twist. Sometimes badgeholders tended to pass their
              voting badges to their team members, which could lead to a bit too
              much centralization. To keep things fair, we now have a rule that
              stops badgeholders from picking their coworkers. We're all about
              diversity!
            </p>
          </li>
          <li>
            <div className="text-gray-700 font-medium">
              Top 50 Recipients Rock
            </div>
            <p className="text-gray-600">
              Those awesome top 50 recipients from RetroPGF round 2? They've
              shown they're totally on board with Optimism's values, and they're
              committed to making RetroPGF a fair process. We're even
              experimenting to see if getting a RetroPGF badge could be a way to
              become a citizen in the future.
            </p>
          </li>
          <li>
            <div className="text-gray-700 font-medium">
              Optimism Foundation's Role
            </div>
            <p className="text-gray-600">
              The Optimism Foundation has 10 voting badges to give out to
              community members who've made a significant impact on the
              Optimism. It's their way of recognizing and rewarding valuable
              contributions. Note that, they won't be involved in picking
              badgeholders or citizens in future rounds.
            </p>
          </li>
        </ol>
        <div className="text-gray-600 text-base font-normal mt-4">
          Remember, the criteria for citizenship may change in the future, and
          it'll be decided by the community's governance. So, we're always
          evolving and improving! Let's keep the RetroPGF spirit alive and make
          this journey even more exciting together!
        </div>
        <div className="text-gray-700 text-lg font-semibold mt-4">
          The Future of Becoming a Citizen
        </div>
        <div className="text-gray-600 text-base font-normal mt-4">
          In the exciting future of the Optimism Collective, the responsibility
          for selecting citizens will rest with our two-house governance system.
          It's all about making sure that citizenship is earned based on the
          reputation you build within our community.
        </div>
        <div className="text-gray-600 text-base font-normal mt-4">
          But here's the best part: we want you, the badgeholders, and our
          amazing community members, to be part of this decision-making process.
          We invite you to join discussions about what reputation attributes
          (kind of like endorsements) should be considered valuable when
          selecting future citizens. You can share your thoughts and ideas in
          this thread.
        </div>
        <div className="text-gray-600 text-base font-normal mt-4">
          By doing this, we're getting ready for the day when citizenship
          selection will be in the hands of the Collective. It's all about
          making sure the process is fair, transparent, and aligned with our
          collective values. So, let's keep the conversation going and shape the
          future of the Optimism Collective.
        </div>
        <Image
          src="/static/historyRPGF3/retropgf3_banner_5.png"
          className="my-5 rounded-lg"
          width={1000}
          height={400}
          layout="responsive"
          alt="The Future of Becoming a Citizen"
        />
      </section>
    </>
  )
}
export default RPGF3History
