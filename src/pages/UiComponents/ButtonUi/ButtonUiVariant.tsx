import tw from 'twin.macro'

import { Button } from 'components/Button'
import { ComponentDisplay, Title } from 'components/PageUiComponent'

const TwContainer = tw.div`mb-8`

export const ButtonUiVariant = () => {
  return (
    <TwContainer>
      <Title
        title='Variant'
        description={
          <>
            Variant of the button, can set the <code>variant</code> prop value to{' '}
            <code>primary</code>, <code>secondary</code>,<code>success</code>, <code>danger</code>,{' '}
            <code>warning</code>, <code>info</code>, <code>light</code>, <code>dark</code> and{' '}
            <code>link</code>, The default variant is <code>primary</code>.
          </>
        }
      />
      <ComponentDisplay
        components={
          <div className='flex gap-2 items-center flex-wrap'>
            <Button label='Primary' variant='primary' />
            <Button label='Secondary' variant='secondary' />
            <Button label='Tertiary' variant='tertiary' />
            <Button label='Solid' variant='solid' />
            <Button label='Two Tone' variant='twoTone' />
            <Button label='Plain' variant='plain' />
            <Button label='Link' variant='link' />
          </div>
        }
        code={`import React from "react"

export const Component = () => {
  return (
    <Button label='Primary' variant='primary' />
    <Button label='Secondary' variant='secondary' />
    <Button label='Tertiary' variant='tertiary' />
    <Button label='Solid' variant='solid' />
    <Button label='Two Tone' variant='twoTone' />
    <Button label='Plain' variant='plain' />
    <Button label='Link' variant='link' />
  )
}`}
      />
    </TwContainer>
  )
}
