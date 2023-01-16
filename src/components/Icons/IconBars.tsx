import type { SizeProp } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type IconBarsProps = {
  size?: SizeProp
}

export const IconBars: React.FC<IconBarsProps> = ({ size }) => {
  return <FontAwesomeIcon icon='bars' size={size} />
}
