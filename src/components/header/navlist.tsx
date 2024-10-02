import React, {useState} from 'react'
import Link from 'next/link';
import { IoMdArrowDropdown } from "react-icons/io";


export const NavList = ({ setOpenDrawer=()=>{}}:{setOpenDrawer: any}) => {

  return (
    <>
      <Link onClick={() => {  setOpenDrawer(false) }} href={'/'} className='flex  content-center  items-baseline font-medium text-center  mx-2 border-b py- md:py-0 pl-2 md:pl-0
        border-red-500 border-b-dark-blue md:border-white   hover:border-b-dark-blue  hover:bg-dark-blue active:bg-dark-blue hover:md:bg-white hover:text-white hover:md:text-inherit  transition-all duration-500'>
        home
      </Link>
      <div className='relative  group/department  h-full'  >
          <p className={`flex justify-between border-b items-baseline text-center  mx-2  py-2 md:py-2  md:border-white font-medium  border-b-dark-blue 
           hover:bg-dark-blue active:bg-dark-blue hover:md:bg-white hover:text-white  hover:md:text-inherit  transition-all duration-500
             `}>
            <span className={`  group-hover/departmentfont-bold md:group-hover/department:font-medium  pl-2 md:pl-0 `}>
              departments
            </span>
            <span className='bordr self-center mt-1 '>
            <IoMdArrowDropdown />
            </span> 
          </p> 

          <div className='hidden md:absolute p-2  group-hover/department:block md:text-white right-0 top-10 z-20 w-full md:w-64 h-fit  bg-white md:bg-dark-blue md:drop-shadow-lg transition-all duration-1000'>
            <Link  href={'/departments/sabbath-school'} className='flex py-1.5 content-center items-baseline text-center  mx-2 pl-2 md:pl-0 border-b  border-white hover:border-b-gray-500 hover:border-r-mid-blue  hover:md:text-gray-300 
              hover:bg-dark-blue active:bg-dark-blue  hover:text-white    hover:md:bg-inherit transition-all duration-500'>
              Sabbath School
            </Link>
            <Link onClick={() => {  setOpenDrawer(false) } } href={'/departments/personal-ministries'} className='flex py-1.5 content-center  items-baseline text-center  mx-2 pl-2 md:pl-0 border-b  border-white hover:border-b-gray-500 hover:border-r-mid-blue  hover:md:text-gray-300 
              hover:bg-dark-blue active:bg-dark-blue  hover:text-white   hover:md:bg-inherit transition-all duration-500'>                    Personal Ministry
            </Link>
            <Link onClick={() => {  setOpenDrawer(false) } } href={'/departments/youth'} className='flex py-1.5 content-center  items-baseline text-center  mx-2 pl-2 md:pl-0 border-b  border-white hover:border-b-gray-500 hover:border-r-mid-blue  hover:md:text-gray-300 
              hover:bg-dark-blue active:bg-dark-blue  hover:text-white  hover:md:bg-inherit transition-all duration-500'>                    youth
            </Link>
            <div className={` relative   group/music `}>
                <div className={`flex 
                    py-1.5 justify-between content-cent  items-baseli text-center ml-2 md:mx-2 pl-2 md:pl-0 border-b border-white hover:border-b-gray-500 hover:md:text-gray-300 
                  hover:   hover:bg-dark-blue active:bg-dark-blue  hover:text-white   hover:md:bg-inherit transition-all duration-500
                  ${' group-hover/music:font-bold md:font-inherit group-hover/music:border-b group-hover/music:border-t group-hover/music:md:border-t-0  group-hover/music:border-y-mid-blue'}`}>
                      Music
                  <span className='bordr self-center '><IoMdArrowDropdown />
                  </span>
                </div>
                     
                      
       
                <div className='hidden group-hover/music:block md:absolute  px-2 py-3 md:text-white left-60 top-0 md:z-10 sm:w-full md:w-60 h-fit md:bg-mid-blue'>
                  <Link onClick={() => {  setOpenDrawer(false) } } href={'/departments/music/church-choir'} className='flex py-1.5 content-center  items-baseline text-center  mx-2 pl-2 md:pl-0 border-b   border-white hover:border-b-gray-300  
                    hover:bg-dark-blue active:bg-dark-blue  hover:text-white hover:md:text-gray-200   hover:md:bg-inherit   transition-all duration-500'>
                    church choir
                  </Link>
                  <Link onClick={() => {  setOpenDrawer(false) } } href={'/departments/music/youth-choir'} className='flex py-1.5 content-center  items-baseline text-center  mx-2 pl-2 md:pl-0 border-b   border-white hover:border-b-gray-300  
                    hover:bg-dark-blue active:bg-dark-blue  hover:text-white hover:md:text-gray-200   hover:md:bg-inherit   transition-all duration-500'>
                      youth choir
                  </Link>
                  <Link onClick={() => {  setOpenDrawer(false) } } href={'/departments/music/singing-band'} className='flex py-1.5 content-center  items-baseline text-center  mx-2 pl-2 md:pl-0 border-b   border-white hover:border-b-gray-300  
                    hover:bg-dark-blue active:bg-dark-blue e hover:text-white hover:md:text-gray-200   hover:md:bg-inherit   transition-all duration-500'>
                      Singing Band
                  </Link>
                  <Link onClick={() => {  setOpenDrawer(false) } } href={'/departments/music/praise-team'} className='flex py-1.5 content-center  items-baseline text-center  mx-2 pl-2 md:pl-0 border-b   border-white hover:border-b-gray-300  
                    hover:bg-dark-blue active:bg-dark-blue e hover:text-white hover:md:text-gray-200   hover:md:bg-inherit   transition-all duration-500'>
                      Praise team
                    </Link>
                  <Link onClick={() => {  setOpenDrawer(false) } } href={'/departments/music/echoes-of-victory'} className='flex py-1.5 content-center  items-baseline text-center  mx-2 pl-2 md:pl-0    border-white hover:border-b-gray-300  
                    hover:bg-dark-blue active:bg-dark-blue  hover:text-white hover:md:text-gray-200  hover:md:bg-inherit   transition-all duration-500'>
                      Echoes of Victory
                  </Link>
                </div>
              </div>
            <Link onClick={() => {  setOpenDrawer(false) } } href={'/departments/woman-ministries'} className='flex py-1.5 content-center  items-baseline text-center  mx-2 pl-2 md:pl-0 border-b  border-white hover:border-b-gray-500 hover:border-r-dark-blue  hover:md:text-gray-300 
              hover:bg-dark-blue active:bg-dark-blue  hover:text-white  hover:md:bg-inherit transition-all duration-500'>
                woman Ministry
            </Link>
            <Link onClick={() => {  setOpenDrawer(false) } } href={'/departments/communication'} className='flex py-1.5 content-center  items-baseline text-center  mx-2 pl-2 md:pl-0 border-  border-white hover:border-b-gray-500 hover:border-r-dark-blue  hover:md:text-gray-300 
              hover:bg-dark-blue active:bg-dark-blue  hover:text-white  hover:md:bg-inherit transition-all duration-500'>
                Communnication
            </Link>
          </div>
      </div>

      <Link onClick={() => {  setOpenDrawer(false) } } href={'/events'} className='flex  content-center font-medium  text-center  mx-2 border-b py-2 md:py-0 pl-2 md:pl-0 border-b-dark-blue md:border-white  hover:border-b-dark-blue  hover:bg-dark-blue active:bg-dark-blue hover:md:bg-white hover:text-white  hover:md:text-inherit   transition-all duration-500'>
            Events
      </Link>
      
      <Link onClick={() => {  setOpenDrawer(false) } } href={'/beliefs'} className='flex content-center font-medium text-center  mx-2 border-b py-2 md:py-0 pl-2 md:pl-0 border-b-dark-blue md:border-white  hover:border-b-dark-blue  hover:bg-dark-blue active:bg-dark-blue hover:md:bg-white hover:text-white  hover:md:text-inherit transition-all duration-500'>
            our beliefs
      </Link>
      <Link onClick={() => {  setOpenDrawer(false) } } href={'/prayers'} className='flex  content-center  font-medium text-center  mx-2 border-b py-2 md:py-0 pl-2 md:pl-0 border-b-dark-blue md:border-white  hover:border-b-dark-blue   hover:bg-dark-blue active:bg-dark-blue hover:md:bg-white hover:text-white  hover:md:text-inherit transition-all duration-500'>
            Prayers
      </Link>
      <Link onClick={() => {  setOpenDrawer(false) } } href={'/about'} className='flex  content-center  font-medium text-center  mx-2 md:border-b  py-2 md:py-0 pl-2 md:pl-0 md:border-white hover:border-b-dark-blue hover:bg-dark-blue active:bg-dark-blue hover:md:bg-white hover:text-white  hover:md:text-inherit  transition-all duration-500'>
            About us
      </Link>
      </>
  )
}
