"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div>
      <header className='flex shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50'>
        <div className='flex flex-wrap items-center justify-between gap-5 w-full'>
          <a href="javascript:void(0)">
            <img src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png" alt="logo" className='w-36' />
          </a>

          <div id="collapseMenu" className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} max-lg:flex-col max-lg:fixed max-lg:bg-white max-lg:w-3/4 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:max-h-[400px] max-lg:overflow-y-auto max-lg:shadow-md z-50 transition-all duration-300`}>
            <ul className='flex flex-col gap-y-3 lg:flex-row lg:gap-x-5'>
              <li><Link href="/"> <a className='text-[#007bff] font-semibold text-[15px] hover:text-[#0056b3]'>Home</a> </Link></li>
              <li><Link href="/team"> <a className='text-gray-500 font-semibold text-[15px] hover:text-[#0056b3]'>Team</a> </Link></li>
              <li><Link href="/about"> <a className='text-gray-500 font-semibold text-[15px] hover:text-[#0056b3]'>About</a> </Link></li>
              <li><Link href="/contact"> <a className='text-gray-500 font-semibold text-[15px] hover:text-[#0056b3]'>Contact</a> </Link></li>
            </ul>
          </div>

          <div className='flex max-lg:ml-auto space-x-4'>
            <button className='px-4 py-2 text-sm rounded-full font-bold text-gray-500 border-2 bg-transparent hover:bg-gray-50 transition-all ease-in-out duration-300'>Login</button>
            <button className='px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]'>Sign up</button>

            <button onClick={toggleMenu} className='lg:hidden'>
              <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
