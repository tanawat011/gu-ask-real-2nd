import type { MenuItem } from 'components/Sidebar'

export const expandItem = (menuList: MenuItem[], key: string) => {
  return menuList.map((itemLv1) => {
    return {
      ...itemLv1,
      children: itemLv1.children.map((itemLv2) => {
        if (itemLv2.label === key) {
          return { ...itemLv2, expanded: !itemLv2.expanded }
        }

        return itemLv2
      }),
    }
  })
}
