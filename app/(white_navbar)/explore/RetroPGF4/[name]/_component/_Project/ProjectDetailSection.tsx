import { handleCategoryRound4 } from '@/app/lib/InitialMount'
import LinkIcon from '@carbon/icons-react/lib/Link'
import Image from 'next/image'
import { iRetroPGF4Project } from '../../../RetroType4'
import { Book, LogoTwitter, Partnership, ThumbsUp } from '@carbon/icons-react'
// import { convertImageClodinary } from '@/app/lib/utils'
export default function ProjectDetailSection({
  data,
}: {
  data: iRetroPGF4Project
}) {
  return (
    <>
      <div className="flex flex-col bg-white rounded-lg overflow-hidden border">
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
          <div className="absolute -top-24 lg:-top-32 left-6 rounded-[0.25rem] flex flex-shrink-0 z-20">
            <div className="relative w-16 h-16 lg:w-32 lg:h-32">
              <Image
                src={data.projectAvatarUrl || '/random/OP-Logo.png'}
                alt="avatar image"
                className="rounded-lg object-cover bg-white  p-1.5"
                fill
              />
            </div>
          </div>

          <h3 className="text-3xl lg:text-4xl font-semibold text-gray-800">
            {data.name}
          </h3>
          <div className="flex flex-wrap gap-6 mt-3">
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
            <a
              href={data.socialLinks.twitter}
              className="flex items-center gap-2 text-gray-500 hover:text-primaryRed"
            >
              <LogoTwitter size={20} />
              <h6 className="text-sm font-normal line-clamp-1">
                {data.socialLinks.twitter}
              </h6>
            </a>
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

          {/* Category */}
          <div className="">
            <div className="flex  flex-wrap gap-4 ">
              {handleCategoryRound4(data.category)}
              {/* <div className="inline-flex px-2 py-1 rounded-full bg-slate-50 hover:bg-slate-100/75 cursor-pointer w-fit">
                <h6 className="text-xs font-normal text-gray-600 line-clamp-1 break-all">
                  {''}
                </h6>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
