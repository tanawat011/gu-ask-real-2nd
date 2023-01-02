import tw, { styled } from 'twin.macro'

import { FlexCol } from 'components/Common'

import { SidebarContent } from './SidebarContent'
import { SidebarFooter } from './SidebarFooter'
import { SidebarHeader } from './SidebarHeader'

export type MenuItem = {
  label: string
  to: string
}

export type SidebarProps = {
  menuList: MenuItem[]
  itemSelected: string
  fullSidebar: boolean
  handleToggleSidebar: () => void
  handleClickItem: (key: string, item: MenuItem) => void
}

type TwSidebarProps = Partial<Pick<SidebarProps, 'fullSidebar'>> & {
  isActive?: boolean
}

const Container = styled(FlexCol)(({ fullSidebar }: TwSidebarProps) => [
  tw`absolute h-full transition-all min-w-[290px]`,
  fullSidebar
    ? tw`left-0 translate-x-0 duration-500`
    : tw`duration-500 left-[-160px] translate-x-[-160px]`,
])

export const Sidebar: React.FC<SidebarProps> = ({
  menuList,
  itemSelected,
  fullSidebar,
  handleToggleSidebar,
  handleClickItem,
}) => {
  return (
    <Container fullSidebar={fullSidebar}>
      <SidebarHeader fullSidebar={fullSidebar} handleToggleSidebar={handleToggleSidebar} />

      <SidebarContent
        menuList={menuList}
        itemSelected={itemSelected}
        handleClickItem={handleClickItem}
      />

      <SidebarFooter />
    </Container>
  )
}
