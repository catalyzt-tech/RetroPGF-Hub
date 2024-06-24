import ChevronRight from '@carbon/icons-react/lib/ChevronRight'
import Link from 'next/link'

export default function BreadCumpExplore({
  secondText,
}: {
  secondText: string
}) {
  return (
    <div className="flex flex-wrap gap-2 p-2 md:p-0">
      <Link
        href={'/explore'}
        className="text-xs font-normal text-gray-800 hover:text-red-500 hover:underline"
      >
        {' '}
        Explore{' '}
      </Link>
      <ChevronRight />
      <p className="text-xs font-normal text-gray-500"> {secondText} </p>
    </div>
  )
}
