import tw from 'twin.macro'

import { Button } from 'components/Button'
import { IconFa } from 'components/Icons'
import { ComponentDisplay, Title } from 'components/PageUiComponent'
import { PreCode } from 'components/PreCode'

import { menuList } from './data'

const TwContainer = tw.div`mb-8`

export const ButtonUiLoading = () => {
  return (
    <TwContainer id={menuList.loading.id}>
      <Title
        title={menuList.loading.name}
        description={
          <>
            Button can set <PreCode text='loading' /> prop to{' '}
            <PreCode text='true' /> or <PreCode text='string' /> to show loading
            indicator, it will disabled button.
          </>
        }
      />
      <ComponentDisplay
        components={
          <div className='flex gap-2 items-center flex-wrap'>
            <Button label='Default' loading />
            <Button label='Text Indicator' loading='Loading...' />
            <Button label='Icon' loading icon={<IconFa icon='home' />} />
            <Button
              label='Icon Right'
              loading
              icon={<IconFa icon='home' />}
              iconPosition='right'
            />
          </div>
        }
        code={`import React from "react"

export const Component = () => {
  return (
    <Button label='Default' loading />
    <Button label='Text Indicator' loading='Loading...' />
    <Button label='Icon' loading icon={<IconFa icon='home' />} />
    <Button
      label='Icon Right'
      loading
      icon={<IconFa icon='home' />}
      iconPosition='right'
    />
  )
}`}
      />
    </TwContainer>
  )
}
