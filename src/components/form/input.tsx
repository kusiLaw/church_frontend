'use client'
import { useState } from "react"

const Input = ({ type = 'text', placeholder='', name='', required = false, id= null || '', label = '', controlInput= false, controlFn = (e:any,fn:any)=> {} }) => {
  const [input, setInput] = useState('')

  return (
    <div>
        <label htmlFor="last_name" className="block mb-2  text-base text-gray-900 capitalize w-full ">{label}</label>
            <input type={type} id={name} name={name} className="
    bg-white border border-gray-00 text-gray-900 text-sm rounded-lg  border-dark-blue focus:shadow-mid-blue block w-full p-2.5
     shadow-sm outline-0 invalid:border-red-00 valid:ring-dark-blue placeholder:text-gray-9006D/
             "
               placeholder= {placeholder} required ={ required} 
               onChange={(e)=>{controlInput ? controlFn(e, setInput) : setInput(e.target.value)}}
               value={input}
               />
    </div>
  )
}

export default Input