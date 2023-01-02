import { useTranslation } from 'react-i18next'
import tw from 'twin.macro'

import packages from '../../../package.json'

const TwContainer = tw.div`flex flex-col items-center justify-center border-t py-2 text-sm leading-6 border-[#374151]`

export const SidebarFooter = () => {
  const { t } = useTranslation('sidebar')

  return (
    <TwContainer>
      <span>{t('footer.powered-by')}</span>
      <span>{packages.version}</span>
    </TwContainer>
  )
}
