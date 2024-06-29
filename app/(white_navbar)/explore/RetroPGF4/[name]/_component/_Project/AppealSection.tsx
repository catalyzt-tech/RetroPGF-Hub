import Link from 'next/link'
import { iRetroPGF4Project } from '../../../RetroType4'
export default function AppealSection({ data }: { data: iRetroPGF4Project }) {
  return (
    <>
      <div
        className={`flex flex-col ${
          data.eligibilityReview.appealDecision === 'Approved'
            ? 'bg-green-50 border border-green-500'
            : 'bg-red-50 border border-red-500'
        } rounded-lg p-4 lg:p-6`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 mb-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
          />
        </svg>
        <div className="mb-3">
          <h3 className="text-lg font-semibold mb-4 flex">
            Project Status:
            <div
              className={`ml-2 ${
                data.eligibilityReview.appealDecision == 'Approved'
                  ? 'text-green-700'
                  : 'text-red-700'
              } `}
            >
              {data.eligibilityReview.appealDecision == 'Approved'
                ? 'Eligible'
                : 'Ineligible'}
            </div>
          </h3>
          <div className="mb-1 text-base">
            <div className="font-semibold text-gray-600">Project Has:</div>
            <div className="font-normal text-gray-500">
              {data.eligibilityReview.eligibilityRules
                ? data.eligibilityReview.eligibilityRejectReason
                : 'This application not appealed'}
            </div>
          </div>
          <div className="mb-1 text-base">
            <div className="font-semibold text-gray-600">Eligiblity Rule: </div>
            <div className="font-normal text-gray-500">
              {data.eligibilityReview.appealed
                ? data.eligibilityReview.eligibilityRules
                : 'This application not appealed'}
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-1.5 flex">
            Appeal Decision:
            <div
              className={`ml-2 ${
                data.eligibilityReview.appealDecision == 'Approved'
                  ? 'text-green-700'
                  : 'text-red-700'
              } `}
            >
              {data.eligibilityReview.appealDecision ?? 'No Appeal'}
            </div>
          </h3>
          <div>
            <div className="mb-1 text-base">
              <div className="font-semibold text-gray-600">
                Appeal Statement:{' '}
              </div>
              <div className="font-normal text-gray-500">
                {data.eligibilityReview?.appealed === 'Yes'
                  ? data.eligibilityReview.reason
                  : 'This application not appealed'}
                {/* <Link
                  className="ml-2 underline text-primaryRed"
                  href="https://docs.google.com/spreadsheets/d/1H_gJJlOujJMZjDpagaGkrQQ7nlOln3Am5PxfjId0rtE/edit#gid=0"
                >
                  Learn More
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
