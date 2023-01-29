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
          <div className='flex gap-2 items-center flex-wrap'>
            <TextField placeholder='Text field' />
            <TextField placeholder='Text field' color='amber-600' />
            <TextField placeholder='Text field' disabled />
          </div>
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
