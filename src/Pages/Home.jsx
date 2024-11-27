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

            <div className='w-[90%] h-[50%] lg:w-[50%] flex justify-center lg:my-20 p-5'>
                <img className='rounded' src="/meniQr.webp" alt={t('qrAlt')} />
            </div>

        </div>
    );
}

export default Mid;
