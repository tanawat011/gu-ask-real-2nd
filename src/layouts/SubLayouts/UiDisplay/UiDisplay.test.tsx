import { fireEvent, screen } from '@testing-library/react'
import { Route, Routes, useOutletContext } from 'react-router-dom'

import { renderWithProviders } from 'utils/jest'

import { UiDisplayLayout } from './UiDisplay'

describe('<UiDisplayLayout />', () => {
  test('should render', () => {
    expect.assertions(1)

    const { container } = renderWithProviders(<UiDisplayLayout />)

    expect(container).toBeInTheDocument()
  })

  test('match snapshot', () => {
    expect.assertions(1)

    window.location.assign('http://localhost:3000/ui-component')
    const { asFragment } = renderWithProviders(<UiDisplayLayout />, {
      router: { route: '/ui-component' },
    })

    expect(asFragment()).toMatchSnapshot()
  })

  test('should can handle scroll event and handle child prop successful', () => {
    expect.assertions(1)

    const FakeComponent = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { handleChildProps } = useOutletContext<any>()

      return (
        <div
          onClick={() =>
            handleChildProps({
              title: '',
              description: '',
              containerId: '',
              apiId: '',
              apiName: '',
              apiData: [],
              menuItems: {
                basic: { id: 'basic', name: 'basic' },
              },
            })
          }
          data-testid='fake-component'
        >
          Fake Component
        </div>
      )
    }

    window.location.assign('http://localhost:3000/ui-component/test')
    const { asFragment } = renderWithProviders(
      <Routes>
        <Route path='/ui-component' element={<UiDisplayLayout />}>
          <Route path='test' element={<FakeComponent />} />
        </Route>
      </Routes>,
      {
        router: { route: '/ui-component/test' },
      },
    )

    const container = screen.getByTestId(/ui-display-container-layout/i)
    const fakeComponent = screen.getByTestId(/fake-component/i)

    fireEvent.scroll(container, { target: { scrollY: 100 } })
    fireEvent.click(fakeComponent)

    expect(asFragment()).toMatchSnapshot()
  })
})
