"use client"
import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
    Icon?: React.JSX.Element
    iconClassName?: string
}

const TextAreaRef = React.forwardRef<HTMLTextAreaElement, InputProps>(
    ({ Icon, iconClassName, className, ...props }, ref) => {
        return (
    <>

     <div className="relative flex w-full flex-wrap ">
        {Icon && (
          <span className="z-10 h-full leading-snug font-normal text-center text-slate-300 absolute bg-transparent rounded text-base pl-4 flex items-center">
            {Icon}
          </span>
        )}
        <textarea
            ref={ref}
            className={`${className ? className : "border-0 placeholder-slate-400 text-slate-600 bg-slate-100 focus:ring"} ${Icon && "pl-12"} 
            placeholder-gray-500 placeholder:text-sm placeholder:font-normal
            transition-all ring-subPrimary outline-none focus:outline-none relative  text-base `}
            {...props}
            />
        </div>
        
    </>
);
})
TextAreaRef.displayName = 'TextAreaRef'

export default TextAreaRef;