import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="relative min-h-[calc(100vh-4.5rem)]">
        <div className="bg-gradient-to-br from-[#FFFEEA] to-100% via-[#FFDAAF] to-[#FFAB9F] w-full absolute -top-[4.5rem] left-0 h-screen">
          <div className="px-4 md:px-0 flex flex-col justify-center items-center font-rubik w-full h-full">
            <div className="mb-3 md:mb-7 text-4xl md:text-6xl font-semibold text-gray-900 flex flex-col justify-center items-center ">
              <h1 className="py-3">Explore Ideas</h1>
              <h1 className="py-3">Build Project</h1>
              <h1 className="py-3">Create Impact</h1>
            </div>
            <p className="mb-8 text-lg font-normal text-gray-900">Turn your ideas into reality with funding, support, and a thriving network.</p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href={"/community/ask-question"} className="w-44 h-10 bg-white hover:bg-gray-50 py-3 px-8 rounded-lg ">
                <h6 className="text-sm font-semibold text-gray-800 text-center self-center">Ask question</h6>
              </Link>
              <Link href="/community/submit-idea" className="w-44 h-10 bg-gray-800 hover:bg-gray-800/80 py-3 px-7 rounded-lg ">
                <h6 className="text-sm font-semibold text-white text-center self-center">Submit your idea</h6>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}