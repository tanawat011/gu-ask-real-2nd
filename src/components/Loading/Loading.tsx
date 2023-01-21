import tw from 'twin.macro'

import { IconSpinner } from 'components/Icons'

const TwContainer = tw.div`absolute top-1/2 left-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 cursor-not-allowed items-center justify-center rounded-md text-gray-600 dark:text-gray-50`

export const Loading = () => {
  return (
    <TwContainer>
      <IconSpinner />
    </TwContainer>
  )
}
