import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';

function Navbar() {
    const { t } = useTranslation()

    return (
        <div className='bg-black h-[90px]'>

            <div className='flex  lg:flex-row  justify-center'>
                <div className='m-5 '>
                    <ul className='lg:text-[30px] text-[15px] text-orange-300 flex gap-2 lg:gap-3 m-2 font-extralight '>
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


            </div>
        </div>
    );
}

export default Navbar;
