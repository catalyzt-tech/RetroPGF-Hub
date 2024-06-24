export const formatText = (text: string) => {
  const paragraphs = text.split('\n\n')
  return paragraphs.map((paragraph, index) => (
    <p key={index} className="mb-4">
      {paragraph}
    </p>
  ))
}

export default function ContributionSection({
  data,
  contributionRef,
}: {
  data: { description: string }
  contributionRef: React.MutableRefObject<HTMLElement | null>
}) {
  return (
    <section
      id="Contribution"
      ref={contributionRef}
      className="flex flex-col gap-6 bg-white rounded-lg p-4 lg:p-6"
    >
      <h6 className="text-2xl font-semibold text-gray-800">Contribution</h6>
      <hr className="border-t-gray-100" />
      <div className="text-base break-word font-normal text-gray-600">
        {formatText(data.description)}
      </div>
    </section>
  )
}
