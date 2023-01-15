import type { OutletContextProps, Scroll } from 'types'

import { useEffect, useState } from 'react'

import { useOutletContext } from 'react-router-dom'

export const useIsScrolled = () => {
  const { scroll } = useOutletContext<OutletContextProps>()
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = ({ top }: Scroll) => {
    setIsScrolled(top > 0)
  }

  useEffect(() => {
    handleScroll(scroll)
  }, [scroll])

  return isScrolled
}
