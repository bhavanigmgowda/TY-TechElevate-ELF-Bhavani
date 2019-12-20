import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import {  Switch, Route } from 'react-router-dom';
import FormAppClass from './component/FormAppClass';
import Table from './component/Table';

function App() {
  return (
    <Router>
  <div className="App">
      <Switch>
             <Route exact path='/' component={FormAppClass}></Route>
             <Route exact path='/table' component={Table}></Route>
             </Switch>
    </div>
    </Router>
  
    
  )
}

export default App;
