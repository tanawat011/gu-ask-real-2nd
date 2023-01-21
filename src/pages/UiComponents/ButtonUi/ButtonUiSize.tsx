import type { LegacyRef } from 'react'
import { useEffect } from 'react'

import { useRecoilValue } from 'recoil'
import tw from 'twin.macro'

import { Button } from 'components/Button'
import { ComponentDisplay, Title } from 'components/PageUiComponent'
import { useDimensionChange } from 'hooks/useDimensionChange'
import { useElementDimension } from 'hooks/useElementDimension'
import { buttonUiAtom, sizeSelector } from 'recoils/atoms'

const TwContainer = tw.div`mb-8`

export const ButtonUiSize = () => {
  const [ref, dimension, handleDimension] = useElementDimension()

  useDimensionChange(sizeSelector, dimension)

  const { dimension: rDimension } = useRecoilValue(buttonUiAtom)

  useEffect(() => {
    handleDimension()
  }, [rDimension.variant, rDimension.color])

  return (
    <TwContainer id='size' ref={ref as LegacyRef<HTMLDivElement>}>
      <Title
        title='Size'
        description={
          <>
            Size of the button, can set the <code>size</code> prop value to{' '}
            <code>xs</code>, <code>sm</code>,<code>md</code>, <code>lg</code>{' '}
            and <code>xl</code>, The default size is <code>md</code>.
          </>
        }
      />
      <ComponentDisplay
        callback={handleDimension}
        components={
          <div className='flex gap-2 items-center flex-wrap'>
            <Button label='Extra Small (xs)' size='xs' />
            <Button label='Small (sm)' size='sm' />
            <Button label='Medium (md)' size='md' />
            <Button label='Large (lg)' size='lg' />
          </div>
        }
        code={`import React from "react"

export const Component = () => {
  return (
    <Button label='Extra Small (xs)' size='xs' />
    <Button label='Small (sm)' size='sm' />
    <Button label='Medium (md)' size='md' />
    <Button label='Large (lg)' size='lg' />
  )
}`}
      />
    </TwContainer>
  )
}
