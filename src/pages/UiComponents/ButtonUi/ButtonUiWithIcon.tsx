import tw from 'twin.macro'

import { Button } from 'components/Button'
import { IconGear, IconHome, IconUser } from 'components/Icons'
import { ComponentDisplay, Title } from 'components/PageUiComponent'

const TwContainer = tw.div`mb-8`

export const ButtonUiWithIcon = () => {
  return (
    <TwContainer id='with-icon'>
      <Title
        title='With Icon'
        description={
          <>
            Icon can add and combined with <code>label</code>.
          </>
        }
      />
      <ComponentDisplay
        components={
          <div className='flex gap-2 items-center flex-wrap'>
            <Button icon={<IconHome />} label='Home' />
            <Button icon={<IconUser />} label='Profile' />
            <Button icon={<IconGear />} label='Setting' />
            <Button iconR={<IconHome />} label='Right Icon' />
            <Button icon={<IconHome />} iconR={<IconHome />} label='Between Icons' />
          </div>
        }
        code={`import React from "react"

export const Component = () => {
  return (
    <Button icon={<IconHome />} label='Home' />
    <Button icon={<IconUser />} label='Profile' />
    <Button icon={<IconGear />} label='Setting' />
    <Button iconR={<IconHome />} label='Right Icon' />
    <Button
      icon={<IconHome />}
      iconR={<IconHome />}
      label='Between Icons'
    />
  )
}`}
      />
    </TwContainer>
  )
}
