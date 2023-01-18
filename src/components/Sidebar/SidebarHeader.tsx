import { useTranslation } from 'react-i18next'
import tw, { styled } from 'twin.macro'

import { DARK_THEME, LIGHT_THEME } from 'constants/twTheme'

type SidebarHeaderProps = {
  fullSidebar: boolean
}

const TwContainer = styled.div(() => [tw`flex h-sidebar-header items-center justify-between px-6`])
const TwWrapLogo = tw.div`flex h-full items-center`
const TwLogo = tw.div`h-8 w-8 rounded-full bg-cadet-grey`
const TwTitle = styled.div(() => [
  [DARK_THEME.TEXT.HEAD_COLOR],
  [LIGHT_THEME.TEXT.HEAD_COLOR],
  tw`ml-2 select-none`,
])

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({ fullSidebar }) => {
  const { t } = useTranslation('sidebar')

  return (
    <TwContainer>
      <TwWrapLogo>
        <TwLogo />

        {fullSidebar && <TwTitle>{t('header.title')}</TwTitle>}
      </TwWrapLogo>
    </TwContainer>
  )
}
