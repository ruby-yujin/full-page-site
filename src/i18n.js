import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import korTranslate from './locales/kor/translate.json';
import engTranslate from './locales/eng/translate.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      kor:  {
        translation: korTranslate
      },
      eng: {
        translation: engTranslate
      }
    },
    lng: "kor",
    fallbackLng: "kor",
    interpolation: {
      escapeValue: false
    }
  });
