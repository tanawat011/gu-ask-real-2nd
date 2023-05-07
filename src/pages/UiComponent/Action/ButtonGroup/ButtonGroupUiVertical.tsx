import type { UiComponentDefaultProps } from 'types'

import tw from 'twin.macro'

import { Button, ButtonGroup } from 'components/Common'
import { IconFa } from 'components/Icons'
import { ComponentDisplay, Title } from 'components/PageUiComponent'
import { PreCode } from 'components/PreCode'

const TwContainer = tw.div`mb-8`

export const ButtonGroupUiVertical: React.FC<UiComponentDefaultProps> = (
  props,
) => {
  return (
    <TwContainer id={props.id}>
      <Title
        title={props.name}
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
      <Button label='Third' icon={<IconFa icon='gear'/>} />
    </ButtonGroup>
  )
}`}
      />
    </TwContainer>
  )
}
