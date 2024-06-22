import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import QRCode from 'qrcode.react';

function Navbar() {
    const [menu, Setmenu] = useState(false)
    const handleClick = () => {
        Setmenu(!menu)
    }
    const handleQuit = () => {
        Setmenu(false)
    }
    return (
        <div className='bg-gray-800 flex items-center justify-center '>
            <GiHamburgerMenu onClick={handleClick} size={40} color='white' />
            <div className={`fixed top-0 right-0 gap-5 bg-gray-400 shadow-xl p-2 transition-transform duration-1000 ease-in-out ${menu ? 'translate-x-0' : 'translate-x-full'}`}>
                <button onClick={handleQuit} className='top-0 left-0 absolute mr-5 text-xl border-black border w-7 h-7 mt-1'>x</button>
                <ul className='text-l font-rob text-white gap-4'>
                    <li className='cursor-pointer hover:text-gray-600'>Home</li>
                    <li className='cursor-pointer hover:text-gray-600'>About me</li>
                    <li className='cursor-pointer hover:text-gray-600'>Contact me </li>
                    <li className='cursor-pointer hover:text-gray-600'>Portfolio</li>
                    <li className='cursor-pointer hover:text-gray-600'>Projects</li>
                </ul>
                <div className='flex gap-4 mt-4'>
                    <a href='https://sr-rs.facebook.com/people/Bojan-Drazic/pfbid02vmkt6zBMx5LgZTX9YAPg5hqmJPWMzCV5TxA3YH1LadmDxW3u99F8cCCLZfF2js85l/' target='_blank'>
                        <img className='w-7 h-7' src="/facebook.png" alt="Facebook" />
                    </a>
                    <a href='https://www.instagram.com/bokeeJ/' target='_blank'>
                        <img className='w-7 h-7' src="/instagram.png" alt="Instagram" />
                    </a>
                    <a href='https://www.linkedin.com/in/bojan-drazic-b78935210/' target='_blank'>
                        <img className='w-7 h-7' src="/linkedin.png" alt="linkedin" />
                    </a>

                </div>
            </div>


        </div>
    )
}

export default Navbar