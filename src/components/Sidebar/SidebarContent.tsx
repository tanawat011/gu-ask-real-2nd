import type { MenuItem, MenuItemChildren } from './Sidebar'
import type { SidebarState } from 'recoils/atoms'

import { Fragment } from 'react'

import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import tw, { css, styled } from 'twin.macro'

import { sidebarAtom } from 'recoils/atoms'
import { expandItem, selectChildItem, selectItem } from 'utils/components/sidebar'

import { SidebarItem } from './SidebarItem'
import { SidebarItemChild } from './SidebarItemChild'

export type SidebarContentProps = {
  menuList: MenuItem[]
  setMenuList: (menuList: MenuItem[]) => void
}

const TwHeightContainer = tw.div`h-[calc(100% - theme(height.sidebar-header) - theme(height.sidebar-footer) - 1px)]`
const TwContainer = styled(TwHeightContainer)(({ fullSidebar }: SidebarState) => [
  tw`select-none px-4 pb-4 font-semibold text-sm`,
  fullSidebar && tw`[overflow-y: overlay]`,
])
const TwContentWrap = tw.div`flex flex-col`
const TwContentTitle = tw.div`mt-4 mb-2 px-3`

const TwWrapChildItem = styled.div(
  ({ expanded, totalItem }: { expanded?: boolean; totalItem?: number }) => [
    tw`mb-2 opacity-100 transition-all`,
    expanded ? css({ height: `${(totalItem || 0) * 40}px` }) : tw`h-0 opacity-0`,
  ],
)

export const SidebarContent: React.FC<SidebarContentProps> = ({ menuList, setMenuList }) => {
  const { fullSidebar } = useRecoilValue(sidebarAtom)

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
    <TwContainer fullSidebar={fullSidebar}>
      {menuList.map((menu) => (
        <TwContentWrap key={`sidebar-menu-${menu.title.replaceAll(' ', '-')}`}>
          {fullSidebar && <TwContentTitle>{menu.title}</TwContentTitle>}

          <div className='relative h-full'>
            {menu.children.map((item, i) => (
              <Fragment key={`sidebar-menu-item-${item.label.replaceAll(' ', '-')}-${i}`}>
                <SidebarItem
                  icon={item.icon}
                  label={item.label}
                  hasChildren={!!item.children}
                  onClick={() => handleClickItem(item.label, item)}
                  selected={item.selected}
                  expanded={item.expanded}
                />

                {!fullSidebar && item.expanded && <div className='absolute left-14'>xxx</div>}

                {fullSidebar && item.children && (
                  <TwWrapChildItem expanded={item.expanded} totalItem={item.children.length}>
                    {item.children.map((child, j) => (
                      <SidebarItemChild
                        key={`sidebar-menu-item-child-${child.label.replaceAll(
                          ' ',
                          '-',
                        )}-${i}-${j}`}
                        label={child.label}
                        onClick={() => handleClickItem(child.label, child, item)}
                        selected={child.selected}
                      />
                    ))}
                  </TwWrapChildItem>
                )}
              </Fragment>
            ))}
          </div>
        </TwContentWrap>
      ))}
    </TwContainer>
  )
}
