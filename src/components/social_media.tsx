import Link from 'next/link'
import React from 'react'
import { FaTiktok, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { PiYoutubeLogoBold } from "react-icons/pi";


const SocialMedia = ({primary = true}) => {
  return (
    <>
         <Link href={''} className={`inline-flex justify-center items-center p-1 borer rounded-full hover:scale-105 ${primary ? 'bg-mid-blue  shadow-sm hover:shadow-mid-blue/40 ': ' bg-inherit' }  `}>
          <FaFacebookF  />
        
        </Link> 
          <Link href={'https://www.youtube.com/channel/UCLDWCcGi3uU60dtGHnfVDhA'} target='blank' className={`inline-flex justify-center items-center p-1 borer rounded-full hover:scale-105 ${primary ? 'bg-mid-blue  shadow-sm hover:shadow-mid-blue/40 ': ' bg-inherit' }  `}>
          <PiYoutubeLogoBold />
        </Link> 
    
      <Link href={''} className={`inline-flex justify-center items-center p-1 borer rounded-full hover:scale-105 ${primary ? 'bg-mid-blue  shadow-sm hover:shadow-mid-blue/40 ': ' bg-inherit' }  `}>
          <FaXTwitter  />
        </Link> 
        <Link href={''}className={`inline-flex justify-center items-center p-1 borer rounded-full hover:scale-105 ${primary ? 'bg-mid-blue  shadow-sm hover:shadow-mid-blue/40 ': ' bg-inherit' }  `}>
          <FaTiktok />
        </Link> 
    
       
    </>
  )
}

export default SocialMedia