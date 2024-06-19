import { iRetroPGF4Project } from '../../../RetroType4'
import Image from 'next/image'
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
          <div className="flex flex-col gap-1" key={i}>
            <div className="flex flex-row flex-wrap gap-3 items-center">
              <Image
                src="/logo/github.svg"
                alt="github logo"
                className="rounded-full"
                width={24}
                height={24}
              />
              <p className="text-base font-normal text-gray-500">
                {formatGithubLink(item.slice(19))}
              </p>

              <p className="text-base font-semibold text-gray-600">Star</p>
              <p className="text-base font-semibold text-gray-600">Watch</p>
              <p className="text-base font-semibold text-gray-600">Fork</p>
              <p className="text-base font-semibold text-gray-600">isFork</p>
            </div>
          </div>
        ))}
    </section>
  )
}
