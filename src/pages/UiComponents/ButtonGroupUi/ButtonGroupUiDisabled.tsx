import tw from 'twin.macro'

import { Button } from 'components/Button'
import { ButtonGroup } from 'components/ButtonGroup'
import { ComponentDisplay, Title } from 'components/PageUiComponent'
import { PreCode } from 'components/PreCode'

import { menuList } from './data'

const TwContainer = tw.div`mb-8`

export const ButtonGroupUiDisabled = () => {
  return (
    <TwContainer id={menuList.disabled.id}>
      <Title
        title={menuList.disabled.name}
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
          <>
            <ButtonGroup disabled>
              <Button label='First' />
              <Button label='Second' />
              <Button label='Third' />
            </ButtonGroup>

            <ButtonGroup>
              <Button label='First' disabled />
              <Button label='Second' />
              <Button label='Third' />
            </ButtonGroup>
          </>
        }
        code={`import React from "react"

export const Component = () => {
  return (
    <ButtonGroup disabled>
      <Button label='First' />
      <Button label='Second' />
      <Button label='Third' />
    </ButtonGroup>

    <ButtonGroup>
      <Button label='First' disabled />
      <Button label='Second' />
      <Button label='Third' />
    </ButtonGroup>
  )
}`}
      />
    </TwContainer>
  )
}
