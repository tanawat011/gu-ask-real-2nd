import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'
import tw, { styled } from 'twin.macro'

import { FlexRow } from 'components/Common'

type SidebarHeaderProps = {
  fullSidebar: boolean
  handleToggleSidebar: () => void
}

type TwSidebarHeaderProps = {
  fullSidebar: boolean
}

const Container = tw(FlexRow)`relative items-center justify-between bg-space-blue px-6 min-h-[78px]`
const HeaderIcon = tw(FlexRow)`items-center`
const HeaderLabel = tw.div`flex items-center justify-center text-white text-base ml-[8px]`
const HamburgerButton = styled.div(({ fullSidebar }: TwSidebarHeaderProps) => [
  tw`cursor-pointer`,
  !fullSidebar && tw`absolute`,
])

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({
  fullSidebar,
  handleToggleSidebar,
}) => {
  const { t } = useTranslation('sidebar')

  return (
    <Container>
      {fullSidebar && (
        <HeaderIcon>
          <FontAwesomeIcon icon='house' className='text-white' size='1x' />

          <HeaderLabel>{t('header.title')}</HeaderLabel>
        </HeaderIcon>
      )}

      <HamburgerButton
        data-testid='hamburger-btn'
        fullSidebar={fullSidebar}
        onClick={() => handleToggleSidebar()}
      >
        <FontAwesomeIcon icon='bars' className='text-white' size='lg' />
      </HamburgerButton>
    </Container>
  )
}
