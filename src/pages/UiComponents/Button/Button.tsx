import tw from 'twin.macro'

import { Title } from 'components/PageUiComponent'

import { ButtonBlock } from './ButtonBlock'
import { ButtonDisabled } from './ButtonDisabled'
import { ButtonIcon } from './ButtonIcon'
import { ButtonLoading } from './ButtonLoading'
import { ButtonOutline } from './ButtonOutline'
import { ButtonShape } from './ButtonShape'
import { ButtonSize } from './ButtonSize'
import { ButtonVariant } from './ButtonVariant'
import { ButtonWithIcon } from './ButtonWithIcon'
import { RightMenuButton } from './RightMenuButton'

const TwContainer = tw.div`grid grid-cols-1 gap-8 px-8 py-6 desktop:grid-cols-5`
const TwWrapContent = tw.div`xl:col-span-4`
const TwWrapMenu = tw.div`col-span-1 hidden desktop:block`

export const ButtonUi = () => {
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
          <ButtonLoading />
          <ButtonBlock />
        </TwWrapContent>

        <TwWrapMenu>
          <RightMenuButton />
        </TwWrapMenu>
      </TwContainer>
    </>
  )
}
