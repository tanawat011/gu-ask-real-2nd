import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import tw from 'twin.macro'

import { Button } from 'components/Button'
import { ComponentDisplay, Title } from 'components/PageUiComponent'

const TwContainer = tw.div`mb-8`

export const ButtonLoading = () => {
  return (
    <TwContainer>
      <Title
        title='Loading'
        description={
          <>
            Button can set <code>loading</code> prop to <code>true</code> to show loading indicator,
            it will disabled button.
          </>
        }
      />
      <ComponentDisplay
        components={
          <div className='flex gap-2 items-center flex-wrap'>
            <Button label='Home' loading size='xs' />
            <Button label='Home' loading />
            <Button icon={<FontAwesomeIcon icon='home' />} label='Home' loading />
            <Button icon={<FontAwesomeIcon icon='home' />} loading size='xs' />
            <Button icon={<FontAwesomeIcon icon='home' />} loading />
          </div>
        }
        code={`import React from "react"

export const Component = () => {
  return (
    <Button label='Home' loading size='xs' />
    <Button label='Home' loading />
    <Button icon={<FontAwesomeIcon icon='home' />} label='Home' loading />
    <Button icon={<FontAwesomeIcon icon='home' />} loading size='xs' />
    <Button icon={<FontAwesomeIcon icon='home' />} loading />
  )
}`}
      />
    </TwContainer>
  )
}
