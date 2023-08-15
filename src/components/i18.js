import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)

  .init({
    fallbackLng: "ru",
    resources: {
      uz: {
        translation: require("../languages/uz.json"),
      },
      ru: {
        translation: require("../languages/ru.json"),
      },
      en: {
        translation: require("../languages/en.json"),
      },
    },
    debug: true,
  });

export default i18n;
