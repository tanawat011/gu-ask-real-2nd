import type { UiComponentDefaultProps } from 'types'

import React from 'react'

import tw from 'twin.macro'

import { ComponentDisplay, Title } from 'components/PageUiComponent'
import { TextField } from 'components/TextField'

const TwContainer = tw.div`mb-8`

export const TextFieldUiShape: React.FC<UiComponentDefaultProps> = (props) => {
  return (
    <TwContainer id={props.id}>
      <Title title={props.name} description={<></>} />
      <ComponentDisplay
        components={
          <>
            <div className='flex gap-2 items-center flex-wrap'>
              <TextField placeholder='Basic Rounded' />
              <TextField placeholder='Basic Circle' shape='circle' />
              <TextField placeholder='Basic Square' shape='square' />
            </div>

            <div className='flex gap-2 items-center flex-wrap'>
              <TextField label='Outline Rounded' variant='outline' />
              <TextField
                label='Outline Circle'
                variant='outline'
                shape='circle'
              />
              <TextField
                label='Outline Square'
                variant='outline'
                shape='square'
              />
            </div>

            <div className='flex gap-2 items-center flex-wrap'>
              <TextField label='Underline Rounded' variant='underline' />
              <TextField
                label='Underline Circle'
                variant='underline'
                shape='circle'
              />
              <TextField
                label='Underline Square'
                variant='underline'
                shape='square'
              />
            </div>

            <div className='flex gap-2 items-center flex-wrap'>
              <TextField label='Filled Rounded' variant='filled' />
              <TextField
                label='Filled Circle'
                variant='filled'
                shape='circle'
              />
              <TextField
                label='Filled Square'
                variant='filled'
                shape='square'
              />
            </div>
          </>
        }
        code={`import React from "react"

export const Component = () => {
  return (
    <div className='flex gap-2 items-center flex-wrap'>
      <TextField placeholder='Basic Rounded' />
      <TextField placeholder='Basic Circle' shape='circle' />
      <TextField placeholder='Basic Square' shape='square' />
    </div>

    <div className='flex gap-2 items-center flex-wrap'>
      <TextField label='Outline Rounded' variant='outline' />
      <TextField label='Outline Circle' variant='outline' shape='circle' />
      <TextField label='Outline Square' variant='outline' shape='square' />
    </div>

    <div className='flex gap-2 items-center flex-wrap'>
      <TextField label='Underline Rounded' variant='underline' />
      <TextField label='Underline Circle' variant='underline' shape='circle' />
      <TextField label='Underline Square' variant='underline' shape='square' />
    </div>

    <div className='flex gap-2 items-center flex-wrap'>
      <TextField label='Filled Rounded' variant='filled' />
      <TextField label='Filled Circle' variant='filled' shape='circle' />
      <TextField label='Filled Square' variant='filled' shape='square' />
    </div>
  )
}`}
      />
    </TwContainer>
  )
}
