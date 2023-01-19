import type { Scroll } from 'types'

import { useEffect, useState } from 'react'

import { useContentContext } from 'hooks/useContentContext'

export const useIsScrolled = () => {
  const { scroll } = useContentContext()
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = ({ top }: Scroll) => {
    setIsScrolled(top > 0)
  }

  useEffect(() => {
    handleScroll(scroll)
  }, [scroll])

  return isScrolled
}
