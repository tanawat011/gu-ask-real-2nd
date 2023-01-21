import tw from 'twin.macro'

export const BG_THEME = {
  BASE: tw`bg-gray-100 dark:bg-gray-900`,
  CONTENT: tw`bg-white dark:bg-gray-800`,

  BTN: 'bg-white hover:bg-gray-50 active:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:active:bg-gray-500',
  BTN_PLAIN:
    'bg-transparent hover:bg-gray-50 active:bg-gray-100 dark:bg-transparent dark:hover:bg-gray-600 dark:active:bg-gray-500',
  BTN_DISABLE: tw`disabled:(bg-white opacity-50) dark:disabled:bg-gray-700`,

  MENU: tw`bg-transparent hover:(bg-gray-900 bg-opacity-10) dark:(bg-transparent hover:(bg-white bg-opacity-10))`,
  MENU_SELECT: tw`bg-gray-900 bg-opacity-[0.075] dark:(bg-white bg-opacity-10)`,

  INPUT: tw`bg-gray-50 hover:bg-gray-50 focus:bg-gray-50 dark:(bg-gray-800 hover:bg-gray-800 focus:bg-gray-800)`,
  INPUT_DISABLE: tw`bg-gray-100 dark:bg-gray-700`,

  CARD: tw`bg-white dark:bg-gray-800`,
  CARD_LV2: tw`bg-gray-100 dark:bg-gray-700`,

  PRE_CODE: tw`bg-gray-100 dark:bg-gray-600`,

  TABLE_HEAD: tw`bg-gray-50 dark:bg-gray-700`,
  TABLE_BODY: tw`bg-white dark:bg-gray-800`,
  TABLE_ROW: tw`hover:(bg-gray-100 bg-opacity-50) dark:hover:(bg-gray-700 bg-opacity-40)`,
}
