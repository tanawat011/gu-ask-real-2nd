import tw, { styled } from 'twin.macro'

import { RightMenuContent } from 'components/PageUiComponent'
import { useContentContext } from 'hooks/useContentContext'
import { useIsScrolled } from 'hooks/useIsScrolled'

const TwContainer = styled.div(({ scrolled }: { scrolled: boolean }) => {
  return [tw`z-10`, scrolled && tw`fixed`]
})

export const RightMenuButtonUi = () => {
  const { scroll } = useContentContext()
  const isScrolled = useIsScrolled()

  return (
    <TwContainer scrolled={isScrolled}>
      <RightMenuContent
        title='TABLE OF CONTENT'
        currentScrollPosition={scroll.top}
        menuList={[
          { id: 'variant', title: 'Variant', scroll: { min: 132, max: 448 } },
          { id: 'color', title: 'Color', scroll: { min: 449, max: 713 } },
          { id: 'size', title: 'Size', scroll: { min: 714, max: 965 } },
          { id: 'outline', title: 'Outline', scroll: { min: 966, max: 1282 } },
          { id: 'shape', title: 'Shape', scroll: { min: 1283, max: 1547 } },
          { id: 'disabled', title: 'Disabled', scroll: { min: 1548, max: 1812 } },
          { id: 'icon', title: 'Icon', scroll: { min: 1813, max: 2064 } },
          { id: 'with-icon', title: 'With Icon', scroll: { min: 2065, max: 2356 } },
          { id: 'loading', title: 'Loading', scroll: { min: 2357, max: 2596 } },
          { id: 'block', title: 'Block', scroll: { min: 2597, max: 2940 } },
          { id: 'api', title: 'API', scroll: { min: 2941 } },
        ]}
      />
    </TwContainer>
  )
}
