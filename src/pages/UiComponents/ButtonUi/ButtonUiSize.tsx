import tw from 'twin.macro'

import { Button } from 'components/Button'
import { ComponentDisplay, Title } from 'components/PageUiComponent'
import { PreCode } from 'components/PreCode'

const TwContainer = tw.div`mb-8`

export const ButtonUiSize = () => {
  return (
    <TwContainer id='size'>
      <Title
        title='Size'
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
          <div className='flex gap-2 items-center flex-wrap'>
            <Button label='Extra Small (xs)' size='xs' />
            <Button label='Small (sm)' size='sm' />
            <Button label='Medium (md)' size='md' />
            <Button label='Large (lg)' size='lg' />
          </div>
        }
        code={`import React from "react"

export const Component = () => {
  return (
    <Button label='Extra Small (xs)' size='xs' />
    <Button label='Small (sm)' size='sm' />
    <Button label='Medium (md)' size='md' />
    <Button label='Large (lg)' size='lg' />
  )
}`}
      />
    </TwContainer>
  )
}
