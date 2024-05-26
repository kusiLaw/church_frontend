import React from 'react'

const CardLayout = ({children}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="relative flex flex-col flex-initial flex-shrink  shadow-sm border-[0.1px] w-[80%] max-w-[22rem] h-[28rem] min-w-[12rem]
    rounded-2xl border-none hover:scale-105 transition-all duration-700">
          {children}
      </div>
  )
}

export default CardLayout