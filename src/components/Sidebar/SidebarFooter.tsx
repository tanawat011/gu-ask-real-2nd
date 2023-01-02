import { useTranslation } from 'react-i18next'
import tw from 'twin.macro'

import { FlexCol } from 'components/Common'

import packages from '../../../package.json'

const Container = tw(FlexCol)`relative items-center justify-around bg-space-blue pb-3 min-h-[52px]`
const Label = tw.span`text-iron-gray text-[18px] leading-[18px] first:pt-[14px]`

export const SidebarFooter = () => {
  const { t } = useTranslation('sidebar')

  return (
    <Container>
      <Label>{t('footer.powered-by')}</Label>
      <Label>{packages.version}</Label>
    </Container>
  )
}
