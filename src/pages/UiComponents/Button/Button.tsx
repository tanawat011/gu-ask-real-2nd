import tw from 'twin.macro'

import { Title } from 'components/PageUiComponent'

import { ButtonSize } from './ButtonSize'
import { ButtonVariant } from './ButtonVariant'

const TwContainer = tw.div`grid grid-cols-1 gap-8 px-8 py-6 desktop:grid-cols-5`
const TwWrapContent = tw.div`xl:col-span-4`
const TwWrapMenu = tw.div`col-span-1 hidden desktop:block`

export const ButtonUi = () => {
  return (
    <TwContainer>
      <TwWrapContent>
        <Title
          size='xl'
          title='Button'
          description='Button is used to triggers an action or event click'
        />

        <ButtonVariant />
        <ButtonSize />
      </TwWrapContent>

      <TwWrapMenu>
        <Title size='xs' title='TABLE OF CONTENT' />

        <ul className='grid gap-2'>
          <li>
            <a href='#'>Variant</a>
          </li>
          <li>
            <a href='#'>Size</a>
          </li>
          <li>
            <a href='#'>Outline</a>
          </li>
          <li>
            <a href='#'>Block</a>
          </li>
          <li>
            <a href='#'>Rounded</a>
          </li>
          <li>
            <a href='#'>Icon</a>
          </li>
          <li>
            <a href='#'>Loading</a>
          </li>
          <li>
            <a href='#'>Disabled</a>
          </li>
        </ul>
      </TwWrapMenu>
    </TwContainer>
  )
}
