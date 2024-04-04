'use client'
import React, { Fragment, useState } from 'react'
import DrawerNav from './DrawerNav'
import './Navbar.css'
import Link from 'next/link'
import { GlobalContextType, useGlobal } from '../provider/globalContext'
import Help from '@carbon/icons-react/lib/Help'
import { Menu, Transition } from '@headlessui/react'
import Image from 'next/image'
import User from '@carbon/icons-react/lib/User'
import Chat from '@carbon/icons-react/lib/Chat'
import Logout from '@carbon/icons-react/lib/Logout'

const Navbar = ({
  bgColor="bg-transparent",
  shadow=false
}:{
  bgColor?:string,
  shadow?:boolean
}) => {

  const {globalState ,setGlobalState}:GlobalContextType = useGlobal?.()!;


  const [open, setOpen] = useState(false)
  const menu = [
    { name: 'Explore', link: '/explore' },
    { name: 'Community', link: '/community' },
    { name: 'Resources', link: '/resource' },
  ]


  return (
    <>
    
      <div className={`${bgColor} ${shadow && "shadow"} relative z-20 flex items-center lg:justify-between justify-between px-8 py-2 lg:px-12 lg:py-4 h-[4.5rem] w-full`}>
        <div className="flex justify-start items-center">
          <div className="mr-12">
            <Link
              className="text-custom-red font-rubik !font-semibold"
              href="https://optimism.io/join"
              >
              OPTIMISM
            </Link>
          </div>

          <div className="hidden lg:flex gap-8 items-center ">
            <ul className="flex gap-8 !font-inter  ">
              {menu.map((item, index) => (
                <a href={item.link} key={index}>
                  <li className="NavMenu !font-medium transition ease-in-out duration-300">
                    <ul className="text-base font-semibold text-gray-800">{item.name}</ul>
                  </li>
                </a>
              ))}
            </ul>
          </div>
        </div>

        {globalState.user ? 
        <div className="hidden lg:flex items-center gap-6">
          <Help className="text-gray-800" size={28} />
          <Menu 
      
      as="div" className="relative inline-block text-left">

        <div>
          <Menu.Button className="">
              <Image
              alt='avatar image'
              src={"/random/smallAvatar.png"}
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
          <Menu.Items className="absolute p-2 z-20 right-0 mt-2 w-56 origin-top-right flex flex-col gap-2  rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="flex items-center gap-2.5">
              <Image
                alt='avatar image'
                src={"/random/smallAvatar.png"}
                width={64}
                height={64}
                className="rounded-full"
                />
                <div className="flex flex-col  gap-1">
                  <h6 className="text-sm font-semibold text-gray-800">@Smartcontact</h6>
                  <p className="tex-sm font-normal text-gray-600">Smart Contact</p>
                </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex gap-1 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                <User  
                size={20}
                className="fill-gray-800"
                />
                <p className="text-sm font-normal">Account</p>
              </div>

              <div className="flex gap-1 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                <Chat  
                size={20}
                className="fill-gray-800"
                />
                <p className="text-sm font-normal">Submit Feedback</p>
              </div>
              
              <div className="flex gap-1 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                <Help  
                size={20}
                className="fill-gray-800"
                />
                <p className="text-sm font-normal">Ask Question</p>
              </div>
            </div>

            <hr/> 

            <div className="flex gap-1 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                <Logout  
                size={20}
                className="fill-gray-800"
                />
                <p className="text-sm font-normal">Logout</p>
              </div>

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
          <button className="bg-primaryRed py-3 px-7 h-10 flex items-center rounded-lg hover:bg-primaryRed/90">
            <h6 className="text-sm font-semibold text-white">Get started</h6>
          </button>
        </div>  
      }

        <div
          className="flex lg:hidden Hamburger cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <a href="#">
            <svg
              fill="#424242"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2,4A1,1,0,0,1,3,3H21a1,1,0,0,1,0,2H3A1,1,0,0,1,2,4Zm1,9H21a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Zm0,8H21a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Z" />
            </svg>
          </a>
        </div>

      </div>

      <DrawerNav open={open} onClose={() => setOpen(false)}></DrawerNav>
    </>
  )
}
export default Navbar