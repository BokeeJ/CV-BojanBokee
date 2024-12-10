import { useTranslation } from "react-i18next"

function Project() {
    const { t } = useTranslation();
    return (
        <div className='bg-black p-5'>
            <div className='ml-20'>
                <h2 className='text-blue-600'>{t('mustsee')}</h2>
                <h1 className='text-[30px] text-white font-bokor '>{t('projects')}</h1>
                <hr className='border-blue-600 mt-2 w-[60%]' />
            </div>
            <div className=' mt-5 m-5 flex flex-wrap gap-5 items-center justify-center'>
                {/* lappetit */}
                <div className='rounded-2xl flex flex-col justify-center items-center'>
                    <h1 className='text-2xl text-orange-300 rounded-t-2xl text-center  hover:bg-gray-800 cursor-pointer hover:transition-all w-[300px] bg-gray-600 rounded-2xl p-2 m-2'><a href='https://www.laappetit.rs/' target='_blank'>LaAppetit</a></h1>
                    <img className='w-[300px] h-[300px] rounded-full' src="/laappetit.webp" alt="laappetit" />
                </div>

                {/* Proauto */}
                <div className="rounded-2xl flex flex-col justify-center items-center">
                    <h1 className='text-2xl text-orange-300 text-center w-[300px] rounded-t-2xl hover:bg-gray-800 cursor-pointer hover:transition-all bg-gray-600  p-2 m-2 rounded-2xl '><a href='https://www.ProAuto.rs/' target='_blank'>ProAuto</a></h1>
                    <img className='w-[300px] h-[300px] rounded-full border border-gray p-2' src="/ProAuto.webp" alt="proauto" />
                </div>
                {/* Ljiljana */}
                <div className="rounded-2xl flex flex-col justify-center items-center">
                    <h1 className='text-2xl text-orange-300 bg-gray-600 text-center w-[300px]  hover:bg-gray-800 cursor-pointer hover:transition-all rounded-2xl p-2 m-2 '><a href='https://www.ordinacija-Ljiljana.rs/' target='_blank'>Ordinacija Ljiljana</a></h1>
                    <img className='w-[300px] h-[300px] rounded-full p-2' src="/velicko.webp" alt="Dental" /> </div>

                {/* MilicaNutricionista */}
                <div className="rounded-2xl flex flex-col ">
                    <h1 className='text-2xl text-orange-300 bg-gray-600 text-center w-[300px]  hover:bg-gray-800 cursor-pointer hover:transition-all p-2 rounded-2xl m-2'><a href='https://www.milicanutricionista.com/' target='_blank'>MilicaNutricionista</a></h1>
                    <img className='w-[300px] h-[300px] rounded-full p-2' src="/milica.webp" alt="MilicaNutri" /> </div>
                {/* achillea */}
                <div className='w-[300px] h-[540px]  flex flex-col bg-black items-center rounded-2xl gap-5'>
                    <h1 className='text-2xl text-orange-300 text-center w-[300px]  hover:bg-gray-800 cursor-pointer hover:transition-all bg-gray-600 rounded-2xl p-2'>Destilerija Achillea</h1>
                    <img className='w-[300px] h-[300px] rounded-full' src="/achillea.webp" alt="achillea" />
                </div>

            </div>
        </div>
    )
}

export default Project