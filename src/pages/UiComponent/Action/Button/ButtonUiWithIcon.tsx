import type { UiComponentDefaultProps } from 'types'

import tw from 'twin.macro'

import { Button } from 'components/Common'
import { IconFa } from 'components/Icons'
import { ComponentDisplay, Title } from 'components/PageUiComponent'
import { PreCode } from 'components/PreCode'

const TwContainer = tw.div`mb-8`

export const ButtonUiWithIcon: React.FC<UiComponentDefaultProps> = (props) => {
  return (
    <TwContainer id={props.id}>
      <Title
        title={props.name}
        description={
          <>
            Icon can set position with prop <PreCode text='iconPosition' /> to{' '}
            <PreCode text='left' /> or <PreCode text='right' />.
          </>
        }
      />
      <ComponentDisplay
        components={
          <div className='flex gap-2 items-center flex-wrap'>
            <Button icon={<IconFa icon='home' />} label='Icon' />
            <Button
              icon={<IconFa icon='home' />}
              iconPosition='right'
              label='Right Icon'
            />
          </div>
        }
        code={`import React from "react"

export const Component = () => {
  return (
    <Button icon={<IconFa icon='home' />} label='Icon' />
    <Button icon={<IconFa icon='home' />} iconPosition='right' label='Right Icon' />
  )
}`}
      />
    </TwContainer>
  )
}
