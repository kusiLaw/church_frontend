import React from 'react'
import style from './program.module.css'
export const ProgramVideo = () => {
  return (
      <div className='group/bg bg- w-full h-[30rem] rounded-sm '>
          <div className={` group/pic group-hover/bg:h-[100%] bg-[url("/prayer3.jpg")] bg-top w-full h-[100%] rounded-sm z-10`}>
              <div className={`${style.gradiens} h-full w-full duration-500 group-hover/bg:animate-[programslideout]`}>
                  
              </div>
          </div>  
          {/* <div className='bg-red-400 h-[50%] w-full z-20 group-hover/bg:h-[0%]'>
              <div className='group-hover/bg:text-white'>
                  dfmkdfdfds
              </div>
          </div> */}
      </div>
  )
}

export default ProgramVideo
