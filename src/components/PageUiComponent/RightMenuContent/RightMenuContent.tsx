import { Title } from '../Title'

type RightMenuContentProps = {
  title: string
  menuList: string[]
}

export const RightMenuContent: React.FC<RightMenuContentProps> = ({ title, menuList }) => {
  return (
    <>
      <Title size='xs' title={title} />

      <ul className='grid gap-2'>
        {menuList.map((item, index) => (
          <li key={`${index}`}>
            <a href='#'>{item}</a>
          </li>
        ))}
      </ul>
    </>
  )
}
