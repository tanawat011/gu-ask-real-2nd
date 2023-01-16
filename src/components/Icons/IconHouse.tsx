import type { SizeProp } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type IconHouseProps = {
  size?: SizeProp
}

export const IconHouse: React.FC<IconHouseProps> = ({ size }) => {
  return <FontAwesomeIcon icon='house' size={size} />
}
