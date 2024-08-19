import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Empty = ({pageName=''}) => {
    return (
      
            <div className='h-[50vh] flex flex-col justify-center align-middle items-center pt-4 '>
              <p><span className='font-semibold text-xl capitalize'>Oops, Our {pageName}</span>  has no data yet,
              </p> 
              <p className='mt-3'>
                  please try again later
            </p> 
            <p className='mt-3'> 
                <Link href={'/'} className='ml-2 text-blue-700 underline underline-offset-2 '>home</Link>
            </p>
              <div className='mt-8 animate-bounce'>
                   <Image
                        src={'/oops.png'}
                        alt="oops png"
                      width={30}
                      height={30}
                        />
              </div>
         
          </div>
  )
}

export default Empty