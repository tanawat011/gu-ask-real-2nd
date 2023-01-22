import type { Dimension } from 'hooks/useElementDimension'
import type { RecoilState } from 'recoil'

import { useEffect } from 'react'

import { renderHook } from '@testing-library/react'
import { RecoilRoot, useRecoilState } from 'recoil'

import {
  blockSelector,
  colorSelector,
  disabledSelector,
  headSelector,
  iconSelector,
  loadingSelector,
  pageDimensionSelector,
  shapeSelector,
  sizeSelector,
  variantSelector,
  withIconSelector,
} from './buttonUi'

const hookSelector = (selector: RecoilState<Dimension>) => {
  const [state, setState] = useRecoilState(selector)

  useEffect(() => {
    setState({ ...state, offsetTop: 10 })
  }, [])

  return state
}

describe('recoils/atoms/pageUiComponents/buttonUi', () => {
  test('pageDimensionSelector', () => {
    expect.assertions(1)

    const { result } = renderHook(() => hookSelector(pageDimensionSelector), {
      wrapper: RecoilRoot,
    })

    expect(result.current.offsetTop).toEqual(10)
  })

  test('headSelector', () => {
    expect.assertions(1)

    const { result } = renderHook(() => hookSelector(headSelector), {
      wrapper: RecoilRoot,
    })

    expect(result.current.offsetTop).toEqual(10)
  })

  test('variantSelector', () => {
    expect.assertions(1)

    const { result } = renderHook(() => hookSelector(variantSelector), {
      wrapper: RecoilRoot,
    })

    expect(result.current.offsetTop).toEqual(10)
  })

  test('colorSelector', () => {
    expect.assertions(1)

    const { result } = renderHook(() => hookSelector(colorSelector), {
      wrapper: RecoilRoot,
    })

    expect(result.current.offsetTop).toEqual(10)
  })

  test('sizeSelector', () => {
    expect.assertions(1)

    const { result } = renderHook(() => hookSelector(sizeSelector), {
      wrapper: RecoilRoot,
    })

    expect(result.current.offsetTop).toEqual(10)
  })

  test('shapeSelector', () => {
    expect.assertions(1)

    const { result } = renderHook(() => hookSelector(shapeSelector), {
      wrapper: RecoilRoot,
    })

    expect(result.current.offsetTop).toEqual(10)
  })

  test('disabledSelector', () => {
    expect.assertions(1)

    const { result } = renderHook(() => hookSelector(disabledSelector), {
      wrapper: RecoilRoot,
    })

    expect(result.current.offsetTop).toEqual(10)
  })

  test('iconSelector', () => {
    expect.assertions(1)

    const { result } = renderHook(() => hookSelector(iconSelector), {
      wrapper: RecoilRoot,
    })

    expect(result.current.offsetTop).toEqual(10)
  })

  test('withIconSelector', () => {
    expect.assertions(1)

    const { result } = renderHook(() => hookSelector(withIconSelector), {
      wrapper: RecoilRoot,
    })

    expect(result.current.offsetTop).toEqual(10)
  })

  test('loadingSelector', () => {
    expect.assertions(1)

    const { result } = renderHook(() => hookSelector(loadingSelector), {
      wrapper: RecoilRoot,
    })

    expect(result.current.offsetTop).toEqual(10)
  })

  test('blockSelector', () => {
    expect.assertions(1)

    const { result } = renderHook(() => hookSelector(blockSelector), {
      wrapper: RecoilRoot,
    })

    expect(result.current.offsetTop).toEqual(10)
  })
})
