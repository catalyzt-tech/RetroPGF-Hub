import Image from 'next/image'
import star from '@/public/static/githubCardSection/star'
// import watch from '@/public/static/githubCardSection/watch'
import fork from '@/public/static/githubCardSection/fork'
import Link from 'next/link'
import { iRetroPGF5Project } from '../../../RetroType5'

export default function GithubSection({
  data,
  githubRef,
}: {
  data: iRetroPGF5Project
  githubRef: React.MutableRefObject<HTMLElement | null>
}) {
  function formatGithubLink(inputString: string): string {
    const formattedString = inputString.split('https://github.com/')[1]
    return formattedString
  }
  return (
    <section
      id="GitHub"
      ref={githubRef}
      className="flex flex-col gap-5 bg-white rounded-lg p-4 lg:p-6 border"
    >
      <h3 className="text-2xl font-semibold ">GitHub</h3>
      <hr className="border-t-gray-100" />
      <div className="flex flex-row flex-wrap gap-4">
        {data.github.length == 0 && (
          <p className="text-base font-normal text-gray-600">
            There is no github repository for this project.
          </p>
        )}
        {data.github.length != 0 &&
          data.github.map((item, i) => (
            <Link
              href={item.url ? item.url : '#'}
              target="_blank"
              className={`flex items-center gap-2 rounded-lg bg-slate-50 px-6 py-4 min-w-72 flex-grow text-base font-medium line-clamp-2 hover:text-primaryRed`}
              key={item.name}
            >
              <Image
                src="/logo/github.svg"
                alt="github logo"
                className="rounded-full mb-1 bg-white"
                width={30}
                height={24}
              />
              {formatGithubLink(item.url)}
            </Link>
          ))}
      </div>
    </section>
  )
}
