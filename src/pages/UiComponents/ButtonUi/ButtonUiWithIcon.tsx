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
  ])

  return (
    <TwContainer id='with-icon' ref={ref as LegacyRef<HTMLDivElement>}>
      <Title
        title='With Icon'
        description={
          <>
            Icon can set position with prop <PreCode text='iconPosition' /> to{' '}
            <PreCode text='left' /> or <PreCode text='right' />.
          </>
        }
      />
      <ComponentDisplay
        callback={handleDimension}
        components={
          <div className='flex gap-2 items-center flex-wrap'>
            <Button icon={<IconHome />} label='Icon' />
            <Button
              icon={<IconHome />}
              iconPosition='right'
              label='Right Icon'
            />
          </div>
        }
        code={`import React from "react"

export const Component = () => {
  return (
    <Button icon={<IconHome />} label='Icon' />
    <Button icon={<IconHome />} iconPosition='right' label='Right Icon' />
  )
}`}
      />
    </TwContainer>
  )
}
