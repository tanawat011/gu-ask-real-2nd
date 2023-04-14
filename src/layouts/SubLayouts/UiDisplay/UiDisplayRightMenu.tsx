import tw, { styled } from 'twin.macro'

import { RightMenuContent } from 'components/PageUiComponent'

export type UiDisplayRightMenuItems = {
  [key: string]: {
    id: string
    name: string
  }
}

export type UiDisplayRightMenuProps = {
  isScrolled: boolean
  containerId: string
  menuItems: UiDisplayRightMenuItems
}

const TwContainer = styled.div(({ scrolled }: { scrolled: boolean }) => {
  return [tw`z-10`, scrolled && tw`fixed`]
})

export const UiDisplayRightMenu: React.FC<UiDisplayRightMenuProps> = (
  props,
) => {
  const _menuList = Object.values(props.menuItems).map((item) => item.name)

  return (
    <TwContainer scrolled={props.isScrolled}>
      <RightMenuContent
        containerId={props.containerId}
        title='TABLE OF CONTENT'
        menuList={_menuList}
      />
    </TwContainer>
  )
}
