"use client"
import { useRef, useEffect } from 'react';
import { NewCategory } from '../(white_navbar)/explore/RetroPGF3/RetroType3';
import { CategoryRound2 } from '../(white_navbar)/explore/RetroPGF2/RetroType2';

export const useIsMount = () => {
  const isMountRef = useRef(true);
  useEffect(() => {
    isMountRef.current = false;
  }, []);
  return isMountRef.current;
};

export function handleCategoryRound3(category:NewCategory) {
  if(category === "OP Stack"){
      return (
          <div className="px-2 py-1 bg-yellow-50 rounded-full w-fit">
              <p className="text-yellow-700 text-xs font-medium line-clamp-1 break-words">{category}</p>
          </div>
      )
  }
  else if(category === "Collective Governance"){
      return (
          <div className="px-2 py-1 bg-orange-50 rounded-full w-fit">
              <p className="text-orange-600 text-xs font-medium line-clamp-1 break-words">{category}</p>
          </div>
      )
  }
  else if(category === "Developer Ecosystem"){
      return (
          <div className="px-2 py-1 bg-sky-50 rounded-full w-fit">
              <p className="text-sky-600 text-xs font-medium line-clamp-1 break-words">{category}</p>
          </div>
      )
  }
  else if(category === "End User Experience Adoption"){
      return (
          <div className="px-2 py-1 bg-emerald-50 rounded-full w-fit">
              <p className="text-emerald-600 text-xs font-medium line-clamp-1 break-words">{category}</p>
          </div>
      )
  }
}

export function handleCategoryRound2(category:CategoryRound2) {
  if(category === "Education"){
      return (
          <div className="px-2 py-1 bg-yellow-50 rounded-full w-fit">
              <p className="text-yellow-700 text-xs font-medium line-clamp-1 break-words">{category}</p>
          </div>
      )
  }
  else if(category === "Infrastructure"){
      return (
          <div className="px-2 py-1 bg-orange-50 rounded-full w-fit">
              <p className="text-orange-600 text-xs font-medium line-clamp-1 break-words">{category}</p>
          </div>
      )
  }
  else if(category === "Tooling and utilities"){
      return (
          <div className="px-2 py-1 bg-emerald-50 rounded-full w-fit">
              <p className="text-emerald-600 text-xs font-medium line-clamp-1 break-words">{category}</p>
          </div>
      )
  }
}