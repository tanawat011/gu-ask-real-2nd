import type { MenuItem, MenuItemChildren } from './Sidebar'

import { Fragment } from 'react'

import { useNavigate } from 'react-router-dom'
import tw from 'twin.macro'

import { SidebarItem } from './SidebarItem'
import { SidebarItemChild } from './SidebarItemChild'

export type SidebarContentProps = {
  menuList: MenuItem[]
  setMenuList: (menuList: MenuItem[]) => void
  itemSelected: string
}

const TwHeightContainer = tw.div`h-[calc(100% - theme(height.sidebar-header) - theme(height.sidebar-footer) - 1px)]`
const TwContainer = tw(
  TwHeightContainer,
)`select-none px-4 pb-4 font-semibold text-sm [overflow-y: overlay]`
const TwContentWrap = tw.div`flex flex-col`
const TwContentTitle = tw.div`mt-4 mb-2 px-3`

export const SidebarContent: React.FC<SidebarContentProps> = ({ menuList, setMenuList }) => {
  const navigate = useNavigate()

  const handleClickItem = (
    key: string,
    menuItem: MenuItemChildren,
    parentItem?: MenuItemChildren,
  ) => {
    if (menuItem.children) {
      const newMenuList = menuList.map((itemLv1) => {
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

      setMenuList(newMenuList)

      return
    }

    if (parentItem) {
      const newMenuList = menuList.map((itemLv1) => {
        return {
          ...itemLv1,
          children: itemLv1.children.map((itemLv2) => {
            if (itemLv2.label === parentItem.label) {
              return {
                ...itemLv2,
                selected: false,
                children: itemLv2.children?.map((itemLv3) => {
                  if (itemLv3.label === key) {
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

      setMenuList(newMenuList)

      navigate(menuItem.to || '/')

      return
    }

    const newMenuList = menuList.map((itemLv1) => {
      return {
        ...itemLv1,
        children: itemLv1.children.map((itemLv2) => {
          if (itemLv2.label === key) {
            return {
              ...itemLv2,
              selected: true,
              children: itemLv2.children?.map((itemLv3) => {
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

    setMenuList(newMenuList)

    navigate(menuItem.to || '/')
  }

  return (
    <TwContainer>
      {menuList.map((menu) => (
        <TwContentWrap key={`sidebar-menu-${menu.title.replaceAll(' ', '-')}`}>
          <TwContentTitle>{menu.title}</TwContentTitle>
          <ul>
            {menu.children.map((item, i) => (
              <Fragment key={`sidebar-menu-item-${item.label.replaceAll(' ', '-')}-${i}`}>
                <SidebarItem
                  icon={item.icon}
                  label={item.label}
                  hasChildren={!!item.children}
                  onClick={() => handleClickItem(item.label, item)}
                  selected={item.selected}
                />

                {item.expanded &&
                  item.children &&
                  item.children.map((child, j) => (
                    <SidebarItemChild
                      key={`sidebar-menu-item-child-${child.label.replaceAll(' ', '-')}-${i}-${j}`}
                      label={child.label}
                      onClick={() => handleClickItem(child.label, child, item)}
                      selected={child.selected}
                    />
                  ))}
              </Fragment>
            ))}
          </ul>
        </TwContentWrap>
      ))}
    </TwContainer>
  )
}
