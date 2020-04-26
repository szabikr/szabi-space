import React from 'react';
import './App.css';
import logoBlueTrans from './assets/logo/logo-blue-trans.png';

import ReactGA from 'react-ga';

function App() {

  ReactGA.event({
    category: 'landing page',
    action: 'User has loaded first page',
  });

  return (
    <div className="App">
      <header>
        <h1>Hi!<br />I'm Szabi</h1>
        <h2>Software developer, beginner musician, health enthusiast</h2>
      </header>

      <footer>
        <div>
          <img id="footer-logo" src={ logoBlueTrans } alt="Logo" />
        </div>
        <div>
          <code>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/szabikr/">Instagram</a>
          </code>
        </div>
        <div>
          <code>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/szabikr">Github</a>
          </code>
        </div>
        <div>
          <code>
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/szabikr">Twitter</a>
          </code>
        </div>
        <div>
          <code>
            <a target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/user-285007878/tracks">Soundcloud</a>
          </code>
        </div>
        <div>
          <code>
            <a target="_blank" rel="noopener noreferrer" href="https://dev.to/szabikr">dev.to</a>
            </code>
        </div>
        <div>
          <code>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/szabolcs-keresztes-598935ba">LinkedIn</a>
          </code>
        </div>
      </footer>

    </div>
  );
}

export default App;
