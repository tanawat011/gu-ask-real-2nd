import tw from 'twin.macro'

import { Button } from 'components/Button'
import { ComponentDisplay, Title } from 'components/PageUiComponent'
import { PreCode } from 'components/PreCode'

const TwContainer = tw.div`mb-8`

export const ButtonUiShape = () => {
  return (
    <TwContainer id='shape'>
      <Title
        title='Shape'
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
          <div className='flex gap-2 items-center flex-wrap'>
            <Button label='Square' shape='square' />
            <Button label='Rounded' shape='rounded' />
            <Button label='Circle' shape='circle' />
          </div>
        }
        code={`import React from "react"

export const Component = () => {
  return (
    <Button label='Square' shape='square' />
    <Button label='Rounded' shape='rounded' />
    <Button label='Circle' shape='circle' />
  )
}`}
      />
    </TwContainer>
  )
}
