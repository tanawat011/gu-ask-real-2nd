import tw, { styled } from 'twin.macro'

import { Title } from 'components/PageUiComponent'
import { TEXT_THEME } from 'constants/twTheme'
import { betweenRange } from 'utils/number'

type RightMenuContentProps = {
  title: string
  currentScrollPosition: number
  pageHeight: number
  menuList: {
    title: string
    scroll: number
  }[]
}

const TwUl = styled.ul(() => [TEXT_THEME.DETAIL, tw`grid gap-2`])

export const RightMenuContent: React.FC<RightMenuContentProps> = ({
  title,
  currentScrollPosition,
  pageHeight,
  menuList,
}) => {
  return (
    <>
      <Title size='xs' title={title} />

      <TwUl>
        {menuList.map((item, index) => {
          const { scroll, title: text } = item

          const nScroll = menuList[index + 1]?.scroll || pageHeight
          const id = text.replaceAll(' ', '-').toLowerCase()
          const isActive = betweenRange(currentScrollPosition, scroll, nScroll)
          const className = isActive
            ? 'text-gray-900 font-semibold dark:text-gray-50'
            : ''

          return (
            <li key={`${index}`} className={className}>
              <a href={`#${id}`}>{text}</a>
            </li>
          )
        })}
      </TwUl>
    </>
  )
}
