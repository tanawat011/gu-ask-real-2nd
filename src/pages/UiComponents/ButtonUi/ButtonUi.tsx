import { useState } from 'react'

import tw from 'twin.macro'

import { Title } from 'components/PageUiComponent'

import { Api } from './Api'
import { ButtonUiBlock } from './ButtonUiBlock'
import { ButtonUiColor } from './ButtonUiColor'
import { ButtonUiDisabled } from './ButtonUiDisabled'
import { ButtonUiIcon } from './ButtonUiIcon'
import { ButtonUiLoading } from './ButtonUiLoading'
import { ButtonUiShape } from './ButtonUiShape'
import { ButtonUiSize } from './ButtonUiSize'
import { ButtonUiVariant } from './ButtonUiVariant'
import { ButtonUiWithIcon } from './ButtonUiWithIcon'
import { RightMenuButtonUi } from './RightMenuButtonUi'

const TwContainer = tw.div`relative grid grid-cols-1 gap-8 overflow-x-auto px-8 py-6 desktop:grid-cols-5`
const TwWrapContent = tw.div`xl:col-span-4`
const TwWrapMenu = tw.div`col-span-1 hidden desktop:block`

export const ButtonUi = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = () => {
    setIsScrolled(true)
  }

  return (
    <>
      <TwContainer id='button-ui' onScroll={handleScroll}>
        <TwWrapContent>
          <div>
            <Title
              size='xl'
              title='Button'
              description='Button is used to triggers an action or event click'
            />
          </div>

          <ButtonUiVariant />
          <ButtonUiColor />
          <ButtonUiSize />
          <ButtonUiShape />
          <ButtonUiDisabled />
          <ButtonUiIcon />
          <ButtonUiWithIcon />
          <ButtonUiLoading />
          <ButtonUiBlock />

          <Api />
        </TwWrapContent>

        <TwWrapMenu>
          <RightMenuButtonUi isScrolled={isScrolled} />
        </TwWrapMenu>
      </TwContainer>
    </>
  )
}
