'use client'
import React, {useRef, useEffect,useState, Suspense} from 'react'
import Image from 'next/image'
import { IoIosArrowForward,IoMdClose  } from "react-icons/io";
import { GoPlay } from "react-icons/go";
import { AiOutlinePause } from "react-icons/ai";
import Link from 'next/link';
import welcomeImg from '../../public/welcome1.jpg'

const WelcomeSection = () => {
  const ref = useRef<HTMLVideoElement | null | any>(null);
    
  const [play, setPlay] = useState(true)
  const [watchVideo, setWatchVideo] = useState(false)

  const ref2 = useRef<HTMLVideoElement | null | any>(null);

  useEffect(() => {
    if (play) {
      ref.current?.play();
    } else {
      ref.current?.pause();
    }
   },
    [play]
  );

  return (
    <div>       
      <div id='welcome' className={ `relative bg-black/60 flex flex-col items-center h-fit md:h-[38rem] lg:max-h-[45rem]  mb-20 w-full bg-no-repeat  
       bg-[url('/welcomemini.jpg')] md:bg-[url('/welcom.jpg')]  bg-fixed  bg-cover bg-right-bottom md:bg-bottom  text-white overflow-hidden border-none `}>
            
        <div className={`flex relative l:absolute top-0 bottom-0 right-0 left-0  
              mt-20 mb-28 w-full px-3  flex-col items-center justify-center  z-10 transition-all duration-700`}>
              <h1 >
                  <span className={`block text-lg italic md:text-3xl font-thin mb-4 tighter`}>Welcome to,</span>
                <span className="text-white text-4xl md:text-6xl lg:text-8xl font-normal lg:font-medium text-center w-full capitalize">Milton keynes S.D.A Int.</span> 
              </h1>
              <p className='font-light text-lg md:text-2xl space-x-3 mt-6 text-center md:mt-8 tracking-wide'>
                Together, we have faith, Join our family now and let us worship together.
              </p>

              <button onClick={()=>{setWatchVideo(true)}}
                      type="button"
                      className={`${''} tracking-wider mt-4 md:mt-8 flex  w-full justify-center self-center items-center gap-   font-   px-10 py-3  font- leading-6 text-xl capitalize
                      text-mid-blue   
                    mb-10  underline underline-offset-8 hover:underline-offset-4`}>
                              Meet Martha <IoIosArrowForward/>
              </button>
          
              <Link href={'https://docs.google.com/forms/d/e/1FAIpQLSePA4TMnIA7Dn6DCs8GsQopRmNsl8_uIcHmCI1wUCUGvK-IJA/viewform'} target='blank'
                
                  className={`${''}tracking-wider mt-1 lg:mt-0 flex w-fit justify-center self-center items-center gap-3 rounded-md  font-semibold   px-10 py-3  font- leading-6 text-xl capitalize
                  text-white shadow-sm border hover:shadow-md hover:bg-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 `}>
                          Join us now
              </Link>
          
          
            
        </div>      
        <div className="absolute top-0 bottom-0 right-0 left-0 bg-black/55 md:bg-black/60 "></div>
                            

                <div className='absolute -bottom-2 right-0 left-0 overflow-hidden  w-full flex justify-center z-10 ' ref={ref2}>
                <Image priority src='to_bottom_white.svg' alt='' width={250}  height={85} />
            </div>
      
      </div>
         
      {watchVideo &&
      <div className='fixed hidden lg:flex flex-col justify-center items-center z-50 top-0 right-0 left-0 bottom-0 bg-black/70 '>
          <div className='relative w-full h-full'>
              <div className='absolute right-3 top-3 w-full flex justify-end  text-black '>
                  <button className='bg-white p-2 rounded-full' onClick={()=>setWatchVideo(false)}><IoMdClose/></button> 
              </div>   
              <div className='mx-auto h-[90%] w-[90%]'>
                  <video  autoPlay controls disablePictureInPicture controlsList="noownload"  className="relative w-full h-full p-[2rem] " ref={ref2}>
                      <source src="https://mkchurch.s3.us-east-2.amazonaws.com/sabbath_service.mp4" type="video/mp4" />
                  </video>
              </div>
          </div>    
              
      </div>
      }
    </div>
  )
}

export default WelcomeSection