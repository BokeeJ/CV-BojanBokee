import React from 'react'

function Navbar() {
    return (
        <div className='bg-gray-800 flex items-center justify-center '>
            <div>
                <ul className='text-l font-rob text-white flex p-2 gap-10'>
                    <li className='cursor-pointer hover:text-gray-600'>About me</li>
                    <li className='cursor-pointer hover:text-gray-600'>Professional Summary</li>
                    <li className='cursor-pointer hover:text-gray-600'>Education</li>
                    <li className='cursor-pointer hover:text-gray-600'>Work Experience</li>
                    <li className='cursor-pointer hover:text-gray-600'>Skills</li>
                    <li className='cursor-pointer hover:text-gray-600'>Projects</li>
                    <li className='cursor-pointer hover:text-gray-600'>Certifications</li>
                    <li className='cursor-pointer hover:text-gray-600'>Languages
                    </li>
                </ul>
            </div>
            <div className='flex gap-4'>
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
    )
}

export default Navbar