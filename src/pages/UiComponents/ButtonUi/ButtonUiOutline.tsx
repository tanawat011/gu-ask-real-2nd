import type { LegacyRef } from 'react'
import { useEffect } from 'react'

import { useRecoilValue } from 'recoil'
import tw from 'twin.macro'

import { Button } from 'components/Button'
import { ComponentDisplay, Title } from 'components/PageUiComponent'
import { PreCode } from 'components/PreCode'
import { useDimensionChange } from 'hooks/useDimensionChange'
import { useElementDimension } from 'hooks/useElementDimension'
import { buttonUiAtom, outlineSelector } from 'recoils/atoms'

const TwContainer = tw.div`mb-8`

type ButtonUiOutlineProps = {
  handlePageDimension: () => Promise<void>
}

export const ButtonUiOutline: React.FC<ButtonUiOutlineProps> = ({
  handlePageDimension,
}) => {
  const [ref, dimension, handleDimension] = useElementDimension()

  useDimensionChange(outlineSelector, dimension)

  const { pageDimension } = useRecoilValue(buttonUiAtom)

  useEffect(() => {
    handleDimension()
    handlePageDimension()
  }, [pageDimension])

  return (
    <TwContainer id='outline' ref={ref as LegacyRef<HTMLDivElement>}>
      <Title
        title='Outline'
        description={
          <>
            Outline style of the button, can set the <PreCode text='outline' />{' '}
            prop value to <PreCode text='true' /> or <PreCode text='false' />,
            The default outline is <PreCode text='false' />.
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
    <Button label='Plain' variant='plain' outline />
    <Button label='Link' variant='link' outline />
  )
}`}
      />
    </TwContainer>
  )
}
