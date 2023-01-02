import type { MenuItem } from './Sidebar'

import tw from 'twin.macro'

export type SidebarContentProps = {
  menuList: MenuItem[]
  itemSelected: string
  handleClickItem: (key: string, item: MenuItem) => void
}

const TwIconArrow = tw.div`h-4 w-4 rounded bg-[#9ca3af]`

// all height - header - footer - border
const TwContainer = tw.div`select-none px-4 pb-4 font-semibold text-sm h-[calc(100% - 64px - 64px - 1px)] [overflow-y: overlay]`
const TwContentWrap = tw.div`flex flex-col`
const TwContentTitle = tw.div`mt-4 mb-2 px-3`
const TwContentItemWrap = tw.div`mb-2 flex h-10 cursor-pointer items-center justify-between rounded-lg px-3 hover:(text-white bg-[hsla(0,0%,100%,.1)])`
const TwContentItem = tw.div`flex items-center`

export const SidebarContent: React.FC<SidebarContentProps> = ({ menuList }) => {
  return (
    <TwContainer>
      {menuList.map((menu) => (
        <TwContentWrap key={`sidebar-menu-${menu.title.replaceAll(' ', '-')}`}>
          <TwContentTitle>{menu.title}</TwContentTitle>
          <ul>
            {menu.children.map((item) => (
              <TwContentItemWrap key={`sidebar-menu-item-${item.label.replaceAll(' ', '-')}`}>
                <TwContentItem>
                  {item.icon}
                  <span>{item.label}</span>
                </TwContentItem>
                <TwIconArrow />
              </TwContentItemWrap>
            ))}
          </ul>
        </TwContentWrap>
      ))}
    </TwContainer>
  )
}
