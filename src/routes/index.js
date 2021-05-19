/* eslint-disable prettier/prettier */
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import Header from '../components/Header'
import Publisher from '../components/Publisher'
import Listener from '../components/Listener'
import SideNav from '../components/SideNav'
import ConnectServer from '../components/ConnectServer'
import NotFound from '../components/NotFound'

import './index.css'

const Routes = props => {
  const {text, onChangeTheme} = props
  return (
    <BrowserRouter>
      <Header
        text={text}
        onChangeTheme={onChangeTheme}
        menuComponent={ConnectServer}
      />
      <div className="route-container">
        <SideNav />
        <Switch>
          <Route exact path="/" component={Publisher} />
          <Route exact path="/listener" component={Listener} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default Routes
