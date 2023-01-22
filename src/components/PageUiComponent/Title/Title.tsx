import tw, { styled } from 'twin.macro'

import { TEXT_THEME } from 'constants/twTheme'

type TitleProps = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  title: string
  description?: string | React.ReactNode
}

type TwTitleSize = Pick<TitleProps, 'size'>

const TwContainer = styled.div(({ size }: TwTitleSize) => {
  switch (size) {
    case '2xl':
      return tw`mb-12`
    case 'xl':
      return tw`mb-10`
    case 'lg':
      return tw`mb-8`
    case 'md':
      return tw`mb-6`
    case 'sm':
      return tw`mb-4`
    case 'xs':
      return tw`mb-3`
  }
})

const TwH = TEXT_THEME.HEAD
const TwH1 = styled.h1(TwH)
const TwH2 = styled.h2(TwH)
const TwH3 = styled.h3(TwH)
const TwH4 = styled.h4(TwH)
const TwH5 = styled.h5(TwH)
const TwH6 = styled.h6(TwH)

export const Title: React.FC<TitleProps> = ({
  description,
  title,
  size = 'md',
}) => {
  const renderTitleSize = () => {
    switch (size) {
      case '2xl':
        return <TwH1>{title}</TwH1>
      case 'xl':
        return <TwH2>{title}</TwH2>
      case 'lg':
        return <TwH3>{title}</TwH3>
      case 'md':
        return <TwH4>{title}</TwH4>
      case 'sm':
        return <TwH5>{title}</TwH5>
      case 'xs':
        return <TwH6>{title}</TwH6>
    }
  }

  return (
    <TwContainer data-testid='container' size={size}>
      {renderTitleSize()}
      <span>{description}</span>
    </TwContainer>
  )
}
