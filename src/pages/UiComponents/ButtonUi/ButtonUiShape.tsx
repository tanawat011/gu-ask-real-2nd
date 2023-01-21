import type { LegacyRef } from 'react'
import { useEffect } from 'react'

import { useRecoilValue } from 'recoil'
import tw from 'twin.macro'

import { Button } from 'components/Button'
import { ComponentDisplay, Title } from 'components/PageUiComponent'
import { useDimensionChange } from 'hooks/useDimensionChange'
import { useElementDimension } from 'hooks/useElementDimension'
import { buttonUiAtom, shapeSelector } from 'recoils/atoms'

const TwContainer = tw.div`mb-8`

export const ButtonUiShape = () => {
  const [ref, dimension, handleDimension] = useElementDimension()

  useDimensionChange(shapeSelector, dimension)

  const { dimension: rDimension } = useRecoilValue(buttonUiAtom)

  useEffect(() => {
    handleDimension()
  }, [
    rDimension.variant,
    rDimension.color,
    rDimension.size,
    rDimension.outline,
  ])

  return (
    <TwContainer id='shape' ref={ref as LegacyRef<HTMLDivElement>}>
      <Title
        title='Shape'
        description={
          <>
            Shape style of the button, can set the <code>shape</code> prop value
            to <code>square</code>, <code>rounded</code> or <code>circle</code>,
            The default shape is <code>rounded</code>.
          </>
        }
      />
      <ComponentDisplay
        callback={handleDimension}
        components={
          <div className='flex gap-2 items-center flex-wrap'>
            <Button label='Square' shape='square' />
            <Button label='Rounded' shape='rounded' />
            <Button label='Circle' shape='circle' />
          </div>
        }
        code={`import React from "react"

export const Component = () => {
  return (
    <Button label='Square' shape='square' />
    <Button label='Rounded' shape='rounded' />
    <Button label='Circle' shape='circle' />
  )
}`}
      />
    </TwContainer>
  )
}
