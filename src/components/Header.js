import React from 'react'
import Logo from '../assets/Logo.png'

const Header = () => {
  return (
    <div className='absolute w-full bg-gradient-to-b from-black z-10' >
        
        <img 
            className='w-1/6'
            src = {Logo}
            alt='logo'
        />

    </div>
  )
}

export default Header