export default function ResourceBox({
    number
}:{
    number:string
})  {

return (

    <> 
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
    </>

    )

}
