import Link from 'next/link'
import { iRetroPGF5Project } from '../../../RetroType5'
import LinkIcon from '@carbon/icons-react/lib/Link'

interface iPackageSection {
  data: iRetroPGF5Project
  packageRef: React.MutableRefObject<HTMLElement | null>
}
export default function PackageSection({ data, packageRef }: iPackageSection) {
  return (
    <section
      id="Package"
      ref={packageRef}
      className="flex flex-col gap-6 bg-white rounded-lg p-4 lg:p-6 border"
    >
      <h3 className="text-2xl font-semibold">Package</h3>
      <hr className="border-t-gray-100" />
      {data.packages?.length == 0 && (
        <p className="text-base font-normal text-gray-600">
          There is no package for this project.
        </p>
      )}
      {data.packages?.length !== 0 &&
        data.packages?.map((item, i) => (
          <div
            key={item.name}
            className="flex flex-col gap-1 bg-slate-50 rounded-lg px-6 py-4 min-w-72"
          >
            <Link
              key={i}
              href={item.url ? item.url : '#'}
              className="flex items-center gap-2  flex-grow text-base font-medium line-clamp-2 hover:text-primaryRed"
            >
              <LinkIcon size={20} className="group-hover:text-primaryRed" />
              {item.name ? item.name : item.url}
            </Link>
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
