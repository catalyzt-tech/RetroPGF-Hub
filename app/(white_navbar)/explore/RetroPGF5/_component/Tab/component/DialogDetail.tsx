import { FC, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ImpactMetrics, MetricSelected } from '../../../type'
import { mapImpactMetrics } from '../../../[name]/Text'
import AllocationChart from './AllocationChart'

interface DialogProps {
  metricSelected: Partial<ImpactMetrics[]>
  metricInBallot: number
  metricViewed: number
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DialogDetail: FC<DialogProps> = ({
  metricSelected,
  metricInBallot,
  metricViewed,
  isOpen,
  setIsOpen,
}) => {
  const toggleModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={toggleModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="md:w-[40em] max-w-md transform overflow-hidden rounded-2xl bg-white px-6 py-8 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-center text-lg font-semibold leading-6 text-gray-900"
                  >
                    Bagdeholder's Metrics Preference
                  </Dialog.Title>
                  <div className="mt-4">
                    {metricSelected != null ? (
                      <p className="text-sm text-gray-500">
                        You have selected {metricInBallot} metrics to be
                        included in the ballot. You have viewed {metricViewed}{' '}
                        metrics in total.
                      </p>
                    ) : (
                      <p className="text-sm text-gray-500">
                        No metrics selected, this badgeholder has not selected
                        any metrics to be included in the ballot or anticipated
                        in Retro Funding Round 4
                      </p>
                    )}
                  </div>
                  {metricSelected != null && (
                    <AllocationChart metricSelected={metricSelected} />
                  )}
                  <div className="mt-4">
                    {metricSelected != null && (
                      <div className="overflow-x-hidden sm:rounded-lg max-h-36">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                          <thead className="text-xs text-gray-700 bg-gray-50 ">
                            <tr>
                              <th scope="col" className="px-6 py-3">
                                Metric Name
                              </th>
                              <th scope="col" className="px-6 py-3">
                                Allocation Weight
                              </th>
                            </tr>
                          </thead>
                          <tbody className="">
                            {metricSelected?.map(
                              (metric, i) =>
                                metric &&
                                Object.keys(metric).map((key: string) => (
                                  <tr key={i} className="bg-white border-b">
                                    <td
                                      scope="row"
                                      className="px-6 py-4 font-medium text-gray-900 max-w-32 text-wrap"
                                    >
                                      {mapImpactMetrics(key)}
                                    </td>
                                    <td className="px-6 py-4">
                                      {metric &&
                                      metric[key as keyof ImpactMetrics] !==
                                        undefined &&
                                      metric[key as keyof ImpactMetrics] !==
                                        undefined &&
                                      typeof metric[
                                        key as keyof ImpactMetrics
                                      ] === 'number'
                                        ? (
                                            metric[
                                              key as keyof ImpactMetrics
                                            ] as number
                                          ).toFixed(2)
                                        : metric[
                                            key as keyof ImpactMetrics
                                          ]}{' '}
                                      %
                                    </td>
                                  </tr>
                                ))
                            )}
                          </tbody>
                        </table>
                      </div>
                    )}
                    <button
                      type="button"
                      className="mt-8 inline-flex justify-center rounded-md border border-transparent w-full bg-red-50 px-4 py-2 text-sm font-medium hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      onClick={toggleModal}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
export default DialogDetail
