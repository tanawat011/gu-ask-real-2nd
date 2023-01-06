import { useTranslation } from 'react-i18next'
import { useRecoilValue } from 'recoil'
import tw, { styled } from 'twin.macro'

import { sidebarAtom } from 'recoils/atoms'

const TwContainer = styled.div(() => [tw`flex h-sidebar-header items-center justify-between px-6`])
const TwWrapLogo = tw.div`flex h-full items-center`
const TwLogo = tw.div`h-8 w-8 rounded-full bg-[#9ca3af]`
const TwTitle = tw.div`ml-2 select-none text-white`

export const SidebarHeader: React.FC = () => {
  const { t } = useTranslation('sidebar')

  const { fullSidebar } = useRecoilValue(sidebarAtom)

  return (
    <TwContainer>
      <TwWrapLogo>
        <TwLogo />

        {fullSidebar && <TwTitle>{t('header.title')}</TwTitle>}
      </TwWrapLogo>
    </TwContainer>
  )
}
