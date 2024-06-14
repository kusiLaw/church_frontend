'use client'
import { useState } from 'react'
import Image from 'next/image'
import FooterList from '@/components/footer/footer_items'
import SocialMedia from '../social_media'



const Footer = () => {
  const [email, setEmail] = useState('');
  return (
    <footer className=' text-gray-200  w-full md:mt-[8rem]  max-w-[1660px] mx-auto   bg-transparent z-20'>
        <div className='overflow-hidden bg-white w-full flex justify-center  -mb-1'>
                  {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#2e3092" fill-opacity="1" d="M0,224L60,240C120,256,240,288,360,293.3C480,299,600,277,720,277.3C840,277,960,299,1080,304C1200,309,1320,299,1380,293.3L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg> */}
              <Image src='/to_top.svg' alt='top' width={200}  height={85} />
          </div>
      <div className='bg-dark-blue z-30'>

          
          <div className='flex flex-col md:flex-row justify-between md:items-start  w-full pt-8  md:pt-12 px-4 md:px-10 '>
          
                      <Image src='/logo_white.svg' alt='top' width={100}  height={85} className='text-white'/>

              <div className='flex flex-c justify-end flex-wrap gap-[10%] md:gap-20 '>
                  <FooterList header='support'
                  list={[ ['FAQ' , '/support'],
                    ['Questions' , '/questions'],

                    ] }  />

                  <FooterList header='Church' list={[
                    ['Mission', '/#'],
                    ['our beliefs', '/beliefs'],
                    ['Meeting' , '/#about'],
                    ['About us' , '/about'],
                    
                
                    ]}   />

                    <FooterList header='Contact' list={[
                    ['Privacy' , '/privacy'],
                    ['Claims' , '/claims'],
                    ['Terms', '/terms']
                    ]}   />
              </div>
          </div>
          <div className='flex flex-col items-center justify-center md:flex-row md:justify-between md:items-center gap-4  py-4 md:py-6 border-y border-0.5 border-gray-400 mt-10 px-4 md:px-10'>
                <div className='w-full '>
                  <h3 className='font-semibold'>Subscribe for Updates</h3>
                  <p className='font-light text-sm md:text-base mt-2'>Get new adventist books, church programs, and more weekly by email.</p>
                </div>
                <form className='flex items-center justify-end  gap-3 md:gap-6 w-full flex-wrap '>
                    <input type='email'  required name='email' id='email' minLength={5} maxLength={65}  placeholder='Email Address'
                                pattern='\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$' title='Invalid Email format'
                                    value={email} onChange={e => setEmail(e.target.value.replace(/\s+/g, '')) }
                            className='w- py-1 px-1 rounded-sm  border-none valid:border-2  valid:border-green-500 invalid:border-2 
                                bg-white w-[15rem] placeholder:text-black ' />
                {/* <div className='lg:w-[16rem]'>
                    <Input label='email' type='email' placeholder='email'/>
                </div> */}
                  

                  <button
                      type="submit"
                      className={`${''} flex w-fit justify-center self-center items-center gap-3 rounded-md  font-semibold   px-4 py-1.5  font- leading-6 text-lg capitalize
                      text-white shadow-sm border hover:shadow-md hover:bg-blue-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 `}>
    Subscribe      </button>
                </form>
          </div>
          <div className='flex gap-3 w-full justify-center my-10  text-[1.2rem]'>
            <SocialMedia primary={false } />
          </div>
          <div className=' flex flex-col-reverse gap-6
                md:flex-row md:justify-between
                mt-8 font-thin md:font-light text-sm text-gray-300 w-full '>
            <p className='w-full text-center mb-6'>Powered by K. Lawrence 2024 . All rights reserved.</p>
        
          </div>
      
      </div>

    </footer>
  )
}

export default Footer
