import tw from 'twin.macro'

import { Button } from 'components/Button'
import { ComponentDisplay, Title } from 'components/PageUiComponent'

const TwContainer = tw.div`mb-8`

export const ButtonBlock = () => {
  return (
    <TwContainer>
      <Title
        title='Block'
        description={
          <>
            Button can stretch to fill the width by add <code>block</code> prop.
          </>
        }
      />
      <ComponentDisplay
        components={
          <>
            <Button label='Non Block Button' />
            <Button label='Blocked Button' block />
            <Button label='Blocked Button' block loading />
          </>
        }
        code={`import React from "react"

export const Component = () => {
  return (
    <>
      <Button label='Non Block Button' />
      <Button label='Blocked Button' block />
      <Button label='Blocked Button' block loading />
    </>
  )
}`}
      />
    </TwContainer>
  )
}
