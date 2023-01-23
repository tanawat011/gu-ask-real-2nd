import tw, { styled } from 'twin.macro'

import { RightMenuContent } from 'components/PageUiComponent'
import { useIsScrolled } from 'hooks/useIsScrolled'

const TwContainer = styled.div(({ scrolled }: { scrolled: boolean }) => {
  return [tw`z-10`, scrolled && tw`fixed`]
})

export const RightMenuButtonUi = () => {
  const isScrolled = useIsScrolled()

  return (
    <TwContainer scrolled={isScrolled}>
      <RightMenuContent
        title='TABLE OF CONTENT'
        menuList={[
          { title: 'Variant' },
          { title: 'Color' },
          { title: 'Size' },
          { title: 'Shape' },
          { title: 'Disabled' },
          { title: 'Icon' },
          { title: 'With Icon' },
          { title: 'Loading' },
          { title: 'Block' },
          { title: 'API' },
        ]}
      />
    </TwContainer>
  )
}
