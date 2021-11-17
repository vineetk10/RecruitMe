import React from 'react'
import Header from './Components/Header'
import {BrowserRouter as Router,Switch, Route, Link} from "react-router-dom"
import './App.css';
import TinderCards from "./Components/TinderCards"

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Switch>
          <Route path="/chat">
          </Route>
          <Route path="/">
            <TinderCards/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;