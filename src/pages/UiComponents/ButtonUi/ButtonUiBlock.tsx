import type { LegacyRef } from 'react'
import { useEffect } from 'react'

import { useRecoilValue } from 'recoil'
import tw from 'twin.macro'

import { Button } from 'components/Button'
import { ComponentDisplay, Title } from 'components/PageUiComponent'
import { PreCode } from 'components/PreCode'
import { useDimensionChange } from 'hooks/useDimensionChange'
import { useElementDimension } from 'hooks/useElementDimension'
import { blockSelector, buttonUiAtom } from 'recoils/atoms'

const TwContainer = tw.div`mb-8`

type ButtonUiBlockProps = {
  handlePageDimension: () => Promise<void>
}

export const ButtonUiBlock: React.FC<ButtonUiBlockProps> = ({
  handlePageDimension,
}) => {
  const [ref, dimension, handleDimension] = useElementDimension()

  useDimensionChange(blockSelector, dimension)

  const { dimension: btnDms } = useRecoilValue(buttonUiAtom)

  useEffect(() => {
    handleDimension()
    handlePageDimension()
  }, [
    btnDms.variant,
    btnDms.color,
    btnDms.size,
    btnDms.shape,
    btnDms.disabled,
    btnDms.icon,
    btnDms.withIcon,
    btnDms.loading,
  ])

  return (
    <TwContainer id='block' ref={ref as LegacyRef<HTMLDivElement>}>
      <Title
        title='Block'
        description={
          <>
            Button can stretch to fill the width by add <PreCode text='block' />{' '}
            prop.
          </>
        }
      />
      <ComponentDisplay
        callback={handleDimension}
        components={
          <>
            <Button label='Non Block Button' />
            <Button label='Blocked Button' block />
            <Button label='Blocked Button' block disabled />
            <Button label='Blocked Button' block loading='Loading...' />
          </>
        }
        code={`import React from "react"

export const Component = () => {
  return (
    <>
    <Button label='Non Block Button' />
    <Button label='Blocked Button' block />
    <Button label='Blocked Button' block disabled />
    <Button label='Blocked Button' block loading='Loading...' />
    </>
  )
}`}
      />
    </TwContainer>
  )
}
