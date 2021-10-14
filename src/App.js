import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Game from './components/Game'
import Start from './components/Start'

function App() {

  return (
    <div className="App outer">
      <div className="middle">
        <Router>
          <Switch>
            <Route exact path="/" component={Game}/>
            <Route path="/game" component={Start}/>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
