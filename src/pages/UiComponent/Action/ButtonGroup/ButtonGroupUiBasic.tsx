import type { UiComponentDefaultProps } from 'types'

import tw from 'twin.macro'

import { Button, ButtonGroup } from 'components/Common'
import { ComponentDisplay, Title } from 'components/PageUiComponent'
import { PreCode } from 'components/PreCode'

const TwContainer = tw.div`mb-8`

export const ButtonGroupUiBasic: React.FC<UiComponentDefaultProps> = (
  props,
) => {
  return (
    <TwContainer id={props.id}>
      <Title
        title={props.name}
        description={
          <>
            Variant of the button, can set the <PreCode text='variant' /> prop
            value to <PreCode text='primary' />, <PreCode text='secondary' />,{' '}
            <PreCode text='tertiary' />, <PreCode text='outline' />,{' '}
            <PreCode text='shadow' />, <PreCode text='text' /> and{' '}
            <PreCode text='link' />, The default variant is{' '}
            <PreCode text='primary' />.
          </>
        }
      />
      <ComponentDisplay
        components={
          <>
            <div className='flex gap-2'>
              <ButtonGroup variant='primary'>
                <Button label='First' />
                <Button label='Second' />
                <Button label='Third' />
              </ButtonGroup>

              <ButtonGroup variant='secondary'>
                <Button label='First' />
                <Button label='Second' />
                <Button label='Third' />
              </ButtonGroup>
            </div>

            <div className='flex gap-2'>
              <ButtonGroup variant='outline'>
                <Button label='First' />
                <Button label='Second' />
                <Button label='Third' />
              </ButtonGroup>

              <ButtonGroup variant='shadow'>
                <Button label='First' />
                <Button label='Second' />
                <Button label='Third' />
              </ButtonGroup>
            </div>
          </>
        }
        code={`import React from "react"

export const Component = () => {
  return (
    <div className='flex gap-2'>
      <ButtonGroup variant='primary'>
        <Button label='First' />
        <Button label='Second' />
        <Button label='Third' />
      </ButtonGroup>

      <ButtonGroup variant='secondary'>
        <Button label='First' />
        <Button label='Second' />
        <Button label='Third' />
      </ButtonGroup>
    </div>

    <div className='flex gap-2'>
      <ButtonGroup variant='outline'>
        <Button label='First' />
        <Button label='Second' />
        <Button label='Third' />
      </ButtonGroup>

      <ButtonGroup variant='shadow'>
        <Button label='First' />
        <Button label='Second' />
        <Button label='Third' />
      </ButtonGroup>
    </div>
  )
}`}
      />
    </TwContainer>
  )
}
