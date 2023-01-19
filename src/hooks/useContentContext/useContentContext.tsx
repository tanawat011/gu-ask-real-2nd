import type { OutletContextProps } from 'types'

import { useOutletContext } from 'react-router-dom'

export const useContentContext = () => useOutletContext<OutletContextProps>()
