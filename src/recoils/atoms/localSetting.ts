import type { Language } from 'locales'
import type {
  ThemeDirection,
  ThemeLayout,
  ThemeMode,
  ThemeNavMode,
  TwColor,
  TwColorLevel,
} from 'types'

import { atom } from 'recoil'

export type LocalSettingState = {
  theme: {
    color: TwColor
    direction: ThemeDirection
    mode: ThemeMode
    locale: Language
    colorLevel: TwColorLevel
    panelExpand: boolean // config menu
    navMode: ThemeNavMode
    layout: {
      type: ThemeLayout
      sideNavCollapse: boolean
    }
  }
  auth: {
    session: {
      token: string
      signedIn: boolean
    }
    user: {
      avatar: string
      name: string
      email: string
      authority: string[] // ['admin', 'user']
    }
  }
}

export const defaultLocalSetting: LocalSettingState = {
  theme: {
    color: 'indigo',
    direction: 'ltr',
    mode: 'dark',
    locale: 'en',
    colorLevel: '600',
    panelExpand: false,
    navMode: 'transparent',
    layout: {
      type: 'modern',
      sideNavCollapse: true,
    },
  },
  auth: {
    session: {
      token: '',
      signedIn: true,
    },
    user: {
      avatar: '/img/avatars/thumb-1.jpg',
      name: 'Carolyn Perkins',
      email: '',
      authority: ['admin', 'user'],
    },
  },
}

export const localSettingAtom = atom<LocalSettingState>({
  key: 'localSettingAtom',
  default: defaultLocalSetting,
})
