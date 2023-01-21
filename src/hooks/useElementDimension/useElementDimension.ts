import type { MutableRefObject } from 'react'
import { useLayoutEffect, useRef, useState } from 'react'

export type Dimension = {
  offsetWidth: number
  clientWidth: number
  offsetHeight: number
  clientHeight: number
  offsetTop: number
}

type UseElementDimensionFn = () => [
  MutableRefObject<Dimension>,
  Dimension,
  () => Promise<void>,
]

export const defaultDimension: Dimension = {
  offsetWidth: 0,
  clientWidth: 0,
  offsetHeight: 0,
  clientHeight: 0,
  offsetTop: 0,
}

export const useElementDimension: UseElementDimensionFn = () => {
  const refVariant = useRef(defaultDimension)
  const [dimensions, setDimensions] = useState(defaultDimension)

  const handleState = () => {
    setDimensions({
      offsetWidth: refVariant.current?.offsetWidth || 0,
      clientWidth: refVariant.current?.clientWidth || 0,
      offsetHeight: refVariant.current?.offsetHeight || 0,
      clientHeight: refVariant.current?.clientHeight || 0,
      offsetTop: refVariant.current?.offsetTop || 0,
    })
  }

  useLayoutEffect(() => {
    handleState()
  }, [])

  const handleDimension = async () => {
    await new Promise((resolve) => {
      setTimeout(() => {
        handleState()
        resolve(dimensions)
      }, 1)
    })
  }

  return [refVariant, dimensions, handleDimension]
}
