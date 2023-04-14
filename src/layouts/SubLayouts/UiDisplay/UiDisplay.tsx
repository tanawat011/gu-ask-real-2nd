import type { UiDisplayRightMenuProps } from './UiDisplayRightMenu'
import type { UiDisplayTableApiProps } from './UiDisplayTableApi'

import React, { useState } from 'react'

import { Outlet } from 'react-router-dom'
import tw from 'twin.macro'

import { Title } from 'components/PageUiComponent'

import { UiDisplayRightMenu } from './UiDisplayRightMenu'
import { UiDisplayTableApi } from './UiDisplayTableApi'

const TwContainer = tw.div`relative grid grid-cols-1 gap-8 overflow-x-auto px-8 py-6 desktop:grid-cols-5`
const TwWrapContent = tw.div`xl:col-span-4`
const TwWrapMenu = tw.div`col-span-1 hidden desktop:block`

export type UiDisplayLayoutOutletContext = {
  handleChildProps: (props: UiDisplayLayoutChildProps) => void
}

export type UiDisplayLayoutChildProps = {
  title: string
  description: string
} & UiDisplayTableApiProps &
  Omit<UiDisplayRightMenuProps, 'isScrolled'>

const defaultChildProps: UiDisplayLayoutChildProps = {
  title: '',
  description: '',
  containerId: '',
  apiId: '',
  apiName: '',
  apiData: [],
  menuItems: {},
}

export const UiDisplayLayout = () => {
  const [childProps, setChildProps] =
    useState<UiDisplayLayoutChildProps>(defaultChildProps)
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = () => {
    setIsScrolled(true)
  }

  const handleChildProps = (props: UiDisplayLayoutChildProps) => {
    setChildProps(props)
  }

  return (
    <TwContainer
      id={childProps.containerId}
      onScroll={handleScroll}
      data-testid='ui-display-container-layout'
    >
      <TwWrapContent>
        <div>
          <Title
            size='xl'
            title={childProps.title}
            description={childProps.description}
          />
        </div>

        <Outlet
          context={{ handleChildProps } as UiDisplayLayoutOutletContext}
        />

        <UiDisplayTableApi {...childProps} />
      </TwWrapContent>

      <TwWrapMenu>
        <UiDisplayRightMenu {...childProps} isScrolled={isScrolled} />
      </TwWrapMenu>
    </TwContainer>
  )
}
