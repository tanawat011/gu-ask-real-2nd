import type { SizeProp } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type IconBellProps = {
  size?: SizeProp
}

export const IconBell: React.FC<IconBellProps> = ({ size }) => {
  return <FontAwesomeIcon icon='bell' size={size} />
}
