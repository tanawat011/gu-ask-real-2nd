import type { SidebarState } from 'recoils/atoms'
import type { WithRequired } from 'types'

import tw, { styled } from 'twin.macro'

import { DARK_THEME, LIGHT_THEME } from 'constants/twTheme'

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
  [DARK_THEME.BORDER.COLOR],
  [LIGHT_THEME.BORDER.COLOR],
  tw`border-r transition-all min-w-[theme(width.sidebar)]`,
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
