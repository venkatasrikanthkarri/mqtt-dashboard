import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import Navbar from './components/Navbar'
import Broker from './components/Broker'
import Listener from './components/Listener'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Route path="/" component={Navbar} />
    <Switch>
      <Route exact path="/publisher" component={Broker} />
      <Route exact path="/listener" component={Listener} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </BrowserRouter>
)

export default App
