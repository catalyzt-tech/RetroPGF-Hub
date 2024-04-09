import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  Icon?: React.JSX.Element
  iconClassName?: string
}

const InputRef = React.forwardRef<HTMLInputElement, InputProps>(
  ({ Icon, iconClassName, className, ...props }, ref) => {
    return (
      <div className="relative flex flex-wrap">
        {Icon && (
          <span className="z-10 h-full leading-snug font-normal text-center text-slate-300 absolute bg-transparent rounded text-base pl-4 flex items-center">
            {Icon}
          </span>
        )}
        <input
            ref={ref}
          className={`${
            className
              ? className
              : 'border-0 placeholder-slate-500 bg-white text-slate-500 focus:ring w-full px-1 py-3 rounded-md'
          } ${
            Icon ? 'pl-11' : ''
          } 
          placeholder-gray-500 placeholder:text-sm placeholder:font-normal
          transition-all ring-subPrimary outline-none focus:outline-none relative  text-base`}
          {...props}
        />
      </div>
    )
  }
)

InputRef.displayName = 'InputRef'

export default InputRef