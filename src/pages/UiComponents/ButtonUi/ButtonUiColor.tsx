import type { LegacyRef } from 'react'
import { useEffect } from 'react'

import { useRecoilValue } from 'recoil'
import tw from 'twin.macro'

import { Button } from 'components/Button'
import { ComponentDisplay, Title } from 'components/PageUiComponent'
import { useDimensionChange } from 'hooks/useDimensionChange'
import { useElementDimension } from 'hooks/useElementDimension'
import { buttonUiAtom, colorSelector } from 'recoils/atoms'

const TwContainer = tw.div`mb-8`

export const ButtonUiColor = () => {
  const [ref, dimension, handleDimension] = useElementDimension()

  useDimensionChange(colorSelector, dimension)

  const { dimension: rDimension } = useRecoilValue(buttonUiAtom)

  useEffect(() => {
    handleDimension()
  }, [rDimension.variant])

  return (
    <TwContainer id='color' ref={ref as LegacyRef<HTMLDivElement>}>
      <Title
        title='Color'
        description={
          <>
            <code>twoTone</code> and <code>solid</code> button able to apply
            custom color, available colors option based on tailwind{' '}
            <code>theme.colors</code>.
          </>
        }
      />
      <ComponentDisplay
        callback={handleDimension}
        components={
          <div className='flex gap-2 items-center flex-wrap'>
            <Button label='Danger' color='rose-500' />
            <Button label='Warning' color='amber-500' />
            <Button label='Info' color='sky-500' />
            <Button label='Success' color='emerald-500' />
          </div>
        }
        code={`import React from "react"

export const Component = () => {
  return (
    <Button label='Danger' color='rose-500' />
    <Button label='Warning' color='amber-500' />
    <Button label='Info' color='sky-500' />
    <Button label='Success' color='emerald-500' />
  )
}`}
      />
    </TwContainer>
  )
}
