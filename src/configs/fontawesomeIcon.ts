import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faAngleDown,
  faBars,
  faBell,
  faGear,
  faHouse,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

export const execFontAwesomeIcon = () => {
  library.add(faBars, faHouse, faUser, faAngleDown, faBell, faGear)
}
