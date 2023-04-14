import type { UiComponentDefaultProps } from 'types'

import React from 'react'

import tw from 'twin.macro'

import { ComponentDisplay, Title } from 'components/PageUiComponent'
import { TextField } from 'components/TextField'

const TwContainer = tw.div`mb-8`

export const TextFieldUiSize: React.FC<UiComponentDefaultProps> = (props) => {
  return (
    <TwContainer id={props.id}>
      <Title title={props.name} description={<></>} />
      <ComponentDisplay
        components={
          <>
            <div className='flex gap-2 items-center flex-wrap'>
              <TextField label='Outline lg' variant='outline' size='lg' />
              <TextField label='Outline md' variant='outline' size='md' />
              <TextField label='Outline sm' variant='outline' size='sm' />
              <TextField label='Outline xs' variant='outline' size='xs' />
            </div>
          </>
        }
        code={`import React from "react"

export const Component = () => {
  return (
    <div className='flex gap-2 items-center flex-wrap'>
      <TextField label='Outline lg' variant='outline' size='lg' />
      <TextField label='Outline md' variant='outline' size='md' />
      <TextField label='Outline sm' variant='outline' size='sm' />
      <TextField label='Outline xs' variant='outline' size='xs' />
    </div>
  )
}`}
      />
    </TwContainer>
  )
}
