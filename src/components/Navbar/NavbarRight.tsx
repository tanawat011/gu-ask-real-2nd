import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { US } from 'country-flag-icons/react/3x2'
import tw from 'twin.macro'

const TwIconProfile = tw.div`h-8 w-8 rounded-full bg-cadet-grey`

const TwNavbarRight = tw.div`flex w-full items-center justify-end`
const TwNavbarItem = tw.div`mx-1 cursor-pointer p-2 hover:(rounded-full bg-black bg-opacity-40)`

const TwWrapIcon = tw.div`flex h-6 w-6 items-center justify-center`

const TwNavbarProfileContainer = tw.div`ml-3 flex cursor-pointer items-center pr-3`
const TwNavbarProfileWrap = tw.div`ml-2 flex select-none flex-col`
const TwNavbarProfileRole = tw.span`text-xs`
const TwNavbarProfileName = tw.span`font-bold text-sm`

export const NavbarRight = () => {
  return (
    <TwNavbarRight>
      <TwNavbarItem>
        <US className='h-6 w-6' />
      </TwNavbarItem>

      <TwNavbarItem>
        <TwWrapIcon>
          <FontAwesomeIcon icon='bell' size='lg' />
        </TwWrapIcon>
      </TwNavbarItem>

      <TwNavbarItem>
        <TwWrapIcon>
          <FontAwesomeIcon icon='gear' size='lg' />
        </TwWrapIcon>
      </TwNavbarItem>

      <TwNavbarProfileContainer>
        <TwIconProfile />
        <TwNavbarProfileWrap>
          <TwNavbarProfileRole>Admin</TwNavbarProfileRole>

          <TwNavbarProfileName>Tanawat P</TwNavbarProfileName>
        </TwNavbarProfileWrap>
      </TwNavbarProfileContainer>
    </TwNavbarRight>
  )
}
