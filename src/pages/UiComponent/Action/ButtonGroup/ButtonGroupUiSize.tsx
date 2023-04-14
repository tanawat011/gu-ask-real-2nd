import type { UiComponentDefaultProps } from 'types'

import tw from 'twin.macro'

import { Button } from 'components/Button'
import { ButtonGroup } from 'components/ButtonGroup'
import { ComponentDisplay, Title } from 'components/PageUiComponent'
import { PreCode } from 'components/PreCode'

const TwContainer = tw.div`mb-8`

export const ButtonGroupUiSize: React.FC<UiComponentDefaultProps> = (props) => {
  return (
    <TwContainer id={props.id}>
      <Title
        title={props.name}
        description={
          <>
            Size of the button, can set the <PreCode text='size' /> prop value
            to <PreCode text='xs' />, <PreCode text='sm' />,{' '}
            <PreCode text='md' /> and <PreCode text='xl' />, The default size is{' '}
            <PreCode text='md' />.
          </>
        }
      />
      <ComponentDisplay
        components={
          <>
            <ButtonGroup size='xs'>
              <Button label='First' />
              <Button label='Second' />
              <Button label='Third' />
            </ButtonGroup>
          </>
        }
        code={`import React from "react"

export const Component = () => {
  return (
    <ButtonGroup size='xs'>
      <Button label='First' />
      <Button label='Second' />
      <Button label='Third' />
    </ButtonGroup>
  )
}`}
      />
    </TwContainer>
  )
}
