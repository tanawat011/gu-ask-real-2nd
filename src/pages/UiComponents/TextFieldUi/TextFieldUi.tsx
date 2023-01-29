import { useState } from 'react'

import tw from 'twin.macro'

import { Title } from 'components/PageUiComponent'

import { Api } from './Api'
import { RightMenuButtonUi } from './RightMenuButtonUi'
import { TextFieldUiBasic } from './TextFieldUiBasic'

const TwContainer = tw.div`relative grid grid-cols-1 gap-8 overflow-x-auto px-8 py-6 desktop:grid-cols-5`
const TwWrapContent = tw.div`xl:col-span-4`
const TwWrapMenu = tw.div`col-span-1 hidden desktop:block`

export const TextFieldUi = () => {
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

          <TextFieldUiBasic />

          <Api />
        </TwWrapContent>

        <TwWrapMenu>
          <RightMenuButtonUi isScrolled={isScrolled} />
        </TwWrapMenu>
      </TwContainer>
    </>
  )
}
