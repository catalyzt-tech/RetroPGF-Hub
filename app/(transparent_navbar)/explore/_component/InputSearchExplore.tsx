"use client"
"use client"
import Input from "@/app/component/Input/Input";
import { useState } from "react";
import Search from '@carbon/icons-react/lib/Search';

export default function InputSearchExplore({

}:{
    
})  {
    const [state, setState] = useState({
        search: "",
    })
return (

    <Input
    value={state.search}
    onChange={(e:React.ChangeEvent<HTMLInputElement>) => setState(prev => ({...prev, search:e.target.value}))}
    placeholder="Search project"
    Icon={<Search size={24} />}
    className="h-10 w-full rounded-full text-gray-600 focus:ring focus:ring-primaryRed"
    />

    )

}
