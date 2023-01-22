import type { Dimension } from 'hooks/useElementDimension'
import type { ButtonUiDimensions } from 'recoils/atoms'

import tw, { styled } from 'twin.macro'

import { RightMenuContent } from 'components/PageUiComponent'
import { useContentContext } from 'hooks/useContentContext'
import { useIsScrolled } from 'hooks/useIsScrolled'

const TwContainer = styled.div(({ scrolled }: { scrolled: boolean }) => {
  return [tw`z-10`, scrolled && tw`fixed`]
})

type RightMenuButtonUiProps = {
  pageDimension: Dimension
  dimension: ButtonUiDimensions
}

export const RightMenuButtonUi: React.FC<RightMenuButtonUiProps> = ({
  pageDimension,
  dimension,
}) => {
  const { scroll } = useContentContext()
  const isScrolled = useIsScrolled()

  const {
    head,
    variant,
    color,
    size,
    shape,
    disabled,
    icon,
    withIcon,
    loading,
    block,
  } = dimension

  const handlePositionY = (_dimension: Dimension) => {
    const more = 1
    const marginBottom = 32

    return _dimension.clientHeight + _dimension.offsetTop + marginBottom - more
  }

  return (
    <TwContainer scrolled={isScrolled}>
      <RightMenuContent
        title='TABLE OF CONTENT'
        currentScrollPosition={scroll.top}
        pageHeight={pageDimension.clientHeight}
        menuList={[
          { title: 'Variant', scroll: handlePositionY(head) },
          { title: 'Color', scroll: handlePositionY(variant) },
          { title: 'Size', scroll: handlePositionY(color) },
          { title: 'Shape', scroll: handlePositionY(size) },
          { title: 'Disabled', scroll: handlePositionY(shape) },
          { title: 'Icon', scroll: handlePositionY(disabled) },
          { title: 'With Icon', scroll: handlePositionY(icon) },
          { title: 'Loading', scroll: handlePositionY(withIcon) },
          { title: 'Block', scroll: handlePositionY(loading) },
          { title: 'API', scroll: handlePositionY(block) },
        ]}
      />
    </TwContainer>
  )
}
