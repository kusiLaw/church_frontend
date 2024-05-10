import React, {useState} from 'react'
import Link from 'next/link';
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";


export const NavList = () => {
      const [openDepartment, setOpenDepartment] = useState(false)
  const [departmenthadFocus, setDepartmenthadFocus] = useState(false)
  const [openMusic, setOpenMusic] = useState(false)
  return (
      <>
             <Link href={'/'} className='flex gap-1 content-center  items-baseline font-medium text-center  mx-2 border-b 
            border-white hover:border-b-dark-blue   transition-all duration-700'>
                home
          </Link>
          <div className='relative flex  border gap-1 content-center  items-baseline text-center  mx-2 border-white  
                transition-all duration-700'  onClick={() => setOpenDepartment(true)} onMouseEnter={() => setOpenDepartment(true)}>
                  <span className='font-medium'>departments</span>
                <span className='bordr self-center '>
                  <IoMdArrowDropdown />
                </span> 
            {openDepartment && <div className=' md:absolute p-2 text-white right-0 top-10 z-20 w-64 h-60  bg-red-300 md:bg-dark-blue md:drop-shadow-lg transition-all duration-700'
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

      
      
      </>
  )
}
