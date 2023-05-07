import type { UiComponentDefaultProps } from 'types'

import tw from 'twin.macro'

import { Button } from 'components/Common'
import { ComponentDisplay, Title } from 'components/PageUiComponent'
import { PreCode } from 'components/PreCode'

const TwContainer = tw.div`mb-8`

export const ButtonUiVariant: React.FC<UiComponentDefaultProps> = (props) => {
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
          <div className='flex gap-2 items-center flex-wrap'>
            <Button label='Primary' variant='primary' />
            <Button label='Secondary' variant='secondary' />
            <Button label='Tertiary' variant='tertiary' />
            <Button label='Outline' variant='outline' />
            <Button label='Shadow' variant='shadow' />
            <Button label='Text' variant='text' />
            <Button label='Link' variant='link' />
          </div>
        }
        code={`import React from "react"

export const Component = () => {
  return (
    <Button label='Primary' variant='primary' />
    <Button label='Secondary' variant='secondary' />
    <Button label='Tertiary' variant='tertiary' />
    <Button label='Outline' variant='outline' />
    <Button label='Shadow' variant='shadow' />
    <Button label='Text' variant='text' />
    <Button label='Link' variant='link' />
  )
}`}
      />
    </TwContainer>
  )
}
