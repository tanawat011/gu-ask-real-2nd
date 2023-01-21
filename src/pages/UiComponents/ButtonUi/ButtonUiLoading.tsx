import type { LegacyRef } from 'react'
import { useEffect } from 'react'

import { useRecoilValue } from 'recoil'
import tw from 'twin.macro'

import { Button } from 'components/Button'
import { IconHome } from 'components/Icons'
import { ComponentDisplay, Title } from 'components/PageUiComponent'
import { useDimensionChange } from 'hooks/useDimensionChange'
import { useElementDimension } from 'hooks/useElementDimension'
import { buttonUiAtom, loadingSelector } from 'recoils/atoms'

const TwContainer = tw.div`mb-8`

export const ButtonUiLoading = () => {
  const [ref, dimension, handleDimension] = useElementDimension()

  useDimensionChange(loadingSelector, dimension)

  const { dimension: rDimension } = useRecoilValue(buttonUiAtom)

  useEffect(() => {
    handleDimension()
  }, [
    rDimension.variant,
    rDimension.color,
    rDimension.size,
    rDimension.outline,
    rDimension.shape,
    rDimension.disabled,
    rDimension.icon,
    rDimension.withIcon,
  ])

  return (
    <TwContainer id='loading' ref={ref as LegacyRef<HTMLDivElement>}>
      <Title
        title='Loading'
        description={
          <>
            Button can set <code>loading</code> prop to <code>true</code> to
            show loading indicator, it will disabled button.
          </>
        }
      />
      <ComponentDisplay
        callback={handleDimension}
        components={
          <div className='flex gap-2 items-center flex-wrap'>
            <Button label='Home' loading size='xs' />
            <Button label='Home' loading />
            <Button icon={<IconHome />} label='Home' loading />
            <Button icon={<IconHome />} loading size='xs' />
            <Button icon={<IconHome />} loading />
          </div>
        }
        code={`import React from "react"

export const Component = () => {
  return (
    <Button label='Home' loading size='xs' />
    <Button label='Home' loading />
    <Button icon={<IconHome />} label='Home' loading />
    <Button icon={<IconHome />} loading size='xs' />
    <Button icon={<IconHome />} loading />
  )
}`}
      />
    </TwContainer>
  )
}
