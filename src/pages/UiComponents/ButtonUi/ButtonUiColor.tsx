import tw from 'twin.macro'

import { Button } from 'components/Button'
import { ComponentDisplay, Title } from 'components/PageUiComponent'
import { PreCode } from 'components/PreCode'

import { menuList } from './data'

const TwContainer = tw.div`mb-8`

export const ButtonUiColor = () => {
  return (
    <TwContainer id={menuList.color.id}>
      <Title
        title={menuList.color.name}
        description={
          <>
            Button able to apply custom color, available colors option based on
            tailwind <PreCode text='theme.colors' />.
          </>
        }
      />
      <ComponentDisplay
        components={
          <>
            <div className='flex gap-2 items-center flex-wrap'>
              <Button label='Danger' color='rose-500' />
              <Button label='Warning' color='amber-500' />
              <Button label='Info' color='sky-500' />
              <Button label='Success' color='emerald-500' />
            </div>
          </>
        }
        code={`import React from "react"

export const Component = () => {
  return (
    <Button label='Danger' color='rose-500' />
    <Button label='Warning' color='amber-500' />
    <Button label='Info' color='sky-500' />
    <Button label='Success' color='emerald-500' />
  )
}`}
      />
    </TwContainer>
  )
}
