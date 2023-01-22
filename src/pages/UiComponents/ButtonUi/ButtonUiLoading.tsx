import type { LegacyRef } from 'react'
import { useEffect } from 'react'

import { useRecoilValue } from 'recoil'
import tw from 'twin.macro'

import { Button } from 'components/Button'
import { IconHome } from 'components/Icons'
import { ComponentDisplay, Title } from 'components/PageUiComponent'
import { PreCode } from 'components/PreCode'
import { useDimensionChange } from 'hooks/useDimensionChange'
import { useElementDimension } from 'hooks/useElementDimension'
import { buttonUiAtom, loadingSelector } from 'recoils/atoms'

const TwContainer = tw.div`mb-8`

type ButtonUiLoadingProps = {
  handlePageDimension: () => Promise<void>
}

export const ButtonUiLoading: React.FC<ButtonUiLoadingProps> = ({
  handlePageDimension,
}) => {
  const [ref, dimension, handleDimension] = useElementDimension()

  useDimensionChange(loadingSelector, dimension)

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
  ])

  return (
    <TwContainer id='loading' ref={ref as LegacyRef<HTMLDivElement>}>
      <Title
        title='Loading'
        description={
          <>
            Button can set <PreCode text='loading' /> prop to{' '}
            <PreCode text='true' /> or <PreCode text='string' /> to show loading
            indicator, it will disabled button.
          </>
        }
      />
      <ComponentDisplay
        callback={handleDimension}
        components={
          <div className='flex gap-2 items-center flex-wrap'>
            <Button label='Default' loading />
            <Button label='Text Indicator' loading='Loading...' />
            <Button label='Icon' loading icon={<IconHome />} />
            <Button
              label='Icon Right'
              loading
              icon={<IconHome />}
              iconPosition='right'
            />
          </div>
        }
        code={`import React from "react"

export const Component = () => {
  return (
    <Button label='Default' loading />
    <Button label='Text Indicator' loading='Loading...' />
    <Button label='Icon' loading icon={<IconHome />} />
    <Button
      label='Icon Right'
      loading
      icon={<IconHome />}
      iconPosition='right'
    />
  )
}`}
      />
    </TwContainer>
  )
}
