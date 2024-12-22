import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

function About() {
    const [toggle, Settoggle] = useState(true);
    const handleOpen = () => {
        Settoggle(!toggle);
    }
    const { t } = useTranslation();
    return (
        <div className='flex justify-center flex-col bg-black'>
            <div className='lg:ml-20 ml-8'>
                <h2 className='text-blue-600'>{t('about.needToKnow')}</h2>
                <h1 className='text-[30px] text-white font-bokor lg:text-[30px]'>{t('about.title')}</h1>
                <hr className='border-blue-600 mt-2 w-[60%]' />
            </div>
            <div className='w-full h-full items-center justify-center flex flex-col mt-10'>
                <p className='text-xl text-white p-3 text-balance text-center'>
                    <span className='text-orange-300 text-2xl'>{t('about.asWebDesigner')}</span>, {t('about.description.part1')}
                    <span className={`text-orange-300 text-2xl ${toggle ? 'hidden' : 'block'}`}>{t('about.tools')}</span><span className={`${toggle ? 'hidden' : 'block'}`}>{t('about.description.part2')}</span>
                </p>
                <Link
                    smooth={true}
                    duration={800}
                    to="about">
                    <button onClick={handleOpen} className="text-2xl  text-blue-600 fon-bold font-extralight ">{t(toggle ? 'about.Show' : 'about.Close')}</button></Link>
            </div>
            <div className="flex justify-center">
                <button className='text-[16px] border border-blue-600 w-[50%] p-3 m-5 rounded-3xl font-bold hover:bg-blue-600 transition duration-500 bg-transparent'>
                    <Link to="kontakt"
                        smooth={true}
                        duration={800}
                        className='font-bold text-white  duration-200 transition-all' >
                        {t('about.contactMe')}
                    </Link>
                </button>
            </div>

        </div>
    );
}

export default About;
