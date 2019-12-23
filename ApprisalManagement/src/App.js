import React from 'react';
import logo from './logo.svg';
import Profile from './component/Profile/Profile';
import { BrowserRouter as Router, Route, withRouter, Switch } from 'react-router-dom'
import Home from './component/HomePage/Home';
import ExpandTable from './component/Peer/ExpandTable';
import Appraisal from './component/Apprisal/Apprisal';
import Refs from './Refs';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/profile' component={Profile}></Route>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/ex' component={ExpandTable}></Route>
          <Route exact path='/apprisal' component={Appraisal}></Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
