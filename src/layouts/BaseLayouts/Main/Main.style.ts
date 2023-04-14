import type { SidebarState } from 'recoils/atoms'

import tw, { styled } from 'twin.macro'

import { BG_THEME, FLEX, TEXT_THEME } from 'constants/twTheme'

export const MainContainer = styled.div(({ fullSidebar }: SidebarState) => [
  [BG_THEME.BASE, TEXT_THEME.DETAIL],
  [FLEX.ROW],
  tw`relative`,
  fullSidebar ? tw`h-screen` : tw`min-h-screen`,
])
export const MainContent = styled.div(() => [
  [BG_THEME.CONTENT],
  [FLEX.COL],
  tw`w-full`,
])
export const MainContentContainer = styled.div(() => [
  [FLEX.COL],
  tw`relative h-full overflow-x-auto`,
])
