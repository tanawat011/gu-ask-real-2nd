import type { LegacyRef } from 'react'
import { useEffect } from 'react'

import { useRecoilValue } from 'recoil'
import tw from 'twin.macro'

import { Button } from 'components/Button'
import { ComponentDisplay, Title } from 'components/PageUiComponent'
import { PreCode } from 'components/PreCode'
import { useDimensionChange } from 'hooks/useDimensionChange'
import { useElementDimension } from 'hooks/useElementDimension'
import { buttonUiAtom, disabledSelector } from 'recoils/atoms'

const TwContainer = tw.div`mb-8`

type ButtonUiDisabledProps = {
  handlePageDimension: () => Promise<void>
}

export const ButtonUiDisabled: React.FC<ButtonUiDisabledProps> = ({
  handlePageDimension,
}) => {
  const [ref, dimension, handleDimension] = useElementDimension()

  useDimensionChange(disabledSelector, dimension)

  const { pageDimension } = useRecoilValue(buttonUiAtom)

  useEffect(() => {
    handleDimension()
    handlePageDimension()
  }, [pageDimension])

  return (
    <TwContainer id='disabled' ref={ref as LegacyRef<HTMLDivElement>}>
      <Title
        title='Disabled'
        description={
          <>
            Disable style of the button, can set the <PreCode text='disabled' />{' '}
            prop value to <PreCode text='true' /> or <PreCode text='false' />,
            The default shape is <PreCode text='false' />.
          </>
        }
      />
      <ComponentDisplay
        callback={handleDimension}
        components={
          <div className='flex gap-2 items-center flex-wrap'>
            <Button label='Disabled' disabled />
          </div>
        }
        code={`import React from "react"

export const Component = () => {
  return (
    <Button label='Disabled' disabled />
  )
}`}
      />
    </TwContainer>
  )
}
