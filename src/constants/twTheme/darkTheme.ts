import type { Theme } from 'types'

import tw from 'twin.macro'

export const DARK_THEME: Theme = {
  BG: {
    COLOR: tw`dark:bg-eerie-black`,
    CONTENT_COLOR: tw`dark:bg-yankees-blue`,
  },

  BORDER: {
    COLOR: tw`dark:border-charcoal`,
  },

  CARD: {
    BG_COLOR: tw`dark:bg-yankees-blue`,
    SUB: {
      BG_COLOR: tw`dark:bg-charcoal`,
    },
  },

  TEXT: {
    COLOR: tw`dark:text-cadet-grey`,
    HEAD_COLOR: tw`dark:text-anti-flash-white`,
  },

  INPUT: {
    TEXT_COLOR: tw`dark:text-anti-flash-white`,
    PLACEHOLDER_COLOR: tw`dark:text-slate-gray`,
    BORDER_COLOR: tw`dark:border-charcoal`,
    DISABLED: {
      TEXT_COLOR: tw`dark:text-slate-gray`,
      BG_COLOR: tw`dark:bg-charcoal`,
    },
  },

  BUTTON: {
    DISABLED: {
      BG_COLOR: tw`dark:bg-charcoal`,
      TEXT_COLOR: tw`dark:text-anti-flash-white`,
    },
  },

  SIDEBAR: {
    MENU: {
      TEXT_COLOR: tw`dark:text-cadet-grey`,
      ACTIVE: {
        BG_COLOR: tw`dark:bg-gunmetal`,
        TEXT_COLOR: tw`dark:text-white`,
      },
      HOVER: {
        BG_COLOR: tw`dark:hover:bg-gunmetal`,
        TEXT_COLOR: tw`dark:hover:text-white`,
      },
    },
  },

  MINI_SIDEBAR: {
    MENU: {
      TEXT_COLOR: tw`dark:text-cadet-grey`,
      ACTIVE: {
        BG_COLOR: tw`dark:bg-gunmetal`,
        TEXT_COLOR: tw`dark:text-white`,
      },
      HOVER: {
        BG_COLOR: tw`dark:hover:bg-gunmetal`,
        TEXT_COLOR: tw`dark:hover:text-white`,
      },
    },
  },

  TABLE: {
    HEADER: {
      BG_COLOR: tw`dark:bg-charcoal`,
      HEAD: {
        TEXT_COLOR: tw`dark:text-white`,
      },
    },
    BODY: {
      ROW: {
        BG_COLOR: tw`dark:bg-yankees-blue`,
        BORDER_COLOR: tw`dark:border-charcoal`,
        HOVER: {
          BG_COLOR: tw`dark:hover:(bg-charcoal bg-opacity-50)`,
        },
      },
      DATA: {
        TEXT_COLOR: tw`dark:text-cadet-grey`,
      },
    },
  },
}
