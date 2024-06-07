import { UserInfo } from 'os'
import React, {useRef} from 'react'


 export default async function BackgroudVideo ({ ref }: { ref: any }){
  return (
     <video autoPlay loop muted className="relative hidden lg:block w-full h-full "  ref={ref}>
            <source src="/sabbath_service.mp4" type="video/mp4" />
      </video>
  )
}

// export default BackgroudVideo