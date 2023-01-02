import tw, { styled } from 'twin.macro'

import { FlexCol } from 'components/Common'

export type MenuItem = {
  label: string
  to: string
}

export type SidebarContentProps = {
  menuList: MenuItem[]
  itemSelected: string
  handleClickItem: (key: string, item: MenuItem) => void
}

type TwSidebarContentProps = Partial<SidebarContentProps> & {
  isActive?: boolean
}

const Container = tw(FlexCol)`h-full w-full bg-space-blue pt-[26px]`
const Item = styled.div(({ isActive }: TwSidebarContentProps) => [
  tw`relative flex cursor-pointer flex-row items-center h-[40px] mb-[12px]`,
  isActive && tw`bg-iron-gray`,
])
const ItemActive = tw.div`absolute z-0 h-full rounded-r bg-toy-red w-[6px]`
const ItemLabel = styled.div(({ isActive }: TwSidebarContentProps) => [
  tw`font-thaisans-nue z-0 font-semibold text-iron-gray text-[18px] ml-[22px] pb-[6px]`,
  isActive && tw`text-white`,
])

export const SidebarContent: React.FC<SidebarContentProps> = ({
  menuList,
  itemSelected,
  handleClickItem,
}) => {
  return (
    <Container>
      {menuList.map((item, index) => {
        const keyName = item.to.split('/')[1]
        const isActive = keyName === itemSelected

        return (
          <Item
            key={`sidebar-menu-item-${index}`}
            onClick={() => handleClickItem(keyName, item)}
            isActive={isActive}
          >
            {isActive && <ItemActive />}

            <ItemLabel isActive={isActive}>{item.label}</ItemLabel>
          </Item>
        )
      })}
    </Container>
  )
}
