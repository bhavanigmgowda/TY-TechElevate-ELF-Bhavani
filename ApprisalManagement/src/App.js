import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './component/Profile/Profile';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'
import Home from './component/HomePage/Home';

function App() {
  return (
    <div className="App">
    <Router>
             <Route exact path='/profile' component={Profile}></Route>
             <Route exact path='/' component={Home}></Route>
             </Router>
    </div>
  );
}

export default App;
