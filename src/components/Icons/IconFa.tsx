import type { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type IconFaProps = {
  icon: IconProp
  size?: SizeProp
  className?: string
}

export const IconFa: React.FC<IconFaProps> = (props) => {
  return <FontAwesomeIcon {...props} />
}
