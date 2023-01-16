import { render } from '@testing-library/react'

import { Loading } from './Loading'

jest.mock('./Loading', () => jest.requireActual('./Loading'))

describe('<Loading />', () => {
  test('renders correctly', () => {
    expect.assertions(1)

    const { asFragment } = render(<Loading />)

    expect(asFragment()).toMatchSnapshot()
  })
})
