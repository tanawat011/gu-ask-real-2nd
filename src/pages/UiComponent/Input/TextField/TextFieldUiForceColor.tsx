import type { UiComponentDefaultProps } from 'types'

import React from 'react'

import tw from 'twin.macro'

import { ComponentDisplay, Title } from 'components/PageUiComponent'
import { TextField } from 'components/TextField'

const TwContainer = tw.div`mb-8`

export const TextFieldUiForceColor: React.FC<UiComponentDefaultProps> = (
  props,
) => {
  return (
    <TwContainer id={props.id}>
      <Title title={props.name} description={<></>} />
      <ComponentDisplay
        components={
          <>
            <div className='flex gap-2 items-end flex-wrap'>
              <TextField
                value='Basic'
                label='Basic'
                placeholder='Basic'
                forceColor
                color='sky-500'
              />
              <TextField
                value='Basic'
                label='Basic'
                placeholder='Basic'
                forceColor
                color='emerald-500'
              />
              <TextField
                value='Basic'
                label='Basic'
                placeholder='Basic'
                forceColor
                color='amber-500'
              />
              <TextField
                value='Basic'
                label='Basic'
                placeholder='Basic'
                forceColor
                color='rose-500'
              />

              <TextField
                label='Basic'
                placeholder='Basic'
                forceColor
                variant='outline'
                color='sky-500'
              />
              <TextField
                label='Basic'
                placeholder='Basic'
                forceColor
                variant='outline'
                color='emerald-500'
              />
              <TextField
                label='Basic'
                placeholder='Basic'
                forceColor
                variant='outline'
                color='amber-500'
              />
              <TextField
                label='Basic'
                placeholder='Basic'
                forceColor
                variant='outline'
                color='rose-500'
              />

              <TextField
                value='Basic'
                label='Basic'
                placeholder='Basic'
                forceColor
                error='Please enter'
                color='sky-500'
              />
              <TextField
                value='Basic'
                label='Basic'
                placeholder='Basic'
                forceColor
                error='Please enter'
                color='emerald-500'
              />
              <TextField
                value='Basic'
                label='Basic'
                placeholder='Basic'
                forceColor
                error='Please enter'
                color='amber-500'
              />
              <TextField
                value='Basic'
                label='Basic'
                placeholder='Basic'
                forceColor
                error='Please enter'
                color='rose-500'
              />
            </div>
          </>
        }
        code={`import React from "react"

export const Component = () => {
  return (
    <div className='flex gap-2 items-end flex-wrap'>
      <TextField
        value='Basic'
        label='Basic'
        placeholder='Basic'
        forceColor
        color='sky-500'
      />
      <TextField
        value='Basic'
        label='Basic'
        placeholder='Basic'
        forceColor
        color='emerald-500'
      />
      <TextField
        value='Basic'
        label='Basic'
        placeholder='Basic'
        forceColor
        color='amber-500'
      />
      <TextField
        value='Basic'
        label='Basic'
        placeholder='Basic'
        forceColor
        color='rose-500'
      />

      <TextField
        label='Basic'
        placeholder='Basic'
        forceColor
        variant='outline'
        color='sky-500'
      />
      <TextField
        label='Basic'
        placeholder='Basic'
        forceColor
        variant='outline'
        color='emerald-500'
      />
      <TextField
        label='Basic'
        placeholder='Basic'
        forceColor
        variant='outline'
        color='amber-500'
      />
      <TextField
        label='Basic'
        placeholder='Basic'
        forceColor
        variant='outline'
        color='rose-500'
      />

      <TextField
        value='Basic'
        label='Basic'
        placeholder='Basic'
        forceColor
        error='Please enter'
        color='sky-500'
      />
      <TextField
        value='Basic'
        label='Basic'
        placeholder='Basic'
        forceColor
        error='Please enter'
        color='emerald-500'
      />
      <TextField
        value='Basic'
        label='Basic'
        placeholder='Basic'
        forceColor
        error='Please enter'
        color='amber-500'
      />
      <TextField
        value='Basic'
        label='Basic'
        placeholder='Basic'
        forceColor
        error='Please enter'
        color='rose-500'
      />
    </div>
  )
}`}
      />
    </TwContainer>
  )
}
