import React, {useState} from 'react'
import Link from 'next/link';
import { IoMdArrowDropdown } from "react-icons/io";


export const NavList = () => {
      const [openDepartment, setOpenDepartment] = useState(false)
  const [departmenthadFocus, setDepartmenthadFocus] = useState(false)
  const [openMusic, setOpenMusic] = useState(false)
  return (
      <>
          <Link  href={'/'} className='flex  content-center  items-baseline font-medium text-center  mx-2 border-b py-2 md:py-0 pl-2 md:pl-0
                   border-b-dark-blue md:border-white   hover:border-b-dark-blue  hover:bg-dark-blue active:bg-dark-blue hover:md:bg-white hover:text-white hover:md:text-inherit  transition-all duration-500'>
                home
          </Link>
          <div className='relative '  >
              <div className={`flex justify-between border-b items-baseline text-center  mx-2  py-2 md:py-0  md:border-white   border-b-dark-blue 
                hover:bg-dark-blue active:bg-dark-blue hover:md:bg-white hover:text-white  hover:md:text-inherit  transition-all duration-500 `} onClick={() => setOpenDepartment(!openDepartment)}>
                  <span className={` ${openDepartment && ' font-bold md:font-medium'} pl-2 md:pl-0`}>
                    departments
                  </span>
                    <span className='bordr self-center mt-1 '>
                    <IoMdArrowDropdown />
                   </span> 
              </div> 
              
              
              {openDepartment && <div className=' md:absolute p-2  md:text-white right-0 top-10 z-20 w-full md:w-64 h-fit  bg-white md:bg-dark-blue md:drop-shadow-lg transition-all duration-500'
              // onMouseLeave={() => { setOpenDepartment(false); setOpenMusic(false) }}
              // onMouseEnter={() => { setDepartmenthadFocus(true) }}
        >
                  <Link href={''} className='flex py-1.5 content-center  items-baseline text-center  mx-2 pl-2 md:pl-0 border-b  border-white hover:border-b-gray-500 hover:border-r-mid-blue  hover:md:text-gray-400 
                   hover:bg-dark-blue active:bg-dark-blue hover:md:bg-white hover:text-white   hover:md:text-inherit hover:md:bg-inherit transition-all duration-500'>
                    Sabbath School
                  </Link>
                  <Link href={''} className='flex py-1.5 content-center  items-baseline text-center  mx-2 pl-2 md:pl-0 border-b  border-white hover:border-b-gray-500 hover:border-r-mid-blue  hover:md:text-gray-400 
                   hover:bg-dark-blue active:bg-dark-blue hover:md:bg-white hover:text-white   hover:md:text-inherit hover:md:bg-inherit transition-all duration-500'>                    Personal Ministry
                  </Link>
                  <Link href={''} className='flex py-1.5 content-center  items-baseline text-center  mx-2 pl-2 md:pl-0 border-b  border-white hover:border-b-gray-500 hover:border-r-mid-blue  hover:md:text-gray-400 
                   hover:bg-dark-blue active:bg-dark-blue hover:md:bg-white hover:text-white   hover:md:text-inherit hover:md:bg-inherit transition-all duration-500'>                    youth
                  </Link>
                  <div className={` relative    `} onClick={() => setOpenMusic(!openMusic)} >
                   <div className={`flex 
                       py-1.5 justify-between content-cent  items-baseli text-center ml-2 md:mx-2 pl-2 md:pl-0 border-b border-white hover:border-b-gray-500 
                      hover:   hover:bg-dark-blue active:bg-dark-blue hover:md:bg-white hover:text-white   hover:md:text-inherit hover:md:bg-inherit transition-all duration-500
                      ${openMusic && ' font-bold md:font-inherit border-b border-t md:border-t-0  border-y-mid-blue'}`}>
                           Music
                         <span className='bordr self-center '><IoMdArrowDropdown /></span>
                      </div>
                     
                      
                    {openMusic && <div className='md:absolute  px-2 py-3 md:text-white left-60 top-0 md:z-10 sm:w-full md:w-60 h-fit md:bg-mid-blue' >
                      <Link href={''} className='flex py-1.5 content-center  items-baseline text-center  mx-2 pl-2 md:pl-0 border-b   border-white hover:border-b-gray-300  
                       hover:bg-dark-blue active:bg-dark-blue hover:md:bg-white hover:text-white hover:md:text-gray-200   hover:md:text-inherit hover:md:bg-inherit   transition-all duration-500'>
                        church choir
                      </Link>
                      <Link href={''} className='flex py-1.5 content-center  items-baseline text-center  mx-2 pl-2 md:pl-0 border-b   border-white hover:border-b-gray-300  
                       hover:bg-dark-blue active:bg-dark-blue hover:md:bg-white hover:text-white hover:md:text-gray-200   hover:md:text-inherit hover:md:bg-inherit   transition-all duration-500'>
                         youth choir
                      </Link>
                      <Link href={''} className='flex py-1.5 content-center  items-baseline text-center  mx-2 pl-2 md:pl-0 border-b   border-white hover:border-b-gray-300  
                       hover:bg-dark-blue active:bg-dark-blue hover:md:bg-white hover:text-white hover:md:text-gray-200   hover:md:text-inherit hover:md:bg-inherit   transition-all duration-500'>
                         Singing Band
                      </Link>
                      <Link href={''} className='flex py-1.5 content-center  items-baseline text-center  mx-2 pl-2 md:pl-0    border-white hover:border-b-gray-300  
                       hover:bg-dark-blue active:bg-dark-blue hover:md:bg-white hover:text-white hover:md:text-gray-200   hover:md:text-inherit hover:md:bg-inherit   transition-all duration-500'>
                          Echoes of Victory
                      </Link>
                    </div>}
                  </div>
                  <Link href={''} className='flex py-1.5 content-center  items-baseline text-center  mx-2 pl-2 md:pl-0 border-b  border-white hover:border-b-gray-500 hover:border-r-dark-blue  hover:md:text-gray-400 
                   hover:bg-dark-blue active:bg-dark-blue hover:md:bg-white hover:text-white   hover:md:text-inherit hover:md:bg-inherit transition-all duration-500'>
                      woman Ministry
                  </Link>
                  <Link href={''} className='flex py-1.5 content-center  items-baseline text-center  mx-2 pl-2 md:pl-0 border-  border-white hover:border-b-gray-500 hover:border-r-dark-blue  hover:md:text-gray-400 
                   hover:bg-dark-blue active:bg-dark-blue hover:md:bg-white hover:text-white   hover:md:text-inherit hover:md:bg-inherit transition-all duration-500'>
                      Communnication
                  </Link>
                </div>
                }
          </div>

          <Link href={'#'} className='flex  content-center font-medium  text-center  mx-2 border-b py-2 md:py-0 pl-2 md:pl-0 border-b-dark-blue md:border-white  hover:border-b-dark-blue  hover:bg-dark-blue active:bg-dark-blue hover:md:bg-white hover:text-white  hover:md:text-inherit   transition-all duration-500'>
                Meetings
          </Link>
          
          <Link href={''} className='flex content-center font-medium text-center  mx-2 border-b py-2 md:py-0 pl-2 md:pl-0 border-b-dark-blue md:border-white  hover:border-b-dark-blue  hover:bg-dark-blue active:bg-dark-blue hover:md:bg-white hover:text-white  hover:md:text-inherit transition-all duration-500'>
                our beliefs
          </Link>
          <Link href={''} className='flex  content-center  font-medium text-center  mx-2 border-b py-2 md:py-0 pl-2 md:pl-0 border-b-dark-blue md:border-white  hover:border-b-dark-blue   hover:bg-dark-blue active:bg-dark-blue hover:md:bg-white hover:text-white  hover:md:text-inherit transition-all duration-500'>
                Prayers
          </Link>
          <Link href={''} className='flex  content-center  font-medium text-center  mx-2 md:border-b  py-2 md:py-0 pl-2 md:pl-0 md:border-white hover:border-b-dark-blue hover:bg-dark-blue active:bg-dark-blue hover:md:bg-white hover:text-white  hover:md:text-inherit  transition-all duration-500'>
                About us
          </Link>

      
      
      </>
  )
}
