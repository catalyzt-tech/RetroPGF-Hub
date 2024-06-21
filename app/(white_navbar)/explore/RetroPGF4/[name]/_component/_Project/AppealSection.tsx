import Link from 'next/link'
import { iRetroPGF4Project } from '../../../RetroType4'
export default function AppealSection({ data }: { data: iRetroPGF4Project }) {
    const appealDecision = "Approved" // or "Rejected"
    return (
        <>
            <div className={`flex flex-col ${appealDecision === "Approved" ? "bg-green-50 border border-green-500" : "bg-red-50 border border-red-500"} rounded-lg p-4 lg:p-6`} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mb-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>
                    <h3 className="text-lg font-semibold mb-4 flex">Appeal Decision: <div className={`ml-2 ${appealDecision == 'Approved' ? "text-green-700" : "text-red-700"} `}>{appealDecision}</div></h3>
                
                <div>
                    <div className="mb-1 text-base">
                        <div className='font-semibold text-gray-600'>Reason: </div> <div className="font-normal text-gray-500">
                            Correct. It appears these deployments from your factory were not picked up. <Link className='underline text-blue-400' href="https://docs.google.com/spreadsheets/d/1H_gJJlOujJMZjDpagaGkrQQ7nlOln3Am5PxfjId0rtE/edit#gid=0">Learn More</Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
