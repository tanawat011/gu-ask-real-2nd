import { renderHook } from '@testing-library/react'
import { mocked } from 'jest-mock'
import { useOutletContext } from 'react-router-dom'

import { useUiDisplayLayoutContext } from './useUiDisplayLayoutContext'

jest.mock('./useUiDisplayLayoutContext', () =>
  jest.requireActual('./useUiDisplayLayoutContext'),
)
jest.mock('react-router-dom')

describe('useUiDisplayLayoutContext', () => {
  test('should return correctly result', () => {
    expect.hasAssertions()

    mocked(useOutletContext).mockReturnValue({ handleChildProps: () => void 0 })

    const { result } = renderHook(() =>
      useUiDisplayLayoutContext({
        title: '',
        description: '',
        containerId: '',
        apiId: '',
        apiName: '',
        apiData: [],
        menuItems: {},
      }),
    )

    expect(result.current).toEqual(void 0)
  })
})
