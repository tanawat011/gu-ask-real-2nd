import type { LegacyRef } from 'react'
import { useEffect } from 'react'

import { useRecoilValue } from 'recoil'
import tw from 'twin.macro'

import { Button } from 'components/Button'
import { ComponentDisplay, Title } from 'components/PageUiComponent'
import { useDimensionChange } from 'hooks/useDimensionChange'
import { useElementDimension } from 'hooks/useElementDimension'
import { blockSelector, buttonUiAtom } from 'recoils/atoms'

const TwContainer = tw.div`mb-8`

export const ButtonUiBlock = () => {
  const [ref, dimension, handleDimension] = useElementDimension()

  useDimensionChange(blockSelector, dimension)

  const { dimension: rDimension } = useRecoilValue(buttonUiAtom)

  useEffect(() => {
    handleDimension()
  }, [
    rDimension.variant,
    rDimension.color,
    rDimension.size,
    rDimension.outline,
    rDimension.shape,
    rDimension.disabled,
    rDimension.icon,
    rDimension.withIcon,
    rDimension.loading,
  ])

  return (
    <TwContainer id='block' ref={ref as LegacyRef<HTMLDivElement>}>
      <Title
        title='Block'
        description={
          <>
            Button can stretch to fill the width by add <code>block</code> prop.
          </>
        }
      />
      <ComponentDisplay
        callback={handleDimension}
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
