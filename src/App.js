import React from 'react';
import './App.css';

import ReactGA from 'react-ga';

function App() {

  ReactGA.event({
    category: 'landing page',
    action: 'User has loaded first page',
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi!<br />I'm Szabi</h1>
        <p>Software dev, beginner musician, health enthusiast</p>        
      </header>
      <p>let's see if GA is working</p>
    </div>
  );
}

export default App;
