'use client'
import React, { Fragment, useState } from 'react'
import DrawerNav from './DrawerNav'
import './Navbar.css'
import Link from 'next/link'
import { GlobalContextType, useGlobal } from '../provider/globalContext'
import Help from '@carbon/icons-react/lib/Help'
import MenuIcon from '@carbon/icons-react/lib/Menu'
import { Menu, Transition } from '@headlessui/react'
import Image from 'next/image'
import Chat from '@carbon/icons-react/lib/Chat'
import Logout from '@carbon/icons-react/lib/Logout'
import toast from 'react-hot-toast'
import { LogoutUser } from '../hook/userRequest'
import { Circular } from './Loading/Circular'
import {  getAuth, signOut } from "firebase/auth";
import { app } from '../lib/firebase'

const Navbar = ({
  bgColor="bg-transparent",
  shadow=false
}:{
  bgColor?:string,
  shadow?:boolean
}) => {

  const {globalState ,setGlobalState}:GlobalContextType = useGlobal?.()!;

  const [loading, setLoading] = useState<boolean>(false)
  const [open, setOpen] = useState(false)
  const menu = [
    { name: 'Explore', link: '/explore' },
    { name: 'Community', link: '/community' },
    { name: 'Resources', link: '/resource' },
  ]

  async function SubmitLogout(e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) {
    e.preventDefault();

    setLoading(true)
    const res = await LogoutUser()
    if(res.status === 200){
      toast.success("Logout successful")
      setGlobalState(prev => ({...prev, user:undefined}))
      setLoading(false)
    }
    else {
      toast.error(res.error?.data.msg! || "Something went wrong when try to logout")
      setLoading(false)
    }
    signOut(getAuth(app)).then(() => {
      // Sign-out successful.
          // navigate("/");
          console.log("Signed out successfully")
      }).catch((error:any) => {
        console.log(error)
      });
  }


  return (
    <>
      <Circular
      loading={loading}
      />
      <div className={`${bgColor} ${shadow && "shadow"} relative z-40 flex items-center lg:justify-between justify-between px-4 md:px-8 py-2 lg:px-12 lg:py-4 h-[4.5rem] w-full`}>
        <div className="flex justify-start items-center">
          <div className="mr-12">
            <Link
            href={"/"}
            >
            <div
              className="relative w-36 h-8 min-w-32 min-h-6 max-w-32 max-h-6 min-[300px]:min-w-36 min-[300px]:min-h-8 min-[300px]:max-w-36 min-[300px]:max-h-8"
              >
              <Image
              src={"/logo/logo.svg"}
              alt="logo"
              fill
              />
            </div>
            </Link>
          </div>

          <div className="hidden lg:flex gap-8 items-center ">
            <ul className="flex gap-8 !font-inter  ">
              {bgColor === "bg-transparent" ? 
              <>
              {menu.map((item, index) => (
                <a href={item.link} key={index}>
                  <li className="flex items-center !font-medium relative group">
                    <h6 className="text-base font-semibold text-gray-800">{item.name}</h6>
                    <div className="hidden group-hover:block absolute border-t-2 border-red-600 -bottom-6 left-0 w-full h-4"></div>
                  </li>
                </a>
              ))}
              </>
              :
              <>
              {menu.map((item, index) => (
                <a href={item.link} key={index}>
                  <li className="flex items-center !font-medium relative group">
                    <h6 className="text-base font-semibold text-gray-800">{item.name}</h6>
                    <div className="hidden group-hover:block absolute border-t-2 border-red-600 -bottom-10 left-0 w-full h-4"></div>
                  </li>
                </a>
              ))}
              </>
              }
            </ul>
          </div>
        </div>

        {globalState.user ? 
        <div className="hidden lg:flex items-center gap-6">
          <Menu 
      
         as="div" className="relative inline-block text-left">

        <div>
          <Menu.Button className="">
              <Image
              alt='avatar image'
              src={globalState.user.profile ? globalState.user.profile : "/random/smallAvatar.png"}
              width={48}
              height={48}
              className="rounded-full"
              />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute p-4 pt-6 z-20 right-0 mt-2 w-80 origin-top-right flex flex-col gap-2  rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="flex items-center gap-2.5">
              <Image
                alt='avatar image'
                src={globalState.user.profile ? globalState.user.profile : "/random/smallAvatar.png" }
                width={64}
                height={64}
                className="rounded-full"
                />
                <div className="flex flex-col gap-1 overflow-hidden">
                  <p className="tex-sm font-semibold text-gray-800 line-clamp-1">{globalState.user.username}</p>
                  <h6 className="text-sm font-normal text-gray-600 line-clamp-1">{globalState.user.email}</h6>
                </div>
            </div>
            <div className="flex flex-col gap-1 mt-4">
              {/* <div className="flex gap-1 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                <User  
                size={20}
                className="fill-gray-800"
                />
                <p className="text-sm font-normal">Account</p>
              </div> */}

              <a 
              href={"https://github.com/catalyzt-tech/RetroPGF-Hub/issues"}
              target="_blank" rel="noopener noreferrer" 
              className="flex gap-1 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                <Chat  
                size={20}
                className="fill-gray-800"
                />
                <p className="text-sm font-normal">Submit Feedback</p>
              </a>
              
              <a
              href={"https://github.com/catalyzt-tech/RetroPGF-Hub/issues"}
              target="_blank" rel="noopener noreferrer" 
              className="flex gap-1 p-2 hover:bg-gray-100 rounded-lg">
                <Help  
                size={20}
                className="fill-gray-800"
                />
                <p className="text-sm font-normal">Ask Question</p>
              </a>
            </div>

            <hr/> 

            <button 
            onClick={SubmitLogout}
            className="flex gap-1 p-2 hover:bg-gray-100 rounded-lg">
                <Logout  
                size={20}
                className="fill-gray-800"
                />
                <p className="text-sm font-normal">Logout</p>
              </button>

          </Menu.Items>
        </Transition>
      </Menu>

        </div>
        :
        <div className="hidden lg:flex items-center gap-4 h-full">
          <Link  
          href={"/signin"}
          className="bg-white border py-3 px-7 h-10 flex items-center rounded-lg hover:bg-gray-50">
            <h6 className="text-sm font-semibold text-gray-800">Sign in</h6>
          </Link>
          <Link 
          href={"/"}
          className="bg-primaryRed py-3 px-7 h-10 flex items-center rounded-lg hover:bg-primaryRed/90">
            <h6 className="text-sm font-semibold text-white">Get started</h6>
          </Link>
        </div>  
      }

        <div
          className="flex lg:hidden items-center cursor-pointer"
          onClick={() => setOpen(true)}
        >
            <MenuIcon size={24} className="fill-gray-800" />
        </div>

      </div>

      <DrawerNav open={open} onClose={() => setOpen(false)}></DrawerNav>
    </>
  )
}
export default Navbar