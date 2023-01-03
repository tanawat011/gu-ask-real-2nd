import tw from 'twin.macro'

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
  itemSelected: string
  fullSidebar?: boolean
  handleToggleSidebar: () => void
}

const TwSidebar = tw.div`border-r min-w-[theme(width.sidebar)] border-[#374151]`

export const Sidebar: React.FC<SidebarProps> = ({
  menuList,
  setMenuList,
  itemSelected,
  fullSidebar,
  handleToggleSidebar,
}) => {
  return (
    <TwSidebar>
      <SidebarHeader fullSidebar={fullSidebar} handleToggleSidebar={handleToggleSidebar} />

      <SidebarContent menuList={menuList} setMenuList={setMenuList} itemSelected={itemSelected} />

      <SidebarFooter />
    </TwSidebar>
  )
}
