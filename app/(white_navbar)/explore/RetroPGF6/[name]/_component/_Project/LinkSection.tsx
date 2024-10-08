import { EASProjectMetadata } from '@/app/types/realtime-api-agora'
import { iRetroPGF6Project } from '../../../RetroType6'
import LinkIcon from '@carbon/icons-react/lib/Link'

interface iLinkSection {
  data: iRetroPGF6Project
  linkSectionRef: React.MutableRefObject<HTMLElement | null>
}
export default function LinkSection({ data, linkSectionRef }: iLinkSection) {
  return (
    <section
      id="Link"
      ref={linkSectionRef}
      className="flex flex-col gap-6 bg-white rounded-lg p-4 lg:p-6 border"
    >
      <h3 className="text-2xl font-semibold">Link</h3>
      <hr className="hidden sm:block border-t-gray-100" />
      {data.links?.length === 0 && (
        <p className="text-base font-normal text-gray-600">
          There is no link for this project.
        </p>
      )}
      {data.links?.length !== 0 &&
        data.links?.map((item, i) => (
          <div
            className="flex flex-col gap-1 bg-slate-50 rounded-lg px-6 py-4 min-w-72"
            key={i}
          >
            <a
              href={item.url || ''}
              className="flex items-center gap-2  flex-grow text-base font-medium line-clamp-2 hover:text-primaryRed"
            >
              <LinkIcon size={20} className="group-hover:text-primaryRed" />
              {item.name ? item.name : item.url}
            </a>

            <div>
              {item.description && (
                <p className="text-sm text-gray-500">{item.description}</p>
              )}
            </div>
          </div>
        ))}
    </section>
  )
}
