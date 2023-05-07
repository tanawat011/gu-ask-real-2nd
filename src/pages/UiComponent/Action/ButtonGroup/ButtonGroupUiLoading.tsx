import type { UiComponentDefaultProps } from 'types'

import tw from 'twin.macro'

import { ButtonGroup, Button } from 'components/Common'
import { IconFa } from 'components/Icons'
import { ComponentDisplay, Title } from 'components/PageUiComponent'
import { PreCode } from 'components/PreCode'

const TwContainer = tw.div`mb-8`

export const ButtonGroupUiLoading: React.FC<UiComponentDefaultProps> = (
  props,
) => {
  return (
    <TwContainer id={props.id}>
      <Title
        title={props.name}
        description={
          <>
            Button can set <PreCode text='loading' /> prop to{' '}
            <PreCode text='true' /> or <PreCode text='string' /> to show loading
            indicator, it will disabled button.
          </>
        }
      />
      <ComponentDisplay
        components={
          <>
            <ButtonGroup loading>
              <Button label='First' icon={<IconFa icon='bell' />} />
              <Button label='Second' icon={<IconFa icon='code' />} />
              <Button label='Third' icon={<IconFa icon='gear' />} />
            </ButtonGroup>

            <ButtonGroup>
              <Button label='First' icon={<IconFa icon='bell' />} loading />
              <Button label='Second' icon={<IconFa icon='code' />} />
              <Button label='Third' icon={<IconFa icon='gear' />} />
            </ButtonGroup>
          </>
        }
        code={`import React from "react"

export const Component = () => {
  return (
    <ButtonGroup loading>
      <Button label='First' icon={<IconFa icon='bell' />} />
      <Button label='Second' icon={<IconFa icon='code' />} />
      <Button label='Third' icon={<IconFa icon='gear' />} />
    </ButtonGroup>

    <ButtonGroup>
      <Button label='First' icon={<IconFa icon='bell' />} loading />
      <Button label='Second' icon={<IconFa icon='code' />} />
      <Button label='Third' icon={<IconFa icon='gear' />} />
    </ButtonGroup>
  )
}`}
      />
    </TwContainer>
  )
}
