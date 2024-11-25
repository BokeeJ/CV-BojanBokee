import { useTranslation } from 'react-i18next';

function Prevod() {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    return (
        <div>
            {/* Dugmad za promenu jezika */}
            <div className="flex ">
                <button onClick={() => changeLanguage('en')} className="text-blue-500 p-2 rounded">
                    En
                </button>
                <button onClick={() => changeLanguage('sr')} className="text-blue-500  p-2 rounded">
                    Sr
                </button>
            </div >
        </div >
    )
}

export default Prevod