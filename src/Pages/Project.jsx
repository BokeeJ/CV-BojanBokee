
import { useTranslation } from "react-i18next"

import { useState } from "react";




function Project() {
    const slike = [
        { id: 1, img: '/andra.webp' },
        { id: 2, img: '/qr.png' }

    ]
    const { t } = useTranslation();
    const [trenutna, Settrenutna] = useState(0);
    const slider = () => {
        Settrenutna((previndex) => (previndex + 1) % slike.length);

    }





    return (
        <div className='bg-black p-10'>
            <div className='lg:ml-20 '>
                <h2 className='text-blue-600'>{t('mustsee')}</h2>
                <h1 className='text-[30px] text-white font-bokor '>{t('projects')}</h1>
                <hr className='border-blue-600 mt-2 w-[60%]' />
            </div>


            <div className='flex flex-wrap gap-2  mt-10 lg:justify-start justify-center'>
                {/* lappetit */}
                <div className='rounded-2xl flex flex-col justify-center items-center'>
                    <h1 className='text-2xl text-orange-300 rounded-t-2xl text-center  hover:bg-gray-800 cursor-pointer hover:transition-all w-[300px] bg-gray-600 rounded-2xl p-2 m-2'><a href='https://www.laappetit.rs/' target='_blank'>LaAppetit.rs</a></h1>
                    <img className='lg:w-[300px] lg:h-[300px] w-[150px] h-[150px] rounded-full' src="/laappetit.webp" alt="laappetit" />
                </div>

                {/* Proauto */}
                <div className="rounded-2xl flex flex-col justify-center items-center">
                    <h1 className='text-2xl text-orange-300 text-center w-[300px] rounded-t-2xl hover:bg-gray-800 cursor-pointer hover:transition-all bg-gray-600  p-2 m-2 rounded-2xl '><a href='https://www.ProAuto.rs/' target='_blank'>ProAuto.rs</a></h1>
                    <img className='lg:w-[300px] lg:h-[300px] w-[150px] h-[150px] rounded-full border border-gray p-2' src="/2024.webp" alt="proauto" />
                </div>
                {/* Ljiljana */}
                <div className="rounded-2xl flex flex-col justify-center items-center">
                    <h1 className='text-2xl text-orange-300 bg-gray-600 text-center w-[300px]  hover:bg-gray-800 cursor-pointer hover:transition-all rounded-2xl p-2 m-2 '>
                        <a href='https://www.ordinacija-Ljiljana.rs/' target='_blank'>Ordinacija Ljiljana.rs</a>
                    </h1>
                    <img className='lg:w-[300px] lg:h-[300px] w-[150px] h-[150px] rounded-full p-2' src="/velicko.webp" alt="Dental" /> </div>

                {/* MilicaNutricionista */}
                <div className="rounded-2xl flex flex-col justify-center items-center ">
                    <h1 className='text-2xl text-orange-300 bg-gray-600 text-center w-[300px]  hover:bg-gray-800 cursor-pointer hover:transition-all p-2 rounded-2xl m-2'><a href='https://www.milicanutricionista.com/' target='_blank'>MilicaNutricionista.com</a></h1>
                    <img className='lg:w-[300px] lg:h-[300px] w-[150px] h-[150px] rounded-full p-2' src="/milica.webp" alt="MilicaNutri" /> </div>
                {/* achillea */}
                <div className='flex flex-col bg-black items-center rounded-2xl '>
                    <div className="rounded-2xl flex flex-col items-center">
                        <h1 onClick={slider} className="text-2xl text-orange-300 bg-gray-600 text-center w-[300px]  hover:bg-gray-800 cursor-pointer hover:transition-all rounded-2xl p-2 m-2">
                            Destilerija Ahileja.Qr
                        </h1>
                        <img
                            alt="Achillea"
                            className={`lg:w-[300px] lg:h-[300px] w-[150px] h-[150px] rounded-full p-2 ${slike[trenutna].id === 2 ? 'rounded-none' : ''}`} src={slike[trenutna].img} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Project