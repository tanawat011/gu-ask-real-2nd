import { Title } from 'components/PageUiComponent'
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

export const RightMenuContent: React.FC<RightMenuContentProps> = ({
  title,
  currentScrollPosition,
  pageHeight,
  menuList,
}) => {
  return (
    <>
      <Title size='xs' title={title} />

      <ul className='grid gap-2'>
        {menuList.map((item, index) => {
          const { scroll, title: text } = item

          const nScroll = menuList[index + 1]?.scroll || pageHeight
          const id = text.replaceAll(' ', '-').toLowerCase()
          const isActive = betweenRange(currentScrollPosition, scroll, nScroll)
          const className = isActive ? 'text-ghost-white' : ''

          return (
            <li key={`${index}`} className={className}>
              <a href={`#${id}`}>{text}</a>
            </li>
          )
        })}
      </ul>
    </>
  )
}
