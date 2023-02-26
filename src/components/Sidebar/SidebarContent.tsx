import type { MenuItem, MenuItemChildren } from './Sidebar'
import type { SidebarState } from 'recoils/atoms'

import { useNavigate } from 'react-router-dom'
import tw, { css, styled } from 'twin.macro'

import { IconCaretLeft } from 'components/Icons'
import { Popover } from 'components/Popover'
import { FLEX } from 'constants/twTheme'
import {
  expandItem,
  selectChildItem,
  selectItem,
} from 'utils/components/sidebar'

import { SidebarItem } from './SidebarItem'
import { SidebarItemChild } from './SidebarItemChild'

export type SidebarContentProps = {
  menuList: MenuItem[]
  setMenuList: (menuList: MenuItem[]) => void
  fullSidebar: boolean
}

const TwHeightContainer = tw.div`h-[calc(100% - theme(height.sidebar-header) - theme(height.sidebar-footer) - 1px)]`
const TwContainer = styled(TwHeightContainer)(
  ({ fullSidebar }: SidebarState) => [
    tw`select-none px-4 pb-4 font-semibold text-sm`,
    fullSidebar && tw`[overflow-y: overlay]`,
  ],
)
const TwContentWrap = styled.div(() => [FLEX.COL])
const TwContentTitle = tw.div`mt-4 mb-2 px-3`

const TwWrapChildItem = styled.div(
  ({ expanded, totalItem }: { expanded?: boolean; totalItem: number }) => {
    return [
      tw`overflow-hidden opacity-100 transition-all`,
      expanded
        ? [css({ height: `${(totalItem + 1) * 40}px` }), tw`mb-2`]
        : tw`h-0 opacity-0`,
    ]
  },
)

export const SidebarContent: React.FC<SidebarContentProps> = ({
  menuList,
  setMenuList,
  fullSidebar,
}) => {
  const navigate = useNavigate()

  const handleClickItem = (
    menuItem: MenuItemChildren,
    key: string,
    parentItem?: MenuItemChildren,
  ) => {
    if (fullSidebar) {
      if (menuItem.children) {
        setMenuList(expandItem(menuList, key).newMenuList)

        return
      }

      if (parentItem) {
        setMenuList(selectChildItem(menuList, key, parentItem))
      } else {
        setMenuList(selectItem(menuList, key))
      }

      navigate(menuItem.to || '/')
    } else {
      if (!menuItem.children) {
        setMenuList(selectItem(menuList, key))

        navigate(menuItem.to || '/')
      }
    }
  }

  return (
    <TwContainer fullSidebar={fullSidebar}>
      {menuList.map((menu) => (
        <TwContentWrap key={`sidebar-menu-${menu.title.replaceAll(' ', '-')}`}>
          {fullSidebar && <TwContentTitle>{menu.title}</TwContentTitle>}

          {menu.children.map((item, i) => (
            <div
              key={`sidebar-menu-item-${item.label.replaceAll(' ', '-')}-${i}`}
              className='popover inline-block relative'
            >
              <SidebarItem
                icon={item.icon}
                label={item.label}
                hasChildren={!!item.children}
                onClick={() => handleClickItem(item, item.to || item.label)}
                selected={item.selected}
                expanded={item.expanded}
                fullSidebar={fullSidebar}
              />

              {!fullSidebar &&
                (item.children ? (
                  <Popover>
                    <div className='relative'>
                      <IconCaretLeft className='absolute text-charcoal left-1 top-1/2 -translate-y-1/2' />

                      <div className='bg-charcoal ml-2 text-white rounded-lg shadow-lg mb-2'>
                        {item.children.map((child, j) => (
                          <SidebarItemChild
                            key={`sidebar-menu-item-child-${child.label.replaceAll(
                              ' ',
                              '-',
                            )}-${i}-${j}`}
                            label={child.label}
                            onClick={() =>
                              handleClickItem(child, child.to, item)
                            }
                            selected={child.selected}
                            fullSidebar={fullSidebar}
                          />
                        ))}
                      </div>
                    </div>
                  </Popover>
                ) : (
                  <Popover text={item.label} />
                ))}

              {fullSidebar && item.children && (
                <TwWrapChildItem
                  expanded={item.expanded}
                  totalItem={item.children.length}
                >
                  {item.children.map((child, j) => (
                    <SidebarItemChild
                      key={`sidebar-menu-item-child-${child.label.replaceAll(
                        ' ',
                        '-',
                      )}-${i}-${j}`}
                      label={child.label}
                      onClick={() => handleClickItem(child, child.to, item)}
                      selected={child.selected}
                      fullSidebar={fullSidebar}
                    />
                  ))}
                </TwWrapChildItem>
              )}
            </div>
          ))}
        </TwContentWrap>
      ))}
    </TwContainer>
  )
}
