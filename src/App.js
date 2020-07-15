import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainTitle from './landingPage/mainTitle.jsx';
import LiteratureGraphing from './litGraph/litGraph.jsx';
import PhishingTest from './phishingTest/phishingTest.jsx';
import './App.css';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route 
          exact path="/" 
          component={MainTitle}
        />
        <Route
          exact path="/litGraph"
          component={LiteratureGraphing}
        />
        <Route
          exact path="/phishingTest"
          component={PhishingTest}
        />
      </Switch>
    </div>
  );
}

export default App;
