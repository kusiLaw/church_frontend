import Link from 'next/link'
import React from 'react'
import { FaTiktok, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { PiYoutubeLogoBold } from "react-icons/pi";


const SocialMedia = ({primary = true}) => {
  return (
    <>
      <Link href={'https://www.facebook.com/MKINTSDACHURCH'} target='_blank'
        className={`inline-flex justify-center items-center p-1 borer rounded-full hover:scale-105 ${primary ? 'bg-mid-blue  shadow-sm hover:shadow-mid-blue/40 ' : ' bg-inherit'}  `}>
          <FaFacebookF  />
        <span aria-label="screen reader only label"  className='sr-only'>facebook</span>
      </Link> 
      <Link href={'https://www.youtube.com/channel/UCLDWCcGi3uU60dtGHnfVDhA'} target='_blank'
        className={`inline-flex justify-center items-center p-1 borer rounded-full hover:scale-105 ${primary ? 'bg-mid-blue  shadow-sm hover:shadow-mid-blue/40 ' : ' bg-inherit'}  `}>
        <PiYoutubeLogoBold />
        <span aria-label="screen reader only label"  className='sr-only'>youtube</span>
        </Link> 
    
      <Link href={'https://x.com/KeynesSda'} target='_blank'
        className={`inline-flex justify-center items-center p-1 borer rounded-full hover:scale-105 ${primary ? 'bg-mid-blue  shadow-sm hover:shadow-mid-blue/40 ' : ' bg-inherit'}  `}>
        <FaXTwitter />
        <span aria-label="screen reader only label"  className='sr-only'>twitter</span>
        </Link> 
      <Link href={'https://www.tiktok.com/@mkintsdayouth'} target='_blank'
        className={`inline-flex justify-center items-center p-1 borer rounded-full hover:scale-105 ${primary ? 'bg-mid-blue  shadow-sm hover:shadow-mid-blue/40 ' : ' bg-inherit'}  `}>
        <FaTiktok />
        <span aria-label="screen reader only label" className='sr-only'>tiktok</span>
        </Link> 
    
       
    </>
  )
}

export default SocialMedia