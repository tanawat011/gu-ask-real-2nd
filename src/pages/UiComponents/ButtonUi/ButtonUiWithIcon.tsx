import type { LegacyRef } from 'react'
import { useEffect } from 'react'

import { useRecoilValue } from 'recoil'
import tw from 'twin.macro'

import { Button } from 'components/Button'
import { IconGear, IconHome, IconUser } from 'components/Icons'
import { ComponentDisplay, Title } from 'components/PageUiComponent'
import { useDimensionChange } from 'hooks/useDimensionChange'
import { useElementDimension } from 'hooks/useElementDimension'
import { buttonUiAtom, withIconSelector } from 'recoils/atoms'

const TwContainer = tw.div`mb-8`

export const ButtonUiWithIcon = () => {
  const [ref, dimension, handleDimension] = useElementDimension()

  useDimensionChange(withIconSelector, dimension)

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
  ])

  return (
    <TwContainer id='with-icon' ref={ref as LegacyRef<HTMLDivElement>}>
      <Title
        title='With Icon'
        description={
          <>
            Icon can add and combined with <code>label</code>.
          </>
        }
      />
      <ComponentDisplay
        callback={handleDimension}
        components={
          <div className='flex gap-2 items-center flex-wrap'>
            <Button icon={<IconHome />} label='Home' />
            <Button icon={<IconUser />} label='Profile' />
            <Button icon={<IconGear />} label='Setting' />
            <Button iconR={<IconHome />} label='Right Icon' />
            <Button
              icon={<IconHome />}
              iconR={<IconHome />}
              label='Between Icons'
            />
          </div>
        }
        code={`import React from "react"

export const Component = () => {
  return (
    <Button icon={<IconHome />} label='Home' />
    <Button icon={<IconUser />} label='Profile' />
    <Button icon={<IconGear />} label='Setting' />
    <Button iconR={<IconHome />} label='Right Icon' />
    <Button
      icon={<IconHome />}
      iconR={<IconHome />}
      label='Between Icons'
    />
  )
}`}
      />
    </TwContainer>
  )
}
