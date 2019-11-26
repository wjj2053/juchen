import React from 'react';
import TabBarCom from './common/tabBar/index'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
//  BrowserRouter
import {
  Eticket,
  Home,
  Theater,
  Mine
} from '@views'
class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Redirect from="/" to="/home" exact></Redirect>
          <Route path="/home" component={Home}></Route>
          <Route path="/theater" component={Theater}></Route>
          <Route path="/eticket" component={Eticket}></Route>
          <Route path="/mine" component={Mine}></Route>
        </Switch>
        <TabBarCom></TabBarCom>
      </Router>
    )
  }
}


export default App;
