import React, { FC, Fragment } from 'react'
import BadgeholderCard from '../BadgeholderCard'
import { makeRequest } from '../../../../../hook/makeRequest'
import axios from 'axios'

const BadgeholderTab: FC = () => {
  //waiting for data pull

  return (
    <div className="xl:mx-10">
      <div className="font-rubik text-black text-2xl">Search Bar & Filter</div>
      <div className="grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 flex-col gap-6">
        {/* {currentItems.map((item, i) => (
          <Fragment key={i}>
            <BadgeholderCard />
          </Fragment>
        ))} */}
      </div>
    </div>
  )
}

export default BadgeholderTab
