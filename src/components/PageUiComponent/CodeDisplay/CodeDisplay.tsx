import { useState } from 'react'

import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark as theme } from 'react-syntax-highlighter/dist/esm/styles/prism'
import tw from 'twin.macro'

import { Button } from 'components/Button'
import { IconCode, IconCopy } from 'components/Icons'

type CodeDisplayProps = {
  code: string
}

const TwContainer = tw.div`rounded-b-lg border-independence border-t bg-charcoal px-5 py-2`
const TwWrapButton = tw.div`flex justify-end`
const TwWrapButton2 = tw.div`grid grid-flow-col gap-1`

export const CodeDisplay: React.FC<CodeDisplayProps> = ({ code }) => {
  const [isShowCode, setIsShowCode] = useState(false)

  const handleShowCode = () => {
    setIsShowCode(!isShowCode)
  }

  return (
    <TwContainer>
      <TwWrapButton>
        <TwWrapButton2>
          <Button variant='plain' size='xs' icon={<IconCopy />} />

          <Button variant='plain' size='xs' icon={<IconCode />} onClick={handleShowCode} />
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
