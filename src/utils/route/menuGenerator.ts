/* eslint-disable @typescript-eslint/no-explicit-any */
import type { MenuItem } from 'components/Sidebar'
import type { RouteMain } from 'hooks/useRouteList'

import { camelToSentence } from 'utils/string'

export const menuGenerator = (menu: RouteMain): MenuItem[] => {
  const menuItems: MenuItem[] = []

  Object.entries(menu).forEach(([key, value]) => {
    // Level 1
    menuItems.push({
      title: camelToSentence(key).toUpperCase(),
      children: value?._
        ? Object.entries(value._).map(([key2, value2]) => {
            // Level 3
            const children = value2?._ && {
              children: Object.entries(value2._).map(([key3, value3]) => {
                return {
                  to: (value3 as any).fullPath,
                  label: camelToSentence(key3),
                }
              }),
            }

            // Level 2
            return {
              to: value2.fullPath,
              label: camelToSentence(key2),
              icon: value2.icon,
              ...children, // Call Level 3
            }
          })
        : [],
    })
  })

  return menuItems
}
