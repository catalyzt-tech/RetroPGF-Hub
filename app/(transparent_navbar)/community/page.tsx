import Link from 'next/link'
import Cpage from './Cpage'
import { GetProjectsWithSearch } from '@/app/hook/projectRequest'
import Error from '@/app/(white_navbar)/community/[type]/[id]/_component/Error'
import { cookies } from 'next/headers'
import { Metadata } from 'next'

const itemsPerpage = 10

export const metadata: Metadata = {
  title: 'Community | RetroPGF Hub',
  description:
    'Community-driven platform for project creators to submit their project ideas and get feedback.',
  openGraph: {
    type: 'website',
    url: 'https://retropgfhub.com',
    title: 'Community | RetroPGF Hub',
    description:
      'Community-driven platform for project creators to submit their project ideas and get feedback.',
    siteName: 'retropgfhub.com',
    images: [
      {
        url: 'https://retropgfhub.com/cover-community.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://retropgfhub.com',
    creator: 'Catalyzt.tech',
    images: ['https://retropgfhub.com/cover-community.png'],
  },
}

async function handleGetProjects(token: string) {
  const res = await GetProjectsWithSearch(
    itemsPerpage,
    0 * itemsPerpage,
    'newest',
    'all',
    '',
    '',
    token
  )
  if (res.data && 'project' in res.data) {
    const { project, msg, pageCount } = res.data
    if (project) {
      return { project, err: undefined, pageCount }
    } else {
      return { project, err: undefined, pageCount }
    }
  } else {
    return {
      project: undefined,
      err: (res.data && res.data.msg) || 'failed to fetch project',
      pageCount: 0,
    }
  }
}

export default async function page({}: {}) {
  const token = cookies().get('accessToken')?.value || ''
  const { project, err, pageCount } = await handleGetProjects(token)
  if (err || !project || project.length === 0) {
    return (
      <Error
        titleError="400 Failed to get projects"
        subTitle="Page error"
        desc="Failed to fetch the project maybe server shutdown"
      />
    )
  }

  return (
    <>
      <div className="relative max-[220px]:min-h-[26rem] max-[220px]:max-h-[26rem] max-h-[19rem] min-h-[19rem]">
        <div className="bg-gradient-to-br from-[#FFDFDD] to-100% via-[#FFD2FF] to-[#DCDBFF] w-full absolute -top-[4.5rem] left-0 h-[23.5rem] max-[220px]:h-[26rem]">
          <div className="mt-[4.5rem]" />

          <div className="px-4 md:px-0 py-12 md:py-16  flex flex-col justify-center items-center font-rubik h-[19rem] w-full">
            <h1 className="mb-2 md:mb-4 text-3xl md:text-5xl font-semibold text-gray-800">
              RetroPGF Hub Community
            </h1>
            <p className="mb-4 md:mb-8 text-base md:text-lg font-normal text-gray-800">
              Share your ideas, thoughts and feedback to help and grow together!
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href={'/community/ask-question'}
                className="w-44 h-10 bg-white hover:bg-gray-50 py-3 px-8 rounded-lg "
              >
                <h6 className="text-sm font-semibold text-gray-800 text-center self-center">
                  Ask question
                </h6>
              </Link>
              <Link
                href="/community/submit-idea"
                className="w-44 h-10 bg-gray-800 hover:bg-gray-800/80 py-3 px-7 rounded-lg "
              >
                <h6 className="text-sm font-semibold text-white text-center self-center">
                  Submit your idea
                </h6>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-20 py-8 md:max-w-[1300px] mx-auto">
        <Cpage
          rawD={project}
          itemsPerpage={itemsPerpage}
          pageCount={pageCount}
        />
      </div>
    </>
  )
}
