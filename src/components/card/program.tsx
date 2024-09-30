import React from 'react'
import Link from 'next/link';
import { IoTimeOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { FaRegCalendarAlt } from "react-icons/fa";

const ProgramCard = ({ title = '', text = '', time = '', date = '', loc = '', link = '', linkText=''  }: {
   title:string, text:string, time:string, date:string, loc:string, link:string, linkText:string
}) => {
  return (
      <div className="relative  flex flex-col flex-initial flex-shrink  shadow-sm border-[0.1px]  max-w-[22rem] h-[22] min-w-[12rem]
    rounded-2xl border-none hover:scale-[1.01] transition-all duration-700 w-full">
        <div className='w-full h-full bg-white px-2 py-4 text-black rol   '>
         
        <div className='flex flex-col justify-between  h-full '>
          <h3 className='capitalize text-center w-full text-xl mt-4 font-semibold'>{title}</h3>
              <div className='w-full mt-4 px-2 text-lg'>
                  <p className='text-wrap mb-4'>{text} </p>
                     <div ><p className='flex items-center gap-3 my-1 '><span><FaRegCalendarAlt /></span> <span> {date}</span> </p></div> 
          <div ><p className='flex items-center gap-3 my-1 '><span><IoTimeOutline /></span> <span> {time}</span> </p></div> 

          <div><p className='flex items-center  gap-3 my-1'><span><SlLocationPin /></span> <Link href={''}>{ loc}</Link> </p></div> 

          </div>
              <div className='w-full flex justify-center  mt-8'>
                <Link href={link} target='_blank' className='bg-dark-blue hover:text-white py-2 px-6 rounded-full text-gray-300'>
                    {linkText}
                 </Link>  
              </div>
          </div>
       
            
          </div> 
    </div>
  )
}

export default ProgramCard