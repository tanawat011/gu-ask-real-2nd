import tw from 'twin.macro'

import { Button } from 'components/Button'
import { IconFa } from 'components/Icons'
import { ComponentDisplay, Title } from 'components/PageUiComponent'
import { PreCode } from 'components/PreCode'

import { menuList } from './data'

const TwContainer = tw.div`mb-8`

export const ButtonUiIcon = () => {
  return (
    <TwContainer id={menuList.icon.id}>
      <Title
        title={menuList.icon.name}
        description={
          <>
            Button can add an icon by insert icon to <PreCode text='icon' />{' '}
            prop.
          </>
        }
      />
      <ComponentDisplay
        components={
          <div className='flex gap-2 items-center flex-wrap'>
            <Button size='xs' icon={<IconFa icon='home' />} />
            <Button size='sm' icon={<IconFa icon='home' />} />
            <Button size='md' icon={<IconFa icon='home' />} />
            <Button size='lg' icon={<IconFa icon='home' />} />
          </div>
        }
        code={`import React from "react"

export const Component = () => {
  return (
    <Button size='xs' icon={<IconFa icon='home' />} />
    <Button size='sm' icon={<IconFa icon='home' />} />
    <Button size='md' icon={<IconFa icon='home' />} />
    <Button size='lg' icon={<IconFa icon='home' />} />
    <Button size='xl' icon={<IconFa icon='home' />} />
  )
}`}
      />
    </TwContainer>
  )
}
