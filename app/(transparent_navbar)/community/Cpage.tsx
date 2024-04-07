"use client"

import { Tab, Transition } from '@headlessui/react'
import { useEffect,useState } from 'react'
import { StateCommunityType } from './CommunityTytpe'
import SortByBtn from './_component/SortByBtn'
import FilterBtn from './_component/FilterBtn'
import Search from '@carbon/icons-react/lib/Search';
import Input from '@/app/component/Input/Input'
import { Pagination } from "react-headless-pagination";
import ProjectFeedBackCard from './_component/ProjectFeedBackCard'
import QuestionCard from './_component/QuestionCard'
import { GetProjectsWithSearch } from '@/app/hook/projectRequest'
import toast from 'react-hot-toast'
import { FullProjectResNoComment } from '@/app/hook/projectRequestType'
import { useIsMount } from '@/app/lib/InitialMount'
import SettingsAdjust from '@carbon/icons-react/lib/SettingsAdjust'
import DrawerFilter from './_component/Drawer'
import { GlobalContextType, useGlobal } from '@/app/provider/globalContext'
import Cookies from 'js-cookie';
import { PushOrPullFav } from '@/app/hook/favorite'


const tab = [
    {
        text: "All",
        index: 0,
    },
    {
        text: "Project feedback",
        index: 1,
    },
    {
        text: "Question",
        index: 2,
    },
]
function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Cpage({
    rawD,
    itemsPerpage,
    pageCount,
}: {
    rawD: FullProjectResNoComment[];
    itemsPerpage: number;
    pageCount: number;
}) {
    const { globalState }: GlobalContextType = useGlobal?.()!;
    const accessCheckerCookieValue: string | undefined = Cookies.get('accessChecker');
    const isMount = useIsMount();
    const [data, setData] = useState(rawD)
    const [loading, setLoading] = useState<boolean>(false)
    const [currentPage, setCurrentPage] = useState<number>(0)
    function handlePageClick (page: number) {
        setCurrentPage((prev) => page)
    }

    // async function handleFavoriteProject(e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) {
    //     if (!globalState.user || !globalState.user.userId || typeof accessCheckerCookieValue !== "string") {
    //         toast.error("You need to be authorized first")
    //     }
    //     else {
    //         setLoading(true)
    //         const res = await PushOrPullFav(project._id)
    //         if (res.data && "opera" in res.data) {
    //             const { opera, msg } = res.data
    //             switch (opera) {
    //                 case "pull":
    //                     setState(prev => ({ ...prev, favCount: prev.favCount - 1, favOrNot: false }))
    //                     toast.success("This project have been removed from your favorite")
    //                     break;

    //                 case "push":
    //                     setState(prev => ({ ...prev, favCount: prev.favCount + 1, favOrNot: true }))
    //                     toast.success("This project have been added to your favorite")
    //                     break;

    //                 default:
    //                     break;
    //             }
    //             setLoading(false)
    //         }
    //         else {
    //             toast.error(res.error?.data.msg! || "Something went wrong when try to added or removed favorite project")
    //             setLoading(false)
    //         }
    //     }
    // }

    // console.log(rawD)

    const [state, setState] = useState<StateCommunityType>({
        pageCount: Math.ceil(pageCount/itemsPerpage),
        selectedIndex: 0,
        // sort can be 3 options
        sort: "newest",
        // filter can be 4 options
        filter: "all",
        drawer: false,
    })
    const [search, setSearch] = useState("")
    function handleChangeSearch(e: React.ChangeEvent<HTMLInputElement>) {
        setSearch(prev => e.target.value)
    }
      
    function handleClearFilter() {
        setState(prev => ({...prev, 
            sort:"newest",
            filter: "all",
            drawer: false,
        }))
    }
    

    async function getData() {
        let type = ""
        switch (state.selectedIndex) {
            case 0:
                type = ""
                break;
            case 1:
                type = "project"
                break;
            case 2:
                type = "question"
                break;
        }
        
        let sortedItems = await handleFilterProject(type)
        if(typeof(sortedItems) === "undefined"){
            setData([])
        }
        else {
            setData(sortedItems)
        }
    }

    useEffect(() => {
        if(!isMount){
            getData()
        }
    }, [currentPage, state.filter, state.sort, state.selectedIndex])
    

    async function handleFilterProject(type:string): Promise<FullProjectResNoComment[] | undefined> {
        setLoading(true)
        const res = await GetProjectsWithSearch(itemsPerpage, currentPage*itemsPerpage, state.sort, state.filter, type, search, "")
        if (res.data && 'project' in res.data) {
            const { project, msg, pageCount } = res.data;
            setState(prev => {
                // if(prev.pageCount === 0){
                    return {...prev, pageCount: Math.ceil(pageCount/itemsPerpage)}
                // }
                // return prev
            })
            if(project) {
                setLoading(false)
                return project
            }
            else {
                setLoading(false)
                return undefined
            }
        } else {
            toast.error(res.error?.data.msg! || "Something went wrong when try to get projects")
            setLoading(false)
            return undefined
        }
    }

    function handleChangeSelectedIndex(index:number) {
        setState(prev => ({...prev, selectedIndex:index}))
        setCurrentPage(0)
    }


    return (

        <>

            <div className="flex flex-col gap-4">
                <Tab.Group selectedIndex={state.selectedIndex} onChange={handleChangeSelectedIndex}>
                    <Tab.List className="border-b flex gap-2 min-[400px]:gap-6">
                        {tab.map((item, i) => (
                            <Tab
                                key={i}
                                // className="hover:text-primaryRed  cursor-pointer flex items-center gap-2 px-4 py-1.5 relative"
                                className={({ selected }) =>
                                    classNames(
                                        'hover:text-primaryRed  cursor-pointer flex items-center gap-2 px-1 py-1.5 relative outline-none lg:text-lg lg:font-medium text-base font-semibold',
                                        selected
                                            ? 'text-slate-900'
                                            : 'text-slate-500'
                                    )
                                }
                            >
                                <span className={`line-clamp-1`}>{item.text}</span>
                                {item.index === state.selectedIndex && <div className="absolute inset-x-0 bottom-0 h-1 bg-primaryRed animate-slideup"></div>}
                            </Tab>
                        ))}

                    </Tab.List>

                    <div className="flex flex-wrap md:flex-nowrap gap-3 items-center w-full">
                        <div className="hidden md:flex gap-3 items-center">
                            <SortByBtn
                                state={state}
                                setState={setState}
                            />

                            <FilterBtn
                                state={state}
                                setState={setState}
                            />
                        </div>

                        <div className="hidden md:block border-l w-[0.0625rem] h-[1.625rem] border-gray-200"></div>

                        <div className="flex max-[330px]:flex-wrap gap-4 w-full h-full relative">
                         
                                <div className="w-full flex gap-4 min-w-32 flex-grow">
                                    <div className="w-full">
                                        <Input
                                            value={search}
                                            onChange={handleChangeSearch}
                                            className="flex-grow w-full pl-4  border placeholder-slate-500 bg-white text-slate-800 focus:ring focus:ring-primaryRed px-1 py-1.5 rounded-full  min-h-[24px] lg:min-h-[40px]"
                                            placeholder="Search Project"
                                        />
                                    </div>
                                    <div 
                                    onClick={() => getData()}
                                    className="flex-shrink-0 w-10 h-fit p-2 lg:p-2 outline-none right-0 top-0 z-20 bg-primaryRed hover:bg-primaryRed/80 rounded-full flex items-center justify-center cursor-pointer">
                                        <Search size={24}  className=" pl-0.5 z-20 fill-white rounded-full " />
                                    </div>
                                </div>


                                <button 
                                onClick={() => setState(prev => ({...prev, drawer:!prev.drawer}))}
                                className="w-12 h-10 flex items-center justify-center md:hidden  px-3 py-2 rounded-3xl border-gray-200 border cursor-pointer hover:bg-gray-50">
                                    <SettingsAdjust size={24}  className="fill-gray-500" />
                                </button>
                        </div>
                    </div>
                    
                
                {loading ? 
                <div role="status" className="flex justify-center mt-12">
                    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-primaryRed" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
                :
                <Tab.Panels>
                        <Tab.Panel className="outline-none">
                            <Transition appear show={state.selectedIndex == 0}
                                enter="transition duration-200 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-200 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >

                            <div className="flex flex-col gap-8 mt-8 ">
                                   {data.length !== 0 ? data.map((item, i)=> {
                                    if(item.type === "q"){
                                        return (
                                            <QuestionCard
                                            key={i}
                                            commentCount={item.commentCount}
                                            createdAt={item.createdAt}
                                            description={item.description}
                                            favCount={item.favCount}
                                            id={item._id}
                                            owner={item.owner}
                                            title={item.name}
                                            favOrNot={item.favOrNot}
                                            />
                                            )
                                        }
                                    else if(item.type === "p"){
                                        return (
                                            <ProjectFeedBackCard
                                            key={i}
                                            commentCount={item.commentCount}
                                            createdAt={item.createdAt}
                                            description={item.description}
                                            favCount={item.favCount}
                                            id={item._id}
                                            owner={item.owner}
                                            title={item.name}
                                            category={item.category}
                                            logoUrl={item.logoUrl}    
                                            favOrNot={item.favOrNot}
                                            />
                                        )
                                    }
                                   }): (
                                    <p className="text-center text-3xl text-gray-500 font-semibold">0 Item Found</p>
                                   )}

                                </div>

                            </Transition>
                        </Tab.Panel>

                        <Tab.Panel>
                            <Transition appear show={state.selectedIndex == 1}
                                enter="transition duration-200 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-200 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                
                            <div className="flex flex-col gap-8 mt-8 ">
                                   {data.length !== 0 ? data.map((item, i)=> {
                                    if(item.type === "q"){
                                        return (
                                            <QuestionCard
                                            key={i}
                                            commentCount={item.commentCount}
                                            createdAt={item.createdAt}
                                            description={item.description}
                                            favCount={item.favCount}
                                            id={item._id}
                                            owner={item.owner}
                                            title={item.name}
                                            favOrNot={item.favOrNot}
                                            />
                                            )
                                        }
                                    else if(item.type === "p"){
                                        return (
                                            <ProjectFeedBackCard
                                            key={i}
                                            commentCount={item.commentCount}
                                            createdAt={item.createdAt}
                                            description={item.description}
                                            favCount={item.favCount}
                                            id={item._id}
                                            owner={item.owner}
                                            title={item.name}
                                            category={item.category}
                                            logoUrl={item.logoUrl}    
                                            favOrNot={item.favOrNot}
                                            />
                                        )
                                    }
                                   }): (
                                    <p className="text-center text-3xl text-gray-500 font-semibold">0 Item Found</p>
                                   )}

                                </div>
                            </Transition>
                        </Tab.Panel>

                        <Tab.Panel>
                            <Transition appear show={state.selectedIndex == 2}
                                enter="transition duration-200 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-200 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                               
                            <div className="flex flex-col gap-8 mt-8 ">
                                   {data.length !== 0 ? data.map((item, i)=> {
                                    if(item.type === "q"){
                                        return (
                                            <QuestionCard
                                            key={i}
                                            commentCount={item.commentCount}
                                            createdAt={item.createdAt}
                                            description={item.description}
                                            favCount={item.favCount}
                                            id={item._id}
                                            owner={item.owner}
                                            title={item.name}
                                            favOrNot={item.favOrNot}
                                            />
                                            )
                                        }
                                    else if(item.type === "p"){
                                        return (
                                            <ProjectFeedBackCard
                                            key={i}
                                            commentCount={item.commentCount}
                                            createdAt={item.createdAt}
                                            description={item.description}
                                            favCount={item.favCount}
                                            id={item._id}
                                            owner={item.owner}
                                            title={item.name}
                                            category={item.category}
                                            logoUrl={item.logoUrl}    
                                            favOrNot={item.favOrNot}
                                            />
                                        )
                                    }
                                   }): (
                                    <p className="text-center text-3xl text-gray-500 font-semibold">0 Item Found</p>
                                   )}

                                </div>
                            </Transition>
                        </Tab.Panel>

                    </Tab.Panels>
                }
                        


                    
                </Tab.Group>
            
            {state.pageCount !== 0 && 
                <div className="mt-12 text-sm font-medium text-gray-500">
                    <Pagination
                        currentPage={currentPage}
                        setCurrentPage={handlePageClick}
                        className="flex flex-wrap justify-center"
                        truncableText="..."
                        truncableClassName="border min-w-[2rem] min-h-[2rem] max-w-[2rem] max-h-[2rem] text-sm font-medium text-gray-500 flex items-center justify-center cursor-pointer hover:bg-gray-50"
                        edgePageCount={2}
                        middlePagesSiblingCount={1}
                        totalPages={state.pageCount}

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
            }
            </div>

            <DrawerFilter
            handleClearFilter={handleClearFilter}
            onClose={() => setState(prev => ({...prev, drawer:false}))}
            open={state.drawer}
            state={state}
            setState={setState}
            />

        </>

    )
}
