import Link from "next/link";

import React from 'react'

const LinkButton = () => {
  return (
      <Link href={``} className="p-1.5 bg-dark-blue shadow-dark-blue/30 rounded-md
    text-center text-md text-white font-medium shadow-md hover:shadow-light-blue/10 transition-all duration-300">
          Donate to us
    </Link>
  )
}

export default LinkButton