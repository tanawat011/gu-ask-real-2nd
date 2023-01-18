import { useTranslation } from 'react-i18next'
import tw, { styled } from 'twin.macro'

import { DARK_THEME, FLEX, LIGHT_THEME } from 'constants/twTheme'

import packages from '../../../package.json'

const TwContainer = styled.div(() => [
  [DARK_THEME.BORDER.COLOR],
  [LIGHT_THEME.BORDER.COLOR],
  [FLEX.COL_ALL_CENTER],
  tw`h-sidebar-footer border-t py-2 text-sm leading-6`,
])
export const SidebarFooter: React.FC = () => {
  const { t } = useTranslation('sidebar')

  return (
    <TwContainer>
      <span>{t('footer.powered-by')}</span>
      <span>{packages.version}</span>
    </TwContainer>
  )
}
