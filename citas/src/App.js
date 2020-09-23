import React from 'react';
import { HashRouter, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Citas from './components/Citas'


const App = () => (
  <HashRouter>
    <Route exact path="/" component={Login} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path='/citas' component={Citas} />

  </HashRouter>
)

export default App;
