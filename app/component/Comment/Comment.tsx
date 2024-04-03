import Image from "next/image";
import User from "@carbon/icons-react/lib/User";
import Favorite from "@carbon/icons-react/lib/Favorite";
import Chat from "@carbon/icons-react/lib/Chat";

export default function Comment({
    handleFavorite,
    handleReply,
}:{
    handleFavorite(e: React.FormEvent<HTMLFormElement | HTMLButtonElement>): Promise<void>;
    handleReply(e: React.FormEvent<HTMLFormElement | HTMLButtonElement>): Promise<void>;
})  {

return (

    <> 
    <div className="flex flex-wrap min-[350px]:flex-nowrap gap-4 p-2 md:p-0">
                <div className="min-w-12 min-h-12 max-w-12 max-h-12">
                    <Image
                        alt="small avatar"
                        src={"/random/smallAvatar.png"}
                        width={48}
                        height={48}
                    />
                </div>
                <div className="flex flex-col gap-4">
                   <div className="flex flex-col gap-1">
                        <div className="flex flex-wrap gap-1">
                            <h6 className="text-sm font-medium text-gray-800">
                                @commentaccount
                            </h6>    
    
                            <p className="text-sm font-medium text-gray-800">·</p>
    
                            <h6 className="text-sm font-normal text-gray-500">
                                10 Feb 2024
                            </h6>    

                        </div>    
                        <div className="flex items-center justify-center w-fit  gap-1 px-2 py-1 bg-red-50 hover:bg-red-100/70 rounded-2xl">
                            <User size={16} className="fill-red-700"/>
                            <h6 className="text-red-700 text-xs font-medium">RetroPGF3</h6>
                        </div>
                   </div>

                    <p className="text-base font-normal text-gray-800">
                    The Keccak project started in 2008 for the development of the Keccak hash function, winner of SHA3 competition and used in Ethereum. The project is a multi discipline effort of cryptography, software and hardware development. All the developments are open source, no patents and several incentives for 3rd party security analysis. The project is still active for providing improved implementations. 
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        <button 
                        onClick={handleFavorite}
                        className="flex items-center gap-2  px-3 py-1.5">
                            <Favorite size={24} />
                            <p className="text-base font-medium text-gray-800">12</p>
                        </button>

                        <button 
                        onClick={handleReply}
                        className="flex items-center gap-2  px-3 py-1.5">
                            <Chat size={24} />
                            <p className="text-base font-medium text-gray-800">Reply</p>
                        </button>
                    </div>

                </div>    
            </div>
    </>

    )

}
