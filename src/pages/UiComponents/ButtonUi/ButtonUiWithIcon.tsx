import tw from 'twin.macro'

import { Button } from 'components/Button'
import { IconHome } from 'components/Icons'
import { ComponentDisplay, Title } from 'components/PageUiComponent'
import { PreCode } from 'components/PreCode'

import { menuList } from './data'

const TwContainer = tw.div`mb-8`

export const ButtonUiWithIcon = () => {
  return (
    <TwContainer id={menuList.withIcon.id}>
      <Title
        title={menuList.withIcon.name}
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
            <Button icon={<IconHome />} label='Icon' />
            <Button
              icon={<IconHome />}
              iconPosition='right'
              label='Right Icon'
            />
          </div>
        }
        code={`import React from "react"

export const Component = () => {
  return (
    <Button icon={<IconHome />} label='Icon' />
    <Button icon={<IconHome />} iconPosition='right' label='Right Icon' />
  )
}`}
      />
    </TwContainer>
  )
}
