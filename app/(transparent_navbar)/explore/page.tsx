import { RetroRound3 } from '@/app/(white_navbar)/explore/RetroPGF3/RetroType3'
import { RetroRound2 } from '@/app/(white_navbar)/explore/RetroPGF2/RetroType2'
import { RetroRound1 } from '@/app/(white_navbar)/explore/RetroPGF1/RetroType1'
import { getJsonRound1 } from '@/app/(white_navbar)/explore/RetroPGF1/page'
import { getJsonRound2 } from '@/app/(white_navbar)/explore/RetroPGF2/page'
import { getJsonRound3 } from '@/app/(white_navbar)/explore/RetroPGF3/page'
import Cpage from './Cpage'

export async function getAllRound(
  limit: number
): Promise<{
  round1: RetroRound1[]
  round2: RetroRound2[]
  round3: RetroRound3[]
  cateRound3: Map<string, number>
  cateRound2: Map<string, number>
}> {
  const round1 = (await getJsonRound1()).sort((a, b) => {
    return b.allocation - a.allocation
  })

  const round2 = await getJsonRound2()

  const round3 = await getJsonRound3()

  const cateRound2Counter = new Map<string, number>()
  const cateRound3Counter = new Map<string, number>()

  round2.forEach((project) => {
    const cateRound2 = project.Category
    if (cateRound2) {
      if (cateRound2Counter.has(cateRound2)) {
        cateRound2Counter.set(
          cateRound2,
          cateRound2Counter.get(cateRound2)! + 1
        )
      } else {
        cateRound2Counter.set(cateRound2, 1)
      }
    }
  })

  round3.forEach((project) => {
    const cateRound3 = project['New Main-Category']
    if (cateRound3) {
      if (cateRound3Counter.has(cateRound3)) {
        cateRound3Counter.set(
          cateRound3,
          cateRound3Counter.get(cateRound3)! + 1
        )
      } else {
        cateRound3Counter.set(cateRound3, 1)
      }
    }
  })

  return {
    round1: round1.slice(0, limit),
    round2: round2.slice(0, limit),
    round3: round3.slice(0, limit),
    cateRound3: cateRound3Counter,
    cateRound2: cateRound2Counter,
  }
}

export default async function page({}: {}) {
  const { round1, round2, round3, cateRound2, cateRound3 } = await getAllRound(
    20
  )

  return (
    <Cpage
      cateRound2={cateRound2}
      cateRound3={cateRound3}
      round1={round1}
      round2={round2}
      round3={round3}
    />
  )
}
