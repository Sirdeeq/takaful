import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom'
import General from './General';
import Table from './Table';
export default function App() {
 
   return(
      <Router>
        <Switch>
            <Redirect exact from="/" to="/app/table" />
            <Route path="/app/table" component={Table}/>
            <Route path="/app/form" component={General}/>
        </Switch>
        </Router>
    )}