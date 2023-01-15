import tw, { styled } from 'twin.macro'

import { RightMenuContent, Title } from 'components/PageUiComponent'
import { useIsScrolled } from 'hooks/useIsScrolled'

import { ButtonDisabled } from './ButtonDisabled'
import { ButtonIcon } from './ButtonIcon'
import { ButtonOutline } from './ButtonOutline'
import { ButtonShape } from './ButtonShape'
import { ButtonSize } from './ButtonSize'
import { ButtonVariant } from './ButtonVariant'
import { ButtonWithIcon } from './ButtonWithIcon'

const TwContainer = tw.div`grid grid-cols-1 gap-8 px-8 py-6 desktop:grid-cols-5`
const TwWrapContent = tw.div`xl:col-span-4`
const TwWrapMenu = tw.div`col-span-1 hidden desktop:block`
const TwWrapMenu2 = styled.div(({ scrolled }: { scrolled: boolean }) => {
  return [tw`z-10`, scrolled && tw`fixed`]
})

export const ButtonUi = () => {
  const isScrolled = useIsScrolled()

  return (
    <>
      <TwContainer>
        <TwWrapContent>
          <Title
            size='xl'
            title='Button'
            description='Button is used to triggers an action or event click'
          />

          <ButtonVariant />
          <ButtonSize />
          <ButtonOutline />
          <ButtonShape />
          <ButtonDisabled />
          <ButtonIcon />
          <ButtonWithIcon />
        </TwWrapContent>

        <TwWrapMenu>
          <TwWrapMenu2 scrolled={isScrolled}>
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
              ]}
            />
          </TwWrapMenu2>
        </TwWrapMenu>
      </TwContainer>
    </>
  )
}
