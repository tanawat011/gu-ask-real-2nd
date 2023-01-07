import type { MenuItem, MenuItemChildren } from 'components/Sidebar'

export const selectChildItem = (
  menuList: MenuItem[],
  key: string,
  parentItem: MenuItemChildren,
) => {
  return menuList.map((itemLv1) => {
    return {
      ...itemLv1,
      children: itemLv1.children.map((itemLv2) => {
        if (itemLv2.label === parentItem.label) {
          return {
            ...itemLv2,
            selected: false,
            children: itemLv2.children?.map((itemLv3) => {
              if (itemLv3.to === key) {
                return { ...itemLv3, selected: true }
              }

              return { ...itemLv3, selected: false }
            }),
          }
        }

        return {
          ...itemLv2,
          selected: false,
          children: itemLv2.children?.map((itemLv3) => {
            return { ...itemLv3, selected: false }
          }),
        }
      }),
    }
  })
}
