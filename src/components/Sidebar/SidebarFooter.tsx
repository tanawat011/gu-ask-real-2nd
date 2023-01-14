import { useTranslation } from 'react-i18next'
import tw from 'twin.macro'

import packages from '../../../package.json'

const TwContainer = tw.div`flex h-sidebar-footer flex-col items-center justify-center border-charcoal border-t py-2 text-sm leading-6`

export const SidebarFooter: React.FC = () => {
  const { t } = useTranslation('sidebar')

  return (
    <TwContainer>
      <span>{t('footer.powered-by')}</span>
      <span>{packages.version}</span>
    </TwContainer>
  )
}
