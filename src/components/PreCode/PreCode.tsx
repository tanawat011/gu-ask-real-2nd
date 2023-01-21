import tw, { styled } from 'twin.macro'

import { BG_THEME } from 'constants/twTheme'

type PreCodeProps = {
  text: string
}

const TwCode = styled.code(() => [
  [BG_THEME.PRE_CODE],
  tw`rounded px-1.5 py-0.5`,
])

export const PreCode: React.FC<PreCodeProps> = ({ text }) => {
  return <TwCode>{text}</TwCode>
}
