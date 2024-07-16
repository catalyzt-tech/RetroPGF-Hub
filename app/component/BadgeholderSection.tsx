import React from 'react'
import BadgeholderCard from '../(white_navbar)/explore/RetroPGF4/_component/BadgeholderCard'
import { makeRequest } from '../hook/makeRequest'
import axios from 'axios'

const BadgeholderSection = () => {
    const agoraBaseUrl = process.env.NEXT_PUBLIC_AGORA_API_BASE

    React.useEffect(() => {
        // axios.get(`/retrofunding/rounds/4/ballots`, {
        //     baseURL: agoraBaseUrl,
        //     method: "GET",
        //     headers: {
        //         Authorization: `${process.env.NEXT_PUBLIC_AGORA_API_KEY}`
        //     }
        // }).then((res) => { console.log(res.data) })
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://vote.optimism.io/api/v1/retrofunding/rounds/4/ballots',
            headers: { 
              'Authorization': 'Bearer 5df291cb-37dd-49f8-9f2f-d649b6e5296f'
            }
          };
          
          axios.request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
          })
          .catch((error) => {
            console.log(error);
          });
    }, [])
    

  return (
    <div className="xl:mx-10">
      <div className="font-rubik text-black text-2xl">Search Bar & Filter</div>
      <div className="grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 flex-col gap-6">
        {/* {currentItems.map((item, i) => (
          <React.Fragment key={i}>
            <BadgeholderCard />
          </React.Fragment>
        ))} */}
      </div>
    </div>
  )
}

export default BadgeholderSection
