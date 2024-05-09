'use client'
import React, {useState} from 'react'
import { SlSocialFacebook } from "react-icons/sl";
import { CiYoutube } from "react-icons/ci";
import { FaTiktok, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";

import { PiYoutubeLogoBold } from "react-icons/pi";
 
import LinkButton from '../form/button';
import Image from 'next/image';
import Link from 'next/link';
import { it } from 'node:test';

const Nav = () => {
  const [openDepartment, setOpenDepartment] = useState(false)
  const [departmenthadFocus, setDepartmenthadFocus] = useState(false)
  const [openMusic, setOpenMusic] = useState(false)

  return (
    <div className='absolute bg-white h-fit w-full z-10 '>
      <div className='flex relative justify-end items-center  p-1.5'>
      
        
        <div className='absolute top-0 left-10'>
          <div className=''>
            <Image src={'logo.svg'} width={85} height={35} />
          </div>
        </div>
        <div className='flex items-center w-fit bordr md:mr-8'>
          <div className='flex gap-2 md:gap-2 text-white font-black text-md mr-8'>
            <div className='inline-flex justify-center items-center p-1 border rounded-full bg-mid-blue  shadow-sm hover:shadow-mid-blue/40 hover:scale-105'>
              <FaXTwitter  />
           </div> 
             <div className='inline-flex justify-center items-center p-1 border rounded-full bg-mid-blue  shadow-sm hover:shadow-mid-blue/40 hover:scale-105'>
              <FaTiktok />
           </div> 
             <div className='inline-flex justify-center items-center p-1 border  rounded-full bg-mid-blue  shadow-sm hover:shadow-mid-blue/40 hover:scale-105'>
              <PiYoutubeLogoBold />
           </div> 
           <div className='inline-flex justify-center items-center p-1 border rounded-full bg-mid-blue shadow-sm  hover:shadow-mid-blue/40 hover:scale-105'>
              <FaFacebookF  />
             
           </div> 
            
          </div>

             <LinkButton />
        </div>
    
      </div>
      <div className='sticky capitalize  text-xl text-dark-blue  flex justify-end pb-3 pt-2  mr-8'>

        <Link href={'/'} className='flex gap-1 content-center  items-baseline font-medium text-center  mx-2 border-b 
          border-white hover:border-b-dark-blue   transition-all duration-700'>
              home
        </Link>
        <div className='relative flex gap-1 content-center  items-baseline text-center  mx-2 border-white  
              transition-all duration-700'  onClick={() => setOpenDepartment(true)} onMouseEnter={() => setOpenDepartment(true)}
          // onMouseLeave={() => { !departmenthadFocus ? '' : setOpenDepartment(false) }}
        >
                <span className='font-medium'>departments</span>
              <span className='bordr self-center '>
                 <IoMdArrowDropdown />
              </span> 
          {openDepartment && <div className='absolute p-2 text-white right-0 top-10 z-10 w-64 h-60 bg-dark-blue drop-shadow-lg transition-all duration-700'
            onMouseLeave={() => { setOpenDepartment(false); setOpenMusic(false) }}
            onMouseEnter={() => { setDepartmenthadFocus(true) }}
          >
                <Link href={''} className='flex py-1.5 content-center  items-baseline text-center  mx-2 border-b  border-white hover:border-b-gray-500 hover:border-r-mid-blue hover:text-gray-400  transition-all duration-700'>
                  Personal Ministry
                </Link>
                <Link href={''} className='flex py-1.5 content-center  items-baseline text-center  mx-2 border-b border-white hover:border-b-gray-500 hover:border-r-mid-blue hover:text-gray-400   transition-all duration-700'>
                  youth
                </Link>
                 <div className=' relative flex py-1.5 justify-between content-center  items-baseline text-center  mx-2 border-b border-white hover:border-b-gray-500  hover:text-gray-400
                    hover:border-r-mid-blue   transition-all duration-700 ' onClick={() => setOpenMusic(true)} onMouseEnter={()=>setOpenMusic(true)}>
                  Music
                  {/* <span className='bordr self-end '><IoMdArrowDropdown /></span>  */}
                  <span className='bordr self-center '><IoMdArrowDropright /></span>
                  {openMusic && <div className='absolute px-2 py-3 text-white left-60 top-0 z-10 w-64 h-fit bg-mid-blue' onMouseLeave={()=>setOpenMusic(false)}>
                    <Link href={''} className='flex py-2 content-center  items-baseline text-center  mx-2 border-b   border-white hover:border-b-gray-300 hover:text-gray-200  transition-all duration-700'>
                      church choir
                    </Link>
                    <Link href={''} className='flex py-2 content-center  items-baseline text-center  mx-2 border-b   border-white hover:border-b-gray-300 hover:text-gray-200  transition-all duration-700'>
                      youth choir
                    </Link>
                    <Link href={''} className='flex py-2 content-center  items-baseline text-center  mx-2 border-b border-white hover:border-b-gray-300  hover:text-gray-200 transition-all duration-700'>
                      Singing Band
                    </Link>
                    <Link href={''} className='flex py-2 content-center  items-baseline text-center  mx-2 border- border-white hover:border-b-gray-300  hover:text-gray-200   transition-all duration-700'>
                      Echoes of Victory
                    </Link>
                  </div>}
                </div>
                <Link href={''} className='flex py-1.5 content-center  items-baseline text-center  mx-2 border-b border-white hover:border-b-gray-300   hover:text-gray-400 transition-all duration-700'>
                  woman Ministry
                </Link>
                <Link href={''} className='flex py-1.5 content-center  items-baseline text-center  mx-2 border- border-white hover:border-b-gray-300   hover:text-gray-400 transition-all duration-700'>
                  Communnication
                </Link>
              </div>
              }
        </div>

         <Link href={'#'} className='flex  content-center font-medium  text-center  mx-2 border-b border-b-white hover:border-b-dark-blue   transition-all duration-700'>
              Meetings
        </Link>
        
         <Link href={'/'} className='flex content-center font-medium text-center  mx-2 border-b border-white hover:border-b-dark-blue   transition-all duration-700'>
              our beliefs
             {/* <span className='bordr self-end '><IoMdArrowDropdown/></span>  */}
        </Link>
        <Link href={'/'} className='flex  content-center  font-medium text-center  mx-2 border-b border-white hover:border-b-dark-blue   transition-all duration-700'>
              Prayers
             {/* <span className='bordr self-end '><IoMdArrowDropdown/></span>  */}
        </Link>
        <Link href={'/'} className='flex  content-center  font-medium text-center  mx-2 border-b  border-white hover:border-b-dark-blue   transition-all duration-700'>
              About us
             {/* <span className='bordr self-end '><IoMdArrowDropdown/></span>  */}
        </Link>


        {/* {[{ name: 'home', link: '/' },
          { name: 'Meetings', link: '/' },
          { name: 'about us', link: '/' },
          { name: 'department', link: '/' },
          { name: 'prayers', link: '/' },
             { name: 'Belief', link: '/' },
        ].map(item => (
          <div key={item.name}>
            <Link href={item.link} className='flex gap-1 content-center  items-baseline text-center  mx-2 border-b-2  border-dotted border-white hover:border-b-gray-500 hover:border-r-mid-blue   transition-all duration-700'>
              {item.name}
             <span className='bordr self-end '><IoMdArrowDropdown/></span> 
            </Link>

          </div>
          ))} */}
      </div>
    </div>
  )
}

export default Nav