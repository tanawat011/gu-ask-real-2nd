import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import tw from 'twin.macro'

export type SidebarItemProps = {
  icon?: JSX.Element
  label: string
}

const TwContainer = tw.div`mb-2 flex h-10 cursor-pointer items-center justify-between rounded-lg px-3 hover:(text-white bg-[hsla(0,0%,100%,.1)])`
const TwItem = tw.div`flex items-center`
const TwWrapIcon = tw.div`mr-2 flex h-6 w-6 items-center justify-center`

export const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label }) => {
  return (
    <TwContainer key={`sidebar-menu-item-${label.replaceAll(' ', '-')}`}>
      <TwItem>
        <TwWrapIcon>{icon}</TwWrapIcon>
        <span className='mt-0.5'>{label}</span>
      </TwItem>

      <FontAwesomeIcon icon='angle-down' size='lg' />
    </TwContainer>
  )
}
