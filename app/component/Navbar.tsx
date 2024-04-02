'use client'
import React, { useState } from 'react'
import DrawerNav from './DrawerNav'
import './Navbar.css'
import Link from 'next/link'

const Navbar = ({
  bgColor="bg-transparent"
}:{
  bgColor?:string
}) => {
  const [open, setOpen] = useState(false)
  const menu = [
    { name: 'Explore', link: '/explore' },
    { name: 'Community', link: 'https://app.optimism.io/bridge/deposit' },
    { name: 'Resources', link: 'https://app.optimism.io/airdrops' },
  ]


  return (
    <>
    
      <div className={`${bgColor} relative z-20 flex items-center lg:justify-between justify-between px-8 py-2 lg:px-12 lg:py-4 h-[4.5rem] w-full`}>
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

        <div className="hidden lg:flex items-center gap-4 h-full">
          <button className="bg-white border py-3 px-7 h-10 flex items-center rounded-lg hover:bg-gray-50">
            <h6 className="text-sm font-semibold text-gray-800">Sign in</h6>
          </button>
          <button className="bg-primaryRed py-3 px-7 h-10 flex items-center rounded-lg hover:bg-primaryRed/90">
            <h6 className="text-sm font-semibold text-white">Get started</h6>
          </button>
        </div>

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