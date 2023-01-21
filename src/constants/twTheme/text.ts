import tw from 'twin.macro'

export const TEXT_THEME = {
  HEAD: tw`text-gray-900 dark:text-gray-100`,
  DETAIL: tw`text-gray-500 dark:text-gray-400`,

  BTN: 'text-gray-500 hover:text-gray-500 dark:text-gray-100 dark:hover:text-gray-100',
  BTN_PLAIN:
    'text-gray-500 hover:text-gray-500 dark:text-gray-100 dark:hover:text-gray-100',
  BTN_DISABLE: tw`disabled:text-gray-600 dark:disabled:text-gray-100`,

  MENU: tw`text-gray-600 hover:text-gray-900 dark:(text-gray-100 hover:text-gray-100)`,
  MENU_HEAD: tw`text-gray-500 dark:text-gray-400`,
  MENU_SELECT: tw`text-gray-900 dark:text-gray-100`,

  INPUT: tw`text-gray-500 hover:text-gray-500 focus:text-gray-500 dark:(text-gray-100 hover:text-gray-100 focus:text-gray-100)`,
  INPUT_DISABLE: tw`text-gray-400 text-opacity-70 dark:(text-gray-400 text-opacity-70)`,
  INPUT_PLACEHOLDER: tw`text-gray-400`,

  TABLE_HEAD: tw`text-gray-500 dark:text-gray-100`,
  TABLE_BODY: tw`text-gray-600 dark:text-gray-400`,
}
