import React from 'react'
import { IoTimeOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { FaRegCalendarAlt } from "react-icons/fa";
import Link from 'next/link';

const EventCard = ({name = '', title='', date='', time='', post_code='', image ='', host ='', mini = true }) => {
 
     if (mini) {
      return (
          <div className='px-3 pb-2'>
          <div>
            <h2 className='mb-1 font-bold text-lg truncate overflow-hidden'>{ name}</h2> 
                  <div className='border-l-2  border-mid-blue  border-dashed pl-3 '>
                      <p className=' font-medium text-center w-full truncate overflow-hidden'>
                         {title}</p>
                      <div ><p className='flex items-center gap-3 my-1 '><span><FaRegCalendarAlt /></span> <span> {date} </span> </p></div> 
                      <div ><p className='flex items-center gap-3 my-1 '><span><IoTimeOutline /></span> <span> {time}</span> </p></div> 

                      <div><p className='flex items-center  gap-3 my-1'><span><SlLocationPin/></span> <Link href={''}>{post_code}</Link> </p></div> 

              </div>   
            </div>
                 
    </div>
       )
       
  }
  return (
    <div>E</div>
  )
}

export default EventCard