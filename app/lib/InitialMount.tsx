'use client'
import { useRef, useEffect } from 'react'
import { NewCategory } from '../(white_navbar)/explore/RetroPGF3/RetroType3'
import { CategoryRound2 } from '../(white_navbar)/explore/RetroPGF2/RetroType2'

export const useIsMount = () => {
  const isMountRef = useRef(true)
  useEffect(() => {
    isMountRef.current = false
  }, [])
  return isMountRef.current
}

export function handleOpenSource(isOpenSource: boolean) {
  if (isOpenSource) {
    return (
      <div className="px-2 py-1 bg-green-50 rounded-full w-fit">
        <p className="text-green-700 text-xs font-medium line-clamp-1 break-words">
          Open Source
        </p>
      </div>
    )
  }
  if (!isOpenSource) {
    return (
      <div className="px-2 py-1 bg-red-50 rounded-full w-fit">
        <p className="text-red-700 text-xs font-medium line-clamp-1 break-words">
          Closed Source
        </p>
      </div>
    )
  }
}

export function handleCategoryRound5(category: string) {
  if (category === 'CeFi') {
    return (
      <div className="px-2 py-1 bg-yellow-50 rounded-full w-fit">
        <p className="text-yellow-700 text-xs font-medium line-clamp-1 break-words">
          {category}
        </p>
      </div>
    )
  } else if (category === 'DeFi') {
    return (
      <div className="px-2 py-1 bg-orange-50 rounded-full w-fit">
        <p className="text-orange-600 text-xs font-medium line-clamp-1 break-words">
          {category}
        </p>
      </div>
    )
  } else if (category === 'NFT') {
    return (
      <div className="px-2 py-1 bg-sky-50 rounded-full w-fit">
        <p className="text-sky-600 text-xs font-medium line-clamp-1 break-words">
          {category}
        </p>
      </div>
    )
  } else if (category === 'Social') {
    return (
      <div className="px-2 py-1 bg-emerald-50 rounded-full w-fit">
        <p className="text-emerald-600 text-xs font-medium line-clamp-1 break-words">
          {category}
        </p>
      </div>
    )
  } else if (category === 'Utility') {
    return (
      <div className="px-2 py-1 bg-pink-50 rounded-full w-fit">
        <p className="text-pink-600 text-xs font-medium line-clamp-1 break-words">
          {category}
        </p>
      </div>
    )
  } else if (category === 'Cross Chain') {
    return (
      <div className="px-2 py-1 bg-lime-50 rounded-full w-fit">
        <p className="text-lime-600 text-xs font-medium line-clamp-1 break-words">
          {category}
        </p>
      </div>
    )
  } else if (category === 'Governance') {
    return (
      <div className="px-2 py-1 bg-indigo-50 rounded-full w-fit">
        <p className="text-indigo-600 text-xs font-medium line-clamp-1 break-words">
          {category}
        </p>
      </div>
    )
  }
}
export function handleCategoryRound4(category: string) {
  if (category === 'CeFi') {
    return (
      <div className="px-2 py-1 bg-yellow-50 rounded-full w-fit">
        <p className="text-yellow-700 text-xs font-medium line-clamp-1 break-words">
          {category}
        </p>
      </div>
    )
  } else if (category === 'DeFi') {
    return (
      <div className="px-2 py-1 bg-orange-50 rounded-full w-fit">
        <p className="text-orange-600 text-xs font-medium line-clamp-1 break-words">
          {category}
        </p>
      </div>
    )
  } else if (category === 'NFT') {
    return (
      <div className="px-2 py-1 bg-sky-50 rounded-full w-fit">
        <p className="text-sky-600 text-xs font-medium line-clamp-1 break-words">
          {category}
        </p>
      </div>
    )
  } else if (category === 'Social') {
    return (
      <div className="px-2 py-1 bg-emerald-50 rounded-full w-fit">
        <p className="text-emerald-600 text-xs font-medium line-clamp-1 break-words">
          {category}
        </p>
      </div>
    )
  } else if (category === 'Utility') {
    return (
      <div className="px-2 py-1 bg-pink-50 rounded-full w-fit">
        <p className="text-pink-600 text-xs font-medium line-clamp-1 break-words">
          {category}
        </p>
      </div>
    )
  } else if (category === 'Cross Chain') {
    return (
      <div className="px-2 py-1 bg-lime-50 rounded-full w-fit">
        <p className="text-lime-600 text-xs font-medium line-clamp-1 break-words">
          {category}
        </p>
      </div>
    )
  } else if (category === 'Governance') {
    return (
      <div className="px-2 py-1 bg-indigo-50 rounded-full w-fit">
        <p className="text-indigo-600 text-xs font-medium line-clamp-1 break-words">
          {category}
        </p>
      </div>
    )
  }
}
export function handleCategoryRound3(category: string) {
  if (category === 'OP Stack') {
    return (
      <div className="px-2 py-1 bg-yellow-50 rounded-full w-fit">
        <p className="text-yellow-700 text-xs font-medium line-clamp-1 break-words">
          {category}
        </p>
      </div>
    )
  } else if (category === 'Collective Governance') {
    return (
      <div className="px-2 py-1 bg-orange-50 rounded-full w-fit">
        <p className="text-orange-600 text-xs font-medium line-clamp-1 break-words">
          {category}
        </p>
      </div>
    )
  } else if (category === 'Developer Ecosystem') {
    return (
      <div className="px-2 py-1 bg-sky-50 rounded-full w-fit">
        <p className="text-sky-600 text-xs font-medium line-clamp-1 break-words">
          {category}
        </p>
      </div>
    )
  } else if (category === 'End User Experience Adoption') {
    return (
      <div className="px-2 py-1 bg-emerald-50 rounded-full w-fit">
        <p className="text-emerald-600 text-xs font-medium line-clamp-1 break-words">
          {category}
        </p>
      </div>
    )
  } else {
    return (
      <div className="px-2 py-1 bg-indigo-50 rounded-full w-fit">
        <p className="text-indigo-600 text-xs font-medium line-clamp-1 break-words">
          {category}
        </p>
      </div>
    )
  }
}

export function handleCategoryRound2(category: CategoryRound2) {
  if (category === 'Education') {
    return (
      <div className="px-2 py-1 bg-yellow-50 rounded-full w-fit">
        <p className="text-yellow-700 text-xs font-medium line-clamp-1 break-words">
          {category}
        </p>
      </div>
    )
  } else if (category === 'Infrastructure') {
    return (
      <div className="px-2 py-1 bg-orange-50 rounded-full w-fit">
        <p className="text-orange-600 text-xs font-medium line-clamp-1 break-words">
          {category}
        </p>
      </div>
    )
  } else if (category === 'Tooling and utilities') {
    return (
      <div className="px-2 py-1 bg-emerald-50 rounded-full w-fit">
        <p className="text-emerald-600 text-xs font-medium line-clamp-1 break-words">
          {category}
        </p>
      </div>
    )
  } else {
    return (
      <div className="px-2 py-1 bg-indigo-50 rounded-full w-fit">
        <p className="text-indigo-600 text-xs font-medium line-clamp-1 break-words">
          {category}
        </p>
      </div>
    )
  }
}
