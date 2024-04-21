"use client"
import Input from "@/app/component/Input/Input";
import Search from '@carbon/icons-react/lib/Search';

export default function InputSearchExplore({
    search,
    setSearch,
}:{
    setSearch: React.Dispatch<React.SetStateAction<string>>
    search: string;
})  {



return (

    <Input
    value={search}
    onChange={(e:React.ChangeEvent<HTMLInputElement>) => setSearch(prev => e.target.value)}
    placeholder="Search project"
    Icon={<Search size={24} />}
    className="h-10 w-full rounded-full text-gray-600 focus:ring focus:ring-primaryRed"
    />

    )

}
