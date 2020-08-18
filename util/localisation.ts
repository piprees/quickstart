import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import commonCY from '../public/locales/cy/common.json'
import commonEN from '../public/locales/en/common.json'

export const i18n = i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    react: {
      useSuspense: false,
    },
    resources: {
      en: {
        common: commonEN,
      },
      cy: {
        common: commonCY,
      },
    },
    fallbackLng: 'en',
    // keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
