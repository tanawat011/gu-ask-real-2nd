import tw from 'twin.macro'

import { Button } from 'components/Button'
import { ComponentDisplay, Title } from 'components/PageUiComponent'

const TwContainer = tw.div`mb-8`

export const ButtonUiDisabled = () => {
  return (
    <TwContainer id='disabled'>
      <Title
        title='Disabled'
        description={
          <>
            Disable style of the button, can set the <code>disabled</code> prop value to{' '}
            <code>true</code>or <code>false</code>, The default shape is <code>false</code>.
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
