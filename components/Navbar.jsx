import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px16'>
        <Image src="/../public/assets/navLogo.png" alt="/" width="175" height="175" />
      </div>
    </div>
  )
}

export default Navbar