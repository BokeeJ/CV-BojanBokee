import { CiMail } from "react-icons/ci";
import { Link } from "react-scroll";
import { useTranslation } from 'react-i18next';

function Contact() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col">
            <div className='flex flex-col'>
                <div className='ml-20 mt-7 flex flex-col'>
                    <h2 className='text-blue-600'>#{t('contact')}</h2>
                    <h1 className='text-[30px] text-white font-bokor'>{t('availableOnNetworks')}</h1>
                    <hr className='border-blue-600 mt-2 w-[60%]' />
                </div>
                <div className="flex justify-around items-center">
                    <div className='flex justify-around p-10 flex-col gap-5'>
                        <div className='w-10 h-10'>
                            <a href='https://www.instagram.com/bokeeJ/' className='font-bold flex items-center gap-2 text-white' target='_blank'>
                                <img src="/instagram.png" alt="insta" />
                                <h2>{t('instagram')}</h2>
                            </a>
                        </div>
                        <div className='w-10 h-10'>
                            <a href='https://sr-rs.facebook.com/people/Bojan-Drazic/pfbid02vNwPBvPsg4YH1UJssV1SKwSUACTQ3yiMgj6wCVaZuPMefcmwAGtzo6ixNLbSMj8Yl/' target='_blank' className='flex items-center gap-2 text-white font-bold'>
                                <img src="/facebook.png" alt="face" />
                                <h2>{t('facebook')}</h2>
                            </a>
                        </div>
                        <div className='w-10 h-10'>
                            <a href='https://www.linkedin.com/in/bojan-drazic-b78935210/' target='_blank' className='flex items-center gap-2 text-white font-bold'>
                                <img src="/linkedin.png" alt="linkedin" />
                                <h2>{t('linkedin')}</h2>
                            </a>
                        </div>
                        <div className='w-10 h-10 flex gap-2 items-center text-white font-bold'>
                            <a className='text-2xl text-white' href="mailto:bokeejusthard@gmail.com">
                                <CiMail size={40} color='white' />
                            </a>
                            <h2>{t('mail')}</h2>
                        </div>
                    </div>
                    <div>
                        <ul className='lg:text-[30px] text-2xl shadow-sm shadow-gray-100 p-5 font-bold text-white flex gap-2 lg:gap-3 m-2 font-bokor flex-col'>
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
