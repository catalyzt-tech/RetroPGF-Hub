import ProjectDetailSection from './_component/_Project/ProjectDetailSection'
import { RetroRound1 } from '../RetroType1'

export default function Cpage({ data }: { data: RetroRound1 }) {
  // const overViewRef = useRef<HTMLElement | null>(null)
  // const contributionRef = useRef<HTMLElement | null>(null)
  // const questionRef = useRef<HTMLElement | null>(null)

  return (
    <div className="flex mt-4 lg:mt-8 gap-10">
      {/* Scroll Spy */}

      <div className="flex-grow flex flex-col gap-4 lg:gap-16 items-center w-max">
        <section className="w-full h-full flex flex-col gap-4 lg:gap-8 flex-grow max-w-[56rem]">
          <ProjectDetailSection data={data} />
        </section>
      </div>
    </div>
  )
}
