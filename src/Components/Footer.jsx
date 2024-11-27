import { useTranslation } from "react-i18next"


function Footer() {
    const { t } = useTranslation()
    return (
        <div className='flex justify-end'>
            <div className='text-l text-white font-semibold '>{t("BojanD")}</div>
        </div>
    )
}

export default Footer