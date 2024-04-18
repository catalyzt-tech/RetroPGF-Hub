import { ArrowDown } from '@carbon/icons-react'

import { FC } from 'react'
interface BoxProps {
  icon: JSX.Element
  value: string | number
  title: string
}

const StatsBox: FC<BoxProps> = ({ icon, value, title }) => {
  return (
    <div className="border rounded-2xl px-6 py-5 w-fit">
      {icon}
      <h2 className="text-base font-semibold mt-4">{value}</h2>
      <div className="text-sm text-gray-500 mt-2">{title}</div>
    </div>
  )
}
export default StatsBox
