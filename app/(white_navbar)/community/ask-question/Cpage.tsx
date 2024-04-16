"use client"
import BreadCumpCommunity from "@/app/component/BreadCump/BreadCumpCommunity";
import InputRef from "@/app/component/Input/InputRef";
import TextAreaRef from "@/app/component/Input/TextAreaRef";
import { Circular } from "@/app/component/Loading/Circular";
import { InsertQuestion } from "@/app/hook/projectRequest";
import { Project } from "@/app/hook/projectRequestType";
import { insertCategory } from "@/app/lib/category";
import Checkmark from "@carbon/icons-react/lib/Checkmark";
import ChevronDownOutline from "@carbon/icons-react/lib/ChevronDownOutline";
import { Dialog, Listbox, Transition } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Fragment, useRef, useState } from "react";
import toast from "react-hot-toast";

export default function Cpage({

}: {

    }) {

    const router = useRouter()

    const [category, setcategory] = useState(insertCategory[0].name)
    const [loading, setLoading] = useState<boolean>(false)
    const [res, setRes] = useState<Project | null>(null);

    const projectTitleRef = useRef<HTMLInputElement>(null);
    const descRef = useRef<HTMLTextAreaElement>(null);
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }


    async function handleSubmit(e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) {
        e.preventDefault()


        let { projectName, description } = {
            projectName: projectTitleRef.current?.value,
            description: descRef.current?.value,
        };

        if (!projectName) {
            toast.error("Project name is required");
        } else if (!description) {
            toast.error("Description is required");
        } else {
            setLoading(true)

            const res = await InsertQuestion(
                projectName,
                "q",
                description,
                category
            )

            if (res.data && 'project' in res.data) {
                const { project, msg } = res.data;
                toast.success("Create Question Success")
                setRes(project)
                setIsOpen(true)
                setLoading(false)
            } else {
                toast.error(res.error?.data.msg! || "Something went wrong when try to create your question")
                setLoading(false)
            }
        }

    }

    return (
        <>
        <Circular
            loading={loading}
        />
        <div className="px-2 sm:px-4  md:px-8 lg:px-20 py-10 bg-gradient-to-b  from-slate-200 to-10% to-[#E2E8F000]">

            {/* BreadCump */}
            <BreadCumpCommunity
                secondText="Ask Question"
            />

            <div className="flex gap-4 md:gap-8 lg:gap-12 mt-10">
                <div className="w-[38.75rem] mx-auto flex flex-col gap-8">
                    <div className="flex flex-col gap-5 mb-4">
                        <div className="flex flex-wrap justify-center items-center gap-4">
                            <h3 className="text-3xl md:text-5xl font-semibold text-gray-800">
                                Ask Question
                            </h3>
                            <ChevronDownOutline className="w-8 h-8 md:w-12 md:h-12 fill-gray-800" />
                        </div>
                        <h6 className="w-full md:w-2/3 mx-auto text-center text-base md:text-xl font-normal text-gray-800">
                            Have anything it mind that still can’t find the answer, then it’s time to ask!
                        </h6>
                    </div>

                    <div className="flex flex-col gap-2.5">
                        <h6 className="text-sm font-semibold text-gray-800">Title</h6>
                        <InputRef
                            type="text"
                            placeholder="Title"
                            ref={projectTitleRef}
                            className="border border-gray-200 bg-gray-50 text-slate-800 focus:ring focus:ring-primaryRed w-full px-5 py-3 rounded-md min-h-[40px]"
                        />
                    </div>



                    <Listbox value={category} onChange={setcategory}>
                        <div className="relative mt-1">
                            <Listbox.Button className="relative w-full">
                                <div className="flex flex-col gap-2.5">
                                    <h6 className="text-sm font-semibold text-gray-800 text-start">Category</h6>
                                    <InputRef
                                        type="text"
                                        placeholder="Select Category"
                                        // ref={projectTitleRef}
                                        readOnly={true}
                                        value={category}
                                        className="border border-gray-200 bg-gray-50 text-slate-800 w-full px-5 py-3 rounded-md min-h-[40px]"
                                    />
                                </div>

                            </Listbox.Button>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute z-40 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                    {insertCategory.map((cate, i) => (
                                        <Listbox.Option
                                            key={i}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-900'
                                                }`
                                            }
                                            value={cate.name}
                                        >
                                            {({ selected }) => (
                                                <>
                                                    <span
                                                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                            }`}
                                                    >
                                                        {cate.name}
                                                    </span>
                                                    {selected ? (
                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                                                            <Checkmark size={16} />
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>


                    <div className="flex flex-col gap-2.5">
                        <h6 className="text-sm font-semibold text-gray-800">Detail</h6>
                        <TextAreaRef
                            type="text"
                            placeholder="Add more detail about your question"
                            ref={descRef}
                            className="border border-gray-200 bg-gray-50 text-slate-800 focus:ring focus:ring-primaryRed w-full px-5 py-3 rounded-md min-h-[40px]  h-48 "
                        />
                    </div>

                    <button
                        onClick={handleSubmit}
                        className=" px-6 py-2.5 bg-primaryRed hover:bg-primaryRed/90 rounded-lg w-fit"
                    >
                        <h6
                            className="text-baase font-medium text-white"
                        >
                            Submit
                        </h6>
                    </button>
                </div>
            </div>

        </div>




        {res && res?._id && 
        <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Question have been submitted!
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your question has been successfully submitted. You can go back to community page or see your question page.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
                    <div
                    //   href={"/community"}
                    //   type="button"
                      onClick={() => {
                        router.push("/community")
                        router.refresh()
                      }}
                      className="bg-white border py-3 px-7 h-10 flex items-center rounded-lg hover:bg-gray-50 outline-none"
                    >
                      <h6 className="text-sm font-semibold text-gray-800">
                        Community
                      </h6>
                    </div>
                    <Link
                      href={`/community/question/${res?._id}`}
                      type="button"
                      className="bg-primaryRed py-3 px-7 h-10 max-w-[10rem] flex items-center rounded-lg hover:bg-primaryRed/90"
                    >
                      <h6 className="text-sm font-semibold text-white line-clamp-1 ">
                        Your page
                      </h6>
                    </Link>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
        }










        </>
    )

}
