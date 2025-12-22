import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import es from "./locales/es.json";
import en from "./locales/en.json";

const STORAGE_KEY = "lang";

function detectBrowserLang(): "es" | "en" {
  const nav = (navigator.language || "en").toLowerCase();
  // es-AR, es-ES, etc.
  if (nav.startsWith("es")) return "es";
  return "en";
}

const saved = localStorage.getItem(STORAGE_KEY) as "es" | "en" | null;
const initialLang = saved ?? detectBrowserLang();

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    en: { translation: en },
  },
  lng: initialLang,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export { STORAGE_KEY };
export default i18n;
