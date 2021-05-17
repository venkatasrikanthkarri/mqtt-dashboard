/* eslint-disable prettier/prettier */
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import Header from '../components/Header'
import Broker from '../components/Publisher'
import Listener from '../components/Listener'
import NotFound from '../components/NotFound'

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Broker} />
      <Route exact path="/listener" component={Listener} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </BrowserRouter>
)

export default Routes
