import type { UiComponentDefaultProps } from 'types'

import React from 'react'

import tw from 'twin.macro'

import { ComponentDisplay, Title } from 'components/PageUiComponent'
import { TextField } from 'components/TextField'

const TwContainer = tw.div`mb-8`

export const TextFieldUiVariant: React.FC<UiComponentDefaultProps> = (
  props,
) => {
  return (
    <TwContainer id={props.id}>
      <Title title={props.name} description={<></>} />
      <ComponentDisplay
        components={
          <>
            <div className='flex gap-2 items-center flex-wrap'>
              <TextField placeholder='Basic' />
              <TextField label='Outline' variant='outline' />
              <TextField label='Underline' variant='underline' />
              <TextField label='Filled' variant='filled' />
            </div>
          </>
        }
        code={`import React from "react"

export const Component = () => {
  return (
    <TextField placeholder='Basic' />
    <TextField label='Outline' variant='outline' />
    <TextField label='Underline' variant='underline' />
    <TextField label='Filled' variant='filled' />
  )
}`}
      />
    </TwContainer>
  )
}
