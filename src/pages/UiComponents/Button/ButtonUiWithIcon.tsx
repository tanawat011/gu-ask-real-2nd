import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import tw from 'twin.macro'

import { Button } from 'components/Button'
import { ComponentDisplay, Title } from 'components/PageUiComponent'

const TwContainer = tw.div`mb-8`

export const ButtonUiWithIcon = () => {
  return (
    <TwContainer>
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
            <Button icon={<FontAwesomeIcon icon='home' />} label='Home' />
            <Button icon={<FontAwesomeIcon icon='user' />} label='Profile' />
            <Button icon={<FontAwesomeIcon icon='gear' />} label='Setting' />
            <Button iconR={<FontAwesomeIcon icon='home' />} label='Right Icon' />
            <Button
              icon={<FontAwesomeIcon icon='home' />}
              iconR={<FontAwesomeIcon icon='home' />}
              label='Between Icons'
            />
          </div>
        }
        code={`import React from "react"

export const Component = () => {
  return (
    <Button icon={<FontAwesomeIcon icon='home' />} label='Home' />
    <Button icon={<FontAwesomeIcon icon='user' />} label='Profile' />
    <Button icon={<FontAwesomeIcon icon='gear' />} label='Setting' />
    <Button iconR={<FontAwesomeIcon icon='home' />} label='Right Icon' />
    <Button
      icon={<FontAwesomeIcon icon='home' />}
      iconR={<FontAwesomeIcon icon='home' />}
      label='Between Icons'
    />
  )
}`}
      />
    </TwContainer>
  )
}
