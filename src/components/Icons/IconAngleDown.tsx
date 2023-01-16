import type { SizeProp } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type IconAngleDownProps = {
  size?: SizeProp
}

export const IconAngleDown: React.FC<IconAngleDownProps> = ({ size }) => {
  return <FontAwesomeIcon icon='angle-down' size={size} />
}
