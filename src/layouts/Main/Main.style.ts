import type { SidebarState } from 'recoils/atoms'

import tw, { styled } from 'twin.macro'

import { DARK_THEME, FLEX, LIGHT_THEME } from 'constants/twTheme'

export const MainContainer = styled.div(({ fullSidebar }: SidebarState) => [
  [DARK_THEME.BG.COLOR, DARK_THEME.TEXT.COLOR],
  [LIGHT_THEME.BG.COLOR, LIGHT_THEME.TEXT.COLOR],
  [FLEX.ROW],
  tw`relative`,
  fullSidebar ? tw`h-screen` : tw`min-h-screen`,
])
export const MainContent = styled.div(() => [
  [DARK_THEME.BG.CONTENT_COLOR],
  [LIGHT_THEME.BG.CONTENT_COLOR],
  [FLEX.COL],
  tw`w-full`,
])
export const MainContentContainer = styled.div(() => [
  [FLEX.COL],
  tw`relative h-full overflow-x-auto`,
])
