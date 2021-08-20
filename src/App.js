import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// material ui
import {makeStyles} from '@material-ui/core';
// components
import Sidebar from './components/Sidebar';
import HomePage from './components/HomePage';
import Remarks from './components/Remarks';
import Credits from './components/Credits';
import Presentation from './components/Presentation';
import LilithDomain from './components/LilithDomain';
import ChatBox from './components/ChatBox';
import Footer from './components/Footer';
import Creators from './components/Creators';
// global context
import { GlobalContextProvider } from './services/context';

// make styles custom
const useStyle = makeStyles(theme=>({
  root:{
    width: '100%',
  }
}))


const App = () => {
  const classes = useStyle();
  return (
  <GlobalContextProvider>
  <Router>
    <Sidebar/>
      <main className={classes.root}>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/Why' component={Remarks}/>
        <Route exact path='/Credits' component={Credits}/>
        <Route exact path='/Presentation' component={Presentation}/>
        <Route exact path='/Lilith' component={LilithDomain}/>
        <Route exact path='/Creators' component={Creators}/>
      </Switch>
      <ChatBox/>
      </main>
  </Router>
  <Footer/>
</GlobalContextProvider>
  )
}

export default App;
