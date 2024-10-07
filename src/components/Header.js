import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
const Header = () => {
 const [togglemenu , setToggleMenu] =  useState(false);
  return (
    <div>
        <header className='flex justify-between px-5 py-2 bg-secondary'>
            <a className='font-bold text-black' href=''>ARC</a>
            <nav className='hidden md:block'>
                <ul className='flex text-white'>
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contacts">Contacts</a></li>
                </ul>
            </nav>
            {togglemenu && <nav className='block md:hidden '>
                <ul onClick={()=> setToggleMenu(!togglemenu)} className='flex flex-col text-white mobile-nav px-5 py-2'>
                     <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contacts">Contacts</a></li>
                </ul>
            </nav>}
            <button onClick={() => setToggleMenu(!togglemenu)} 
            className='block md:hidden'><Bars3Icon className='text-white h-5' />
            </button>
           
        </header>
    </div>
  )
}

export default Header