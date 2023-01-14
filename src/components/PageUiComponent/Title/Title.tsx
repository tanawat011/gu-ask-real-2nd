import tw, { styled } from 'twin.macro'

type TitleProps = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  title: string
  description?: string | React.ReactNode
}

type TwTitleSize = Pick<TitleProps, 'size'>

const TwContainer = styled.div(({ size }: TwTitleSize) => {
  switch (size) {
    case '2xl':
      return [tw`mb-12`]
    case 'xl':
      return [tw`mb-10`]
    case 'lg':
      return [tw`mb-8`]
    case 'md':
      return [tw`mb-6`]
    case 'sm':
      return [tw`mb-4`]
    case 'xs':
      return [tw`mb-3`]
  }
})

export const Title: React.FC<TitleProps> = ({ description, title, size = 'md' }) => {
  const renderTitleSize = () => {
    switch (size) {
      case '2xl':
        return <h1>{title}</h1>
      case 'xl':
        return <h2>{title}</h2>
      case 'lg':
        return <h3>{title}</h3>
      case 'md':
        return <h4>{title}</h4>
      case 'sm':
        return <h5>{title}</h5>
      case 'xs':
        return <h6>{title}</h6>
    }
  }

  return (
    <TwContainer size={size}>
      {renderTitleSize()}
      <span>{description}</span>
    </TwContainer>
  )
}
