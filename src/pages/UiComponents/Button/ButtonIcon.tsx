import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import tw from 'twin.macro'

import { Button } from 'components/Button'
import { ComponentDisplay, Title } from 'components/PageUiComponent'

const TwContainer = tw.div`mb-8`

export const ButtonIcon = () => {
  return (
    <TwContainer>
      <Title
        title='Icon'
        description={
          <>
            Button can add an icon by insert icon to <code>icon</code> prop.
          </>
        }
      />
      <ComponentDisplay
        components={
          <div className='flex gap-2 items-center flex-wrap'>
            <Button size='xs' icon={<FontAwesomeIcon icon='home' />} />
            <Button size='sm' icon={<FontAwesomeIcon icon='home' />} />
            <Button size='md' icon={<FontAwesomeIcon icon='home' />} />
            <Button size='lg' icon={<FontAwesomeIcon icon='home' />} />
            <Button size='xl' icon={<FontAwesomeIcon icon='home' />} />
          </div>
        }
        code={`import React from "react"

export const Component = () => {
  return (
    <Button size='xs' icon={<FontAwesomeIcon icon='home' />} />
    <Button size='sm' icon={<FontAwesomeIcon icon='home' />} />
    <Button size='md' icon={<FontAwesomeIcon icon='home' />} />
    <Button size='lg' icon={<FontAwesomeIcon icon='home' />} />
    <Button size='xl' icon={<FontAwesomeIcon icon='home' />} />
  )
}`}
      />
    </TwContainer>
  )
}
