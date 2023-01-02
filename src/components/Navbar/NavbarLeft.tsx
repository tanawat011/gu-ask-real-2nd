import tw from 'twin.macro'

export type NavbarLeftProps = {
  x?: string
}

const TwNavbarLeft = tw.div`flex w-full`
const TwNavbarSearchInput = tw.input`w-full rounded-lg border px-3 py-2 text-sm text-white outline-none bg-[#1F2937] border-[#374151] focus-within:(ring-[#4F46E5] border-[#4F46E5]) focus:(ring-1 ring-[#4F46E5] border-[#4F46E5])`

export const NavbarLeft: React.FC<NavbarLeftProps> = () => {
  return (
    <TwNavbarLeft>
      <TwNavbarSearchInput placeholder='Search...' />
    </TwNavbarLeft>
  )
}
