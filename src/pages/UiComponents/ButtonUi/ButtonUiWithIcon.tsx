import type { LegacyRef } from 'react'
import { useEffect } from 'react'

import { useRecoilValue } from 'recoil'
import tw from 'twin.macro'

import { Button } from 'components/Button'
import { IconGear, IconHome, IconUser } from 'components/Icons'
import { ComponentDisplay, Title } from 'components/PageUiComponent'
import { PreCode } from 'components/PreCode'
import { useDimensionChange } from 'hooks/useDimensionChange'
import { useElementDimension } from 'hooks/useElementDimension'
import { buttonUiAtom, withIconSelector } from 'recoils/atoms'

const TwContainer = tw.div`mb-8`

type ButtonUiWithIconProps = {
  handlePageDimension: () => Promise<void>
}

export const ButtonUiWithIcon: React.FC<ButtonUiWithIconProps> = ({
  handlePageDimension,
}) => {
  const [ref, dimension, handleDimension] = useElementDimension()

  useDimensionChange(withIconSelector, dimension)

  const { pageDimension } = useRecoilValue(buttonUiAtom)

  useEffect(() => {
    handleDimension()
    handlePageDimension()
  }, [pageDimension])

  return (
    <TwContainer id='with-icon' ref={ref as LegacyRef<HTMLDivElement>}>
      <Title
        title='With Icon'
        description={
          <>
            Icon can add and combined with <PreCode text='label' />.
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
