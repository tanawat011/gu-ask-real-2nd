import tw from 'twin.macro'

import { Button } from 'components/Button'
import { ButtonGroup } from 'components/ButtonGroup'
import { IconBell, IconCode, IconGear } from 'components/Icons'
import { ComponentDisplay, Title } from 'components/PageUiComponent'
import { PreCode } from 'components/PreCode'

import { menuList } from './data'

const TwContainer = tw.div`mb-8`

export const ButtonGroupUiShape = () => {
  return (
    <TwContainer id={menuList.shape.id}>
      <Title
        title={menuList.shape.name}
        description={
          <>
            Shape style of the button, can set the <PreCode text='shape' /> prop
            value to <PreCode text='square' />, <PreCode text='rounded' /> and{' '}
            <PreCode text='circle' />, The default shape is{' '}
            <PreCode text='rounded' />.
          </>
        }
      />
      <ComponentDisplay
        components={
          <>
            <ButtonGroup shape='square' color='violet-600'>
              <Button label='First' icon={<IconBell />} />
              <Button label='Second' icon={<IconCode />} />
              <Button label='Third' icon={<IconGear />} />
            </ButtonGroup>

            <ButtonGroup shape='circle' color='sky-600'>
              <Button label='First' icon={<IconBell />} />
              <Button label='Second' icon={<IconCode />} />
              <Button label='Third' icon={<IconGear />} />
            </ButtonGroup>
          </>
        }
        code={`import React from "react"

export const Component = () => {
  return (
    <ButtonGroup shape='square' color='violet-600'>
      <Button label='First' />
      <Button label='Second' />
      <Button label='Third' />
    </ButtonGroup>

    <ButtonGroup shape='circle' color='sky-600'>
      <Button label='First' />
      <Button label='Second' />
      <Button label='Third' />
    </ButtonGroup>
  )
}`}
      />
    </TwContainer>
  )
}
