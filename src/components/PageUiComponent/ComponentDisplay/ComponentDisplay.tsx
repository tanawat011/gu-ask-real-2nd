import tw, { styled } from 'twin.macro'

import { CodeDisplay } from 'components/PageUiComponent'
import { BORDER_THEME } from 'constants/twTheme'

const TwContainer = styled.div(() => [BORDER_THEME.BASE, tw`rounded-lg border`])
const TwWrapComponent = tw.div`grid gap-2 p-5`

type ComponentDisplayProps = {
  code: string
  components: React.ReactNode
}

export const ComponentDisplay: React.FC<ComponentDisplayProps> = ({
  code,
  components,
}) => {
  return (
    <TwContainer>
      <TwWrapComponent>{components}</TwWrapComponent>

      <CodeDisplay code={code} />
    </TwContainer>
  )
}
