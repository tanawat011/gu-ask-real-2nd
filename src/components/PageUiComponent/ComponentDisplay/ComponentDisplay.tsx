import tw from 'twin.macro'

import { CodeDisplay } from 'components/PageUiComponent'

const TwContainer = tw.div`rounded-lg border border-independence`
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
