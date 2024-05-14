'use client'
import React, {useRef, useEffect,useState} from 'react'
import Image from 'next/image'
import { useInView } from "framer-motion"
import { Assistant } from 'next/font/google'
import { assistant, inter } from '@/components/font'

const WelcomeSection = () => {
  const ref =  useRef<HTMLVideoElement | null | any>(null);
  const [welcomeText, setWelcomeText] = useState(true)
    
    const getPosition = () => {
        if (ref !== null) {
              const rect = ref.current.getBoundingClientRect();
          console.log(rect.top )
            if (rect.top < 300) {
                setWelcomeText(false)
            }else{
                setWelcomeText(true)

            }
        }
    };

        //   Get initial position
        useEffect(() => {
            getPosition();
        
        }, []);

        // Re-calculate position when window is scrolled
        useEffect(() => {
            window.addEventListener("scroll", getPosition);
            return () => {
            window.removeEventListener("resize", getPosition);
            };
        }, []);
    

    
    return (
      <>
      <section id='welcome' className="relative  bg-[#7aa8c5]/60 flex flex-col items-center   h-[35rem] mb-20 w-full bg-no-repeat  
         bg-[url('/welcome2.jpg')] bg-fixed bg-cover bg-center text-white ">
        
        <div className={` flex sticky mt-20 w-full  flex-col items-center justify-center  z-10 transition-all duration-700`}>
           <h1 >
                        <span className={`${inter.className} block text-xl italic md:text-3xl font-thin mb-4 tighter`}>Welcome to,</span>
                       <span className="text-white text-6xl md:text-8xl font-thin md:font-medium lg:font-medium  ">Milton keynes S.D.A Int</span> 
            </h1>
                    <p className='font-light text-2xl space-x-3 mt-4 md:mt-6 tracking-wide'> Together, we have faith, Join our now family and let us worship together.</p>
                    
                    <button
                      type="submit"
                      className={`${''}tracking-wider mt-20 flex w-fit justify-center self-center items-center gap-3 rounded-md  font-semibold   px-10 py-3  font- leading-6 text-xl capitalize
                      text-white shadow-sm border hover:shadow-md hover:bg-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 `}>
    Join us now      </button>
        </div>      
  
     
       


        <div className="absolute top-0 bottom-0 right-0 left-0 bg-black/55 "></div>
        <div className='absolute -bottom-1 right-0 left-0 overflow-hidden  w-full flex justify-center z-20 ' ref={ref}>
                  {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#2e3092" fill-opacity="1" d="M0,224L60,240C120,256,240,288,360,293.3C480,299,600,277,720,277.3C840,277,960,299,1080,304C1200,309,1320,299,1380,293.3L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg> */}
              <Image src='to_bottom_white.svg' alt='top' width={250}  height={85} />
        </div>
      </section> 
      </>
  )
}

export default WelcomeSection