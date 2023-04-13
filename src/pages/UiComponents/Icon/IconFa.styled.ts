import tw, { styled } from 'twin.macro'

import { BORDER_THEME } from 'constants/twTheme'

export const WrapContainer = styled.div(() => [tw`h-full`])
export const Container = styled.div(() => [
  tw`flex flex-wrap items-start justify-start gap-4 p-6`,
])
export const TwWrapIcon = styled.div(() => [
  BORDER_THEME.BASE,
  tw`flex h-24 w-24 flex-col items-center justify-center rounded-lg border`,
])
