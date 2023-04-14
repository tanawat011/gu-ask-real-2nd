import type { UiComponentDefaultProps } from 'types'

import tw from 'twin.macro'

import { Button } from 'components/Button'
import { ButtonGroup } from 'components/ButtonGroup'
import { IconFa } from 'components/Icons'
import { ComponentDisplay, Title } from 'components/PageUiComponent'
import { PreCode } from 'components/PreCode'

const TwContainer = tw.div`mb-8`

export const ButtonGroupUiShape: React.FC<UiComponentDefaultProps> = (
  props,
) => {
  return (
    <TwContainer id={props.id}>
      <Title
        title={props.name}
        description={
          <>
            Shape style of the button, can set the <PreCode text='shape' /> prop
            value to <PreCode text='square' />, <PreCode text='rounded' /> and{' '}
            <PreCode text='circle' />, The default shape is{' '}
            <PreCode text='rounded' />.
          </>
        }
      />
      <ComponentDisplay
        components={
          <>
            <ButtonGroup shape='square' color='violet-600'>
              <Button label='First' icon={<IconFa icon='bell' />} />
              <Button label='Second' icon={<IconFa icon='code' />} />
              <Button label='Third' icon={<IconFa icon='gear' />} />
            </ButtonGroup>

            <ButtonGroup shape='circle' color='sky-600'>
              <Button label='First' icon={<IconFa icon='bell' />} />
              <Button label='Second' icon={<IconFa icon='code' />} />
              <Button label='Third' icon={<IconFa icon='gear' />} />
            </ButtonGroup>
          </>
        }
        code={`import React from "react"

export const Component = () => {
  return (
    <ButtonGroup shape='square' color='violet-600'>
      <Button label='First' />
      <Button label='Second' />
      <Button label='Third' />
    </ButtonGroup>

    <ButtonGroup shape='circle' color='sky-600'>
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
