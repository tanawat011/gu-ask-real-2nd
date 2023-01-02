import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import { isDevelopmentMode } from 'utils/env'

import commonEn from './en/common.json'
import sidebarEn from './en/sidebar.json'
import commonTh from './th/common.json'
import sidebarTh from './th/sidebar.json'

export const defaultNS = 'common'
export const resources = {
  en: {
    common: commonEn,
    sidebar: sidebarEn,
  },
  th: {
    common: commonTh,
    sidebar: sidebarTh,
  },
} as const

i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: 'v3',
    lng: 'en',
    fallbackLng: 'en',
    resources,
    defaultNS,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    react: {
      useSuspense: false,
    },
    debug: isDevelopmentMode(),
    parseMissingKeyHandler: (key) => {
      if (window._env_.NODE_ENV === 'development') {
        throw new Error(`Missing Key: ${key}`)
      }

      return key
    },
  })

i18next.languages = ['th', 'en']

export default i18next
