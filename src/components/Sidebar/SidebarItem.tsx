import type { SidebarState } from 'recoils/atoms'

import React from 'react'

import tw, { styled } from 'twin.macro'

import { IconAngleDown } from 'components/Icons'
import { DARK_THEME, LIGHT_THEME } from 'constants/twTheme'

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
  fullSidebar
    ? [
        [DARK_THEME.SIDEBAR.MENU.TEXT_COLOR],
        [DARK_THEME.SIDEBAR.MENU.HOVER.BG_COLOR, DARK_THEME.SIDEBAR.MENU.HOVER.TEXT_COLOR],
        [LIGHT_THEME.SIDEBAR.MENU.TEXT_COLOR],
        [LIGHT_THEME.SIDEBAR.MENU.HOVER.BG_COLOR, LIGHT_THEME.SIDEBAR.MENU.HOVER.TEXT_COLOR],
        tw`justify-between px-3`,
      ]
    : [
        [DARK_THEME.MINI_SIDEBAR.MENU.TEXT_COLOR],
        [
          DARK_THEME.MINI_SIDEBAR.MENU.HOVER.BG_COLOR,
          DARK_THEME.MINI_SIDEBAR.MENU.HOVER.TEXT_COLOR,
        ],
        [LIGHT_THEME.MINI_SIDEBAR.MENU.TEXT_COLOR],
        [
          LIGHT_THEME.MINI_SIDEBAR.MENU.HOVER.BG_COLOR,
          LIGHT_THEME.MINI_SIDEBAR.MENU.HOVER.TEXT_COLOR,
        ],
        tw`justify-center px-0`,
      ],
  tw`mb-2 flex h-10 cursor-pointer items-center rounded-lg`,
])
const TwItem = tw.div`flex items-center`
const TwItemSelected = styled.div(() => [
  [DARK_THEME.SIDEBAR.MENU.ACTIVE.BG_COLOR, DARK_THEME.SIDEBAR.MENU.ACTIVE.TEXT_COLOR],
  [LIGHT_THEME.SIDEBAR.MENU.ACTIVE.BG_COLOR, LIGHT_THEME.SIDEBAR.MENU.ACTIVE.TEXT_COLOR],
  tw`rounded-lg`,
])
const TwWrapIcon = styled.div(({ fullSidebar }: SidebarItemContainerProps) => [
  tw`flex h-6 w-6 items-center justify-center`,
  fullSidebar && tw`mr-2`,
])
const TwWrapAngleIcon = styled.div(({ expanded }: Pick<SidebarItemProps, 'expanded'>) => [
  tw`transition-all`,
  expanded && tw`rotate-180`,
])

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
          <IconAngleDown size='lg' />
        </TwWrapAngleIcon>
      )}
    </TwContainer>
  )

  if (selected) {
    return <TwItemSelected>{renderItem}</TwItemSelected>
  }

  return renderItem
}
