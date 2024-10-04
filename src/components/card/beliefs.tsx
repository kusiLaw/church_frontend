import React, { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CardLayout from './layout'
import Skeleton from '../skeleton'

const BeliefCard = ({id ='' || 1 , link='', image='', topic= '', text='', verses=''}) => {
  return (
  <div className="relative flex flex-col flex-initial flex-shrink  shadow-sm border-[0.1px] max-w-[22rem] h-[28rem] min-w-[12rem]
                  rounded-2xl border-none hover:scale-105 transition-all duration-700">
                  <div className='overflow-hidden border-none h-[12rem] '>
                    <Suspense key={id} fallback={<Skeleton customClassNames='rounded-tl-xl rounded-tr-xl h-[222px] text-[2rem] w-full' viewAs={'image'}/>}>
                      <Image src={image} width={350} height={350} alt='' className='rounded-tl-xl rounded-tr-xl' />
          {/* <Skeleton customClassNames='rounded-tl-xl rounded-tr-xl h-[222px] w-full' viewAs={'image'}/> */}
                    </Suspense>
                </div>
                <h3 className="capitalize font-bold text-lg my-4 px-2">
                   <span className="text-dark-blue font-extrabold italic text-2xl mr-2">{id < 10 ? `0${id}`: id} .</span> 
                  {topic} 
                </h3>
              
                <div>
                <p className="text-clip  overflow-hidden  w-full px-2 mb-4 h-[4.5rem] text-wrap">
                    {text}
                </p>
                </div>
                <div className="px-2 h-[5rem] overflow-hidden  text-wrap text-ellipsi">
                  <p className=''><span className="font-semibold underline underline-offset-2 mr-1  ">Bible Verses :</span> {verses}.</p>

                </div>
              
                <p className="mb-4 w-full text-end mt-4">
                  <span className='sr-only'>to see all our 24 foundametal beliefs,</span>
                  <Link href={link} target='_blank' className="text-dark-blue hover:text-light-blue px-2 text-end w-full">click to Learn More </Link>
                </p>
  </div> 
  )
}

export default BeliefCard