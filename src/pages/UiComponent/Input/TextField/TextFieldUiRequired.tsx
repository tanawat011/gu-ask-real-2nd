import type { UiComponentDefaultProps } from 'types'

import React from 'react'

import tw from 'twin.macro'

import { ComponentDisplay, Title } from 'components/PageUiComponent'
import { TextField } from 'components/TextField'

const TwContainer = tw.div`mb-8`

export const TextFieldUiRequired: React.FC<UiComponentDefaultProps> = (
  props,
) => {
  return (
    <TwContainer id={props.id}>
      <Title title={props.name} description={<></>} />
      <ComponentDisplay
        components={
          <>
            <div className='flex gap-2 items-end flex-wrap'>
              <TextField required label='Basic' placeholder='Basic' />
              <TextField required label='Outline' variant='outline' />
              <TextField required label='Underline' variant='underline' />
              <TextField required label='Filled' variant='filled' />
            </div>
          </>
        }
        code={`import React from "react"

export const Component = () => {
  return (
    <div className='flex gap-2 items-end flex-wrap'>
      <TextField required label='Basic' placeholder='Basic' />
      <TextField required label='Outline' variant='outline' />
      <TextField required label='Underline' variant='underline' />
      <TextField required label='Filled' variant='filled' />
    </div>
  )
}`}
      />
    </TwContainer>
  )
}
