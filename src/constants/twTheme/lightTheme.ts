import type { Theme } from 'types'

import tw from 'twin.macro'

export const LIGHT_THEME: Theme = {
  BG: {
    COLOR: tw`bg-anti-flash-white`,
    CONTENT_COLOR: tw`bg-white`,
  },

  BORDER: {
    COLOR: tw`border-bright-gray`,
  },

  CARD: {
    BG_COLOR: tw`bg-white`,
    SUB: {
      BG_COLOR: tw`bg-ghost-white`,
    },
  },

  TEXT: {
    COLOR: tw`text-auro-metal-saurus`,
    HEAD_COLOR: tw`text-eerie-black`,
  },

  INPUT: {
    TEXT_COLOR: tw`text-auro-metal-saurus`,
    PLACEHOLDER_COLOR: tw`text-auro-metal-saurus`,
    BORDER_COLOR: tw`border-light-silver`,
    DISABLED: {
      TEXT_COLOR: tw`text-cadet-grey`,
      BG_COLOR: tw`bg-anti-flash-white`,
    },
  },

  BUTTON: {
    DISABLED: {
      BG_COLOR: tw`bg-white`,
      TEXT_COLOR: tw`text-independence`,
    },
  },

  SIDEBAR: {
    MENU: {
      TEXT_COLOR: tw`text-independence`,
      ACTIVE: {
        BG_COLOR: tw`bg-eerie-black bg-opacity-[0.075]`,
        TEXT_COLOR: tw`text-eerie-black`,
      },
      HOVER: {
        BG_COLOR: tw`hover:(bg-eerie-black bg-opacity-10)`,
        TEXT_COLOR: tw`hover:text-eerie-black`,
      },
    },
  },

  MINI_SIDEBAR: {
    MENU: {
      TEXT_COLOR: tw`text-independence`,
      ACTIVE: {
        BG_COLOR: tw`bg-eerie-black bg-opacity-[0.075]`,
        TEXT_COLOR: tw`text-eerie-black`,
      },
      HOVER: {
        BG_COLOR: tw`hover:(bg-eerie-black bg-opacity-10)`,
        TEXT_COLOR: tw`hover:text-eerie-black`,
      },
    },
  },

  TABLE: {
    HEADER: {
      BG_COLOR: tw`bg-ghost-white`,
      HEAD: {
        TEXT_COLOR: tw`text-auro-metal-saurus`,
      },
    },
    BODY: {
      ROW: {
        BG_COLOR: tw`bg-white`,
        BORDER_COLOR: tw`border-bright-gray`,
        HOVER: {
          BG_COLOR: tw`hover:(bg-anti-flash-white bg-opacity-50)`,
        },
      },
      DATA: {
        TEXT_COLOR: tw`text-cadet-grey`,
      },
    },
  },
}
