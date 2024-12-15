import { useTranslation } from "react-i18next"


function Footer() {
    const { t } = useTranslation()
    return (
        <div className='flex justify-end p-2'>
            <div className='text-l text-white font-semibold border border-1 p-2 rounded-xl'>{t("BojanD")}</div>
        </div>
    )
}

export default Footer