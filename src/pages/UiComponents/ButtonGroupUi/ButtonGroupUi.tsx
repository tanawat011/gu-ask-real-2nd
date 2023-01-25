import tw from 'twin.macro'

import { Title } from 'components/PageUiComponent'

import { Api } from './Api'
import { ButtonGroupUiBasic } from './ButtonGroupUiBasic'
import { ButtonGroupUiBlock } from './ButtonGroupUiBlock'
import { ButtonGroupUiColor } from './ButtonGroupUiColor'
import { ButtonGroupUiDisabled } from './ButtonGroupUiDisabled'
import { ButtonGroupUiLoading } from './ButtonGroupUiLoading'
import { ButtonGroupUiShape } from './ButtonGroupUiShape'
import { ButtonGroupUiSize } from './ButtonGroupUiSize'
import { ButtonGroupUiVertical } from './ButtonGroupUiVertical'
import { RightMenuButtonUi } from './RightMenuButtonUi'

const TwContainer = tw.div`grid grid-cols-1 gap-8 px-8 py-6 desktop:grid-cols-5`
const TwWrapContent = tw.div`xl:col-span-4`
const TwWrapMenu = tw.div`col-span-1 hidden desktop:block`

export const ButtonGroupUi = () => {
  return (
    <>
      <TwContainer>
        <TwWrapContent>
          <div>
            <Title
              size='xl'
              title='Button Group'
              description='The button group can be used to group related buttons together.'
            />
          </div>

          <ButtonGroupUiBasic />
          <ButtonGroupUiColor />
          <ButtonGroupUiSize />
          <ButtonGroupUiShape />
          <ButtonGroupUiDisabled />
          <ButtonGroupUiLoading />
          <ButtonGroupUiBlock />
          <ButtonGroupUiVertical />

          <Api />
        </TwWrapContent>

        <TwWrapMenu>
          <RightMenuButtonUi />
        </TwWrapMenu>
      </TwContainer>
    </>
  )
}
