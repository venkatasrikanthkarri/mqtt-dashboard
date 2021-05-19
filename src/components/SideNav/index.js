import {Link} from 'react-router-dom'

import SideNavCSS from './index.module.css'

const SideNav = () => (
  <ul className={SideNavCSS.navContainer}>
    <Link className={SideNavCSS.navItem} to="/listener">
      <li>Listener</li>
    </Link>
    <Link className={SideNavCSS.navItem} to="/">
      <li>publisher</li>
    </Link>
  </ul>
)

export default SideNav
