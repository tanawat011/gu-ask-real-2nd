import tw, { styled } from 'twin.macro'

import { SidebarContent } from './SidebarContent'
import { SidebarFooter } from './SidebarFooter'
import { SidebarHeader } from './SidebarHeader'

export type MenuItemChildren = {
  to?: string
  label: string
  icon?: JSX.Element
  children?: Pick<MenuItemChildren, 'to' | 'label' | 'selected'>[]
  expanded?: boolean
  selected?: boolean
}

export type MenuItem = {
  title: string
  children: MenuItemChildren[]
}

export type SidebarProps = {
  menuList: MenuItem[]
  setMenuList: (menuList: MenuItem[]) => void
  fullSidebar: boolean
}

export type TwSidebarProps = Pick<SidebarProps, 'fullSidebar'>

const TwSidebar = styled.div(({ fullSidebar }: TwSidebarProps) => [
  tw`border-r min-w-[theme(width.sidebar)] border-[#374151]`,
  fullSidebar ? tw`min-w-[theme(width.sidebar)]` : tw`min-w-[theme(width.mini-sidebar)]`,
])

export const Sidebar: React.FC<SidebarProps> = ({ menuList, setMenuList, fullSidebar }) => {
  return (
    <TwSidebar fullSidebar={fullSidebar}>
      <SidebarHeader fullSidebar={fullSidebar} />

      <SidebarContent fullSidebar={fullSidebar} menuList={menuList} setMenuList={setMenuList} />

      <SidebarFooter fullSidebar={fullSidebar} />
    </TwSidebar>
  )
}
