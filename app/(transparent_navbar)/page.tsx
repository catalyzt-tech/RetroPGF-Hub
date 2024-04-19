import Link from "next/link";
import CheckmarkOutline from "@carbon/icons-react/lib/CheckmarkOutline";
import RetroSection from "./_component/RetroSection";
import GrowPage from "./_component/GrowPage";
import QuestionPage from "./_component/QuestionPage";

export default function Page() {
  interface CheckListItemProps {
    word: string;
  }

  const ResourceBox = ({ number }:{number:string}) => (
    <div className="relative flex lg:mt-6 mt-4 mx-6 z-10">
      <div className="flex justify-center items-center lg:w-6 lg:h-6 w-4 h-4 rounded-full bg-gray-100 font-rubik font-semibold text-xs lg:text-sm z-10">
        {number}
        <div className="absolute top-4 lg:h-[7.5rem] h-[5.5rem] lg:w-1  w-0.5 bg-gray-100 -z-10" />
      </div>
      <div className="flex flex-col ml-3 w-full lg:h-[7rem] h-[5.5rem] bg-white border rounded-lg justify-center px-4">
        <p className="font-inter lg:text-base font-bold text-xs line-clamp-1">
          Path 1: Newcomer to RetroPGF
        </p>
        <p className="font-inter lg:text-[8px] text-[6px] text-gray-500">
          3 Chapters · 30 Minutes
        </p>
        <p className="mt-1 font-inter lg:text-[8px] text-[6px] text-gray-600 line-clamp-4">
          Guide 1: Introduction to RetroPGF <br /> Lesson 1: What is RetroPGF?
          (Video & Text) <br /> Lesson 2: Understanding the Optimism Ecosystem
          (Interactive Diagram & Quiz) <br /> Lesson 3: Benefits of
          Participating in RetroPGF (Text & Case Studies)
        </p>
      </div>
    </div>
  );

  const prototypeB4 = `Guide 1: Introduction to RetroPGF
  Lesson 1: What is RetroPGF? (Video & Text)
  Lesson 2: Understanding the Optimism Ecosystem (Interactive Diagram & Quiz)
  Lesson 3: Benefits of Participating in RetroPGF (Text & Case Studies)`;

  const CheckListItem: React.FC<CheckListItemProps> = ({ word }) => (
    <li className="flex items-center mt-2">
      <label className="flex items-center cursor-pointer">
        <CheckmarkOutline size={24}/>
        <span className="ml-2">{word}</span>
      </label>
    </li>
  );

  return (
    <>
      {/* 1st block */}
      <div className="relative min-h-[calc(100vh-4.5rem)]">
        <div className="bg-gradient-to-br from-[#FFFEEA] to-100% via-[#FFDAAF] to-[#FFAB9F] w-full absolute -top-[4.5rem] left-0 h-screen">
          <div className="px-4 lg:px-0 flex flex-col justify-center items-center font-rubik w-full h-full">
            <div className="mb-3 lg:mb-7 text-4xl lg:text-6xl font-semibold text-gray-900 flex flex-col justify-center items-center ">
              <h1 className="py-3">Explore Ideas</h1>
              <h1 className="py-3">Build Project</h1>
              <h1 className="py-3">Create Impact</h1>
            </div>
            <p className="mb-8 text-lg font-normal text-gray-900 text-center">
              Turn your ideas into reality with funding, support, and a thriving
              network.
            </p>

            <div className="flex flex-wrap lg:flex-row flex-col items-center justify-center lg:gap-x-10 lg:gap-y-0 gap-y-6">
              <Link
                href={"/community/ask-question"}
                className="w-44 h-10 bg-white hover:bg-gray-50 py-3 px-8 rounded-lg "
              >
                <h6 className="text-sm font-semibold text-gray-800 text-center self-center">
                  Ask question
                </h6>
              </Link>
              <Link
                href="/community/submit-idea"
                className="w-44 h-10 bg-gray-800 hover:bg-gray-800/80 py-3 px-7 rounded-lg "
              >
                <h6 className="text-sm font-semibold text-white text-center self-center">
                  Submit your idea
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
            Give autonomy to the whole team. With our drag-and-drop builder and AI-powered tools, anyone can carry out effective product research across the entire development process at scale. When you can build fast, you can learn fast.
          </p>
        </div>
        <div className=" sm:px-12 md:px-20 lg:px-40">
          <RetroSection/>
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
              Give autonomy to the whole team. With our drag-and-drop builder and
              AI-powered tools, anyone can carry out effective product research
              across the entire development process at scale. When you can build
              fast, you can learn fast.
            </div>
            <ul className="l font-inter text-base font-normal text-gray-600 gap-2">
              <CheckListItem word="Request Feedback" />
              <CheckListItem word="Ask Questions" />
              <CheckListItem word="Give Feedback" />
            </ul>
        </div>
    
        <div className="max-w-[58rem] w-full">
          <GrowPage/>
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
            <ResourceBox number="1"/>
            <ResourceBox number="2"/>
          </div>
        </div>

        <div className="lg:w-[31.875rem] flex flex-col">
          <div className="flex items-center justify-center font-inter text-sm font-bold tracking-wide text-left text-red-600 w-fit h-8 rounded-lg py-2 px-2.5 bg-red-50">
            Build
          </div>
          <div className="lg:w-[28.375rem] font-rubik lg:text-3xl font-semibold lg:mt-4 mt-2 text-2xl">
            Create your project and get support from our community
          </div>
          <div className="lg:w-[28.375rem] w-fit font-inter text-base font-normal lg:mt-6 mt-4 text-gray-600">
            Give autonomy to the whole team. With our drag-and-drop builder and
            AI-powered tools, anyone can carry out effective product research
            across the entire development process at scale. When you can build
            fast, you can learn fast.
          </div>
          <ul className="lg:mt-[1.53rem] mt-2 font-inter text-base font-normal text-gray-600 gap-2">
            <CheckListItem word="RetroPGF 101" />
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
        <QuestionPage/>
      </div>

      <div className="flex flex-col justify-center items-center gap-8 py-12 lg:py-16 lg:px-[3.75rem] sm:px-8 px-4">
        <div className="lg:w-[27.8125rem] lg:text-5xl text-3xl font-semibold font-rubik text-center">
          Let’s start building your future, now!
        </div>
        <div className="flex flex-wrap lg:flex-row flex-col items-center justify-center lg:gap-x-10 lg:gap-y-0 gap-y-6">
          <Link
            href={""}
            className="flex items-center justify-center w-44 h-10 bg-gray-800 hover:bg-gray-800/80 rounded-lg "
          >
            <h6 className="text-sm font-semibold text-white text-center">
              Join Discord
            </h6>
          </Link>
          <Link
            href=""
            className="flex items-center justify-center w-44 h-10 bg-red-600 hover:bg-red-600/80 rounded-lg "
          >
            <h6 className="text-sm font-semibold text-white text-center">
              Join the Community
            </h6>
          </Link>
        </div>
      </div>

    </>
  );
}
