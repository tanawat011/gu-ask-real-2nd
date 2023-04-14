import type { UiComponentDefaultProps } from 'types'

import React from 'react'

import tw from 'twin.macro'

import { ComponentDisplay, Title } from 'components/PageUiComponent'
import { TextField } from 'components/TextField'

const TwContainer = tw.div`mb-8`

export const TextFieldUiDisabled: React.FC<UiComponentDefaultProps> = (
  props,
) => {
  return (
    <TwContainer id={props.id}>
      <Title title={props.name} description={<></>} />
      <ComponentDisplay
        components={
          <>
            <div className='flex gap-2 items-end flex-wrap'>
              <TextField disabled label='Basic' placeholder='Basic' />
              <TextField disabled label='Outline' variant='outline' />
              <TextField disabled label='Underline' variant='underline' />
              <TextField disabled label='Filled' variant='filled' />
            </div>
          </>
        }
        code={`import React from "react"

export const Component = () => {
  return (
    <div className='flex gap-2 items-end flex-wrap'>
      <TextField disabled label='Basic' placeholder='Basic' />
      <TextField disabled label='Outline' variant='outline' />
      <TextField disabled label='Underline' variant='underline' />
      <TextField disabled label='Filled' variant='filled' />
    </div>
  )
}`}
      />
    </TwContainer>
  )
}
