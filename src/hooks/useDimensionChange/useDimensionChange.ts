import type { Dimension } from 'hooks/useElementDimension'
import type { RecoilState } from 'recoil'

import { useEffect } from 'react'

import { useRecoilState } from 'recoil'

export const useDimensionChange = (
  selector: RecoilState<Dimension>,
  dimension: Dimension,
) => {
  const [, setDimension] = useRecoilState(selector)

  useEffect(() => {
    setDimension(dimension)
  }, [dimension])
}
