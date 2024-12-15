import { useTranslation } from "react-i18next";


function Mid() {

    const { t } = useTranslation();

    return (
        <div className='bg-black w-full h-full lg:flex-row lg:justify-between items-center flex justify-center flex-col'>

            <div className="w-[90%]">
                <img src="/BoJanD.svg" alt={t('logoAlt')} />
            </div>

            <div className='justify-center mx-auto text-center'>
                <p className='lg:text-2xl font-rob text-white p-5'>
                    {t('description')}
                </p>
            </div>

            {/* <div className='w-[90%] h-[50%] lg:w-[50%] hidden lg:block  justify-center lg:my-20 '>
                <img className='rounded w-full h-full' src="/slika1.svg" alt={t('qrAlt')} />
            </div> */}

        </div>
    );
}

export default Mid;
