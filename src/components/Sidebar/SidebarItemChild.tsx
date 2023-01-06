import tw, { styled } from 'twin.macro'

export type SidebarItemProps = {
  label: string
  onClick?: () => void
  selected?: boolean
}

type SidebarItemContainerProps = Pick<SidebarItemProps, 'selected'>

const TwContainer = styled.div(({ selected }: SidebarItemContainerProps) => [
  tw`ml-5 flex h-10 cursor-pointer items-center justify-between rounded-lg pl-3 hover:(text-white bg-[hsla(0,0%,100%,.1)])`,
  selected && tw`text-white bg-[hsla(0,0%,100%,.1)]`,
])
const TwItem = tw.div`flex items-center`

export const SidebarItemChild: React.FC<SidebarItemProps> = ({ label, onClick, selected }) => {
  return (
    <TwContainer onClick={onClick} selected={selected}>
      <TwItem>
        <span className='mt-0.5'>{label}</span>
      </TwItem>
    </TwContainer>
  )
}
