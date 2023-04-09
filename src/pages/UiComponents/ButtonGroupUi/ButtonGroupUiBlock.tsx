import tw from 'twin.macro'

import { Button } from 'components/Button'
import { ButtonGroup } from 'components/ButtonGroup'
import { IconFa } from 'components/Icons'
import { ComponentDisplay, Title } from 'components/PageUiComponent'
import { PreCode } from 'components/PreCode'

import { menuList } from './data'

const TwContainer = tw.div`mb-8`

export const ButtonGroupUiBlock = () => {
  return (
    <TwContainer id={menuList.block.id}>
      <Title
        title={menuList.block.name}
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
            <ButtonGroup block>
              <Button label='First' icon={<IconFa icon='bell' />} />
              <Button label='Second' icon={<IconFa icon='code' />} />
              <Button label='Third' icon={<IconFa icon='gear' />} />
            </ButtonGroup>
          </>
        }
        code={`import React from "react"

export const Component = () => {
  return (
    <ButtonGroup block>
    <Button label='First' icon={<IconFa icon='bell' />} />
    <Button label='Second' icon={<IconFa icon='code' />} />
    <Button label='Third' icon={<IconFa icon='gear' />} />
    </ButtonGroup>
  )
}`}
      />
    </TwContainer>
  )
}
