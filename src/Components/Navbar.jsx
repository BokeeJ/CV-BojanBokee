import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';


function Navbar() {
    const [menu, setMenu] = useState(false);

    useEffect(() => {
        const handleWindowClick = () => {
            setMenu(false);
        };
        window.addEventListener('click', handleWindowClick);
        return () => {
            window.removeEventListener('click', handleWindowClick);
        };
    }, []);

    const handleClick = (event) => {
        event.stopPropagation();
        setMenu(!menu);
    };


    return (
        <div className='bg-gray-800 flex items-center justify-center '>
            <GiHamburgerMenu onClick={handleClick} size={40} color='white' />
            <div className={`fixed top-0 right-0 gap-5shadow-xl p-2 transition-transform duration-1000 ease-in-out h-full bg-gray-800 opacity-80 ${menu ? 'translate-x-0' : 'translate-x-full'}`}>

                <ul className='text-xl font-rob text-white  mt-10 '>
                    <Link to={'home'} className='cursor-pointer hover:text-gray-600'>Home</Link>
                    <li className='cursor-pointer hover:text-gray-600'>About me</li>
                    <li className='cursor-pointer hover:text-gray-600'>Contact me </li>
                    <Link to={'portfolio'} className='cursor-pointer hover:text-gray-600'>Portfolio</Link>
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