/* eslint-disable prettier/prettier */
import {Component} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'

import HamburgerMenuCSS from './index.module.css'

class HamburgerMenu extends Component {
  state = {isHamburberMenuOpened: false}

  onClickHamburgerMenu = () => {
    this.setState(prevState => ({
      isHamburberMenuOpened: !prevState.isHamburberMenuOpened,
    }))
  }

  //   onClickHamburgerMenu = () => {
  //   this.setState(prevState => ({
  //     isHamburberMenuOpened: !prevState.isHamburberMenuOpened,
  //   }))
  // }

  renderIcon = () => {
    const {isHamburberMenuOpened} = this.state
    return isHamburberMenuOpened ? (
      <AiOutlineClose
        className={HamburgerMenuCSS.hamburgerMenuIcon}
        onClick={this.onClickHamburgerMenu}
      />
    ) : (
      <GiHamburgerMenu
        className={HamburgerMenuCSS.hamburgerMenuIcon}
        onClick={this.onClickHamburgerMenu}
      />
    )
  }

  renderMenu = () => {
    const {menuComponent: MenuComponent} = this.props
    const {isHamburberMenuOpened} = this.state
    return isHamburberMenuOpened ? (
      <MenuComponent isHamburberMenuOpened={isHamburberMenuOpened} />
    ) : null
  }

  render() {
    return (
      <div className={HamburgerMenuCSS.hamburgerMenuContainer}>
        {this.renderMenu()}
        {this.renderIcon()}
      </div>
    )
  }
}

export default HamburgerMenu

// <ul className={HamburgerMenuCSS.navContainer}>
//   <Link className={HamburgerMenuCSS.navItem} to="/listener">
//     <li>Listener</li>
//   </Link>
//   <Link className={HamburgerMenuCSS.navItem} to="/">
//     <li>publisher</li>
//   </Link>
// </ul>
