'use client'
import React, {useState} from 'react'

import { IoMenuOutline } from "react-icons/io5";
import LinkButton from '../form/button';
import Image from 'next/image';
import Drawer from '../slider';
import { NavList } from './navlist';
import SocialMedia from '../social_media';

const Nav = () => {

  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <div className='fixed top-0 right-0 left-0 bg-white h-fit w-full z-50 flex justify-center '>
      <div className='flex relative justify-between items-center  p-1.5 max-w-[1660px] w-full'>
        <div className=' left-10'>
          <div className=''>
            <Image src={'logo.svg'} width={85} height={35} alt=''/>
          </div>
        </div>
        <div className='flex flex-col items-end md:mr-4 lg:mr bordr'>
          <div className='flex items-center  w-fit bordr '>
            <div className='hidden xsm:flex gap-2 md:gap-2 text-white font-black text-md mr-8'>
                <SocialMedia/>
            </div>

              <LinkButton />
          </div>
          <div className='hidden md:flex  sticky capitalize  text-xl text-dark-blue   justify-end pb-3 pt-2'>
          
              <NavList/>
          </div>
          <div className='md:hidden pt-2 flex items- text-dark-blue'>
            <button onClick={()=>setOpenDrawer(true)} className='text-[2.7rem]'>
              <IoMenuOutline onClick={()=>setOpenDrawer(true)}/>
            </button>
          </div>
        </div>
      
      </div>
      <div className='md:hidden'>
       <Drawer isOpen={openDrawer} setIsOpen={setOpenDrawer}>
          <div className='capitalize text-xl  text-dark-blue pt-1 '>
            <NavList/>
            {/* <div className='flex justify-end mt-6 gap-3 text-white '>
              <SocialMedia/>
              </div> */}
          </div>
        </Drawer>
      </div>
  
    </div>
  )
}

export default Nav