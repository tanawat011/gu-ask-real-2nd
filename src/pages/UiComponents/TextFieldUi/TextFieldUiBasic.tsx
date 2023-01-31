import tw from 'twin.macro'

import { ComponentDisplay, Title } from 'components/PageUiComponent'
import { TextField } from 'components/TextField'

import { menuList } from './data'

const TwContainer = tw.div`mb-8`

export const TextFieldUiBasic = () => {
  return (
    <TwContainer id={menuList.variant.id}>
      <Title title={menuList.variant.name} description={<></>} />
      <ComponentDisplay
        components={
          <>
            <div className='flex items-center flex-wrap'>
              <TextField
                placeholder='Username'
                label='Username'
                id='username'
                block
                required
              />
              <TextField
                placeholder='Password'
                label='Password'
                id='password'
                block
                required
                error='Password is required'
              />
            </div>

            <div className='flex gap-2 items-center flex-wrap'>
              <TextField placeholder='Text field' error />
              <TextField placeholder='Text field' color='amber-600' />
              <TextField label='Outline' variant='outline' />
              <TextField placeholder='Text field' disabled />
              <TextField placeholder='Text field' size='lg' />
              <TextField placeholder='Text field' size='md' />
              <TextField placeholder='Text field' size='sm' />
              <TextField placeholder='Text field' size='xs' />
              <TextField placeholder='Text field' shape='circle' />
              <TextField placeholder='Text field' shape='square' />
              <TextField placeholder='Text field' shape='rounded' />
            </div>
          </>
        }
        code={`import React from "react"

export const Component = () => {
  return (
    <TextField />
  )
}`}
      />
    </TwContainer>
  )
}
