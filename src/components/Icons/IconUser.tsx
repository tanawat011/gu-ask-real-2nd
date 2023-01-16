import type { SizeProp } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type IconUserProps = {
  size?: SizeProp
}

export const IconUser: React.FC<IconUserProps> = ({ size }) => {
  return <FontAwesomeIcon icon='user' size={size} />
}
