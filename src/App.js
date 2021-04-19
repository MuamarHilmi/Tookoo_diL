import logo from './logo.svg';
import React from 'react'
import './App.css';


import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


import Navbar from './component/HomePage/Navbar';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import ForgotPw from './component/Login/ForgotPassword';

function App(props) {
  return(
    <div>
      <Router>
        <Switch>
        <Route path="/navbar" component={Navbar}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/forgot_password" component={ForgotPw}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App;

