'use client'
import { Transition, Dialog } from '@headlessui/react'
import { Fragment } from 'react'
import './Navbar.css'
import Link from 'next/link'
import Image from 'next/image'
import Close from '@carbon/icons-react/lib/Close'
import { GlobalContextType, useGlobal } from '../provider/globalContext'


export default function DrawerNav({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const { globalState }: GlobalContextType = useGlobal?.()!;

  const menu = [
    { name: 'Explore', link: '/explore' },
    { name: 'Community', link: '/community' },
    { name: 'Resources', link: '/resource' },

  ]

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        open={open}
        as="div"
        className="flex lg:hidden relative z-50"
        onClose={onClose}
      >
        <div className="fixed inset-0 bg-black/25" />

        <div className="fixed inset-0 overflow-y-auto h-full w-screen">
          <div className="flex h-full  items-center justify-center text-center ">
            <Transition.Child
              as={Fragment}
              enter="duration-500"
              enterFrom="- opacity-0"
              enterTo=" opacity-100"
              leave="ease-out duration-500"
              leaveFrom=""
              leaveTo=""
            >
              <Dialog.Panel className="w-full h-full transform overflow-hidden bg-white  text-left align-middle shadow-xl transition-all  overflow-y-auto">
                <Dialog.Title
                  as="div"
                  className="flex justify-between items-center h-[4.5em] px-4 md:px-8 py-2 lg:px-12 lg:py-4"
                >
                   <Link
                    href={"/"}
                    >
                    <div
                      className="relative w-40 h-8 min-w-32 min-h-6 max-w-32 max-h-6 min-[300px]:min-w-36 min-[300px]:min-h-8 min-[300px]:max-w-64 min-[300px]:max-h-8"
                      >
                      <Image
                      src={"/logo/logo.svg"}
                      alt="logo"
                      fill
                      />
                    </div>
                    </Link>
                  <div
                    className="cursor-pointer flex"
                    onClick={onClose}
                  >
                    <Close size={24} className="fill-gray-800" />
                  </div>
                </Dialog.Title>
                <ul className="Drawer">
                  {menu.map((item, index) => (
                    <li key={index} className="flex p-4 py-6 items-center">
                      <Link href={item.link} className="text-2xl font-semibold text-gray-800" onClick={onClose}>
                        {item.name}
                      </Link>
                    </li>
                  ))}

                 {!globalState.user && 
                 <>
                  <li className="flex p-4 py-6 items-center">
                    <Link href={"/register"} className="text-2xl font-semibold text-gray-800">
                        Register
                    </Link>
                  </li>
                  <li className="flex p-4 py-6 items-center">
                    <Link href={"/signin"} className="text-2xl font-semibold text-gray-800">
                        Sign In
                    </Link>
                  </li>
                 </>
                 }


                  <hr className="my-3 border-gray-200 m-0  w-full" />
                </ul>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>

        
      </Dialog>
    </Transition>
  )
}