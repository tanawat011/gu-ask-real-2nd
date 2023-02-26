import tw from 'twin.macro'

import { ComponentDisplay, Title } from 'components/PageUiComponent'
import { TextInput } from 'components/TextInput'

import { menuList } from './data'

const TwContainer = tw.div`mb-8`

export const TextInputUiBasic = () => {
  return (
    <TwContainer id={menuList.variant.id}>
      <Title title={menuList.variant.name} description={<></>} />
      <ComponentDisplay
        components={
          <>
            <div className='flex items-center flex-wrap'>
              <TextInput
                placeholder='Username'
                label='Username'
                id='username'
                block
                required
              />
              <TextInput
                placeholder='Password'
                label='Password'
                id='password'
                block
                required
                error='Password is required'
              />
            </div>

            <div className='flex gap-2 items-center flex-wrap'>
              <TextInput placeholder='Text field' error />
              <TextInput placeholder='Text field' color='amber-600' />
              <TextInput label='Outline' variant='outline' error />
              <TextInput label='Outline' variant='outline' color='amber-600' />
              <TextInput label='Outline' variant='outline' size='sm' />
              <TextInput label='Outline' variant='outline' size='xs' />
              <TextInput label='Underline' variant='underline' error />
              <TextInput label='Underline' variant='underline' />
              <TextInput label='Filled' variant='filled' error />
              <TextInput label='Filled' variant='filled' />
              <TextInput placeholder='Text field' disabled />
              <TextInput placeholder='Text field' size='lg' />
              <TextInput placeholder='Text field' size='md' />
              <TextInput placeholder='Text field' size='sm' />
              <TextInput placeholder='Text field' size='xs' />
              <TextInput placeholder='Text field' shape='circle' />
              <TextInput placeholder='Text field' shape='square' />
              <TextInput placeholder='Text field' shape='rounded' />
            </div>
          </>
        }
        code={`import React from "react"

export const Component = () => {
  return (
    <TextInput />
  )
}`}
      />
    </TwContainer>
  )
}
