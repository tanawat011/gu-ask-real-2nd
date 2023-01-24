import { camelToSentence } from 'utils/string'

export const menuGenerator = (routes: {
  [key: string]: { fullPath: string }
}) => {
  return Object.entries(routes).map(([key, { fullPath }]) => {
    return {
      to: fullPath,
      label: camelToSentence(key).replaceAll('And', '&'),
    }
  })
}
