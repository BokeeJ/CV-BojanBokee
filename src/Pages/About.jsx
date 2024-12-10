import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

function About() {
    const { t } = useTranslation();
    return (
        <div className='ml-20'>
            <div>
                <h2 className='text-blue-600'>{t('about.needToKnow')}</h2>
                <h1 className='text-[30px] text-white font-bokor lg:text-[30px]'>{t('about.title')}</h1>
                <hr className='border-blue-600 mt-2 w-[60%]' />
            </div>
            <div className='w-[60%] mt-10'>
                <p className='text-xl text-white p-3 text-balance text-center'>
                    <span className='text-orange-300 text-2xl'>{t('about.asWebDesigner')}</span>, {t('about.description.part1')}
                    <span className='text-orange-300 text-2xl'>{t('about.tools')}</span>, {t('about.description.part2')}
                </p>
            </div>
            <button className='text-[16px] border border-blue-600 p-3 m-5'>
                <Link to="kontakt"
                    smooth={true}
                    duration={800}
                    className='font-bold text-white  duration-200 transition-all' >
                    {t('about.contactMe')}
                </Link>
            </button>
        </div>
    );
}

export default About;
