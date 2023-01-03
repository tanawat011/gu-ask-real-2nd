import tw from 'twin.macro'

import { SidebarContent } from './SidebarContent'
import { SidebarFooter } from './SidebarFooter'
import { SidebarHeader } from './SidebarHeader'

type MenuItemChildren = {
  to?: string
  label: string
  icon?: JSX.Element
  children?: MenuItemChildren[]
}

export type MenuItem = {
  title: string
  children: MenuItemChildren[]
}

export type SidebarProps = {
  menuList: MenuItem[]
  itemSelected: string
  fullSidebar?: boolean
  handleToggleSidebar: () => void
  handleClickItem: (key: string, item: MenuItem) => void
}

const TwSidebar = tw.div`border-r min-w-[theme(width.sidebar)] border-[#374151]`

export const Sidebar: React.FC<SidebarProps> = ({
  menuList,
  itemSelected,
  fullSidebar,
  handleToggleSidebar,
  handleClickItem,
}) => {
  return (
    <TwSidebar>
      <SidebarHeader fullSidebar={fullSidebar} handleToggleSidebar={handleToggleSidebar} />

      <SidebarContent
        menuList={menuList}
        itemSelected={itemSelected}
        handleClickItem={handleClickItem}
      />

      <SidebarFooter />
    </TwSidebar>
  )
}
