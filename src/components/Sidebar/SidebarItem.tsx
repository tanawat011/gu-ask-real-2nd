import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import tw, { styled } from 'twin.macro'

export type SidebarItemProps = {
  icon?: JSX.Element
  label: string
  hasChildren?: boolean
  onClick?: () => void
  selected?: boolean
}

type SidebarItemContainerProps = Pick<SidebarItemProps, 'selected'>

const TwContainer = styled.div(({ selected }: SidebarItemContainerProps) => [
  tw`mb-2 flex h-10 cursor-pointer items-center justify-between rounded-lg px-3 hover:(text-white bg-[hsla(0,0%,100%,.1)])`,
  selected && tw`text-white bg-[hsla(0,0%,100%,.1)]`,
])
const TwItem = tw.div`flex items-center`
const TwWrapIcon = tw.div`mr-2 flex h-6 w-6 items-center justify-center`

export const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  label,
  hasChildren,
  onClick,
  selected,
}) => {
  return (
    <TwContainer onClick={onClick} selected={selected}>
      <TwItem>
        <TwWrapIcon>{icon}</TwWrapIcon>
        <span className='mt-0.5'>{label}</span>
      </TwItem>

      {hasChildren && <FontAwesomeIcon icon='angle-down' size='lg' />}
    </TwContainer>
  )
}
