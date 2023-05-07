import type { UiComponentDefaultProps } from 'types'

import tw from 'twin.macro'

import { Button } from 'components/Common'
import { ComponentDisplay, Title } from 'components/PageUiComponent'
import { PreCode } from 'components/PreCode'

const TwContainer = tw.div`mb-8`

export const ButtonUiDisabled: React.FC<UiComponentDefaultProps> = (props) => {
  return (
    <TwContainer id={props.id}>
      <Title
        title={props.name}
        description={
          <>
            Disable style of the button, can set the <PreCode text='disabled' />{' '}
            prop value to <PreCode text='true' /> or <PreCode text='false' />,
            The default shape is <PreCode text='false' />.
          </>
        }
      />
      <ComponentDisplay
        components={
          <div className='flex gap-2 items-center flex-wrap'>
            <Button label='Disabled' disabled />
          </div>
        }
        code={`import React from "react"

export const Component = () => {
  return (
    <Button label='Disabled' disabled />
  )
}`}
      />
    </TwContainer>
  )
}
