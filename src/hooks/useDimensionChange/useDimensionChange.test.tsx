import type { LegacyRef } from 'react'

import { fireEvent, renderHook, screen } from '@testing-library/react'

import { useElementDimension } from 'hooks/useElementDimension'
import { headSelector } from 'recoils/atoms'
import { renderWithProviders } from 'utils/jest'

import { useDimensionChange } from './useDimensionChange'

jest.mock('./useDimensionChange', () =>
  jest.requireActual('./useDimensionChange'),
)

const Component = () => {
  const [ref, dimension, handleDimension] = useElementDimension()

  useDimensionChange(headSelector, dimension)

  return (
    <div
      data-testid='test'
      ref={ref as LegacyRef<HTMLDivElement>}
      onClick={() => {
        handleDimension()
      }}
    />
  )
}

describe('useDimensionChange', () => {
  test('should return correctly result', async () => {
    expect.hasAssertions()

    const { container } = renderWithProviders(<Component />)

    const btn = screen.getByTestId('test')
    fireEvent.click(btn)

    expect(container).toBeInTheDocument()
  })
})
