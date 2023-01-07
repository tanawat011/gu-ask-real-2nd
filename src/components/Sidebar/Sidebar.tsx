import type { SidebarState } from 'recoils/atoms'

import { useRecoilValue } from 'recoil'
import tw, { styled } from 'twin.macro'

import { sidebarAtom } from 'recoils/atoms'

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
  hover?: boolean
}

export type MenuItem = {
  title: string
  children: MenuItemChildren[]
}

export type SidebarProps = {
  menuList: MenuItem[]
  setMenuList: (menuList: MenuItem[]) => void
}

const TwSidebar = styled.div(({ fullSidebar }: SidebarState) => [
  tw`border-r transition-all min-w-[theme(width.sidebar)] border-[#374151]`,
  fullSidebar ? tw`min-w-[theme(width.sidebar)]` : tw`min-w-[theme(width.mini-sidebar)]`,
])

export const Sidebar: React.FC<SidebarProps> = ({ menuList, setMenuList }) => {
  const { fullSidebar } = useRecoilValue(sidebarAtom)

  return (
    <TwSidebar fullSidebar={fullSidebar}>
      <SidebarHeader />

      <SidebarContent menuList={menuList} setMenuList={setMenuList} />

      {fullSidebar && <SidebarFooter />}
    </TwSidebar>
  )
}
