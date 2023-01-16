import type { SizeProp } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type IconCopyProps = {
  size?: SizeProp
}

export const IconCopy: React.FC<IconCopyProps> = ({ size }) => {
  return <FontAwesomeIcon icon='copy' size={size} />
}
