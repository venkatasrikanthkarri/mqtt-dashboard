/* eslint-disable prettier/prettier */
import {Component} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'

import HamburgerMenuCSS from './index.module.css'

class HamburgerMenu extends Component {
  state = {isHamburberMenuOpened: false}

  onClickHamburgerMenu = () => {
    this.setState(prevState => ({
      isHamburberMenuOpened: !prevState.isHamburberMenuOpened,
    }))
  }

  renderMenu = () => {
    const {menuComponent: MenuComponent} = this.props
    const {isHamburberMenuOpened} = this.state
    return isHamburberMenuOpened ? (
      <MenuComponent
        isHamburberMenuOpened={isHamburberMenuOpened}
        onClickHamburgerMenu={this.onClickHamburgerMenu}
      />
    ) : null
  }

  render() {
    const {menuComponent: MenuComponent} = this.props
    const {isHamburberMenuOpened} = this.state

    return (
      <div className={HamburgerMenuCSS.hamburgerMenuContainer}>
        <GiHamburgerMenu
          className={HamburgerMenuCSS.hamburgerMenuIcon}
          onClick={this.onClickHamburgerMenu}
        />
        <MenuComponent
          isHamburberMenuOpened={isHamburberMenuOpened}
          onClickHamburgerMenu={this.onClickHamburgerMenu}
        />
      </div>
    )
  }
}

export default HamburgerMenu
