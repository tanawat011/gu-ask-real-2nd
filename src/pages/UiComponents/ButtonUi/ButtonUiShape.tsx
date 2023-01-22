import type { LegacyRef } from 'react'
import { useEffect } from 'react'

import { useRecoilValue } from 'recoil'
import tw from 'twin.macro'

import { Button } from 'components/Button'
import { ComponentDisplay, Title } from 'components/PageUiComponent'
import { PreCode } from 'components/PreCode'
import { useDimensionChange } from 'hooks/useDimensionChange'
import { useElementDimension } from 'hooks/useElementDimension'
import { buttonUiAtom, shapeSelector } from 'recoils/atoms'

const TwContainer = tw.div`mb-8`

type ButtonUiShapeProps = {
  handlePageDimension: () => Promise<void>
}

export const ButtonUiShape: React.FC<ButtonUiShapeProps> = ({
  handlePageDimension,
}) => {
  const [ref, dimension, handleDimension] = useElementDimension()

  useDimensionChange(shapeSelector, dimension)

  const { dimension: btnDms } = useRecoilValue(buttonUiAtom)

  useEffect(() => {
    handleDimension()
    handlePageDimension()
  }, [btnDms.variant, btnDms.color, btnDms.size])

  return (
    <TwContainer id='shape' ref={ref as LegacyRef<HTMLDivElement>}>
      <Title
        title='Shape'
        description={
          <>
            Shape style of the button, can set the <PreCode text='shape' /> prop
            value to <PreCode text='square' />, <PreCode text='rounded' /> and{' '}
            <PreCode text='circle' />, The default shape is{' '}
            <PreCode text='rounded' />.
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
