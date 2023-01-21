import type { LegacyRef } from 'react'
import { useEffect } from 'react'

import { useRecoilState } from 'recoil'
import tw from 'twin.macro'

import { Button } from 'components/Button'
import { ComponentDisplay, Title } from 'components/PageUiComponent'
import { PreCode } from 'components/PreCode'
import { useElementDimension } from 'hooks/useElementDimension'
import { variantSelector } from 'recoils/atoms'

const TwContainer = tw.div`mb-8`

type ButtonUiVariantProps = {
  handlePageDimension: () => Promise<void>
}

export const ButtonUiVariant: React.FC<ButtonUiVariantProps> = ({
  handlePageDimension,
}) => {
  const [ref, refDimension, handleDimension] = useElementDimension()

  const [, setDimension] = useRecoilState(variantSelector)

  useEffect(() => {
    setDimension(refDimension)
    handlePageDimension()
  }, [refDimension])

  return (
    <TwContainer id='variant' ref={ref as LegacyRef<HTMLDivElement>}>
      <Title
        title='Variant'
        description={
          <>
            Variant of the button, can set the <PreCode text='variant' /> prop
            value to <PreCode text='primary' />, <PreCode text='secondary' />,{' '}
            <PreCode text='tertiary' />, <PreCode text='plain' /> and{' '}
            <PreCode text='link' />, The default variant is{' '}
            <PreCode text='primary' />.
          </>
        }
      />
      <ComponentDisplay
        callback={handleDimension}
        components={
          <div className='flex gap-2 items-center flex-wrap'>
            <Button label='Primary' variant='primary' />
            <Button label='Secondary' variant='secondary' />
            <Button label='Tertiary' variant='tertiary' />
            <Button label='Plain' variant='plain' />
            <Button label='Link' variant='link' />
          </div>
        }
        code={`import React from "react"

export const Component = () => {
  return (
    <Button label='Primary' variant='primary' />
    <Button label='Secondary' variant='secondary' />
    <Button label='Tertiary' variant='tertiary' />
    <Button label='Plain' variant='plain' />
    <Button label='Link' variant='link' />
  )
}`}
      />
    </TwContainer>
  )
}
