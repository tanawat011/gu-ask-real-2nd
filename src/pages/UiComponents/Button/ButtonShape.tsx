import tw from 'twin.macro'

import { Button } from 'components/Button'
import { ComponentDisplay, Title } from 'components/PageUiComponent'

const TwContainer = tw.div`mb-8`

export const ButtonShape = () => {
  return (
    <TwContainer>
      <Title
        title='Shape'
        description={
          <>
            Shape style of the button, can set the <code>shape</code> prop value to{' '}
            <code>square</code>, <code>rounded</code> or <code>circle</code>, The default shape is{' '}
            <code>rounded</code>.
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
