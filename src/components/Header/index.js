import HamburgerMenu from '../HamburgerMenu'
import HeaderCSS from './index.module.css'

const Header = props => {
  const changeTheme = () => {
    const {onChangeTheme} = props
    onChangeTheme()
  }

  const {text, menuComponent: MenuComponent} = props
  return (
    <div className={HeaderCSS.headerContainer}>
      <h1 className={HeaderCSS.logo}>MQTT Dashboard</h1>
      <button type="button" onClick={changeTheme}>
        {text}
      </button>

      <HamburgerMenu menuComponent={MenuComponent} />
    </div>
  )
}

export default Header
