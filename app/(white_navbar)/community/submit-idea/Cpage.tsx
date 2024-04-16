"use client"
import BreadCumpCommunity from "@/app/component/BreadCump/BreadCumpCommunity";
import InputRef from "@/app/component/Input/InputRef";
import TextAreaRef from "@/app/component/Input/TextAreaRef";
import ChevronDownOutline from "@carbon/icons-react/lib/ChevronDownOutline";
import { Fragment, useRef, useState } from "react";
import toast from "react-hot-toast";
import { CloudinaryAsset } from "./submit-idea";
import { Dialog, Listbox, Transition } from "@headlessui/react";
import Checkmark from "@carbon/icons-react/lib/Checkmark";
import { InsertProject } from "@/app/hook/projectRequest";
import { Circular } from "@/app/component/Loading/Circular";
import Link from "next/link";
import { Project } from "@/app/hook/projectRequestType";
import { insertCategory } from "@/app/lib/category";
import { useRouter } from "next/navigation";



export default function Cpage({

}: {

    }) {
    
    const router = useRouter()

    const [state, setState] = useState<{
        images: any[];
        imageURLs: string[];
        res: Project | null
    }>({
        images: [],
        imageURLs: [],
        res: null
    })

    const [category, setcategory] = useState(insertCategory[0].name)
    const [loading, setLoading] = useState<boolean>(false)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const projectTitleRef = useRef<HTMLInputElement>(null);
    const descRef = useRef<HTMLTextAreaElement>(null);
    const websiteRef = useRef<HTMLInputElement>(null);
    const githubRef = useRef<HTMLInputElement>(null);
    const feedbackRef = useRef<HTMLTextAreaElement>(null);

    function closeModal() {
      setIsOpen(false)
    }
  
    // useEffect(() => {
    //     if (state.images.length < 1) return;
    //     //@ts-ignore
    //     const newImageUrls = [];
    //     //@ts-ignore
    //     state.images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    //     //@ts-ignore
    //     setState(prev=>({...prev,imageURLs:[newImageUrls[0]]}))
    // }, [state.images]);
    const generateUniqueUploadId = () => {
        return `uqid-${Date.now()}`;
    };

    async function handleUploadImage(): Promise<string | null> {
        const uniqueUploadId = generateUniqueUploadId();

        const image = state.images[0];
        // Check if image exists and is within the size limit
        if (image && image.size <= 10 * 1024 * 1024) { // 10MB limit
            const formData = new FormData();
            formData.append("file", image);
            formData.append("cloud_name", process.env.NEXT_PUBLIC_CLOUD_NAME as string);
            formData.append("upload_preset", process.env.NEXT_PUBLIC_PRESET as string);

            const response = await fetch(
                `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`,
                {
                    method: "POST",
                    body: formData,
                    headers: {
                        "X-Unique-Upload-Id": uniqueUploadId,
                    },
                }
            );
            if (!response.ok) {
                toast.error("Chunk upload failed.")
                return null
            }
            const data: CloudinaryAsset = await response.json()
            if (data.url) {
                return data.url
            }

        }
        else {
            toast.error("Image exceeds size limit or it's not uploaded");
            return null
        }
        return null
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) {
        e.preventDefault()

        let { projectName, description, website, github, feedback } = {
            projectName: projectTitleRef.current?.value,
            description: descRef.current?.value,
            website: websiteRef.current?.value,
            github: githubRef.current?.value,
            feedback: feedbackRef.current?.value
        };

        if (!projectName) {
            toast.error("Project name is required");
        } else if (!description) {
            toast.error("Description is required");
        } else if (!website) {
            toast.error("Website is required");
        } else if (!github) {
            toast.error("GitHub is required");
        } else if (!feedback) {
            toast.error("Feedback is required");
        } else if (!category) {
            toast.error("Feedback is required");
        } 

        else {
            setLoading(true)
            const logoUrl: string | null = await handleUploadImage()
            if (logoUrl === null) {
                setLoading(false)
                return;
            }

            const res = await InsertProject(
                projectName,
                "p",
                logoUrl,
                github,
                website,
                description,
                feedback,
                category
            )

            if (res.data && 'project' in res.data) {
                const { project, msg } = res.data;
                setState(prev => ({...prev, res:project}))
                setLoading(false)
                setIsOpen(true)
            } else {
                toast.error(res.error?.data.msg! || "Something went wrong when try to create your project")
                setLoading(false)
            }
        }

    }

    function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
        //@ts-ignore  
        setState(prev => ({ ...prev, images: [...e.target.files] }))
    }


    return (

        <>
        <Circular
        loading={loading}
        />
            <div className="px-2 sm:px-4  md:px-8 lg:px-20 py-10 bg-gradient-to-b  from-slate-200 to-10% to-[#E2E8F000]">
                {/* BreadCump */}
                <BreadCumpCommunity
                    secondText="Create Idea"
                />

                <div className="flex gap-4 md:gap-8 lg:gap-12 mt-10">
                    <div className="w-[38.75rem] mx-auto flex flex-col gap-8">
                        <div className="flex flex-col gap-5 mb-4">
                            <div className="flex flex-wrap justify-center items-center gap-4">
                                <h3 className="text-3xl md:text-5xl font-semibold text-gray-800">
                                    Submit your idea
                                </h3>
                                <ChevronDownOutline className="w-8 h-8 md:w-12 md:h-12 fill-gray-800" />
                            </div>
                            <h6 className="text-center text-base md:text-xl font-normal text-gray-800">
                                Share your project idea to get feedback from experienced contributor
                            </h6>
                        </div>

                        <div className="flex flex-col gap-2.5">
                            <h6 className="text-sm font-semibold text-gray-800">Project Name</h6>
                            <InputRef
                                type="text"
                                placeholder="Project Name"
                                ref={projectTitleRef}
                                className="border border-gray-200 bg-gray-50 text-slate-800 focus:ring focus:ring-primaryRed w-full px-5 py-3 rounded-md min-h-[40px]"
                            />
                        </div>


                        <div className="flex flex-col gap-2.5">
                            <h6 className="text-sm font-semibold text-gray-800">Website or Link</h6>
                            <InputRef
                                type="text"
                                placeholder="e.g. https://www.example.com"
                                ref={websiteRef}
                                className="border border-gray-200 bg-gray-50 text-slate-800 focus:ring focus:ring-primaryRed w-full px-5 py-3 rounded-md min-h-[40px]"
                            />
                            <h6 className="text-sm font-normal text-gray-500">Include the full URL to your projects main website.</h6>
                        </div>

                        <div className="flex flex-col gap-2.5">
                            <h6 className="text-sm font-semibold text-gray-800">Github Link</h6>
                            <InputRef
                                type="text"
                                placeholder="e.g. https://www.example.com"
                                ref={githubRef}
                                className="border border-gray-200 bg-gray-50 text-slate-800 focus:ring focus:ring-primaryRed w-full px-5 py-3 rounded-md min-h-[40px]"
                            />
                        </div>


                        <div className="flex flex-col gap-2.5">
                            <h6 className="text-sm font-semibold text-gray-800">Project Logo</h6>
                            <input
                                className="w-full text-gray-800 text-sm font-normal bg-gray-50 border file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:bg-gray-800 file:hover:bg-gray-800/80 file:text-white rounded-lg file:mr-4"
                                id="file_input"
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                multiple={false}
                            />

                            <h6 className="text-sm font-normal text-gray-500">Supported JPG or PNG (Max size is 10 MB, Width and Height should be 72 pixels)</h6>
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
                            <h6 className="text-sm font-semibold text-gray-800">Project Description</h6>
                            <TextAreaRef
                                type="text"
                                placeholder="Briefly describe your project's purpose and features. What is this project used for?"
                                ref={descRef}
                                className="border border-gray-200 bg-gray-50 text-slate-800 focus:ring focus:ring-primaryRed w-full px-5 py-3 rounded-md min-h-[40px]  h-48 "
                            />
                        </div>

                        <div className="flex flex-col gap-2.5">
                            <h6 className="text-sm font-semibold text-gray-800">Feedback detail</h6>
                            <TextAreaRef
                                type="text"
                                placeholder="Describe the feedback you are looking for or Highlight what you concern or need help with"
                                ref={feedbackRef}
                                className="border border-gray-200 bg-gray-50 text-slate-800 focus:ring focus:ring-primaryRed w-full px-5 py-3 rounded-md min-h-[40px]  h-40 md:h-32 "
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

        {state.res && state.res?._id && 
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
                    Project idea have been submitted!
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your project idea has been successfully submitted. You can go back to community page or see your project idea page.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
                    <div
                    //   href={"/community"}
                    onClick={() => {
                        router.push("/community")
                        router.refresh()
                      }}                    //   type="button"
                      className="bg-white border py-3 px-7 h-10 flex items-center rounded-lg hover:bg-gray-50 outline-none"
                        //   onClick={closeModal}
                    >
                      <h6 className="text-sm font-semibold text-gray-800">
                        Community
                      </h6>
                    </div>
                    <Link
                      href={`/community/project/${state.res?._id}`}
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
