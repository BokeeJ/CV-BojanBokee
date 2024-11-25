import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';

function Navbar() {
    const { t } = useTranslation()
    return (
        <div className='bg-black h-[90px]'>
            <div className='flex  lg:flex-row flex-col justify-center'>
                <div className='m-10 '>
                    <ul className='lg:text-[30px] text-[19px] font-bold text-white flex gap-2 lg:gap-3 m-2 font-bokor hover:text-blue-400'>
                        <Link
                            to={'home'}
                            className='cursor-pointer transition-transform duration-200 hover:text-gray-600'
                            smooth={true}
                            duration={3000}>
                            {t('home')}
                        </Link>
                        <Link
                            to='about'
                            smooth={true}
                            duration={1000}
                            className='cursor-pointer  hover:text-gray-600'>
                            {t('aboutMe')}
                        </Link>
                        <Link
                            to={'kontakt'}
                            smooth={true}
                            duration={1000}
                            className='cursor-pointer hover:text-gray-600'>
                            {t('contactMe')}
                        </Link>
                        <Link
                            smooth={true}
                            duration={1000}
                            to={'portfolio'}
                            className='cursor-pointer hover:text-gray-600'>
                            {t('portfolio')}
                        </Link>
                        <Link
                            to={'projekti'}
                            smooth={true}
                            duration={1000}
                            className='cursor-pointer hover:text-gray-600'>
                            {t('projects')}
                        </Link>
                    </ul>
                </div>

                <div className='flex gap-4 m-4'>
                    <a
                        href='https://sr-rs.facebook.com/people/Bojan-Drazic/pfbid02vmkt6zBMx5LgZTX9YAPg5hqmJPWMzCV5TxA3YH1LadmDxW3u99F8cCCLZfF2js85l/'
                        target='_blank'>
                        <img
                            className='w-10 h-10'
                            src='/facebook.png'
                            alt='Facebook'
                        />
                    </a>
                    <a href='https://www.instagram.com/bokeeJ/' target='_blank'>
                        <img
                            className='w-10 h-10'
                            src='/instagram.png'
                            alt='Instagram'
                        />
                    </a>
                    <a
                        href='https://www.linkedin.com/in/bojan-drazic-b78935210/'
                        target='_blank'>
                        <img
                            className='w-10 h-10'
                            src='/linkedin.png'
                            alt='linkedin'
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
