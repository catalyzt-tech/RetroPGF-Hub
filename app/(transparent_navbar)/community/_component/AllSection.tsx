"use client"
import Image from "next/image";
import { FilterStateType } from "../CommunityTytpe";
import Pin from '@carbon/icons-react/lib/Pin';
import ProjectFeedBackCard from "./ProjectFeedBackCard";
import QuestionCard from "./QuestionCard";
import { Pagination } from "react-headless-pagination";
import { useState } from "react";
export default function AllSection({

}:{

})  {


    const itemsPerPage = 15
    const [currentPage, setCurrentPage] = useState<number>(0)
    const handlePageClick = (page: number) => {
        setCurrentPage((prev) => page)
    }
    const pageCount = 10    

return (

    <div className="flex flex-col gap-8 mt-8 ">
      <ProjectFeedBackCard/>
        <QuestionCard/>
      <ProjectFeedBackCard/>

      <div className="mt-12 text-sm font-medium text-gray-500">
            <Pagination
              currentPage={currentPage}
              setCurrentPage={handlePageClick}
              className="flex flex-wrap justify-center"
              truncableText="..."
              truncableClassName="border min-w-[2rem] min-h-[2rem] max-w-[2rem] max-h-[2rem] text-sm font-medium text-gray-500 flex items-center justify-center cursor-pointer hover:bg-gray-50"
              edgePageCount={2}
              middlePagesSiblingCount={1}
              totalPages={pageCount}
            >
              <Pagination.PrevButton className="px-2 border min-h-[2rem] max-h-[2rem] text-sm font-medium text-gray-500 flex items-center justify-center cursor-pointer hover:bg-gray-50">
                Previous
              </Pagination.PrevButton>

              <div className="flex justify-center">
                <div className="flex flex-wrap lg:items-center justify-start lg:justify-center list-none">
                  <Pagination.PageButton
                    as={<div />}
                    activeClassName="bg-gray-100 cursor-pointer hover:bg-gray-50 list-none"
                    inactiveClassName="list-none"
                    className=" border min-w-[2rem] min-h-[2rem] max-w-[2rem] max-h-[2rem] flex items-center justify-center cursor-pointer hover:bg-gray-50 list-none"
                    dataTestIdInactive="list-none"
                  />
                </div>
              </div>

              <Pagination.NextButton className="px-2 border  min-h-[2rem] max-h-[2rem] text-sm font-medium text-gray-500 flex items-center justify-center cursor-pointer hover:bg-gray-50">
                Next
              </Pagination.NextButton>
            </Pagination>
          </div>
    </div>

    )

}
