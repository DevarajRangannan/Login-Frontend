import React from 'react'
import {ReactComponent as LogoSVG} from "../assets/D_Logo.svg"

export default function Logo() {
  return (
    <div className="absolute text-red-500 text-xl font-bold">
      <div className='p-3 flex items-end '>
          <div className='w-10 h-10'><LogoSVG/></div>
          <div className="text-white ml-2">Login</div>
        </div>
    </div>
  )
}
