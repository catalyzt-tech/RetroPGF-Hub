const ImpactGardenSection = () => {
  return (
    <section
      id="Impact Metrics"
      className="flex flex-col gap-6 bg-white rounded-lg p-4 lg:p-6 border"
    >
      <h3 className="text-2xl font-semibold ">Impact Garden</h3>
      <hr className="hidden sm:block border-t-gray-100" />
      <div className="text-gray-500">
        These metrics are collected based on attestations from the badgeholders,
        top 100 delegates, and other community members.
      </div>
      <div className="flex flex-row flex-wrap gap-5  "></div>
    </section>
  )
}
export default ImpactGardenSection
