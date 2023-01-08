import type { SidebarState } from 'recoils/atoms'
import type { WithRequired } from 'types'

import tw, { styled } from 'twin.macro'

import { SidebarContent } from './SidebarContent'
import { SidebarFooter } from './SidebarFooter'
import { SidebarHeader } from './SidebarHeader'

export type MenuItemChildren = {
  to?: string
  label: string
  icon?: JSX.Element
  children?: WithRequired<Pick<MenuItemChildren, 'to' | 'label' | 'selected'>, 'to'>[]
  expanded?: boolean
  selected?: boolean
  hover?: boolean
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

const TwSidebar = styled.div(({ fullSidebar }: SidebarState) => [
  tw`border-r transition-all min-w-[theme(width.sidebar)] border-[#374151]`,
  fullSidebar ? tw`min-w-[theme(width.sidebar)]` : tw`min-w-[theme(width.mini-sidebar)]`,
])

export const Sidebar: React.FC<SidebarProps> = ({ menuList, setMenuList, fullSidebar }) => {
  return (
    <TwSidebar fullSidebar={fullSidebar}>
      <SidebarHeader fullSidebar={fullSidebar} />

      <SidebarContent menuList={menuList} setMenuList={setMenuList} fullSidebar={fullSidebar} />

      {fullSidebar && <SidebarFooter />}
    </TwSidebar>
  )
}
