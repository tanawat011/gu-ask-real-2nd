import tw from 'twin.macro'

import { Button } from 'components/Button'
import { ButtonGroup } from 'components/ButtonGroup'
import { IconBell, IconCode, IconGear } from 'components/Icons'
import { ComponentDisplay, Title } from 'components/PageUiComponent'
import { PreCode } from 'components/PreCode'

import { menuList } from './data'

const TwContainer = tw.div`mb-8`

export const ButtonGroupUiVertical = () => {
  return (
    <TwContainer id={menuList.vertical.id}>
      <Title
        title={menuList.vertical.name}
        description={
          <>
            Button can stretch to fill the width by add <PreCode text='block' />{' '}
            prop.
          </>
        }
      />
      <ComponentDisplay
        components={
          <>
            <ButtonGroup vertical>
              <Button label='First' icon={<IconBell />} />
              <Button label='Second' icon={<IconCode />} />
              <Button label='Third' icon={<IconGear />} />
            </ButtonGroup>
          </>
        }
        code={`import React from "react"

export const Component = () => {
  return (
    <ButtonGroup block>
      <Button label='First' icon={<IconBell />} />
      <Button label='Second' icon={<IconCode />} />
      <Button label='Third' icon={<IconGear />} />
    </ButtonGroup>
  )
}`}
      />
    </TwContainer>
  )
}
