import type { SidebarState } from 'recoils/atoms'

import React from 'react'

import tw, { styled } from 'twin.macro'

import { IconFa } from 'components/Icons'
import { BG_THEME, TEXT_THEME } from 'constants/twTheme'

export type SidebarItemProps = {
  icon?: JSX.Element
  label?: string
  hasChildren?: boolean
  onClick?: () => void
  selected?: boolean
  expanded?: boolean
  fullSidebar: boolean
}

type SidebarItemContainerProps = SidebarState

const TwContainer = styled.div(({ fullSidebar }: SidebarItemContainerProps) => [
  [TEXT_THEME.MENU, BG_THEME.MENU],
  fullSidebar ? tw`justify-between px-3` : tw`justify-center px-0`,
  tw`mb-2 flex h-10 cursor-pointer items-center rounded-lg`,
])
const TwItem = tw.div`flex items-center`
const TwItemSelected = styled.div(() => [
  [TEXT_THEME.MENU_SELECT, BG_THEME.MENU_SELECT],
  tw`rounded-lg`,
])
const TwWrapIcon = styled.div(({ fullSidebar }: SidebarItemContainerProps) => [
  tw`flex h-6 w-6 items-center justify-center`,
  fullSidebar && tw`mr-2`,
])
const TwWrapAngleIcon = styled.div(
  ({ expanded }: Pick<SidebarItemProps, 'expanded'>) => [
    tw`transition-all`,
    expanded && tw`rotate-180`,
  ],
)

export const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  label,
  hasChildren,
  onClick,
  selected,
  expanded,
  fullSidebar,
}) => {
  const renderItem = (
    <TwContainer onClick={onClick} fullSidebar={fullSidebar}>
      <TwItem>
        <TwWrapIcon fullSidebar={fullSidebar}>{icon}</TwWrapIcon>

        {fullSidebar && <span className='mt-0.5'>{label}</span>}
      </TwItem>

      {fullSidebar && hasChildren && (
        <TwWrapAngleIcon expanded={expanded}>
          <IconFa icon='angle-down' size='lg' />
        </TwWrapAngleIcon>
      )}
    </TwContainer>
  )

  if (selected) {
    return <TwItemSelected>{renderItem}</TwItemSelected>
  }

  return renderItem
}
