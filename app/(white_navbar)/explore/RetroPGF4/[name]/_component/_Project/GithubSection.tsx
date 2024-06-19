import { iRetroPGF4Project } from '../../../RetroType4'
import Image from 'next/image'
import star from '@/public/static/githubCardSection/star'
import watch from '@/public/static/githubCardSection/watch'
import fork from '@/public/static/githubCardSection/fork'

export default function GithubSection({
  data,
  githubRef,
}: {
  data: iRetroPGF4Project
  githubRef: React.MutableRefObject<HTMLElement | null>
}) {
  function formatGithubLink(inputString: string): string {
    // Split the input string by '/'
    const parts = inputString.split('/')

    // Capitalize each part and join them with ' - '
    const formattedString = parts
      .map((part) =>
        part.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())
      )
      .join(' - ')

    return formattedString
  }
  return (
    <section
      id="Github"
      ref={githubRef}
      className="flex flex-col gap-6 bg-white rounded-lg p-2 lg:p-6"
    >
      <h3 className="text-3xl font-semibold">Github</h3>
      <hr className="border-t-gray-100" />
      {data.github.length != 0 &&
        data.github.map((item, i) => (
          <div className="flex flex-col gap-1 w-72" key={i}>
            <div className="flex flex-col flex-wrap gap-3 justify-center border rounded-md px-6 py-4 ">
              <Image
                src="/logo/github.svg"
                alt="github logo"
                className="rounded-full"
                width={30}
                height={24}
              />
              <p className="text-base font-normal text-gray-600">
                {formatGithubLink(item.slice(19))}
              </p>
              <p className="flex flex-row justify-start items-center gap-x-4">
                <p className="flex flex-row justify-start items-center text-base  text-gray-500 gap-1">
                  {star()}
                  Star
                </p>
                <p className="flex flex-row justify-start items-center text-base  text-gray-500 gap-1">
                  {watch()}
                  Watch
                </p>
                <p className="flex flex-row justify-start items-center text-base  text-gray-500 gap-1">
                  {fork()}
                  Fork
                </p>
                {/* <p className="text-base  text-gray-500">isFork</p> */}
              </p>
            </div>
          </div>
        ))}
    </section>
  )
}
