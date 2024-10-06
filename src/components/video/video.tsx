import { UserInfo } from 'os'
import React, {useRef} from 'react'


 export default async function WelcomeVideo ({link}:{link: string}){
  return (
    <video  autoPlay controls disablePictureInPicture controlsList="noownload"  className="relative  h-[80%] w-[90%]  " >
      <source src={link} type="video/mp4" />
    </video>
  )
}

