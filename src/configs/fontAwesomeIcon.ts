import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faAngleDown,
  faBars,
  faBell,
  faCode,
  faCopy,
  faGear,
  faHouse,
  faSpinner,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

export const execFontAwesomeIcon = () => {
  library.add(faBars, faHouse, faUser, faAngleDown, faBell, faGear, faCopy, faCode, faSpinner)
}
