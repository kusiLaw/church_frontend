import Link from 'next/link'
import React from 'react'
import { FaTiktok, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { PiYoutubeLogoBold } from "react-icons/pi";


const SocialMedia = () => {
  return (
    <>
      <Link href={''} className='inline-flex justify-center items-center p-1 border rounded-full bg-mid-blue  shadow-sm hover:shadow-mid-blue/40 hover:scale-105'>
          <FaXTwitter  />
        </Link> 
        <Link href={''} className='inline-flex justify-center items-center p-1 border rounded-full bg-mid-blue  shadow-sm hover:shadow-mid-blue/40 hover:scale-105'>
          <FaTiktok />
        </Link> 
        <Link href={''} className='inline-flex justify-center items-center p-1 border  rounded-full bg-mid-blue  shadow-sm hover:shadow-mid-blue/40 hover:scale-105'>
          <PiYoutubeLogoBold />
        </Link> 
        <Link href={''} className='inline-flex justify-center items-center p-1 border rounded-full bg-mid-blue shadow-sm  hover:shadow-mid-blue/40 hover:scale-105'>
          <FaFacebookF  />
        
        </Link> 
    </>
  )
}

export default SocialMedia