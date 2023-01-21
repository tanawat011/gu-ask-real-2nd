import type { Dimension } from 'hooks/useElementDimension'

import { atom, selector } from 'recoil'

import { defaultDimension } from 'hooks/useElementDimension'

export type AllDimension = {
  head: Dimension
  variant: Dimension
  color: Dimension
  size: Dimension
  outline: Dimension
  shape: Dimension
  disabled: Dimension
  icon: Dimension
  withIcon: Dimension
  loading: Dimension
  block: Dimension
}

export type ButtonUiState = {
  pageDimension: Dimension
  dimension: AllDimension
}

export const defaultButtonUi = {
  pageDimension: { ...defaultDimension },
  dimension: {
    head: { ...defaultDimension },
    variant: { ...defaultDimension },
    color: { ...defaultDimension },
    size: { ...defaultDimension },
    outline: { ...defaultDimension },
    shape: { ...defaultDimension },
    disabled: { ...defaultDimension },
    icon: { ...defaultDimension },
    withIcon: { ...defaultDimension },
    loading: { ...defaultDimension },
    block: { ...defaultDimension },
  },
}

export const buttonUiAtom = atom<ButtonUiState>({
  key: 'pageUiComponentButtonUiAtom',
  default: defaultButtonUi,
})

export const pageDimensionSelector = selector({
  key: 'pageUiComponentButtonUiPageDimensionSelector',
  get: ({ get }) => {
    const { pageDimension } = get(buttonUiAtom)

    return pageDimension
  },
  set: ({ get, set }, newValue) => {
    const { dimension } = get(buttonUiAtom)

    set(buttonUiAtom, { pageDimension: newValue as Dimension, dimension: { ...dimension } })
  },
})

export const headSelector = selector({
  key: 'pageUiComponentButtonUiHeadSelector',
  get: ({ get }) => {
    const { dimension } = get(buttonUiAtom)

    return dimension.head
  },
  set: ({ get, set }, newValue) => {
    const { dimension, pageDimension } = get(buttonUiAtom)

    set(buttonUiAtom, { pageDimension, dimension: { ...dimension, head: newValue as Dimension } })
  },
})

export const variantSelector = selector({
  key: 'pageUiComponentButtonUiVariantSelector',
  get: ({ get }) => {
    const { dimension } = get(buttonUiAtom)

    return dimension.variant
  },
  set: ({ get, set }, newValue) => {
    const { dimension, pageDimension } = get(buttonUiAtom)

    set(buttonUiAtom, {
      pageDimension,
      dimension: { ...dimension, variant: newValue as Dimension },
    })
  },
})

export const colorSelector = selector({
  key: 'pageUiComponentButtonUiColorSelector',
  get: ({ get }) => {
    const { dimension } = get(buttonUiAtom)

    return dimension.color
  },
  set: ({ get, set }, newValue) => {
    const { dimension, pageDimension } = get(buttonUiAtom)

    set(buttonUiAtom, { pageDimension, dimension: { ...dimension, color: newValue as Dimension } })
  },
})

export const sizeSelector = selector({
  key: 'pageUiComponentButtonUiSizeSelector',
  get: ({ get }) => {
    const { dimension } = get(buttonUiAtom)

    return dimension.size
  },
  set: ({ get, set }, newValue) => {
    const { dimension, pageDimension } = get(buttonUiAtom)

    set(buttonUiAtom, { pageDimension, dimension: { ...dimension, size: newValue as Dimension } })
  },
})

export const outlineSelector = selector({
  key: 'pageUiComponentButtonUiOutlineSelector',
  get: ({ get }) => {
    const { dimension } = get(buttonUiAtom)

    return dimension.outline
  },
  set: ({ get, set }, newValue) => {
    const { dimension, pageDimension } = get(buttonUiAtom)

    set(buttonUiAtom, {
      pageDimension,
      dimension: { ...dimension, outline: newValue as Dimension },
    })
  },
})

export const shapeSelector = selector({
  key: 'pageUiComponentButtonUiShapeSelector',
  get: ({ get }) => {
    const { dimension } = get(buttonUiAtom)

    return dimension.shape
  },
  set: ({ get, set }, newValue) => {
    const { dimension, pageDimension } = get(buttonUiAtom)

    set(buttonUiAtom, { pageDimension, dimension: { ...dimension, shape: newValue as Dimension } })
  },
})

export const disabledSelector = selector({
  key: 'pageUiComponentButtonUiDisabledSelector',
  get: ({ get }) => {
    const { dimension } = get(buttonUiAtom)

    return dimension.disabled
  },
  set: ({ get, set }, newValue) => {
    const { dimension, pageDimension } = get(buttonUiAtom)

    set(buttonUiAtom, {
      pageDimension,
      dimension: { ...dimension, disabled: newValue as Dimension },
    })
  },
})

export const iconSelector = selector({
  key: 'pageUiComponentButtonUiIconSelector',
  get: ({ get }) => {
    const { dimension } = get(buttonUiAtom)

    return dimension.icon
  },
  set: ({ get, set }, newValue) => {
    const { dimension, pageDimension } = get(buttonUiAtom)

    set(buttonUiAtom, { pageDimension, dimension: { ...dimension, icon: newValue as Dimension } })
  },
})

export const withIconSelector = selector({
  key: 'pageUiComponentButtonUiWithIconSelector',
  get: ({ get }) => {
    const { dimension } = get(buttonUiAtom)

    return dimension.withIcon
  },
  set: ({ get, set }, newValue) => {
    const { dimension, pageDimension } = get(buttonUiAtom)

    set(buttonUiAtom, {
      pageDimension,
      dimension: { ...dimension, withIcon: newValue as Dimension },
    })
  },
})

export const loadingSelector = selector({
  key: 'pageUiComponentButtonUiLoadingSelector',
  get: ({ get }) => {
    const { dimension } = get(buttonUiAtom)

    return dimension.loading
  },
  set: ({ get, set }, newValue) => {
    const { dimension, pageDimension } = get(buttonUiAtom)

    set(buttonUiAtom, {
      pageDimension,
      dimension: { ...dimension, loading: newValue as Dimension },
    })
  },
})

export const blockSelector = selector({
  key: 'pageUiComponentButtonUiBlockSelector',
  get: ({ get }) => {
    const { dimension } = get(buttonUiAtom)

    return dimension.block
  },
  set: ({ get, set }, newValue) => {
    const { dimension, pageDimension } = get(buttonUiAtom)

    set(buttonUiAtom, { pageDimension, dimension: { ...dimension, block: newValue as Dimension } })
  },
})
