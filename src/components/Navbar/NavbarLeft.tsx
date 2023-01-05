import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import tw from 'twin.macro'

export type NavbarLeftProps = {
  handleToggleSidebar: () => void
}

const TwNavbarLeft = tw.div`flex w-full`
const TwNavbarSearchInput = tw.input`mx-1 w-full rounded-lg border px-3 py-2 text-sm text-white outline-none bg-[#1F2937] border-[#374151] focus-within:(ring-[#4F46E5] border-[#4F46E5]) focus:(ring-1 ring-[#4F46E5] border-[#4F46E5])`

const TwWrapBurger = tw.div`mx-1 cursor-pointer py-2 px-3 hover:(rounded-full bg-black bg-opacity-40)`

export const NavbarLeft: React.FC<NavbarLeftProps> = ({ handleToggleSidebar }) => {
  return (
    <TwNavbarLeft>
      <TwWrapBurger onClick={handleToggleSidebar}>
        <FontAwesomeIcon icon='bars' size='lg' />
      </TwWrapBurger>

      <TwNavbarSearchInput placeholder='Search...' />
    </TwNavbarLeft>
  )
}
