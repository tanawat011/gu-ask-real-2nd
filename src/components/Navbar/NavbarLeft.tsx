import tw from 'twin.macro'

import { IconBars } from 'components/Icons'

export type NavbarLeftProps = {
  handleToggleSidebar: () => void
}

const TwNavbarLeft = tw.div`flex w-full`
const TwNavbarSearchInput = tw.input`mx-1 w-full rounded-lg border border-charcoal bg-yankees-blue px-3 py-2 text-sm text-white outline-none focus-within:(border-majorelle-blue ring-majorelle-blue) focus:(border-majorelle-blue ring-1 ring-majorelle-blue)`

const TwWrapBurger = tw.div`mx-1 cursor-pointer py-2 px-3 hover:(rounded-full bg-black bg-opacity-40)`

export const NavbarLeft: React.FC<NavbarLeftProps> = ({ handleToggleSidebar }) => {
  return (
    <TwNavbarLeft>
      <TwWrapBurger onClick={handleToggleSidebar}>
        <IconBars size='lg' />
      </TwWrapBurger>

      <TwNavbarSearchInput placeholder='Search...' />
    </TwNavbarLeft>
  )
}
