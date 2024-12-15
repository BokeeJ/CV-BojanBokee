import { CiMail } from "react-icons/ci";
import { Link } from "react-scroll";
import { useTranslation } from 'react-i18next';
// import Weather from "../Services/Weather";
import { FaGithub } from "react-icons/fa";

function Contact() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col">
            <div className='flex flex-col'>
                <div className='lg:ml-20 ml-5 mt-7 flex flex-col'>
                    <h2 className='text-blue-600'>#{t('contact')}</h2>
                    <h1 className='text-[30px] text-white font-bokor'>{t('availableOnNetworks')}</h1>
                    <hr className='border-blue-600 mt-2 w-[60%]' />
                </div>
                <div className="flex lg:justify-evenly justify-between lg:p-1 p-5 items-center">
                    <div className='flex lg:justify-around p-10 flex-wrap items-center gap-10'>
                        <div className='w-10 h-10'>
                            <a href='https://www.instagram.com/bokeeJ/' className='font-bold flex flex-col items-center  text-white' target='_blank'>
                                <img src="/instagram.png" alt="insta" />
                                <h2>{t('instagram')}</h2>
                            </a>
                        </div>
                        <div className='w-10 h-10'>
                            <a href='https://sr-rs.facebook.com/people/Bojan-Drazic/pfbid02vNwPBvPsg4YH1UJssV1SKwSUACTQ3yiMgj6wCVaZuPMefcmwAGtzo6ixNLbSMj8Yl/' target='_blank' className='flex items-center text-white font-bold flex-col'>
                                <img src="/facebook.png" alt="face" />
                                <h2>{t('facebook')}</h2>
                            </a>
                        </div>
                        <div className='w-10 h-10'>
                            <a href='https://www.linkedin.com/in/bojan-drazic-b78935210/' target='_blank' className='flex items-center flex-col text-white font-bold'>
                                <img src="/linkedin.png" alt="linkedin" />
                                <h2>{t('linkedin')}</h2>
                            </a>
                        </div>
                        <div className='w-10 h-10 flex items-center text-white font-bold flex-col'>
                            <a className='text-2xl text-white' href="mailto:bokeejusthard@gmail.com">
                                <CiMail size={40} color='white' />
                            </a>
                            <h2>{t('mail')}</h2>
                        </div>
                        <div className=" flex items-center text-white font-bold">
                            <a href="https://github.com/BokeeJ" className="flex items-center flex-col" target='_blank'>
                                <FaGithub
                                    color='white'
                                    alt='Github'
                                    className='w-10 h-10 lg:mt-7 mt-5' />
                                <h2>Git</h2>

                            </a>
                        </div>

                    </div>

                    <div>
                        <ul className='lg:text-[30px] text-2xl text-orange-300 flex flex-col font-extralight gap-3'>
                            <Link
                                to={'home'}
                                className='cursor-pointer hover:text-gray-600'
                                smooth={true}
                                duration={3000}>
                                {t('home')}
                            </Link>
                            <Link
                                to='about'
                                smooth={true}
                                duration={1000}
                                className='cursor-pointer hover:text-gray-600'>
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
        </div>
    );
}

export default Contact;
