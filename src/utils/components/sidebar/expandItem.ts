import type { MenuItem, MenuItemChildren } from 'components/Sidebar'

export const expandItem = (menuList: MenuItem[], key: string) => {
  let itemExpanded: MenuItemChildren | undefined

  const newMenuList = menuList.map((itemLv1) => {
    return {
      ...itemLv1,
      children: itemLv1.children.map((itemLv2) => {
        if (itemLv2.to === key || itemLv2.label === key) {
          itemExpanded = itemLv2

          return {
            ...itemLv2,
            expanded: !itemLv2.expanded,
          }
        }

        return itemLv2
      }),
    }
  })

  return {
    newMenuList,
    itemExpanded,
  }
}
