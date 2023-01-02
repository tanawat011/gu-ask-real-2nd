import tw from 'twin.macro'

export type NavbarRightProps = {
  x?: string
}

const TwIconItem = tw.div`h-6 w-6 rounded-full bg-[#9ca3af]`
const TwIconProfile = tw.div`h-8 w-8 rounded-full bg-[#9ca3af]`

const TwNavbarRight = tw.div`flex w-full items-center justify-end`
const TwNavbarItem = tw.div`mx-1 cursor-pointer p-2 hover:(rounded-full bg-black bg-opacity-40)`

const TwNavbarProfileContainer = tw.div`ml-3 flex cursor-pointer items-center`
const TwNavbarProfileWrap = tw.div`ml-2 flex select-none flex-col`
const TwNavbarProfileRole = tw.span`text-xs`
const TwNavbarProfileName = tw.span`font-bold text-sm`

export const NavbarRight: React.FC<NavbarRightProps> = () => {
  return (
    <TwNavbarRight>
      <TwNavbarItem>
        <TwIconItem />
      </TwNavbarItem>

      <TwNavbarItem>
        <TwIconItem />
      </TwNavbarItem>

      <TwNavbarItem>
        <TwIconItem />
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
