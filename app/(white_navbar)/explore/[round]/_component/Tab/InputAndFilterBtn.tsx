import { Dispatch, SetStateAction } from "react"
import { CheckBoxStateType, ExploreRoundState } from "../ExploreRoundType"
import Input from "@/app/component/Input/Input"
import { category } from "../Text";
import Search from "@carbon/icons-react/lib/Search";
import Grid from "@carbon/icons-react/lib/Grid";
import List from "@carbon/icons-react/lib/List";
import SettingsAdjust from "@carbon/icons-react/lib/SettingsAdjust";
import SortExploreRound from "../SortExploreRound";

// this file include
// - search input
// - sort by button
// - change view (list, grid) data
// - filter btn
// - badge
export default function InputAndFilterBtn({
    search,
    setCheckBox,
    setSearch,
    setState,
    checkBox,
    state,
    handleClearFilter,
    handleChangeCategory
}: {
    search: string;
    state: ExploreRoundState
    setState: Dispatch<SetStateAction<ExploreRoundState>>;
    setSearch: Dispatch<SetStateAction<string>>;
    setCheckBox: Dispatch<SetStateAction<CheckBoxStateType>>;
    checkBox: CheckBoxStateType;
    handleClearFilter(): void;
    handleChangeCategory(value: string): void
}) {

    
    function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSearch(prev => e.target.value)
    }


    return (

        <>
            <div className="flex flex-col gap-4 ">
                <div className="flex items-center gap-3 lg:gap-4 mt-4">
                    <div className="flex-grow">
                        <Input
                            Icon={<Search size={24} className="fill-gray-500" />}
                            value={search}
                            onChange={handleSearchChange}
                            className="
                            w-full pl-12  border placeholder-slate-500 bg-white text-slate-800 focus:ring focus:ring-primaryRed px-1 py-1.5 rounded-full  min-h-6 lg:min-h-10
                            "
                            placeholder="Search Project"
                        />
                    </div>
                    <div className="">
                        {/* Sort button */}
                        <SortExploreRound
                            setState={setState}
                            state={state}
                        />
                    </div>
                    <div className="">
                        <div className="hidden lg:flex gap-2 border p-1.5  rounded-full min-h-10 max-h-10">
                            <div
                                className={`px-1  cursor-pointer hover:bg-gray-50  rounded-tl-xl rounded-bl-xl rounded-br-sm rounded-tr-sm ${state.view === 'g' &&
                                    'bg-gray-100'
                                    }`}
                                onClick={() => setState((prev) => ({ ...prev, view: 'g' }))}
                            >
                                <Grid
                                    size={28}
                                    className={`${state.view === 'g' ? '#161616' : '#94A3B8'} p-0.5`}
                                />
                            </div>

                            <div className="border w-[0.0625rem] border-gray-200"></div>

                            <div
                                className={`px-1  cursor-pointer hover:bg-gray-50  rounded-tl-sm rounded-bl-sm rounded-br-xl rounded-tr-xl ${state.view === 'l' &&
                                    'bg-gray-100'
                                    }`}
                                onClick={() => setState((prev) => ({ ...prev, view: 'l' }))}
                            >
                                <List
                                    size={28}
                                    className={`${state.view === 'l' ? '#161616' : '#94A3B8'} p-0.5`}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hidden lg:flex gap-2 items-center flex-wrap mt-4">
                    <div
                        onClick={() => {
                            state.view === 'g'
                                ? setState((prev) => ({ ...prev, filter: !prev.filter }))
                                : setState((prev) => ({ ...prev, dialog: true, filter: false }))
                        }}
                        className={`flex h-10 items-center gap-2 border  rounded-full px-3 py-2 cursor-pointer hover:bg-gray-100 ${state.filter && 'bg-gray-50'
                            }`}
                    >
                        <SettingsAdjust size={24} className="" />
                        <h6 className="text-base font-normal text-gray-600">Filter</h6>
                    </div>

                    <div className="border w-[0.0625rem] h-[1.625rem] border-gray-200"></div>

                    <div
                        className={` 
                            h-10
                            hover:bg-secondaryRed hover:text-primaryRed hover:border hover:border-primaryRed
                            border rounded-full px-3 py-2 cursor-pointer transition-colors self-center shrink-0
                            ${Object.keys(checkBox).every(
                            (key) =>
                                checkBox[key as keyof CheckBoxStateType].length === 0
                        )
                                ? 'bg-secondaryRed text-primaryRed border-secondaryRed'
                                : 'text-slate-900 border'
                            }
                                                    `}
                        onClick={handleClearFilter}
                    >
                        <p className="text-sm font-normal ">All</p>
                    </div>

                    {/* Badge */}
                    {category.map((item, i) => (
                        <div
                            data-tooltip-id={item.name}
                            key={i}
                            className={`
                            lg:block h-10 group relative ctn-category shadow-
                            hover:bg-secondaryRed hover:text-primaryRed hover:border hover:border-primaryRed
                            border rounded-full px-3 py-2 cursor-pointer transition-colors self-center shrink-0
                            ${checkBox.category.some(
                                (elem) =>
                                    elem ===
                                    category.find((elem) => elem.name === item.name)
                                        ?.name
                            )
                                    ? 'bg-secondaryRed text-primaryRed border-secondaryRed'
                                    : 'text-slate-900 border'
                                }
                                                    `}
                            onClick={() => {
                                handleChangeCategory(item.name)
                            }}
                        >
                            <p className=" text-sm font-normal ">{item.name}</p>

                        </div>
                    ))}
                </div>

            </div>
        </>

    )

}
