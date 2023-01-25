import { render } from '@testing-library/react'

import { useSidebarMenuList } from './useSidebarMenuList'

jest.mock('utils/route', () => ({
  menuGenerator: () => [
    {
      to: '/todo',
      label: 'Todo',
    },
  ],
}))

const ExampleComponent = () => {
  const [menuList] = useSidebarMenuList()

  return <div>{menuList[0].title}</div>
}

describe('useSidebarMenuList', () => {
  test('should return all menu list', () => {
    expect.hasAssertions()

    const { asFragment } = render(<ExampleComponent />)

    expect(asFragment()).toMatchSnapshot()
  })
})
