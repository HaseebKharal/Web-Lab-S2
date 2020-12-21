import React from 'react';
import Navbar from './Component/basmati';
import react from 'react'
import {BrowserRouter,Link,Route,Router,Switch} from 'react-router-dom'
import './App.css';
import Main from './Main'
import Contact from './contact'
import About from './AboutPage'
import Abu from './abu'

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/Contact/" component={Contact}/>
        <Route exact path="/About/" component={About}/>
      </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
