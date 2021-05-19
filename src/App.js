import {Component} from 'react'
import Routes from './routes'

import './App.css'

const defaultProps = {
  darkTheme: {
    text: 'dark',
    styles: 'dark-theme',
  },
  lightTheme: {
    text: 'light',
    styles: 'light-theme',
  },
}

class App extends Component {
  state = {darkTheme: false}

  onChangeTheme = () => {
    this.setState(prevState => ({darkTheme: !prevState.darkTheme}))
  }

  render() {
    const {darkTheme} = this.state
    const theme = darkTheme ? defaultProps.darkTheme : defaultProps.lightTheme
    const {text, styles} = theme
    return (
      <div className={styles}>
        <div className="app-container">
          <Routes text={text} onChangeTheme={this.onChangeTheme} />
        </div>
      </div>
    )
  }
}

export default App
