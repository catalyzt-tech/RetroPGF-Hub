import { LogoDiscord, LogoTwitter } from '@carbon/icons-react'
import LinkIcon from '@carbon/icons-react/lib/Link'
import Image from 'next/image'
import Link from 'next/link'

function ReturnLink() {
  return (
    <div className="flex items-center gap-8">
      <Link
        href={'/explore'}
        className="text-base font-semibold text-gray-800 hover:underline hover:text-primaryRed"
      >
        Explore
      </Link>
      <Link
        href={'/community'}
        className="text-base font-semibold text-gray-800 hover:underline hover:text-primaryRed"
      >
        Community
      </Link>
      <Link
        href={'/resource'}
        className="text-base font-semibold text-gray-800 hover:underline hover:text-primaryRed"
      >
        Resources
      </Link>
      <Link
        href={'/resource'}
        className="text-base font-semibold text-gray-800 hover:underline hover:text-primaryRed"
      >
        Impact Calculator
      </Link>
    </div>
  )
}

function ReturnLinkLogo() {
  return (
    <div className="flex gap-2">
      <a
        href="https://catalyzt.tech/"
        className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkIcon size={24} className="fill-gray-800" />
      </a>
      <a
        href="https://twitter.com/catalyzt_tech"
        className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LogoTwitter size={24} className="fill-gray-800" />
      </a>
      <a
        href="/"
        className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LogoDiscord size={24} className="fill-gray-800" />
      </a>
    </div>
  )
}

export default function Footer({}: {}) {
  return (
    <footer className="w-full px-4 lg:px-8 xl:px-12 mt-6">
      {/* Mobile Footer */}

      <div className="flex items-start min-[450px]:items-center lg:hidden flex-col gap-4 border-t py-4 mt-6 border-gray-100">
        <ReturnLinkLogo />
        <div className="">
          <h6 className="text-base font-normal text-gray-600">
            © 2024 RetroPGF Hub. All rights reserved.
          </h6>
          <div className="flex gap-0.5 flex-wrap text-sm text-gray-600">
            <span>This open-source project built by</span>
            <Link href="https://catalyzt.tech/" className="font-semibold">
              @Catalyzt
            </Link>
            .
          </div>
        </div>
      </div>

      {/* End Mobile Footer */}

      <div className="hidden lg:flex flex-col gap-2 border-t border-gray-100 py-6">
        <div className="flex justify-between">
          <div className="flex gap-4 ">
            <Link className="" href="/">
              <Image
                src={'/logo/logo.svg'}
                alt="logo"
                width={144}
                height={32}
              />
            </Link>
          </div>

          <ReturnLink />

          <div className="text-base font-normal text-gray-600">
            © 2024 RetroPGF Hub
          </div>
        </div>
        <div className="flex justify-between">
          <ReturnLinkLogo />
          <div className="">
            <h6 className="flex gap-1 text-base font-normal text-gray-600">
              This open-source project built by
              <Link
                href="https://catalyzt.tech/"
                className="text-base font-semibold text-gray-600"
              >
                @Catalyzt.
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </footer>
  )
}
