import Image from "next/image";
import Pin from '@carbon/icons-react/lib/Pin';

export default function AllSection({

}:{

})  {

return (

    <div className="flex flex-col gap-8 mt-8 ">
        <div className="flex flex-col gap-4 border rounded-lg p-6">
            <div className="flex gap-1.5 bg-gray-100 px-2 py-1 rounded-2xl w-fit">
                <Pin size={20} className="fill-gray-500"/>
                <p className="text-sm font-medium text-gray-700">Feedback Request</p>
            </div>
           <div className="flex gap-3">
                <Image
                src={"/random/metamask.png"}
                alt="avatar image"
                width={72}
                height={72}
                />
                <div className="flex flex-col gap-1">
                    <h6 className="text-2xl font-semibold text-gray-800">Metamask</h6>
                    <div className="px-2 py-1 rounded-2xl bg-sky-50 cursor-pointer hover:bg-sky-100">
                        <p className="text-sky-600 text-xs font-medium">Developer Ecosystem</p>
                    </div>
                </div>
           </div>
           <p 
           className="text-base font-normal text-gray-600 line-clamp-2 mb-4"
           >
            A decentralized marketplace for buying and selling music NFTs. We envision a world where artists have more control over their distribution, revenue streams, and can directly connect with fans in new ways. Our platform features easy minting, transparent royalty structures, and we're exploring ways to incorporate fan-driven rewards and exclusive content tied to NFT ownership.
            </p>

            <div className="flex gap-3">
                <Image
                alt="small avatar"
                src={"/random/smallAvatar.png"}
                width={36}
                height={36}
                />
            </div>

        </div>
        
    </div>

    )

}
