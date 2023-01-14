import type { SidebarState } from 'recoils/atoms'

import { useRecoilValue } from 'recoil'
import tw, { styled } from 'twin.macro'

import { sidebarAtom } from 'recoils/atoms'

import { NavbarLeft } from './NavbarLeft'
import { NavbarRight } from './NavbarRight'

export type NavbarProps = {
  handleToggleSidebar: () => void
}

const TwNavbar = styled.div(({ fullSidebar }: SidebarState) => [
  tw`flex h-sidebar-header items-center justify-between border-charcoal border-b px-4`,
  !fullSidebar && tw`sticky top-0 z-10 bg-yankees-blue`,
])

export const Navbar: React.FC<NavbarProps> = ({ handleToggleSidebar }) => {
  const { fullSidebar } = useRecoilValue(sidebarAtom)

  return (
    <TwNavbar fullSidebar={fullSidebar}>
      <NavbarLeft handleToggleSidebar={handleToggleSidebar} />

      <NavbarRight />
    </TwNavbar>
  )
}
