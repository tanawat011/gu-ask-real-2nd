import type { SidebarState } from 'recoils/atoms'

import tw, { styled } from 'twin.macro'

import { DARK_THEME, LIGHT_THEME } from 'constants/twTheme'

export type SidebarItemProps = {
  label: string
  onClick?: () => void
  selected?: boolean
  fullSidebar?: boolean
}

type SidebarItemContainerProps = Pick<SidebarItemProps, 'selected'> & SidebarState

const TwContainer = styled.div(({ fullSidebar, selected }: SidebarItemContainerProps) => [
  !selected && tw`ml-5 pl-3!`,
  fullSidebar
    ? [
        [DARK_THEME.SIDEBAR.MENU.TEXT_COLOR],
        [DARK_THEME.SIDEBAR.MENU.HOVER.BG_COLOR, DARK_THEME.SIDEBAR.MENU.HOVER.TEXT_COLOR],
        [LIGHT_THEME.SIDEBAR.MENU.TEXT_COLOR],
        [LIGHT_THEME.SIDEBAR.MENU.HOVER.BG_COLOR, LIGHT_THEME.SIDEBAR.MENU.HOVER.TEXT_COLOR],
        tw`h-10 pl-3`,
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
        tw`ml-0 h-9 px-4 py-1`,
      ],
  tw`flex cursor-pointer items-center justify-between rounded-lg`,
])
const TwItem = tw.div`flex items-center`
const TwItemSelected = styled.div(() => [
  [DARK_THEME.SIDEBAR.MENU.ACTIVE.BG_COLOR, DARK_THEME.SIDEBAR.MENU.ACTIVE.TEXT_COLOR],
  [LIGHT_THEME.SIDEBAR.MENU.ACTIVE.BG_COLOR, LIGHT_THEME.SIDEBAR.MENU.ACTIVE.TEXT_COLOR],
  tw`ml-5 rounded-lg pl-0`,
])

export const SidebarItemChild: React.FC<SidebarItemProps> = ({
  label,
  onClick,
  selected,
  fullSidebar,
}) => {
  const renderItem = (
    <TwContainer onClick={onClick} selected={selected} fullSidebar={fullSidebar || false}>
      <TwItem>
        <span className='mt-0.5'>{label}</span>
      </TwItem>
    </TwContainer>
  )

  if (selected) {
    return <TwItemSelected>{renderItem}</TwItemSelected>
  }

  return renderItem
}
