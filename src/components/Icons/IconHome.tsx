import type { SizeProp } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type IconHomeProps = {
  size?: SizeProp
}

export const IconHome: React.FC<IconHomeProps> = ({ size }) => {
  return <FontAwesomeIcon icon='home' size={size} />
}
