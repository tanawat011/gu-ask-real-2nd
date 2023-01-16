import { render } from '@testing-library/react'

import { TableCommon } from './TableCommon'

jest.mock('./TableCommon', () => jest.requireActual('./TableCommon'))

describe('<TableCommon />', () => {
  test('renders correctly', () => {
    expect.assertions(1)

    const { asFragment } = render(
      <TableCommon
        columns={[
          { key: 'name', label: 'Name' },
          { key: 'age', label: 'Age' },
        ]}
        data={[
          { name: 'John', age: 20 },
          { name: 'Jane', age: 21 },
        ]}
      />,
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
