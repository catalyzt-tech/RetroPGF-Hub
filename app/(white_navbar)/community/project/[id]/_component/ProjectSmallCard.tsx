import Pin from '@carbon/icons-react/lib/Pin';
import Image from "next/image";
import Link from "next/link";
import Favorite from "@carbon/icons-react/lib/Favorite";
import Chat from "@carbon/icons-react/lib/Chat";

export default function ProjectSmallCard({

}: {

    }) {

    return (

        <div className="p-6 bg-white flex flex-col gap-4 rounded-lg border border-gray-200">
            <div className="flex gap-1.5 bg-gray-100 px-2 py-1 rounded-2xl w-fit">
                <Pin size={20} className="fill-gray-500" />
                <p className="text-sm font-medium text-gray-700">Feedback Request</p>
            </div>
            <div className="flex gap-3">
                <Image
                    src={"/random/metamask.png"}
                    alt="avatar image"
                    className="rounded-[4rem]"
                    width={72}
                    height={72}
                />
                <div className="flex flex-col gap-1">
                    <Link
                        href={`/community/project/${1}`}
                        className="text-xl font-semibold text-gray-800 hover:text-blue-500 hover:underline">
                        Metamask
                    </Link>
                    <div className="px-2 py-1 rounded-2xl bg-sky-50 cursor-pointer hover:bg-sky-100">
                        <p className="text-sky-600 text-xs font-medium">Developer Ecosystem</p>
                    </div>
                </div>
            </div>

            <p
                className="text-base font-normal text-gray-600 line-clamp-2"
            >
                A decentralized marketplace for buying and selling music NFTs. We envision a world where artists have more control over their distribution, revenue streams, and can directly connect with fans in new ways. Our platform features easy minting, transparent royalty structures, and we're exploring ways to incorporate fan-driven rewards and exclusive content tied to NFT ownership.
            </p>

            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-gray-100 rounded-2xl px-3 py-1.5">
                    <Favorite size={24} />
                    <p className="text-base font-medium text-gray-800">12</p>
                </div>
                <div className="flex items-center gap-2 bg-gray-100 rounded-2xl px-3 py-1.5">
                    <Chat size={24} />
                    <p className="text-base font-medium text-gray-800">12</p>
                </div>
            </div>

        </div>

    )

}
