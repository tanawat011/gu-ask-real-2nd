import type { SizeProp } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type IconGearProps = {
  size?: SizeProp
}

export const IconGear: React.FC<IconGearProps> = ({ size }) => {
  return <FontAwesomeIcon icon='gear' size={size} />
}
