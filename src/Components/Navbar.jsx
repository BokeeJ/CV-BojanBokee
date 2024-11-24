

import { Link } from "react-scroll";


function Navbar() {







    return (
        <div className='bg-black h-[90px]'>

            <div className='flex justify-evenly lg:flex-row flex-col'>

                <div className='m-10'>
                    <ul className='lg:text-[30px] text-[12px] font-bold text-white flex gap-2 lg:gap-3 m-2 font-bokor'>
                        <Link
                            to={'home'}
                            className='cursor-pointer hover:text-gray-600'
                            smooth={true}
                            duration={3000}

                        >HOME</Link>
                        <li className='cursor-pointer hover:text-gray-600'>ABOUT ME</li>
                        <Link to={'kontakt'}
                            smooth={true}
                            duration={1000}
                            className='cursor-pointer hover:text-gray-600'>CONTACT ME</Link>
                        <Link to={'portfolio'} className='cursor-pointer hover:text-gray-600'>PORTFOLIO</Link>
                        <li className='cursor-pointer hover:text-gray-600'>PROJECTS</li>
                    </ul>
                </div>

                <div className='flex gap-4 m-4'>
                    <a href='https://sr-rs.facebook.com/people/Bojan-Drazic/pfbid02vmkt6zBMx5LgZTX9YAPg5hqmJPWMzCV5TxA3YH1LadmDxW3u99F8cCCLZfF2js85l/' target='_blank'>
                        <img className='w-10 h-10' src="/facebook.png" alt="Facebook" />
                    </a>
                    <a href='https://www.instagram.com/bokeeJ/' target='_blank'>
                        <img className='w-10 h-10' src="/instagram.png" alt="Instagram" />
                    </a>
                    <a href='https://www.linkedin.com/in/bojan-drazic-b78935210/' target='_blank'>
                        <img className='w-10 h-10' src="/linkedin.png" alt="linkedin" />
                    </a>

                </div>
            </div>


        </div>
    )
}

export default Navbar