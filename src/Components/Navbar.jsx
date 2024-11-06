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
        <div className='bg-black h-[90px]'>

            <div className='flex justify-evenly lg:flex-row flex-col'>

                <div>
                    <ul className='lg:text-[15px] text-[12px] font-bold text-white flex gap-2 lg:gap-3 m-2'>
                        <Link to={'home'} className='cursor-pointer hover:text-gray-600'>HOME</Link>
                        <li className='cursor-pointer hover:text-gray-600'>ABOUT ME</li>
                        <li className='cursor-pointer hover:text-gray-600'>CONTACT ME</li>
                        <Link to={'portfolio'} className='cursor-pointer hover:text-gray-600'>PORTFOLIO</Link>
                        <li className='cursor-pointer hover:text-gray-600'>PROJECTS</li>
                    </ul>
                </div>

                <div className='flex gap-4 m-4'>
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