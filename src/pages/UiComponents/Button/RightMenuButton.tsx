import tw, { styled } from 'twin.macro'

import { RightMenuContent } from 'components/PageUiComponent'
import { useIsScrolled } from 'hooks/useIsScrolled'

const TwContainer = styled.div(({ scrolled }: { scrolled: boolean }) => {
  return [tw`z-10`, scrolled && tw`fixed`]
})

export const RightMenuButton = () => {
  const isScrolled = useIsScrolled()

  return (
    <TwContainer scrolled={isScrolled}>
      <RightMenuContent
        title='TABLE OF CONTENT'
        menuList={[
          'Variant',
          'Size',
          'Outline',
          'Shape',
          'Disabled',
          'Icon',
          'With Icon',
          'Loading',
          'Block',
          'API',
        ]}
      />
    </TwContainer>
  )
}
