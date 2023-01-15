import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import tw from 'twin.macro'

const TwContainer = tw.div`absolute top-1/2 left-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 cursor-not-allowed items-center justify-center rounded-md text-anti-flash-white`

export const Loading = () => {
  return (
    <TwContainer>
      <FontAwesomeIcon icon='spinner' spin />
    </TwContainer>
  )
}
