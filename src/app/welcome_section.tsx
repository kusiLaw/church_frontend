'use client'
import React, {useState,} from 'react'
import { IoIosArrowForward} from "react-icons/io";
import { Modal } from "flowbite-react";
import dynamic from 'next/dynamic'

const WelcomeVideo = dynamic(() => import('@/components/video/video'), )


const WelcomeSection = () => {

  const [openModal, setOpenModal] = useState(false);

  return (
    <>       
     <button onClick={() => { setOpenModal(true) }}
              type="button"
              className={`${''} tracking-wider mt-4 md:mt-8 flex  w-full justify-center self-center items-center gap-   font-   px-10 py-3  font- leading-6 text-xl capitalize
              text-mid-blue   
            mb-10  underline underline-offset-8 hover:underline-offset-4`}>
                      Meet Martha <IoIosArrowForward/>
     </button>
     <Modal dismissible show={openModal} size='7xl' onClose={() => setOpenModal(false)}>
        <Modal.Header>Insight</Modal.Header>
        <Modal.Body>
          <div className='relative w-full h-full border-none'>
               <div className='mx-auto h-[80%] w-[90%] flex justify-center border-none'>
                  <WelcomeVideo link="https://mkchurch.s3.us-east-2.amazonaws.com/sabbath_service.mp4"/>
               </div>
           </div>  
        </Modal.Body>
     </Modal>
    </>
  )
}

export default WelcomeSection