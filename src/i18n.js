import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation.json';
import sr from './locales/sr/translation.json';

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: en },
        sr: { translation: sr }
    },
    lng: 'sr', // Početni jezik
    fallbackLng: 'en', // Rezervni jezik
    interpolation: {
        escapeValue: false, // React već sanitizuje vrednosti
    }
});

export default i18n;
