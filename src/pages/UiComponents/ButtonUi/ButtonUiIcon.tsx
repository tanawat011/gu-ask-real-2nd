import tw from 'twin.macro'

import { Button } from 'components/Button'
import { IconHome } from 'components/Icons'
import { ComponentDisplay, Title } from 'components/PageUiComponent'
import { PreCode } from 'components/PreCode'

const TwContainer = tw.div`mb-8`

export const ButtonUiIcon = () => {
  return (
    <TwContainer id='icon'>
      <Title
        title='Icon'
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
            <Button size='xs' icon={<IconHome />} />
            <Button size='sm' icon={<IconHome />} />
            <Button size='md' icon={<IconHome />} />
            <Button size='lg' icon={<IconHome />} />
          </div>
        }
        code={`import React from "react"

export const Component = () => {
  return (
    <Button size='xs' icon={<IconHome />} />
    <Button size='sm' icon={<IconHome />} />
    <Button size='md' icon={<IconHome />} />
    <Button size='lg' icon={<IconHome />} />
    <Button size='xl' icon={<IconHome />} />
  )
}`}
      />
    </TwContainer>
  )
}
