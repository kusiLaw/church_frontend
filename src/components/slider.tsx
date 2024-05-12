'use client'
import React, {useRef, useState} from 'react'
import { AiOutlineClose } from "react-icons/ai";


export default function Drawer({ children,isOpen = false, setIsOpen}: { children: React.ReactNode, isOpen : boolean, setIsOpen : any}) {


      
    return (
        <>
            {isOpen && <div className='fixed flex justify-end top-0 right-0 bottom-0 left-0  w-screen h-screen bg-light-blue/30 z-30 drop-shadow-2xl ' >
                <div className='h-full w-[20rem] bg-white p-2'>
                    <div className='flex justify-end'>
                        <button onClick={()=>setIsOpen(false)} className='p-2 rounded-md shadow-sm ring-2 ring-dark-blue hover:bg-dark-blue/10 mr-2 my-2'><AiOutlineClose /></button>
                    </div>
                    {children}
                </div>
     

            </div >}
        </>
  )
}