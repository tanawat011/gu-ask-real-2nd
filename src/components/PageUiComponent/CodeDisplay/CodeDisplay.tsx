import { useState } from 'react'

import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark as theme } from 'react-syntax-highlighter/dist/esm/styles/prism'
import tw, { styled } from 'twin.macro'

import { Button } from 'components/Button'
import { IconCode, IconCopy } from 'components/Icons'
import { BG_THEME, BORDER_THEME } from 'constants/twTheme'

type CodeDisplayProps = {
  code: string
  callback?: () => void
}

const TwContainer = styled.div(() => [
  [BG_THEME.CARD_LV2, BORDER_THEME.BASE],
  tw`rounded-b-lg border-t px-5 py-2`,
])
const TwWrapButton = tw.div`flex justify-end`
const TwWrapButton2 = tw.div`grid grid-flow-col gap-1`

export const CodeDisplay: React.FC<CodeDisplayProps> = ({ code, callback }) => {
  const [isShowCode, setIsShowCode] = useState(false)

  const handleShowCode = () => {
    callback && callback()
    setIsShowCode(!isShowCode)
  }

  return (
    <TwContainer>
      <TwWrapButton>
        <TwWrapButton2>
          <Button variant='plain' size='xs' icon={<IconCopy />} />

          <Button
            variant='plain'
            size='xs'
            icon={<IconCode />}
            onClick={handleShowCode}
          />
        </TwWrapButton2>
      </TwWrapButton>

      {isShowCode && (
        <SyntaxHighlighter language='tsx' style={theme}>
          {code}
        </SyntaxHighlighter>
      )}
    </TwContainer>
  )
}
