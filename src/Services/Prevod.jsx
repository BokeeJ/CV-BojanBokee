import { useTranslation } from 'react-i18next';
import { FaGithub } from "react-icons/fa";

function Prevod() {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    return (
        <div className='flex justify-between bg-black'>
            <div className='flex gap-4 m-4'>
                <a
                    href='https://sr-rs.facebook.com/people/Bojan-Drazic/pfbid02vmkt6zBMx5LgZTX9YAPg5hqmJPWMzCV5TxA3YH1LadmDxW3u99F8cCCLZfF2js85l/'
                    target='_blank'>
                    <img
                        className='lg:w-10 lg:h-10 w-7 h-7'
                        src='/facebook.png'
                        alt='Facebook'
                    />
                </a>
                <a href='https://www.instagram.com/bokeeJ/' target='_blank'>
                    <img
                        className='lg:w-10 lg:h-10 w-7 h-7'
                        src='/instagram.png'
                        alt='Instagram'
                    />
                </a>
                <a
                    href='https://www.linkedin.com/in/bojan-drazic-b78935210/'
                    target='_blank'>
                    <img
                        className='lg:w-10 lg:h-10 w-7 h-7'
                        src='/linkedin.png'
                        alt='linkedin'
                    />
                </a>
                <a href="https://github.com/BokeeJ" target='_blank'>
                    <FaGithub
                        color='white'
                        alt='Github'
                        className='lg:w-10 lg:h-10 w-7 h-7' />
                </a>
            </div>

            <div className="flex ">
                <button onClick={() => changeLanguage('en')} className="text-blue-500 font-rob p-2 font-bold rounded">
                    <img src="/english2.jpg" alt="flagEnglish" className='w-4 h-3' />
                </button>
                <button onClick={() => changeLanguage('sr')} className="text-blue-500 font-rob font-bold p-2 rounded">
                    <img src="/serb.jpg" alt="flagSerbian" className='w-4 h-3' />
                </button>
            </div >

        </div >
    )
}

export default Prevod