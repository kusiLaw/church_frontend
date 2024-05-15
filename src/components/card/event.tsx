import React from 'react'
import { IoTimeOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { CiLocationArrow1 } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";
import { FiUser } from "react-icons/fi";
import { FaRegCalendarAlt } from "react-icons/fa";
import Link from 'next/link';

const EventCard = ({ mini = true }) => {
 
     if (mini) {
      return (
          <div className='px-3 my- pb-2 bordr '>
            <div>
              <h2 className='mb-1 font-bold text-lg truncate overflow-hidden'>Womans mininstry week</h2> 
                  <div className='border-l-2  border-mid-blue  border-dashed pl-3 '>
                      <p className=' font-medium text-lg text-center w-full truncate overflow-hidden'>
                         Vissel of Honor</p>
                      <div ><p className='flex items-center gap-3 my-1 '><span><FaRegCalendarAlt /></span> <span> Tue, 12 Oct 20224 </span> </p></div> 
                      <div ><p className='flex items-center gap-3 my-1 '><span><IoTimeOutline /></span> <span> 12: 00 GMT</span> </p></div> 

                      <div><p className='flex items-center  gap-3 my-1'><span><SlLocationPin/></span> <Link href={''}>MK5 4NU</Link> </p></div> 

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