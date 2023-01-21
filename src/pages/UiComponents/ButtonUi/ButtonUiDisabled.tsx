import type { LegacyRef } from 'react'
import { useEffect } from 'react'

import { useRecoilValue } from 'recoil'
import tw from 'twin.macro'

import { Button } from 'components/Button'
import { ComponentDisplay, Title } from 'components/PageUiComponent'
import { useDimensionChange } from 'hooks/useDimensionChange'
import { useElementDimension } from 'hooks/useElementDimension'
import { buttonUiAtom, disabledSelector } from 'recoils/atoms'

const TwContainer = tw.div`mb-8`

export const ButtonUiDisabled = () => {
  const [ref, dimension, handleDimension] = useElementDimension()

  useDimensionChange(disabledSelector, dimension)

  const { dimension: rDimension } = useRecoilValue(buttonUiAtom)

  useEffect(() => {
    handleDimension()
  }, [
    rDimension.variant,
    rDimension.color,
    rDimension.size,
    rDimension.outline,
    rDimension.shape,
  ])

  return (
    <TwContainer id='disabled' ref={ref as LegacyRef<HTMLDivElement>}>
      <Title
        title='Disabled'
        description={
          <>
            Disable style of the button, can set the <code>disabled</code> prop
            value to <code>true</code>or <code>false</code>, The default shape
            is <code>false</code>.
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
