import type {
  UiDisplayLayoutChildProps,
  UiDisplayLayoutOutletContext,
} from 'layouts/SubLayouts'

import { useEffect } from 'react'

import { useOutletContext } from 'react-router-dom'

export const useUiDisplayLayoutContext = (props: UiDisplayLayoutChildProps) => {
  const { handleChildProps } = useOutletContext<UiDisplayLayoutOutletContext>()

  useEffect(() => {
    handleChildProps({ ...props })
  }, [])
}
