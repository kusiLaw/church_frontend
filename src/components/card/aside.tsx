import React from 'react'

const AsideCard = ({heading='',children}: Readonly<{
  children: React.ReactNode; heading:string
}>) => {
  return (
         <div className="w-full bordr-[0.1px] mb-10 shadow-lg">
           <h2 className="text-center  capitalize font-thin py-2 rounded-tl-xl 
                 rounded-tr-xl bg-dark-blue mb-4 text-white shadow-sm">
                {heading}
              </h2>
      {children ? children : <p className="text-center py-6 italic lowercase"> <span className=' capitalize'>No</span> {heading }</p>} 
          </div>
  )
}

export default AsideCard