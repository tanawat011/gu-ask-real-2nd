import type { UiComponentDefaultProps } from 'types'

import React from 'react'

import tw from 'twin.macro'

import { ComponentDisplay, Title } from 'components/PageUiComponent'
import { TextField } from 'components/TextField'

const TwContainer = tw.div`mb-8`

export const TextFieldUiError: React.FC<UiComponentDefaultProps> = (props) => {
  return (
    <TwContainer id={props.id}>
      <Title title={props.name} description={<></>} />
      <ComponentDisplay
        components={
          <>
            <div className='flex gap-2 items-end flex-wrap'>
              <TextField
                label='Basic'
                placeholder='Basic'
                error='Please enter'
              />
              <TextField
                label='Outline'
                variant='outline'
                error='Please enter'
              />
              <TextField
                label='Underline'
                variant='underline'
                error='Please enter'
              />
              <TextField label='Filled' variant='filled' error='Please enter' />
            </div>

            <div className='flex gap-2 items-end flex-wrap'>
              <TextField
                label='Basic'
                placeholder='Basic'
                shape='circle'
                error='Please enter'
              />
              <TextField
                label='Outline'
                variant='outline'
                shape='circle'
                error='Please enter'
              />
              <TextField
                label='Underline'
                variant='underline'
                shape='circle'
                error='Please enter'
              />
              <TextField
                label='Filled'
                variant='filled'
                shape='circle'
                error='Please enter'
              />
            </div>

            <div className='flex gap-2 items-end flex-wrap'>
              <TextField
                label='Basic'
                placeholder='Basic'
                shape='square'
                error='Please enter'
              />
              <TextField
                label='Outline'
                variant='outline'
                shape='square'
                error='Please enter'
              />
              <TextField
                label='Underline'
                variant='underline'
                shape='square'
                error='Please enter'
              />
              <TextField
                label='Filled'
                variant='filled'
                shape='square'
                error='Please enter'
              />
            </div>
          </>
        }
        code={`import React from "react"

export const Component = () => {
  return (
    <div className='flex gap-2 items-end flex-wrap'>
      <TextField
        label='Basic'
        placeholder='Basic'
        error='Please enter'
      />
      <TextField
        label='Outline'
        variant='outline'
        error='Please enter'
      />
      <TextField
        label='Underline'
        variant='underline'
        error='Please enter'
      />
      <TextField label='Filled' variant='filled' error='Please enter' />
    </div>

    <div className='flex gap-2 items-end flex-wrap'>
      <TextField
        label='Basic'
        placeholder='Basic'
        shape='circle'
        error='Please enter'
      />
      <TextField
        label='Outline'
        variant='outline'
        shape='circle'
        error='Please enter'
      />
      <TextField
        label='Underline'
        variant='underline'
        shape='circle'
        error='Please enter'
      />
      <TextField
        label='Filled'
        variant='filled'
        shape='circle'
        error='Please enter'
      />
    </div>

    <div className='flex gap-2 items-end flex-wrap'>
      <TextField
        label='Basic'
        placeholder='Basic'
        shape='square'
        error='Please enter'
      />
      <TextField
        label='Outline'
        variant='outline'
        shape='square'
        error='Please enter'
      />
      <TextField
        label='Underline'
        variant='underline'
        shape='square'
        error='Please enter'
      />
      <TextField
        label='Filled'
        variant='filled'
        shape='square'
        error='Please enter'
      />
    </div>
  )
}`}
      />
    </TwContainer>
  )
}
