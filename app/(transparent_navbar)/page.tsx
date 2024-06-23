import Link from 'next/link'
import RetroSection from './_component/RetroSection'
import GrowPage from './_component/GrowPage'
import QuestionPage from './_component/QuestionPage'
import CheckListItem from './_component/CheckListItem'
import ResourceBox from './_component/ResourceBox'
import { getAllRound } from './explore/page'

const prototypeB4 = `Guide 1: Introduction to RetroPGF
Lesson 1: What is RetroPGF? (Video & Text)
Lesson 2: Understanding the Optimism Ecosystem (Interactive Diagram & Quiz)
Lesson 3: Benefits of Participating in RetroPGF (Text & Case Studies)`

export default async function Page() {
  const { round1, round2, round3 } = await getAllRound(8)

  return (
    <>
      {/* 1st block */}
      <div className="relative min-h-[calc(100vh-4.5rem)]">
        <div className="bg-gradient-to-br from-[#FFFEEA] to-100% via-[#FFDAAF] to-[#FFAB9F] w-full absolute -top-[4.5rem] left-0 h-screen">
          <div className="px-4 lg:px-0 flex flex-col justify-center items-center font-rubik w-full h-full">
            <div className="flex flex-col items-center justify-center text-center gap-4">
              <span className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-gray-900">
                Explore Ideas
              </span>
              <span className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-gray-900">
                Build Project
              </span>
              <span className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-gray-900">
                Create Impact
              </span>
            </div>

            <p className="my-8 text-lg font-normal text-gray-900 text-center">
              Turn your ideas into reality with funding, support, and a thriving
              network.
            </p>

            <div className="flex flex-wrap lg:flex-row flex-col items-center justify-center lg:gap-x-10 lg:gap-y-0 gap-y-6">
              <Link
                href="/community/submit-idea"
                className=" bg-white hover:bg-gray-50 py-3 px-8 rounded-lg "
              >
                <h6 className="text-sm font-semibold text-gray-800 text-center self-center">
                  Submit Your Project Idea
                </h6>
              </Link>
              <Link
                href={'/explore'}
                className=" bg-gray-800 hover:bg-gray-800/80 py-3 px-7 rounded-lg "
              >
                <h6 className="text-sm font-semibold text-white text-center self-center">
                  Explore Funded Projects
                </h6>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Block */}
      <div className="flex flex-col lg:items-center gap-8 py-12 lg:py-16 lg:px-[3.75rem] sm:px-8 px-4">
        <div className="flex flex-col gap-4 lg:items-center lg:w-[36.875rem]">
          <div className="py-2 px-2.5 rounded-lg bg-secondaryRed w-fit">
            <h6 className="text-sm text-red-600 font-bold">EXPLORE</h6>
          </div>
          <h6 className="lg:px-[4.25rem] lg:text-center text-2xl lg:text-3xl font-semibold font-rubik text-gray-900 mb-2">
            Explore past projects and learn from awesome creators
          </h6>
          <p className="lg:text-center text-base font-normal text-gray-600 lg:text-gray-800">
            Browse all the past round projects and learn from the experts. Here
            you can find all the details about each project since RetroPGF 1
            such as allocation, ranking, and number of votes.
          </p>
        </div>
        <div className="px-0 min-[350px]:px-8 sm:px-4 md:px-10 lg:px-24 xl:px-36  w-full lg:w-[60rem] xl:w-[80rem]">
          <RetroSection round1={round1} round2={round2} round3={round3} />
        </div>
      </div>

      {/* Project Section */}
      <div className="flex flex-col lg:flex-row justify-center  gap-16 py-12 lg:py-16 lg:pl-[12.75rem] lg:pr-24 sm:px-8 px-4 bg-gray-50 w-full">
        <div className="flex flex-col lg:w-[28.375rem] gap-4">
          <div className="py-2 px-2.5 rounded-lg bg-secondaryRed w-fit">
            <h6 className="text-sm text-red-600 font-bold">GROW</h6>
          </div>
          <h6 className="mb-2 font-rubik lg:text-3xl font-semibold  text-2xl text-gray-900">
            Help others and build lasting connections
          </h6>
          <div className="mb-2 text-base font-normal  text-gray-600">
            Building a project is tough. Get help from our community wether it
            is a technical question or a design feedback all can be asked. You
            can also help others by giving feedback or answering questions.
          </div>
          <ul className="l font-inter text-base font-normal text-gray-600 gap-2">
            <CheckListItem word="Request Feedback" />
            <CheckListItem word="Give Feedback" />
            <CheckListItem word="Ask Questions" />
          </ul>
        </div>

        <div className="max-w-[58rem] w-full">
          <GrowPage />
        </div>
      </div>

      <div className="flex lg:flex-row gap-8 flex-col-reverse justify-center items-center py-12 lg:py-16 lg:px-[3.75rem] sm:px-8 px-4">
        <div className="lg:w-[38rem] min-[400px]:w-[22.5625rem] lg:h-[24.265rem] h-[19rem] lg:pt-0 pt-8 lg:px-2.5">
          <div className="h-1/4 bg-gray-100 rounded-t-lg font-inter lg:text-xl text-base font-bold px-6 lg:pt-4 pt-2">
            Resources
            <div className="mt-1 lg:text-[10px] text-[8px] leading-3 font-normal text-gray-600 lg:line-clamp-3 line-clamp-2">
              {prototypeB4}
            </div>
          </div>
          <div className="rounded-b-lg">
            <ResourceBox number="1" />
            <ResourceBox number="2" />
          </div>
        </div>

        <div className="lg:w-[31.875rem] flex flex-col">
          <div className="flex items-center justify-center font-inter text-sm font-bold tracking-wide text-left text-red-600 w-fit h-8 rounded-lg py-2 px-2.5 bg-red-50">
            Learn
          </div>
          <div className="lg:w-[28.375rem] font-rubik lg:text-3xl font-semibold lg:mt-4 mt-2 text-2xl">
            Don't know how to get started?
          </div>
          <div className="lg:w-[28.375rem] w-fit font-inter text-base font-normal lg:mt-6 mt-4 text-gray-600">
            We provided high quality resources for you to get started in
            RetroPGF. You can learn about the basics of RetroPGF, Where to get
            the ideas and how to calculate your impact.
          </div>
          <ul className="lg:mt-[1.53rem] mt-2 font-inter text-base font-normal text-gray-600 gap-2">
            <CheckListItem word="Learning Path" />
            <CheckListItem word="Impact Calculator" />
          </ul>
        </div>
      </div>

      <div className="flex flex-col justify-center text-center items-center py-12 lg:py-16 lg:px-[3.75rem] sm:px-8 px-4 ">
        <div className="font-rubik lg:text-5xl font-semibold text-3xl text-center">
          Frequently asked questions
        </div>
        <div className="lg:w-[48rem] mt-6 font-inter text-base font-normal ">
          Frequently asked questions ordered by popularity. Remember that if the
          visitor has not committed to the call to action, they may still have
          questions (doubts) that can be answered.
        </div>
        <QuestionPage />
      </div>

      <div className="flex flex-col justify-center items-center gap-8 py-12 lg:py-16 lg:px-[3.75rem] sm:px-8 px-4">
        <div className="lg:w-[27.8125rem] lg:text-5xl text-3xl font-semibold font-rubik text-center">
          Let’s start building your future, now!
        </div>
        <div className="flex flex-wrap lg:flex-row flex-col items-center justify-center lg:gap-x-10 lg:gap-y-0 gap-y-6">
          <Link
            href={''}
            className="flex items-center justify-center w-44 h-10 bg-gray-800 hover:bg-gray-800/80 rounded-lg "
          >
            <h6 className="text-sm font-semibold text-white text-center">
              Discord (coming soon)
            </h6>
          </Link>
          <Link
            href={'/community'}
            className="flex items-center justify-center w-44 h-10 bg-red-600 hover:bg-red-600/80 rounded-lg "
          >
            <h6 className="text-sm font-semibold text-white text-center">
              Join the Community
            </h6>
          </Link>
        </div>
      </div>
    </>
  )
}
