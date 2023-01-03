import tw from 'twin.macro'

import { NavbarLeft } from './NavbarLeft'
import { NavbarRight } from './NavbarRight'

export type NavbarProps = {
  x?: string
}

const TwNavbar = tw.div`flex h-sidebar-header items-center justify-between border-b px-4 border-[#374151]`

export const Navbar: React.FC<NavbarProps> = () => {
  return (
    <TwNavbar>
      <NavbarLeft />

      <NavbarRight />
    </TwNavbar>
  )
}
