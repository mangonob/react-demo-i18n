import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en";
import zhCN from "./zh-CN";

export interface I18NConfig {
  user: {
    login: String;
    signup: String;
    username_placeholder: String;
    password_placeholder: String;
    image_url: String;
  };
}

const resources = {
  en: {
    translation: en,
  },
  "zh-CN": {
    translation: zhCN,
  },
};

i18n
  .use(initReactI18next)
  .init({ resources: resources as any, lng: navigator.language });

export default i18n;
