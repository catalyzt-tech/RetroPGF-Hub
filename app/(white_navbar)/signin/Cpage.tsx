"use client"
import InputRef from "@/app/component/Input/InputRef";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import Github from '@carbon/icons-react/lib/LogoGithub';
import Link from "next/link";
import { GlobalContextType, useGlobal } from "@/app/provider/globalContext";
import { useRouter } from "next/navigation";
import { AuthUserThirdParty, LoginUser } from "@/app/hook/userRequest";
import { Circular } from "@/app/component/Loading/Circular";
import { githubProvider, googleProvider } from "@/app/lib/firebase";
export default function Cpage({

}:{
    
})  {

    const router = useRouter();
    const { globalState, setGlobalState, SignInWithGoogle }: GlobalContextType = useGlobal?.()!;
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        if (typeof (globalState.user) === "object") {
            router.push('/');
        }
    }, [globalState.user, router])

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    async function SubmitLogin(e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) {
        e.preventDefault();

        let { email, password } = {
            email: emailRef.current?.value,
            password: passwordRef.current?.value,
        }
        if (!email) {
            toast.error("emai is required")
        }
        else if (!password) {
            toast.error("password is required")
        }
        else {
            setLoading(true)
            const res = await LoginUser(email, password)
            if (res.data && 'user' in res.data) {
                const { user, msg } = res.data;
                setGlobalState(prev => ({ ...prev, user: user }))
                toast.success("Login successful")
                setLoading(false)
            } else {
                toast.error(res.error?.data.msg! || "Something went wrong when try to login to your account")
                setLoading(false)
            }
        }

    }

    async function handleGoogleLogin() {
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
                toast.success("Login successful")
                setLoading(false)
            } else {
                toast.error(res.error?.data.msg! || "Something went wrong when try to login to your account")
                setLoading(false)
            }
        }
    }
    
    async function handleGithubLogin() {
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
                toast.success("Login successful")
                setLoading(false)
            } else {
                toast.error(res.error?.data.msg! || "Something went wrong when try to login to your account")
                setLoading(false)
            }
        }
    }


return (

     <div className="w-full min-h-[calc(100vh-4.5rem)] bg-gray-100  flex justify-start items-center   ">
            <Circular
            loading={loading}
            />
            {/* w-[30rem] h-[39rem] */}
            <div
            // onSubmit={SubmitLogin}
            className="w-full h-auto sm:w-[30rem] md:h-[39rem] px-4 py-8 sm:px-12  min-[250px]:mx-4 sm:mx-auto bg-white rounded-lg shadow-sm flex flex-col gap-6">
                <h5
                    className="text-3xl font-semibold mb-2 text-gray-800 text-center"
                >
                    Sign in to your account
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
                    <div className="flex flex-wrap justify-between">
                        <h6 className="text-sm font-semibold text-gray-800">Password</h6>
                        <h6 className="text-sm font-medium text-gray-600">Forget Password?</h6>
                    </div>
                    <InputRef
                        type="password"
                        placeholder="Password"
                        ref={passwordRef}
                        className="border border-gray-200 placeholder-slate-600 bg-white text-slate-800 focus:ring focus:ring-primaryRed w-full px-5 py-3 rounded-md min-h-[40px]"
                    />
                </div>

                <button
                 onClick={SubmitLogin}
                className="px-8 py-3 h-12 flex items-center justify-center rounded-lg bg-gray-800 hover:bg-gray-800/90"
                >
                    <h6 className="text-sm font-semibold text-white">Sign in</h6>
                </button>

                <div className="flex items-center gap-2">
                    <div className="flex-grow border-b border-gray-200"></div>
                    <p className="text-sm font-medium  text-gray-600">or</p>
                    <div className="flex-grow border-b border-gray-200"></div>
                </div>

                <button
                    onClick={() => handleGoogleLogin()}
                    
                    className="px-8 py-3 h-12 flex items-center justify-center rounded-lg bg-white hover:bg-gray-50 gap-2 border border-gray-200"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                        <path d="M10.492 11.5846V8.48464H18.292C18.4087 9.00964 18.5003 9.5013 18.5003 10.193C18.5003 14.9513 15.3087 18.3346 10.5003 18.3346C5.90033 18.3346 2.16699 14.6013 2.16699 10.0013C2.16699 5.4013 5.90033 1.66797 10.5003 1.66797C12.7503 1.66797 14.6337 2.49297 16.0753 3.84297L13.7087 6.14297C13.1087 5.5763 12.0587 4.90964 10.5003 4.90964C7.74199 4.90964 5.49199 7.2013 5.49199 10.0096C5.49199 12.818 7.74199 15.1096 10.5003 15.1096C13.692 15.1096 14.867 12.9013 15.0837 11.593H10.492V11.5846Z" fill="#1F2937" />
                    </svg>
                    <h6 className="text-sm font-semibold text-gray-800">Sign in with Google</h6>
                </button>
                <button
                    onClick={() => handleGithubLogin()}
                    className="px-8 py-3 h-12 flex items-center justify-center rounded-lg bg-white hover:bg-gray-50 gap-2 border border-gray-200"
                >
                    <Github size={20} />
                    <h6 className="text-sm font-semibold text-gray-800">Sign in with GitHub</h6>
                </button>

                <div className="flex flex-wrap gap-0.5 justify-center">
                    <p className="text-sm font-normal text-gray-600">Dont have an account yet?</p>
                    <Link
                        href={"/register"}
                        className="text-sm font-semibold text-gray-800 hover:text-red-500 hover:underline"
                    >
                        Create Account
                    </Link>
                </div>
            </div>
        </div>

    )

}
