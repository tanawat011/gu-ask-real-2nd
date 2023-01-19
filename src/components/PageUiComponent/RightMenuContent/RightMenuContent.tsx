import { Title } from 'components/PageUiComponent'
import { betweenRange } from 'utils/number'

type RightMenuContentProps = {
  title: string
  currentScrollPosition: number
  menuList: {
    id: string
    title: string
    scroll: {
      min?: number
      max?: number
    }
  }[]
}

export const RightMenuContent: React.FC<RightMenuContentProps> = ({
  title,
  currentScrollPosition,
  menuList,
}) => {
  return (
    <>
      <Title size='xs' title={title} />

      <ul className='grid gap-2'>
        {menuList.map((item, index) => {
          return (
            <li
              key={`${index}`}
              className={
                betweenRange(currentScrollPosition, item.scroll?.min || 0, item.scroll?.max || 9999)
                  ? 'text-ghost-white'
                  : ''
              }
            >
              <a href={`#${item.id}`}>{item.title}</a>
            </li>
          )
        })}
      </ul>
    </>
  )
}
