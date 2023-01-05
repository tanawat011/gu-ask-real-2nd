import type { MenuItem, MenuItemChildren } from './Sidebar'

import { Fragment } from 'react'

import { useNavigate } from 'react-router-dom'
import tw from 'twin.macro'

import { expandItem, selectChildItem, selectItem } from 'utils/components/sidebar'

import { SidebarItem } from './SidebarItem'
import { SidebarItemChild } from './SidebarItemChild'

export type SidebarContentProps = {
  menuList: MenuItem[]
  setMenuList: (menuList: MenuItem[]) => void
  fullSidebar: boolean
}

const TwHeightContainer = tw.div`h-[calc(100% - theme(height.sidebar-header) - theme(height.sidebar-footer) - 1px)]`
const TwContainer = tw(
  TwHeightContainer,
)`select-none px-4 pb-4 font-semibold text-sm [overflow-y: overlay]`
const TwContentWrap = tw.div`flex flex-col`
const TwContentTitle = tw.div`mt-4 mb-2 px-3`

export const SidebarContent: React.FC<SidebarContentProps> = ({
  menuList,
  setMenuList,
  fullSidebar,
}) => {
  const navigate = useNavigate()

  const handleClickItem = (
    key: string,
    menuItem: MenuItemChildren,
    parentItem?: MenuItemChildren,
  ) => {
    if (menuItem.children) {
      setMenuList(expandItem(menuList, key))

      return
    }

    if (parentItem) {
      setMenuList(selectChildItem(menuList, key, parentItem))
    } else {
      setMenuList(selectItem(menuList, key))
    }

    navigate(menuItem.to || '/')
  }

  return (
    <TwContainer>
      {menuList.map((menu) => (
        <TwContentWrap key={`sidebar-menu-${menu.title.replaceAll(' ', '-')}`}>
          {fullSidebar && <TwContentTitle>{menu.title}</TwContentTitle>}

          <ul>
            {menu.children.map((item, i) => (
              <Fragment key={`sidebar-menu-item-${item.label.replaceAll(' ', '-')}-${i}`}>
                <SidebarItem
                  icon={item.icon}
                  label={item.label}
                  hasChildren={!!item.children}
                  onClick={() => handleClickItem(item.label, item)}
                  selected={item.selected}
                  fullSidebar={fullSidebar}
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
