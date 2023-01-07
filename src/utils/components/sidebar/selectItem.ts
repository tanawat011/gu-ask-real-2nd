import type { MenuItem } from 'components/Sidebar'

export const selectItem = (menuList: MenuItem[], key: string) => {
  return menuList.map((itemLv1) => {
    return {
      ...itemLv1,
      children: itemLv1.children.map((itemLv2) => {
        if (itemLv2.to === key) {
          return {
            ...itemLv2,
            selected: true,
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
