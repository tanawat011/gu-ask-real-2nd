import type { TwStyle } from 'twin.macro'

export type Theme = {
  BG: {
    COLOR: TwStyle
    CONTENT_COLOR: TwStyle
  }

  BORDER: {
    COLOR: TwStyle
  }

  CARD: {
    BG_COLOR: TwStyle
    SUB: {
      BG_COLOR: TwStyle
    }
  }

  TEXT: {
    COLOR: TwStyle
    HEAD_COLOR: TwStyle
  }

  INPUT: {
    TEXT_COLOR: TwStyle
    PLACEHOLDER_COLOR: TwStyle
    BORDER_COLOR: TwStyle
    DISABLED: {
      TEXT_COLOR: TwStyle
      BG_COLOR: TwStyle
    }
  }

  BUTTON: {
    DISABLED: {
      BG_COLOR: TwStyle
      TEXT_COLOR: TwStyle
    }
  }

  SIDEBAR: {
    MENU: {
      TEXT_COLOR: TwStyle
      ACTIVE: {
        BG_COLOR: TwStyle
        TEXT_COLOR: TwStyle
      }
      HOVER: {
        BG_COLOR: TwStyle
        TEXT_COLOR: TwStyle
      }
    }
  }

  MINI_SIDEBAR: {
    MENU: {
      TEXT_COLOR: TwStyle
      ACTIVE: {
        BG_COLOR: TwStyle
        TEXT_COLOR: TwStyle
      }
      HOVER: {
        BG_COLOR: TwStyle
        TEXT_COLOR: TwStyle
      }
    }
  }

  TABLE: {
    HEADER: {
      BG_COLOR: TwStyle
      HEAD: {
        TEXT_COLOR: TwStyle
      }
    }
    BODY: {
      ROW: {
        BG_COLOR: TwStyle
        BORDER_COLOR: TwStyle
        HOVER: {
          BG_COLOR: TwStyle
        }
      }
      DATA: {
        TEXT_COLOR: TwStyle
      }
    }
  }
}
