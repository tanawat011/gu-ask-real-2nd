import type { LegacyRef } from 'react'
import { useEffect } from 'react'

import { useRecoilValue } from 'recoil'
import tw from 'twin.macro'

import { Button } from 'components/Button'
import { IconHome } from 'components/Icons'
import { ComponentDisplay, Title } from 'components/PageUiComponent'
import { useDimensionChange } from 'hooks/useDimensionChange'
import { useElementDimension } from 'hooks/useElementDimension'
import { buttonUiAtom, iconSelector } from 'recoils/atoms'

const TwContainer = tw.div`mb-8`

export const ButtonUiIcon = () => {
  const [ref, dimension, handleDimension] = useElementDimension()

  useDimensionChange(iconSelector, dimension)

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
  ])

  return (
    <TwContainer id='icon' ref={ref as LegacyRef<HTMLDivElement>}>
      <Title
        title='Icon'
        description={
          <>
            Button can add an icon by insert icon to <code>icon</code> prop.
          </>
        }
      />
      <ComponentDisplay
        callback={handleDimension}
        components={
          <div className='flex gap-2 items-center flex-wrap'>
            <Button size='xs' icon={<IconHome />} />
            <Button size='sm' icon={<IconHome />} />
            <Button size='md' icon={<IconHome />} />
            <Button size='lg' icon={<IconHome />} />
          </div>
        }
        code={`import React from "react"

export const Component = () => {
  return (
    <Button size='xs' icon={<IconHome />} />
    <Button size='sm' icon={<IconHome />} />
    <Button size='md' icon={<IconHome />} />
    <Button size='lg' icon={<IconHome />} />
    <Button size='xl' icon={<IconHome />} />
  )
}`}
      />
    </TwContainer>
  )
}
