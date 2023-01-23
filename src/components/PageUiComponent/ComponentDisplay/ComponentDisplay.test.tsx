import { renderWithProviders, twColor } from 'utils/jest'

import { ComponentDisplay } from './ComponentDisplay'

jest.mock('./ComponentDisplay', () => jest.requireActual('./ComponentDisplay'))

describe('<ComponentDisplay />', () => {
  test('renders correctly', () => {
    expect.assertions(7)

    const {
      asFragment,
      container: { firstChild },
    } = renderWithProviders(
      <ComponentDisplay code='code' components={<div>xxx</div>} />,
    )

    expect(firstChild).toHaveStyleRule('border-width', '1px')
    expect(firstChild).toHaveStyleRule('border-radius', '0.5rem')
    expect(firstChild).toHaveStyleRule(
      'border-color',
      twColor('#e5e7eb', 'border'),
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
