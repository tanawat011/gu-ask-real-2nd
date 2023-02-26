import tw, { styled } from 'twin.macro'

import { RightMenuContent } from 'components/PageUiComponent'

import { containerId, menuList } from './data'

type RightMenuButtonUiProps = {
  isScrolled: boolean
}

const TwContainer = styled.div(({ scrolled }: { scrolled: boolean }) => {
  return [tw`z-10`, scrolled && tw`fixed`]
})

const _menuList = Object.values(menuList).map((item) => item.name)

export const RightMenuButtonUi: React.FC<RightMenuButtonUiProps> = ({
  isScrolled,
}) => {
  return (
    <TwContainer scrolled={isScrolled}>
      <RightMenuContent
        containerId={containerId}
        title='TABLE OF CONTENT'
        menuList={_menuList}
      />
    </TwContainer>
  )
}
