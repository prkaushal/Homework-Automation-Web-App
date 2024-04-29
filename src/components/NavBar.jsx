import React from 'react'
import Profile from '../assets/profile.svg'
import Logo from '../assets/Logo.svg'

function NavBar() {
  return (
    <>
        <div className='bg-customGrey-800 flex px-10 py-2 justify-between items-center'>
            <img src={Logo} alt=""  className='w-44'/>
            <div className='flex'>
                <ul className='flex gap-7 text-white'>
                    <li>Home</li>
                    <li>Chat</li>
                </ul>
            </div>

            <img src={Profile} alt="profile" className='w-8 border-2 rounded-full' />
        </div>    
    </>
  )
}

export default NavBar