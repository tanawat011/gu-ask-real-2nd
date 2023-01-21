import type { LegacyRef } from 'react'
import { useEffect } from 'react'

import { useRecoilValue } from 'recoil'
import tw from 'twin.macro'

import { Button } from 'components/Button'
import { ComponentDisplay, Title } from 'components/PageUiComponent'
import { useDimensionChange } from 'hooks/useDimensionChange'
import { useElementDimension } from 'hooks/useElementDimension'
import { buttonUiAtom, outlineSelector } from 'recoils/atoms'

const TwContainer = tw.div`mb-8`

export const ButtonUiOutline = () => {
  const [ref, dimension, handleDimension] = useElementDimension()

  useDimensionChange(outlineSelector, dimension)

  const { dimension: rDimension } = useRecoilValue(buttonUiAtom)

  useEffect(() => {
    handleDimension()
  }, [rDimension.variant, rDimension.color, rDimension.size])

  return (
    <TwContainer id='outline' ref={ref as LegacyRef<HTMLDivElement>}>
      <Title
        title='Outline'
        description={
          <>
            Outline style of the button, can set the <code>outline</code> prop
            value to <code>true</code> or <code>false</code>, The default
            outline is <code>false</code>.
          </>
        }
      />
      <ComponentDisplay
        callback={handleDimension}
        components={
          <div className='flex gap-2 items-center flex-wrap'>
            <Button label='Primary' variant='primary' outline />
            <Button label='Secondary' variant='secondary' outline />
            <Button label='Tertiary' variant='tertiary' outline />
            <Button label='Solid' variant='solid' outline />
            <Button label='Two Tone' variant='twoTone' outline />
            <Button label='Plain' variant='plain' outline />
            <Button label='Link' variant='link' outline />
          </div>
        }
        code={`import React from "react"

export const Component = () => {
  return (
    <Button label='Primary' variant='primary' outline />
    <Button label='Secondary' variant='secondary' outline />
    <Button label='Tertiary' variant='tertiary' outline />
    <Button label='Solid' variant='solid' outline />
    <Button label='Two Tone' variant='twoTone' outline />
    <Button label='Plain' variant='plain' outline />
    <Button label='Link' variant='link' outline />
  )
}`}
      />
    </TwContainer>
  )
}
