import tw, { styled } from 'twin.macro'

import { CodeDisplay } from 'components/PageUiComponent'
import { BORDER_THEME } from 'constants/twTheme'

const TwContainer = styled.div(() => [BORDER_THEME.BASE, tw`rounded-lg border`])
const TwWrapComponent = tw.div`grid gap-2 p-5`

type ComponentDisplayProps = {
  code: string
  components: React.ReactNode
  callback?: () => void
}

export const ComponentDisplay: React.FC<ComponentDisplayProps> = ({
  code,
  components,
  callback,
}) => {
  return (
    <TwContainer>
      <TwWrapComponent>{components}</TwWrapComponent>

      <CodeDisplay code={code} callback={callback} />
    </TwContainer>
  )
}
