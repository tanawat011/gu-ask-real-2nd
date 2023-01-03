import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'
import tw from 'twin.macro'

type SidebarHeaderProps = {
  fullSidebar?: boolean
  handleToggleSidebar: () => void
}

const TwContainer = tw.div`flex h-sidebar-header items-center justify-between px-6`
const TwWrapLogo = tw.div`flex h-full items-center`
const TwLogo = tw.div`h-8 w-8 rounded-full bg-[#9ca3af]`
const TwTitle = tw.div`ml-2 select-none text-white`
const TwWrapBurger = tw.div`cursor-pointer py-2 px-3 hover:(rounded-full bg-black bg-opacity-40)`

export const SidebarHeader: React.FC<SidebarHeaderProps> = () => {
  const { t } = useTranslation('sidebar')

  return (
    <TwContainer>
      <TwWrapLogo>
        <TwLogo />
        <TwTitle>{t('header.title')}</TwTitle>
      </TwWrapLogo>
      <TwWrapBurger>
        <FontAwesomeIcon icon='bars' size='lg' />
      </TwWrapBurger>
    </TwContainer>
  )
}
