import tw, { styled } from 'twin.macro'

import { RightMenuContent } from 'components/PageUiComponent'
import { useIsScrolled } from 'hooks/useIsScrolled'

import { menuList } from './data'

const TwContainer = styled.div(({ scrolled }: { scrolled: boolean }) => {
  return [tw`z-10`, scrolled && tw`fixed`]
})

const _menuList = Object.values(menuList).map((item) => item.name)

export const RightMenuButtonUi = () => {
  const isScrolled = useIsScrolled()

  return (
    <TwContainer scrolled={isScrolled}>
      <RightMenuContent title='TABLE OF CONTENT' menuList={_menuList} />
    </TwContainer>
  )
}
