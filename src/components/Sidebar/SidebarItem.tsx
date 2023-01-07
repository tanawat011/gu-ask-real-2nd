import type { SidebarState } from 'recoils/atoms'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRecoilValue } from 'recoil'
import tw, { styled } from 'twin.macro'

import { sidebarAtom } from 'recoils/atoms'

export type SidebarItemProps = {
  icon?: JSX.Element
  label?: string
  hasChildren?: boolean
  onClick?: () => void
  onHover?: () => void
  onLeave?: () => void
  selected?: boolean
  expanded?: boolean
}

type SidebarItemContainerProps = Pick<SidebarItemProps, 'selected'> & SidebarState

const TwContainer = styled.div(({ selected, fullSidebar }: SidebarItemContainerProps) => [
  tw`mb-2 flex h-10 cursor-pointer items-center rounded-lg hover:(text-white bg-[hsla(0,0%,100%,.1)])`,
  selected && tw`text-white bg-[hsla(0,0%,100%,.1)]`,
  fullSidebar ? tw`justify-between px-3` : tw`justify-center px-0`,
])
const TwItem = tw.div`flex items-center`
const TwWrapIcon = styled.div(({ fullSidebar }: SidebarItemContainerProps) => [
  tw`flex h-6 w-6 items-center justify-center`,
  fullSidebar && tw`mr-2`,
])
const TwWrapAngleIcon = styled.div(({ expanded }: Pick<SidebarItemProps, 'expanded'>) => [
  tw`transition-all`,
  expanded && tw`rotate-180`,
])

export const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  label,
  hasChildren,
  onClick,
  selected,
  expanded,
}) => {
  const { fullSidebar } = useRecoilValue(sidebarAtom)

  return (
    <TwContainer onClick={onClick} selected={selected} fullSidebar={fullSidebar}>
      <TwItem>
        <TwWrapIcon fullSidebar={fullSidebar}>{icon}</TwWrapIcon>

        {fullSidebar && <span className='mt-0.5'>{label}</span>}
      </TwItem>

      {fullSidebar && hasChildren && (
        <TwWrapAngleIcon expanded={expanded}>
          <FontAwesomeIcon icon='angle-down' size='lg' />
        </TwWrapAngleIcon>
      )}
    </TwContainer>
  )
}
