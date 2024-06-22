"use client"
import InputRef from "@/app/component/Input/InputRef";
import { Fragment, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import Github from '@carbon/icons-react/lib/LogoGithub';
import Link from "next/link";
import { Circular } from "@/app/component/Loading/Circular";
import { AuthUserThirdParty, RegisterUser } from "@/app/hook/userRequest";
import { GlobalContextType, useGlobal } from "@/app/provider/globalContext";
import { githubProvider, googleProvider } from "@/app/lib/firebase";
import { Dialog, Transition } from "@headlessui/react";

export default function Cpage({

}:{
    
})  {


    const { globalState, setGlobalState, SignInWithGoogle }: GlobalContextType = useGlobal?.()!;
    const [loading, setLoading] = useState<boolean>(false)
    const [open, setOpen] = useState<boolean>(true)
    
    // useEffect(() => {
    //     if (typeof (globalState.user) === "object") {
    //         router.push('/');
    //     }
    // }, [globalState.user, router])

    const emailRef = useRef<HTMLInputElement>(null);
    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const userNameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    async function SubmitRegisterUser(e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) {
        e.preventDefault();

        let { email, firstName, lastName, password, userName } = {
            email: emailRef.current?.value,
            firstName: firstNameRef.current?.value,
            lastName: lastNameRef.current?.value,
            password: passwordRef.current?.value,
            userName: userNameRef.current?.value
        }

        if (!email) {
            toast.error("emai is required")
        }
        else if (!firstName) {
            toast.error("first name is required")
        }
        else if (!lastName) {
            toast.error("last name is required")
        }
        else if (!userName) {
            toast.error("username is required")
        }
        else if (!password) {
            toast.error("password is required")
        }
        else {
            setLoading(true)
            const res = await RegisterUser(email, userName, firstName, lastName, password, "web")
            if (res.data && 'user' in res.data) {
                const { user, msg } = res.data;
                setGlobalState(prev => ({ ...prev, usesr: user }))
                toast.success("Register successful")
                setOpen(true)
                setLoading(false)
            } else {
                toast.error(res.error?.data.msg! || "Something went wrong when try to register your account")
                setLoading(false)
            }
        }
    }


    async function handleGoogleRegister() {
        const data = await SignInWithGoogle(googleProvider)
        if(data && data.user.email && data.user.uid){
            //@ts-ignore
            const {firstName, lastName } = data._tokenResponse
            const {email, displayName, photoURL } = data.user
            const source:string = data.providerId || "third-party"
            const res = await AuthUserThirdParty(email, displayName || firstName + lastName, firstName, lastName, data.user.uid, photoURL, source)
            if (res.data && 'user' in res.data) {
                const { user, msg } = res.data;
                setGlobalState(prev => ({ ...prev, user: user }))
                toast.success("Register successful")
                setLoading(false)
                setOpen(true)
            } else {
                toast.error(res.error?.data.msg! || "Something went wrong when try to login to your account")
                setLoading(false)
            }
        }
    }

    async function handleGithubRegister() {
        const data = await SignInWithGoogle(githubProvider)
        if(data && data.user.email && data.user.uid){
            //@ts-ignore
            const {firstName, lastName } = data._tokenResponse
            const {email, displayName, photoURL } = data.user
            const source:string = data.providerId || "third-party"
            const res = await AuthUserThirdParty(email, displayName || firstName + lastName, firstName, lastName, data.user.uid, photoURL, source)
            if (res.data && 'user' in res.data) {
                const { user, msg } = res.data;
                setGlobalState(prev => ({ ...prev, user: user }))
                toast.success("Register successful")
                setLoading(false)
                setOpen(true)
            } else {
                toast.error(res.error?.data.msg! || "Something went wrong when try to login to your account")
                setLoading(false)
            }
        }
    }


    return (

    <> 

        <div 
        id="register-page"
        className="w-full min-h-[calc(100vh-4.5rem)] bg-gray-100  flex justify-start items-center   ">
            <Circular
            loading={loading}
            />
            {/* w-[30rem] h-[39rem] */}
            <div
                className="w-full h-auto sm:w-[30rem] px-4 py-8 sm:px-12  min-[250px]:mx-4 sm:mx-auto bg-white rounded-lg shadow-sm flex flex-col  gap-6">
                <h5
                    className="text-3xl font-semibold mb-2 text-gray-800 text-center"
                >
                    Register account
                </h5>
                <div className="flex flex-col gap-2.5">
                    <h6 className="text-sm font-semibold text-gray-800">Email</h6>
                    <InputRef
                        type="email"
                        placeholder="Email"
                        ref={emailRef}
                        className="border border-gray-200 placeholder-slate-600 bg-white text-slate-800 focus:ring focus:ring-primaryRed w-full px-5 py-3 rounded-md min-h-[40px]"
                    />
                </div>

                <div className="flex flex-col gap-2.5">
                    <h6 className="text-sm font-semibold text-gray-800">Username</h6>
                    <InputRef
                        type="text"
                        placeholder="Username"
                        ref={userNameRef}
                        className="border border-gray-200 placeholder-slate-600 bg-white text-slate-800 focus:ring focus:ring-primaryRed w-full px-5 py-3 rounded-md min-h-[40px]"
                    />
                </div>

                <div className="flex justify-between gap-4">
                    <div className="flex flex-col gap-2.5">
                        <h6 className="text-sm font-semibold text-gray-800">Firstname</h6>
                        <InputRef
                            type="text"
                            placeholder="Firstname"
                            ref={firstNameRef}
                            className="border border-gray-200 placeholder-slate-600 bg-white text-slate-800 focus:ring focus:ring-primaryRed w-full px-5 py-3 rounded-md min-h-[40px]"
                        />
                    </div>

                    <div className="flex flex-col gap-2.5">
                        <h6 className="text-sm font-semibold text-gray-800">Lastname</h6>
                        <InputRef
                            type="text"
                            placeholder="Lastname"
                            ref={lastNameRef}
                            className="border border-gray-200 placeholder-slate-600 bg-white text-slate-800 focus:ring focus:ring-primaryRed w-full px-5 py-3 rounded-md min-h-[40px]"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2.5">
                    <h6 className="text-sm font-semibold text-gray-800">Password</h6>
                    <InputRef
                        type="password"
                        placeholder="Password"
                        ref={passwordRef}
                        className="border border-gray-200 placeholder-slate-600 bg-white text-slate-800 focus:ring focus:ring-primaryRed w-full px-5 py-3 rounded-md min-h-[40px]"
                    />
                </div>

                <button
                    onClick={SubmitRegisterUser}
                    className="px-8 py-3 h-12 flex items-center justify-center rounded-lg bg-gray-800 hover:bg-gray-800/90"
                >
                    <h6 className="text-sm font-semibold text-white">Register</h6>
                </button>

                <div className="flex items-center gap-2">
                    <div className="flex-grow border-b border-gray-200"></div>
                    <p className="text-sm font-medium  text-gray-600">or</p>
                    <div className="flex-grow border-b border-gray-200"></div>
                </div>

                <button
                onClick={() => handleGoogleRegister()}
                    className="px-8 py-3 h-12 flex items-center justify-center rounded-lg bg-white hover:bg-gray-50 gap-2 border border-gray-200"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                        <path d="M10.492 11.5846V8.48464H18.292C18.4087 9.00964 18.5003 9.5013 18.5003 10.193C18.5003 14.9513 15.3087 18.3346 10.5003 18.3346C5.90033 18.3346 2.16699 14.6013 2.16699 10.0013C2.16699 5.4013 5.90033 1.66797 10.5003 1.66797C12.7503 1.66797 14.6337 2.49297 16.0753 3.84297L13.7087 6.14297C13.1087 5.5763 12.0587 4.90964 10.5003 4.90964C7.74199 4.90964 5.49199 7.2013 5.49199 10.0096C5.49199 12.818 7.74199 15.1096 10.5003 15.1096C13.692 15.1096 14.867 12.9013 15.0837 11.593H10.492V11.5846Z" fill="#1F2937" />
                    </svg>
                    <h6 className="text-sm font-semibold text-gray-800">Register with Google</h6>
                </button>

                <button
                onClick={() => handleGithubRegister()}
                    className="px-8 py-3 h-12 flex items-center justify-center rounded-lg bg-white hover:bg-gray-50 gap-2 border border-gray-200"
                >
                    <Github size={20} />
                    <h6 className="text-sm font-semibold text-gray-800">Register with GitHub</h6>
                </button>

                <div className="flex flex-wrap gap-0.5 justify-center">
                    <p className="text-sm font-normal text-gray-600">Already have an account?</p>
                    <Link
                        href={"/signin"}
                        className="text-sm font-semibold text-gray-800 hover:text-red-500 hover:underline"
                    >
                        Signin
                    </Link>
                </div>
            </div>
        </div>
        <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40" onClose={(value) => setOpen(value)}>
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
                    Authentication success!
                  </Dialog.Title>
                  <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
                    <Link
                      href={`/`}
                      type="button"
                      className="bg-primaryRed py-3 px-7 h-10 max-w-[10rem] flex items-center rounded-lg hover:bg-primaryRed/90"
                    >
                      <h6 className="text-sm font-semibold text-white line-clamp-1 ">
                        Back to home
                      </h6>
                    </Link>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>

    )

}
