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
    </div>
  )
}

export default Nav