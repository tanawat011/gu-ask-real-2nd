import tw from 'twin.macro'

import { Button } from 'components/Button'
import { ButtonGroup } from 'components/ButtonGroup'
import { ComponentDisplay, Title } from 'components/PageUiComponent'
import { PreCode } from 'components/PreCode'

import { menuList } from './data'

const TwContainer = tw.div`mb-8`

export const ButtonGroupUiColor = () => {
  return (
    <TwContainer id={menuList.color.id}>
      <Title
        title={menuList.color.name}
        description={
          <>
            Button able to apply custom color, available colors option based on
            tailwind <PreCode text='theme.colors' />, However you can set the{' '}
            <PreCode text='color' /> prop to each button.
          </>
        }
      />
      <ComponentDisplay
        components={
          <>
            <ButtonGroup color='rose-600'>
              <Button label='First' />
              <Button label='Second' color='amber-600' variant='tertiary' />
              <Button label='Third' color='sky-600' variant='outline' />
              <Button label='Fourth' color='emerald-600' variant='shadow' />
            </ButtonGroup>
          </>
        }
        code={`import React from "react"

export const Component = () => {
  return (
    <ButtonGroup color='rose-600'>
      <Button label='First' />
      <Button label='Second' color='amber-600' variant='tertiary' />
      <Button label='Third' color='sky-600' variant='outline' />
      <Button label='Fourth' color='emerald-600' variant='shadow' />
    </ButtonGroup>
  )
}`}
      />
    </TwContainer>
  )
}
