import type { SizeProp } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type IconCodeProps = {
  size?: SizeProp
}

export const IconCode: React.FC<IconCodeProps> = ({ size }) => {
  return <FontAwesomeIcon icon='code' size={size} />
}
