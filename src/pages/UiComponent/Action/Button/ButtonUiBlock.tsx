import type { UiComponentDefaultProps } from 'types'

import React from 'react'

import tw from 'twin.macro'

import { Button } from 'components/Button'
import { ComponentDisplay, Title } from 'components/PageUiComponent'
import { PreCode } from 'components/PreCode'

const TwContainer = tw.div`mb-8`

export const ButtonUiBlock: React.FC<UiComponentDefaultProps> = (props) => {
  return (
    <TwContainer id={props.id}>
      <Title
        title={props.id}
        description={
          <>
            Button can stretch to fill the width by add <PreCode text='block' />{' '}
            prop.
          </>
        }
      />
      <ComponentDisplay
        components={
          <>
            <Button label='Non Block Button' />
            <Button label='Blocked Button' block />
            <Button label='Blocked Button' block disabled />
            <Button label='Blocked Button' block loading='Loading...' />
          </>
        }
        code={`import React from "react"

export const Component = () => {
  return (
    <>
    <Button label='Non Block Button' />
    <Button label='Blocked Button' block />
    <Button label='Blocked Button' block disabled />
    <Button label='Blocked Button' block loading='Loading...' />
    </>
  )
}`}
      />
    </TwContainer>
  )
}
