import { useEffect } from 'react'

import { useRecoilState } from 'recoil'

import { sidebarAtom } from 'recoils/atoms'
import { renderWithProviders } from 'utils/jest'

import { Navbar } from './Navbar'

jest.mock('./Navbar', () => jest.requireActual('./Navbar'))

const RecoilComponent = ({
  fullSidebar = false,
}: {
  fullSidebar?: boolean
}) => {
  const [, setSidebar] = useRecoilState(sidebarAtom)

  useEffect(() => {
    setSidebar({ fullSidebar })
  }, [])

  return null
}

describe('<Navbar />', () => {
  test('should render without crashing and match snapshot', () => {
    expect.hasAssertions()

    const { asFragment } = renderWithProviders(
      <>
        <RecoilComponent fullSidebar />
        <Navbar handleToggleSidebar={jest.fn()} />
      </>,
    )

    expect(asFragment()).toMatchSnapshot()
  })

  test('should render without crashing with mini sidebar', () => {
    expect.hasAssertions()

    const { container } = renderWithProviders(
      <>
        <RecoilComponent />
        <Navbar handleToggleSidebar={jest.fn()} />
      </>,
    )

    expect(container).toBeInTheDocument()
  })
})
