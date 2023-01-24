import type { SidebarState } from 'recoils/atoms'

import tw, { styled } from 'twin.macro'

import { BG_THEME, TEXT_THEME } from 'constants/twTheme'

export type SidebarItemProps = {
  label: string
  onClick?: () => void
  selected?: boolean
  fullSidebar?: boolean
}

type SidebarItemContainerProps = Pick<SidebarItemProps, 'selected'> &
  SidebarState

const TwContainer = styled.div(
  ({ fullSidebar, selected }: SidebarItemContainerProps) => [
    [TEXT_THEME.MENU, BG_THEME.MENU],
    !selected && tw`ml-5 mb-0 pl-3!`,
    fullSidebar ? tw`h-10 pl-3` : tw`ml-0 h-9 px-4 py-1`,
    tw`mb-1 flex cursor-pointer items-center justify-between rounded-lg`,
  ],
)
const TwItem = tw.div`flex items-center`
const TwItemSelected = styled.div(() => [
  [TEXT_THEME.MENU_SELECT, BG_THEME.MENU_SELECT],
  tw`ml-5 mb-1 rounded-lg pl-0`,
])

export const SidebarItemChild: React.FC<SidebarItemProps> = ({
  label,
  onClick,
  selected,
  fullSidebar,
}) => {
  const renderItem = (
    <TwContainer
      onClick={onClick}
      selected={selected}
      fullSidebar={fullSidebar || false}
    >
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
