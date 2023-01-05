import { useTranslation } from 'react-i18next'
import tw from 'twin.macro'

import packages from '../../../package.json'

const TwContainer = tw.div`flex h-sidebar-footer flex-col items-center justify-center border-t py-2 text-sm leading-6 border-[#374151]`

type SidebarFooterProps = {
  fullSidebar: boolean
}

export const SidebarFooter: React.FC<SidebarFooterProps> = ({ fullSidebar }) => {
  const { t } = useTranslation('sidebar')

  return (
    <TwContainer>
      {fullSidebar && <span>{t('footer.powered-by')}</span>}
      <span>{packages.version}</span>
    </TwContainer>
  )
}
