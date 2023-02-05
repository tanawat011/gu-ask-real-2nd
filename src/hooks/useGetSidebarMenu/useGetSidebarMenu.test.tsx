import { render } from '@testing-library/react'

import { useGetSidebarMenu } from './useGetSidebarMenu'

jest.mock('utils/route', () => ({
  menuGenerator: () => [
    {
      to: '/todo',
      label: 'Todo',
    },
  ],
}))

const ExampleComponent = () => {
  const [menuList] = useGetSidebarMenu()

  return <div>{menuList[0].title}</div>
}

describe('useGetSidebarMenu', () => {
  test('should return all menu list', () => {
    expect.hasAssertions()

    const { asFragment } = render(<ExampleComponent />)

    expect(asFragment()).toMatchSnapshot()
  })
})
