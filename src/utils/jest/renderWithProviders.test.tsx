import { renderWithProviders } from './renderWithProviders'

describe('utils/jest/renderWithProviders', () => {
  test('to be in the document', () => {
    expect.assertions(1)

    const { container } = renderWithProviders(<div>xxx</div>)

    expect(container).toBeInTheDocument()
  })
})
