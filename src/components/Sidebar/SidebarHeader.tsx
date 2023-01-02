import { useTranslation } from 'react-i18next'
import tw from 'twin.macro'

type SidebarHeaderProps = {
  fullSidebar?: boolean
  handleToggleSidebar: () => void
}

const TwIconBurger = tw.div`h-6 w-6 rounded bg-[#9ca3af]`

const TwContainer = tw.div`flex h-16 items-center justify-between px-6`
const TwWrapLogo = tw.div`flex h-16 items-center`
const TwLogo = tw.div`h-8 w-8 rounded-full bg-[#9ca3af]`
const TwTitle = tw.div`ml-2 select-none text-white`
const TwWrapBurger = tw.div`cursor-pointer p-2 hover:(rounded bg-black bg-opacity-40)`

export const SidebarHeader: React.FC<SidebarHeaderProps> = () => {
  const { t } = useTranslation('sidebar')

  return (
    <TwContainer>
      <TwWrapLogo>
        <TwLogo />
        <TwTitle>{t('header.title')}</TwTitle>
      </TwWrapLogo>
      <TwWrapBurger>
        <TwIconBurger />
      </TwWrapBurger>
    </TwContainer>
  )
}
