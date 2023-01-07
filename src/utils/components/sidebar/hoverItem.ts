import type { MenuItem } from 'components/Sidebar'

export const hoverItem = (menuList: MenuItem[], key: string, hover?: boolean) => {
  return menuList.map((itemLv1) => {
    return {
      ...itemLv1,
      children: itemLv1.children.map((itemLv2) => {
        if (itemLv2.label === key) {
          return {
            ...itemLv2,
            hover: (typeof hover === 'boolean' && hover) || !itemLv2.hover,
          }
        }

        return itemLv2
      }),
    }
  })
}
