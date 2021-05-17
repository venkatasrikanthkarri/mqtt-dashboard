import {Link} from 'react-router-dom'

import HamburgerMenu from '../HamburgerMenu'
import HeaderCSS from './index.module.css'

const Header = () => (
  <div className={HeaderCSS.headerContainer}>
    <h1 className={HeaderCSS.logo}>MQTT Dashboard</h1>
    <ul className={HeaderCSS.navContainer}>
      <Link className={HeaderCSS.navItem} to="/listener">
        <li>Listener</li>
      </Link>
      <Link className={HeaderCSS.navItem} to="/">
        <li>publisher</li>
      </Link>
    </ul>
    <HamburgerMenu />
  </div>
)

export default Header
