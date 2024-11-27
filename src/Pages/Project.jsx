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
                <div className='rounded-2xl flex flex-col justify-center items-center'>
                    <h1 className='text-2xl text-orange-300 rounded-t-2xl text-center w-[300px] bg-gray-600 rounded-2xl p-2 m-2'><a href='https://www.laappetit.rs/' target='_blank'>LaAppetit</a></h1>
                    <img className='w-[300px] h-[500px] rounded-b-2xl' src="/laappetit.webp" alt="laappetit" />
                </div>


                <div className="rounded-2xl flex flex-col justify-center items-center">
                    <h1 className='text-2xl text-orange-300 text-center w-[300px] rounded-t-2xl bg-gray-600  p-2 m-2 rounded-2xl '><a href='https://www.Proauto.rs/' target='_blank'>ProAuto</a></h1>
                    <img className='w-[300px] h-[500px] rounded-b-2xl' src="/proauto.webp" alt="proauto" />
                </div>
                <div className='w-[300px] h-[540px]  flex flex-col bg-black items-center rounded-2xl gap-5'>
                    <h1 className='text-2xl text-orange-300 text-center w-[300px] bg-gray-600 rounded-2xl p-2'>Destilerija Achillea <br />QRscanMenu</h1>
                    <img className='w-[150px] h-[150px]' src="/Achillea.png" alt="achillea" />
                </div>
                <div className="rounded-2xl flex flex-col ">
                    <h1 className='text-2xl text-orange-300 bg-gray-600 text-center w-[300px] p-2 rounded-2xl '><a href='https://www.milicanutricionista.com/' target='_blank'>MilicaNutricionista</a></h1>
                    <img className='w-[300px] h-[460px] rounded-b-2xl p-2' src="/milicanutr.webp" alt="MilicaNutri" /> /</div>
                <div className="rounded-2xl flex flex-col justify-center items-center">
                    <h1 className='text-2xl text-orange-300 bg-gray-600 text-center w-[300px] rounded-2xl p-2 '><a href='https://www.ordinacija-Ljiljana.rs/' target='_blank'>Ordinacija Ljiljana</a></h1>
                    <img className='w-[300px] h-[400px] rounded-b-2xl' src="/1.svg" alt="Dental" /> /</div>
            </div>
        </div>
    )
}

export default Project