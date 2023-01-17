import tw from 'twin.macro'

import { Title } from 'components/PageUiComponent'

import { ButtonUiApi } from './ButtonUiApi'
import { ButtonUiBlock } from './ButtonUiBlock'
import { ButtonUiColor } from './ButtonUiColor'
import { ButtonUiDisabled } from './ButtonUiDisabled'
import { ButtonUiIcon } from './ButtonUiIcon'
import { ButtonUiLoading } from './ButtonUiLoading'
import { ButtonUiOutline } from './ButtonUiOutline'
import { ButtonUiShape } from './ButtonUiShape'
import { ButtonUiSize } from './ButtonUiSize'
import { ButtonUiVariant } from './ButtonUiVariant'
import { ButtonUiWithIcon } from './ButtonUiWithIcon'
import { RightMenuButtonUi } from './RightMenuButtonUi'

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

          <ButtonUiVariant />
          <ButtonUiColor />
          <ButtonUiSize />
          <ButtonUiOutline />
          <ButtonUiShape />
          <ButtonUiDisabled />
          <ButtonUiIcon />
          <ButtonUiWithIcon />
          <ButtonUiLoading />
          <ButtonUiBlock />

          <ButtonUiApi />
        </TwWrapContent>

        <TwWrapMenu>
          <RightMenuButtonUi />
        </TwWrapMenu>
      </TwContainer>
    </>
  )
}
