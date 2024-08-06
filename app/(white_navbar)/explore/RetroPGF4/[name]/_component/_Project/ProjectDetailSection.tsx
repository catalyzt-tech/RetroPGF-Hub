import { handleCategoryRound4 } from '@/app/lib/InitialMount'
import LinkIcon from '@carbon/icons-react/lib/Link'
import Image from 'next/image'
import { iRetroPGF4Project } from '../../../RetroType4'
import { Book, LogoTwitter, Partnership, ThumbsUp } from '@carbon/icons-react'
import { numberWithCommas } from '@/app/lib/utils'
// import { convertImageClodinary } from '@/app/lib/utils'

export const truncateProjectId = (projectId: string) => {
  if (projectId.length <= 10) return projectId
  return `${projectId.slice(0, 8)}...${projectId.slice(-8)}`
}
export default function ProjectDetailSection({
  data,
}: {
  data: iRetroPGF4Project
}) {
  return (
    <>
      <div className=" flex flex-col bg-white rounded-lg overflow-hidden border">
        <div className="block relative w-full h-60 mb-16">
          <Image
            // convertImageClodinary(data.bannerPath, 947, 150)
            src={data.proejctCoverImageUrl || '/random/OP-Banner.png'}
            alt="background"
            fill
            className="w-fit object-cover"
          />
        </div>

        <div className="relative flex flex-col gap-4 p-2 sm:p-4 lg:p-6">
          <div className="absolute -top-32 left-2 lg:-top-32 lg:left-6 rounded-[0.25rem] flex flex-shrink-0 z-20">
            <div className="relative w-28 h-28 lg:w-32 lg:h-32">
              <Image
                src={data.projectAvatarUrl || '/random/OP-Logo.png'}
                alt="avatar image"
                className="rounded-lg object-cover bg-white p-1.5"
                fill
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 p-2 sm:p-4 md:px-4 md:pt-0 lg:p-0 ">
            <h3 className="flex items-center text-3xl lg:text-4xl font-semibold text-gray-800">
              {data.name}
              <div className="flex-grow"></div>
              <div className="hidden md:flex items-center px-10 py-3 rounded-xl text-xl bg-red-50">
                {numberWithCommas(data.reward ?? 20000)}
                <Image
                  src="/static/superchainLogo/optimism.svg"
                  alt="OP Token"
                  width={25}
                  height={25}
                  className="ml-2"
                />
              </div>
            </h3>
            <div className="hidden lg:block bg-gray-100 text-gray-600 text-sm truncate w-fit px-3 py-1.5 rounded-full">
              {truncateProjectId(data.projectId)}
            </div>

            <div className="flex w-fit items-center md:hidden px-5 py-3 mb-4 rounded-xl text-base font-medium bg-red-50">
              {numberWithCommas(data.reward ?? 20000)}
              <Image
                src="/static/superchainLogo/optimism.svg"
                alt="OP Token"
                width={25}
                height={25}
                className="ml-2"
              />
            </div>
            <div className="flex flex-wrap gap-6 mt-1 md:mt-3 lg:mt-4">
              {data.socialLinks.website.length > 0 &&
                data.socialLinks.website.map((item, i) => (
                  <a
                    href={item}
                    key={i}
                    className="flex items-center gap-2 text-gray-500 hover:text-primaryRed"
                  >
                    <LinkIcon size={20} />
                    <h6 className="text-sm font-normal line-clamp-1">{item}</h6>
                  </a>
                ))}
              {data.socialLinks.farcaster.length > 0 &&
                data.socialLinks.farcaster.map((item, i) => (
                  <a
                    href={item}
                    key={i}
                    className="flex items-center gap-2 text-gray-500 hover:text-primaryRed"
                  >
                    <Partnership size={20} />
                    <h6 className="text-sm font-normal line-clamp-1">{item}</h6>
                  </a>
                ))}
              {data.socialLinks.twitter !== null && (
                <a
                  href={data.socialLinks.twitter}
                  className="flex items-center gap-2 text-gray-500 hover:text-primaryRed"
                >
                  <LogoTwitter size={20} />
                  <h6 className="text-sm font-normal line-clamp-1">
                    {data.socialLinks.twitter}
                  </h6>
                </a>
              )}
              {data.socialLinks.mirror !== null && (
                <a
                  href={data.socialLinks.mirror}
                  className="flex items-center gap-2 text-gray-500 hover:text-primaryRed"
                >
                  <Book size={20} />
                  <h6 className="text-sm font-normal line-clamp-1">
                    {data.socialLinks.mirror}
                  </h6>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
