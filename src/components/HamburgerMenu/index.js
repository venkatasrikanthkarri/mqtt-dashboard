/* eslint-disable prettier/prettier */
import {Link} from 'react-router-dom'

import HamburgerMenuCSS from './index.module.css'

const HamburgerMenu = () => (
  <ul className={HamburgerMenuCSS.navContainer}>
    <Link className={HamburgerMenuCSS.navItem} to="/listener">
      <li>Listener</li>
    </Link>
    <Link className={HamburgerMenuCSS.navItem} to="/">
      <li>publisher</li>
    </Link>
  </ul>
)

export default HamburgerMenu
