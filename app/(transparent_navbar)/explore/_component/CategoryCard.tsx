import Image from "next/image";

export default function CategoryCard({
    i
}:{
    i:number
})  {

return (

    <div className="flex items-center flex-col gap-2 p-6 flex-grow-1 flex-shrink-0 border rounded-lg shadow-sm h-[13.75rem] w-[14.8rem] mx-3"> 
        <Image
        src="/random/category.png"
        alt="category image"
        width={96}
        height={96}
        />
        <h6 className="text-sm font-semibold text-gray-800">
            Top 10% Granted {i}
        </h6>
        <p className="text-center text-xs font-normal text-gray-600">Popular project that make big impact</p>
    </div>

    )

}
