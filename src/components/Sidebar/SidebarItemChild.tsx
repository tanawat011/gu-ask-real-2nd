import type { SidebarState } from 'recoils/atoms'

import tw, { styled } from 'twin.macro'

export type SidebarItemProps = {
  label: string
  onClick?: () => void
  selected?: boolean
  fullSidebar?: boolean
}

type SidebarItemContainerProps = Pick<SidebarItemProps, 'selected'> & SidebarState

const TwContainer = styled.div(({ selected, fullSidebar }: SidebarItemContainerProps) => [
  tw`flex cursor-pointer items-center justify-between rounded-lg`,
  selected && tw`text-white bg-[hsla(0,0%,100%,.1)]`,
  fullSidebar
    ? tw`ml-5 h-10 pl-3 hover:(text-white bg-[hsla(0,0%,100%,.1)])`
    : tw`ml-0 h-9 px-4 py-1 text-[#9ca3af] hover:text-white`,
])
const TwItem = tw.div`flex items-center`

export const SidebarItemChild: React.FC<SidebarItemProps> = ({
  label,
  onClick,
  selected,
  fullSidebar,
}) => {
  return (
    <TwContainer onClick={onClick} selected={selected} fullSidebar={fullSidebar || false}>
      <TwItem>
        <span className='mt-0.5'>{label}</span>
      </TwItem>
    </TwContainer>
  )
}
