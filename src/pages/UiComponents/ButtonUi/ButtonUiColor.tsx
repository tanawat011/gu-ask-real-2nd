import type { LegacyRef } from 'react'
import { useEffect } from 'react'

import { useRecoilValue } from 'recoil'
import tw from 'twin.macro'

import { Button } from 'components/Button'
import { ComponentDisplay, Title } from 'components/PageUiComponent'
import { PreCode } from 'components/PreCode'
import { useDimensionChange } from 'hooks/useDimensionChange'
import { useElementDimension } from 'hooks/useElementDimension'
import { buttonUiAtom, colorSelector } from 'recoils/atoms'

const TwContainer = tw.div`mb-8`

type ButtonUiColorProps = {
  handlePageDimension: () => Promise<void>
}

export const ButtonUiColor: React.FC<ButtonUiColorProps> = ({
  handlePageDimension,
}) => {
  const [ref, dimension, handleDimension] = useElementDimension()

  useDimensionChange(colorSelector, dimension)

  const { pageDimension } = useRecoilValue(buttonUiAtom)

  useEffect(() => {
    handleDimension()
    handlePageDimension()
  }, [pageDimension])

  return (
    <TwContainer id='color' ref={ref as LegacyRef<HTMLDivElement>}>
      <Title
        title='Color'
        description={
          <>
            Button able to apply custom color, available colors option based on
            tailwind <PreCode text='theme.colors' />.
          </>
        }
      />
      <ComponentDisplay
        callback={handleDimension}
        components={
          <>
            <div className='flex gap-2 items-center flex-wrap'>
              <Button label='Danger' color='rose-500' />
              <Button label='Warning' color='amber-500' />
              <Button label='Info' color='sky-500' />
              <Button label='Success' color='emerald-500' />
            </div>

            <div className='flex gap-2 items-center flex-wrap'>
              <Button label='Danger' color='rose-500' variant='tertiary' />
              <Button label='Warning' color='amber-500' variant='tertiary' />
              <Button label='Info' color='sky-500' variant='tertiary' />
              <Button label='Success' color='emerald-500' variant='tertiary' />
            </div>
          </>
        }
        code={`import React from "react"

export const Component = () => {
  return (
    <Button label='Danger' color='rose-500' />
    <Button label='Warning' color='amber-500' />
    <Button label='Info' color='sky-500' />
    <Button label='Success' color='emerald-500' />
    <Button label='Danger' color='rose-500' variant='tertiary' />
    <Button label='Warning' color='amber-500' variant='tertiary' />
    <Button label='Info' color='sky-500' variant='tertiary' />
    <Button label='Success' color='emerald-500' variant='tertiary' />
  )
}`}
      />
    </TwContainer>
  )
}
