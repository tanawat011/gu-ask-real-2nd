import type { MenuItem } from './Sidebar'

import tw from 'twin.macro'

import { SidebarItem } from './SidebarItem'

export type SidebarContentProps = {
  menuList: MenuItem[]
  itemSelected: string
  handleClickItem: (key: string, item: MenuItem) => void
}

const TwHeightContainer = tw.div`h-[calc(100% - theme(height.sidebar-header) - theme(height.sidebar-footer) - 1px)]`
const TwContainer = tw(
  TwHeightContainer,
)`select-none px-4 pb-4 font-semibold text-sm [overflow-y: overlay]`
const TwContentWrap = tw.div`flex flex-col`
const TwContentTitle = tw.div`mt-4 mb-2 px-3`

export const SidebarContent: React.FC<SidebarContentProps> = ({ menuList }) => {
  return (
    <TwContainer>
      {menuList.map((menu) => (
        <TwContentWrap key={`sidebar-menu-${menu.title.replaceAll(' ', '-')}`}>
          <TwContentTitle>{menu.title}</TwContentTitle>
          <ul>
            {menu.children.map((item) => (
              <SidebarItem
                key={`sidebar-menu-item-${item.label.replaceAll(' ', '-')}`}
                icon={item.icon}
                label={item.label}
              />
            ))}
          </ul>
        </TwContentWrap>
      ))}
    </TwContainer>
  )
}
