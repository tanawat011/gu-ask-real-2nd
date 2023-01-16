import type { SizeProp } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type IconSpinnerProps = {
  size?: SizeProp
}

export const IconSpinner: React.FC<IconSpinnerProps> = ({ size }) => {
  return <FontAwesomeIcon icon='spinner' size={size} spin />
}
